const asyncHandler = require("express-async-handler")

module.exports.index = asyncHandler(async (req, res, next) => {
    res.render("user/index", {
        title: "Anasayfa"
    })
})

module.exports.students = asyncHandler(async (req, res, next) => {
    res.render("user/students", {
        title: "Öğrenciler"
    })
})
module.exports.student = asyncHandler(async (req, res, next) => {
    const no = req.params.no
    res.render("user/student-profile", {
        title: "Enes Deliduman - Öğrenci profili"
    })
})  