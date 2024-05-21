const asyncHandler = require("express-async-handler");
const Group = require("../models/Group");
const Student = require("../models/Student");
const Level = require("../models/Level");
const Teacher = require("../models/Teacher");
const Class = require("../models/Class");
const User = require("../models/User");
const Attendance = require("../models/Attendance");
const { student, teacher } = require("./adminController");

module.exports.index = asyncHandler(async (req, res, next) => {
    res.render("site/index", {
        title: "Anasayfa",
    })
});
module.exports.attendanceGroups = asyncHandler(async (req, res, next) => {
    const groups = await Group.findAll({})
    res.render("site/groups", {
        title: "Yoklama al",
        groups: groups,
    })
});
module.exports.attendance = asyncHandler(async (req, res, next) => {
    const groupId = req.params.groupId
    const { lesson = 1 } = req.query;
    let now = new Date
    let confirm
    let obj = {
        studentIds: [],
        teacherFullName: ""
    }
    const students = await Group.findByPk(req.params.groupId, {
        include: [
            {
                model: Student,
                attributes: ["id", "fullName"]
            },
            {
                model: Level,
                attributes: ["name"]
            },
            {
                model: Teacher,
                attributes: ["fullName"]
            },
            {
                model: Class,
                attributes: ["name"]
            },
        ]
    })
    const attendances = await Attendance.findAll({
        where: {
            date: Date.now(),
            lesson: lesson,
            groupId: groupId
        },
        include: [
            {
                model: Teacher,
                attributes: ["fullName"]
            },
            {
                model: Student,
                attributes: ["id"]
            }
        ],
        raw: true
    })
    attendances.forEach(attendance => {
        const studentId = attendance['students.id'];
        if (studentId !== undefined || null) {
            obj.studentIds.push(studentId);
        }
    });
    const group = await Group.findByPk(groupId, {
        attributes:["name"]
    })
    if (attendances.length >= 1) {
        confirm = "y"
        obj.teacherFullName = attendances[0]["teacher.fullName"]
    } else {
        confirm = "n"
    }
    res.render("teacher/attendance", {
        title: `${group.name} - Yoklama al`,
        students: students,
        lessonCount: process.env.LESSON_COUNT,
        lesson: lesson,
        confirm: confirm,
        obj: obj,
        csrfToken: req.csrfToken(),
    })
});
module.exports.attendanceFinal = asyncHandler(async (req, res, next) => {
    const { lesson = 1 } = req.query
    const filteredData = [];
    const groupId = req.params.groupId
    const teacher = await User.findByPk(req.session.userId, {
        include: [
            {
                model: Teacher,
                attributes: ["id"]
            }
        ]
    })
    let students = req.body;
    delete students.lesson;
    delete students._csrf;

    console.log(Object.keys(students).length);
    const attendance = await Attendance.create({
        lesson: lesson,
        teacherId: teacher.id,
        groupId: groupId
    })
    if (Object.keys(students).length !== 0) {
        for (const key in req.body) {
            if (key !== '_csrf') {
                console.log("AKMLSJNHJBCKNLMŞLSFDBKNL JKDFNLVŞLMKDF KJELRPEVÖRMBKGFL KLMOLVÖMKGBL FMBKLVFD", key)
                const student = await Student.findByPk(key)
                await attendance.addStudent(student);
            }
        }
    }
    res.redirect(`/teacher/attendance/${req.params.groupId}?lesson=${lesson}`)
});