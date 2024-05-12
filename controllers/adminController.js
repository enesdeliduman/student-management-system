const asyncHandler = require("express-async-handler");
const Student = require("../models/Student");
const Class = require("../models/Class");
const Leave = require("../models/Leave");
const Teacher = require("../models/Teacher");
const Lesson = require("../models/Lesson");
const Group = require("../models/Group");
const Truancy = require("../models/Truancy");
const Parent = require("../models/Parent");
const PracticeExamTYT = require("../models/PracticeExamTYT");
const PracticeExamAYT = require("../models/PracticeExamAYT");
const Branch = require("../models/Branch");
const { all } = require("../routers");

module.exports.index = asyncHandler(async (req, res, next) => {
  const studentCount = await Student.count();
  const teacherCount = await Teacher.count();
  const lessonCount = await Lesson.count();
  const groupCount = await Group.count();
  const classCount = await Class.count();

  res.render("admin/index", {
    title: "Anasayfa",
    studentCount: studentCount,
    teacherCount: teacherCount,
    lessonCount: lessonCount,
    groupCount: groupCount,
    classCount: classCount,
  });
});

module.exports.students = asyncHandler(async (req, res, next) => {
  const size = parseInt(process.env.PAGINATION_SIZE);
  const { page = 0, filter } = req.query;
  const { rows, count } = await Student.findAndCountAll({
    include: [
      {
        model: Group,
        attributes: ["name"],
      },
    ],
    limit: size,
    offset: page * size,
  });
  res.render("admin/students", {
    title: "Öğrenciler",
    students: rows,
    totalItems: count,
    totalPages: Math.ceil(count / size),
    currentPage: page,
    filter: filter,
  });
});

module.exports.student = asyncHandler(async (req, res, next) => {
  const alert = req.session.alert;
  delete req.session.alert;

  const id = req.params.id;
  const student = await Student.findByPk(id, {
    include: [
      {
        model: Group,
        include: [Teacher],
      },
      {
        model: Truancy,
      },
      "parent",
    ],
  });
  return res.render("admin/student-profile", {
    title: `${student.fullName} - Öğrenci profili`,
    student: student,
    alert: alert,
  });
});

module.exports.studentPractices = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const size = parseInt(process.env.PAGINATION_SIZE);
  const { page = 0, filter = "default" } = req.query;

  let { rows: rows1, count: count1 } = await PracticeExamTYT.findAndCountAll({
    where: { studentId: id },
    order: [["totalNet", "DESC"]],
    raw: true,
    limit: size,
    offset: page * size,
  });

  let { rows: rows2, count: count2 } = await PracticeExamAYT.findAndCountAll({
    where: { studentId: id },
    order: [["totalNet", "DESC"]],
    raw: true,
    limit: size,
    offset: page * size,
  });

  let totalItems = count1 + count2;

  let practices = [...rows1, ...rows2];
  let totalPages = Math.ceil(totalItems / size);
  practices.sort((a, b) => {
    a.practiceDate - b.preacticeDate;
  });
  if (filter === "tytHigh") {
    practices = rows1;
    totalPages = Math.ceil(count1 / size);
    totalItems = count1;
  } else if (filter === "aytHigh") {
    practices = rows2;
    totalPages = Math.ceil(count2 / size);
    totalItems = count2;
  }

  res.render("admin/student-practices", {
    title: `Öğrencinin Deneme sınavları`,
    practices: practices,
    filter: filter,
    limit: size,
    offset: page * size,
    totalItems: totalItems,
    totalPages: totalPages,
    currentPage: page,
  });
});

module.exports.studentSettingsGet = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const student = await Student.findByPk(id, {
    include: [
      {
        model: Group,
        attributes: ["name", "id"],
      },
    ]
  });
  const groups = await Group.findAll();
  res.render("admin/student-settings", {
    title: `${student.fullName} - Öğrenci ayarları`,
    student: student,
    groups: groups,
    csrfToken: req.csrfToken(),
  });
});

module.exports.studentSettingsPost = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { fullName = null, telephoneNumber = null, groupId } = req.body;

  const student = await Student.update(
    {
      fullName: fullName.toUpperCase(),
      telephoneNumber: telephoneNumber,
      groupId: groupId,
    },
    { where: { id: id } }
  );

  let alert = {
    message: "Öğrenci bilgileri başarıyla güncellendi",
    type: "success",
  };
  req.session.alert = alert;
  res.redirect(`/student/${id}`);
});

module.exports.studentTruancies = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const alert = req.session.alert
  delete req.session.alert;
  const size = parseInt(process.env.PAGINATION_SIZE);
  const { page = 0 } = req.query;
  const { rows, count } = await Truancy.findAndCountAll({
    where: {
      studentId: id
    },
    raw: true,
    limit: size,
    offset: page * size
  })
  res.render("admin/student-truancies", {
    title: "Devamsızlıkları görüntüle",
    truancies: rows,
    totalItems: count,
    totalPages: Math.ceil(count / size),
    currentPage: page,
    alert: alert
  })
})

module.exports.studentTruancieDelete = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const truancy = await Truancy.findByPk(id)
  truancy.destroy()
  req.session.alert = {
    message: "Devamsızlık bilgisi başarıyla silindi",
    type: "success",
  }
  res.redirect(`/student/${id}/truancies`)
})

module.exports.teacherLeaves = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const alert = req.session.alert
  delete req.session.alert;
  const size = parseInt(process.env.PAGINATION_SIZE);
  const { page = 0 } = req.query;
  const { rows, count } = await Leave.findAndCountAll({
    where: {
      teacherId: id
    },
    raw: true,
    limit: size,
    offset: page * size
  })
  res.render("admin/teacher-leaves", {
    title: "İzinleri görüntüle",
    leaves: rows,
    totalItems: count,
    totalPages: Math.ceil(count / size),
    currentPage: page,
    alert: alert
  })
})

module.exports.teacherLeaveDelete = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const leave = await Leave.findByPk(id)
  leave.destroy()
  req.session.alert = {
    message: "İzin bilgisi başarıyla silindi",
    type: "success",
  }
  res.redirect(`/teacher/${id}/leaves`)
})

module.exports.parentSettingsGet = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const parent = await Parent.findByPk(id);

  res.render("admin/parent-settings", {
    title: `${parent.fullName} - Veli ayarları`,
    parent: parent,
    csrfToken: req.csrfToken()
  });
});

module.exports.parentSettingsPost = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { fullName = null, telephoneNumber = null, groupId } = req.body;

  const parent = await Parent.update(
    { fullName: fullName.toUpperCase(), telephoneNumber: telephoneNumber },
    { where: { id: id } }
  );

  let alert = {
    message: "Veli bilgileri başarıyla güncellendi",
    type: "success",
  };
  req.session.alert = alert;
  res.redirect(`/student/${id}`);
});

module.exports.teachers = asyncHandler(async (req, res, next) => {
  const size = parseInt(process.env.PAGINATION_SIZE);
  const { page = 0, filter } = req.query;
  const { rows, count } = await Teacher.findAndCountAll({
    limit: size,
    offset: page * size,
    include: [{
      model: Branch,
      attributes: ["name"]
    }]
  });
  console.log(rows[0])
  res.render("admin/teachers", {
    title: "Öğretmenler",
    teachers: rows,
    totalItems: count,
    totalPages: Math.ceil(count / size),
    currentPage: page,
    filter: filter,
  });
});

module.exports.teacher = asyncHandler(async (req, res, next) => {
  const alert = req.session.alert;
  delete req.session.alert;

  const id = req.params.id;
  const size = parseInt(process.env.PAGINATION_SIZE);
  const { page = 0, filter } = req.query;

  const teacher = await Teacher.findOne({
    where: {
      id: id
    },
    include: [{
      model: Branch,
      attributes: ["name"]
    },
    {
      model: Leave
    }],
  });

  res.render("admin/teacher-profile", {
    title: `${teacher.fullName}`,
    teacher: teacher,
    alert: alert
  });
});

module.exports.teacherSettingsGet = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const teacher = await Teacher.findByPk(id, {
    include: [{
      model: Branch,
    }]
  });
  const branches = await Branch.findAll();
  res.render("admin/teacher-settings", {
    title: `${teacher.fullName} - Öğretmen ayarları`,
    teacher: teacher,
    branches: branches,
    csrfToken: req.csrfToken(),
  });
});

module.exports.teacherSettingsPost = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { fullName = null, telephoneNumber = null, branchId } = req.body;

  await Teacher.update(
    {
      fullName: fullName.toUpperCase(),
      telephoneNumber: telephoneNumber,
      branchId: branchId,
    },
    { where: { id: id } }
  );

  let alert = {
    message: "Öğretmen bilgileri başarıyla güncellendi",
    type: "success",
  };
  req.session.alert = alert;
  res.redirect(`/teacher/${id}`);
});

module.exports.studentTruanciesAddGet = asyncHandler(async (req, res, next) => {
  const size = parseInt(process.env.PAGINATION_SIZE);
  const { page = 0, filter } = req.query;
  const { rows, count } = await Student.findAndCountAll({
    include: [
      {
        model: Group,
        attributes: ["name"],
      },
      {
        model: Parent,
        attributes: ["telephoneNumber"],
      },
    ],
    limit: size,
    offset: page * size,
  });
  res.render("admin/truancies", {
    title: "Öğrenciler",
    students: rows,
    totalItems: count,
    totalPages: Math.ceil(count / size),
    currentPage: page,
    filter: filter,
    csrfToken: req.csrfToken()
  });
});

module.exports.studentTruanciesAddPost = asyncHandler(async (req, res, next) => {
  if (req.body.type == "first") {
    const stringTypes = req.body.clickedElementIds.slice(1, -1).split(",")
    const ids = []
    const studentsData = [];
    for (const id of stringTypes) {
      ids.push(parseInt(id))
    }
    for (const studentId of ids) {
      const student = await Student.findByPk(studentId, {
        include: [
          {
            model: Parent,
            attributes: ["fullName", "telephoneNumber"]
          },
          {
            model: Group,
            attributes: ["name"]
          }
        ]
      });
      studentsData.push(student);
    }
    res.render("admin/truancies-confirm", {
      title: "Devamsızlık kaydı onayı",
      students: studentsData,
      csrfToken: req.csrfToken()
    })
  } else {
    res.send(req.body)
  }
})