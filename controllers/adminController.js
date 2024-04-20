const asyncHandler = require("express-async-handler")
const Student = require("../models/Student")
const Class = require("../models/Class")
const Teacher = require("../models/Teacher")
const Grade = require("../models/Grade")
const Lesson = require("../models/Lesson")

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
    const students = await Student.findAll({},
        {
            include: [{
                model: Class,
                attributes: ["name"]
            }], raw: true
        })
    res.render("admin/students", {
        title: "Öğrenciler",
        students: students
    })
})
module.exports.student = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const student = await Student.findByPk(id, {
        include: [
            {
                model: Class,
                include: Teacher // Öğretmen verisini sınıf içinden al
            },
            {
                model: Grade,
                include: Lesson
            },
            'parent'
        ]
    });
    res.render("admin/student-profile", {
        title: `${student.fullName} - Öğrenci profili`,
        student: student
    })
})  