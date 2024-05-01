const asyncHandler = require("express-async-handler")
const Student = require("../models/Student")
const Class = require("../models/Class")
const Teacher = require("../models/Teacher")
const Lesson = require("../models/Lesson")
const Group = require("../models/Group")
const Parent = require("../models/Parent")
const PracticeExamTYT = require("../models/PracticeExamTYT")
const PracticeExamAYT = require("../models/PracticeExamAYT")
const { raw } = require("mysql2")

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
    const { page = 0 } = req.query
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
        currentPage: page
    })
})

module.exports.student = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const student = await Student.findByPk(id, {
        include: [
            {
                model: Group,
                include: [Teacher]
            },
            'parent'
        ]
    });
    return res.render("admin/student-profile", {
        title: `${student.fullName} - Öğrenci profili`,
        student: student
    })

})
module.exports.studentPractices = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const size = parseInt(process.env.PAGINATION_SIZE)
    const { page = 0 } = req.query

    const rows = await PracticeExamTYT.findAll({
        where: {
            studentId: id
        }, raw: true
    })
    const rows2 = await PracticeExamAYT.findAll({
        where: {
            studentId: id
        }, raw: true
    })
    const practices = [...rows, ...rows2];
    practices.sort((a, b) => new Date(b.practiceDate) - new Date(a.practiceDate));
    console.log(practices)
    res.render("admin/student-practices", {
        title: `${1 - 2} - Deneme sınavları`,
        practices: practices
    })
})
module.exports.studentSettings = asyncHandler(async (req, res, next) => {

})