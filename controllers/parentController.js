const asyncHandler = require("express-async-handler");
const Parent = require("../models/Parent")
const Group = require("../models/Group")
const Teacher = require("../models/Teacher")
const Truancy = require("../models/Truancy")
const Student = require("../models/Student")
const PracticeExamTYT = require("../models/PracticeExamTYT")
const PracticeExamAYT = require("../models/PracticeExamAYT")

module.exports.index = asyncHandler(async (req, res, next) => {
    const parentId = await Parent.findOne({
        where: {
            userId: req.session.userId,
        },
        attributes: ["id"],
        raw: true
    })
    const students = await Student.findAll({
        where: {
            parentId: parentId.id
        },
        attributes: ["id", "fullName", "photo"],
        raw: true
    })
    res.render("site/index", {
        title: "Anasayfa",
        students: students
    });
});

module.exports.students = asyncHandler(async (req, res, next) => {
    const parentId = await Parent.findOne({
        where: {
            userId: req.session.userId,
        },
        attributes: ["id"],
        raw: true
    })
    const students = await Student.findAll({
        where: {
            parentId: parentId.id
        }
    })
    res.render("parent/students", {
        title: "Öğrencilerim",
        students: students
    })
});

module.exports.student = asyncHandler(async (req, res, next) => {
    console.log(req.params.id)
    const parentId = await Parent.findOne({
        where: {
            userId: req.session.userId,
        },
        attributes: ["id"],
        raw: true
    })
    const student = await Student.findOne({
        where: {
            id: req.params.id
        },
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
    })
    if (parentId.id == student.parentId) {
        console.log("bu bunun cocugu")
    } else {
        res.redirect("/")
    }
    res.render("parent/student-profile", {
        title: student.fullName + " - profil",
        student: student
    })
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

    res.render("parent/student-practices", {
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
    res.render("parent/student-truancies", {
        title: "Devamsızlıkları görüntüle",
        truancies: rows,
        totalItems: count,
        totalPages: Math.ceil(count / size),
        currentPage: page,
        alert: alert
    })
})
