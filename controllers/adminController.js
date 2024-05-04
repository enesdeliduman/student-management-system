const asyncHandler = require("express-async-handler")
const Student = require("../models/Student")
const Class = require("../models/Class")
const Teacher = require("../models/Teacher")
const Lesson = require("../models/Lesson")
const Group = require("../models/Group")
const Parent = require("../models/Parent")
const PracticeExamTYT = require("../models/PracticeExamTYT")
const PracticeExamAYT = require("../models/PracticeExamAYT")

module.exports.index = asyncHandler(async (req, res, next) => {
    const studentCount = await Student.count()
    const teacherCount = await Teacher.count()
    const lessonCount = await Lesson.count()
    res.render("admin/index", {
        title: "Anasayfa",
        studentCount: studentCount,
        teacherCount: teacherCount,
        lessonCount: lessonCount
    })
})

module.exports.students = asyncHandler(async (req, res, next) => {
    const size = parseInt(process.env.PAGINATION_SIZE)
    const { page = 0, filter } = req.query
    const { rows, count } = await Student.findAndCountAll({
        include: [{
            model: Group,
            attributes: ["name"]
        }],
        limit: size,
        offset: page * size
    });
    res.render("admin/students", {
        title: "Öğrenciler",
        students: rows,
        totalItems: count,
        totalPages: Math.ceil(count / size),
        currentPage: page,
        filter: filter
    })
})

module.exports.student = asyncHandler(async (req, res, next) => {
    const alert = req.session.alert
    delete req.session.alert

    const id = req.params.id
    const student = await Student.findByPk(id, {
        include: [
            {
                model: Group,
                include: [Teacher]
            },
            'parent'
        ],
    });
    return res.render("admin/student-profile", {
        title: `${student.fullName} - Öğrenci profili`,
        student: student,
        alert: alert
    })

})

module.exports.studentPractices = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const size = parseInt(process.env.PAGINATION_SIZE)
    const { page = 0, filter = "default" } = req.query;

    let { rows: rows1, count: count1 } = await PracticeExamTYT.findAndCountAll({
        where: { studentId: id },
        order: [['totalNet', 'DESC']],
        raw: true,
        limit: size,
        offset: page * size
    });

    let { rows: rows2, count: count2 } = await PracticeExamAYT.findAndCountAll({
        where: { studentId: id },
        order: [['totalNet', 'DESC']],
        raw: true,
        limit: size,
        offset: page * size
    });

    let totalItems = count1 + count2;

    let practices = [...rows1, ...rows2];
    let totalPages = Math.ceil(totalItems / size);
    practices.sort((a, b) => { a.practiceDate - b.preacticeDate })
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
        currentPage: page
    });
});

module.exports.studentSettingsGet = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const student = await Student.findByPk(id, {
        include: [{
            model: Group,
            attributes: ["name", "id"]
        }]
    })
    const groups = await Group.findAll()
    res.render("admin/student-settings", {
        title: `${student.fullName} - Öğrenci ayarları`,
        student: student,
        groups: groups
    });
})

module.exports.studentSettingsPost = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const { fullName = null, telephoneNumber = null, groupId } = req.body

    const student = await Student.update(
        { fullName: fullName.toUpperCase(), telephoneNumber: telephoneNumber, groupId: groupId },
        { where: { id: id } })

    let alert = {
        message: "Öğrenci bilgileri başarıyla güncellendi",
        type: "success"
    }
    req.session.alert = alert
    res.redirect(`/student/${id}`);
})

module.exports.parentSettingsGet = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const parent = await Parent.findByPk(id)

    res.render("admin/parent-settings", {
        title: `${parent.fullName} - Veli ayarları`,
        parent: parent
    });
})

module.exports.parentSettingsPost = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const { fullName = null, telephoneNumber = null, groupId } = req.body

    const parent = await Parent.update(
        { fullName: fullName.toUpperCase(), telephoneNumber: telephoneNumber },
        { where: { id: id } })

    let alert = {
        message: "Veli bilgileri başarıyla güncellendi",
        type: "success"
    }
    req.session.alert = alert
    res.redirect(`/parents/${id}`);
})