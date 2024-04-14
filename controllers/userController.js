const asyncHandler = require("express-async-handler")

module.exports.index = asyncHandler(async (req, res, next) => {
    res.render("user/index", {
        title: "Anasayfa"
    })
    next()
})