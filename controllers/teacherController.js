
const asyncHandler = require("express-async-handler");
const Group = require("../models/Group");
const Student = require("../models/Student");
const Level = require("../models/Level");
const Teacher = require("../models/Teacher");
const Class = require("../models/Class");
const User = require("../models/User");
const Attendance = require("../models/Attendance");

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
    res.render("teacher/attendance", {
        title: `${req.params.groupId} - Yoklama al`,
        students: students,
        csrfToken: req.csrfToken()
    })
});
module.exports.attendanceFinal = asyncHandler(async (req, res, next) => {
    const filteredData = [];
    const teacher = await User.findByPk(req.session.userId, {
        include: [
            {
                model: Teacher,
                attributes: ["id"]
            }
        ]
    })
    for (const key in req.body) {
        if (key !== '_csrf') {
            await Attendance.create({
                studentId: parseInt(key),
                teacherId: teacher.id
            })
        }
    }

    res.send(teacher)
});