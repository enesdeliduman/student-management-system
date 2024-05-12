const express = require("express")
const router = express.Router()

const authRouter = require("./authRouter")
const adminRouter = require("./adminRouter")
const teacherRouter = require("./teacherRouter")

router.use("/auth", authRouter)
router.use("/teacher", teacherRouter)
router.use("/", adminRouter)

module.exports = router