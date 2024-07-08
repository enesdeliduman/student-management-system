const asyncHandler = require("express-async-handler");
const Parent = require("../models/Parent")
const Group = require("../models/Group")
const Teacher = require("../models/Teacher")
const Truancy = require("../models/Truancy")
const Student = require("../models/Student")

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