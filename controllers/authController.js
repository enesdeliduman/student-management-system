const asyncHandler = require("express-async-handler")

module.exports.signin = asyncHandler(async (req, res, next) => {
    res.render("auth/sign-in", {
        title: "Giriş Yap"
    })
    next()
})