
const asyncHandler = require("express-async-handler");
const Group = require("../models/Group");
const Student = require("../models/Student");
const Level = require("../models/Level");
const Teacher = require("../models/Teacher");
const Class = require("../models/Class");

module.exports.index = asyncHandler(async (req, res, next) => {
    res.render("teacher/index", {
        title: "Anasayfa",
    })
});
module.exports.attendance = asyncHandler(async (req, res, next) => {
    const groups = await Group.findAll({})
    res.render("teacher/groups", {
        title: "Yoklama al",
        groups: groups,
    })
});
module.exports.attendanceFinal = asyncHandler(async (req, res, next) => {
    const students = await Group.findByPk(req.params.groupId, {
        include: [
            {
                model: Student,
                attributes: ["id","fullName"]
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
    })
});