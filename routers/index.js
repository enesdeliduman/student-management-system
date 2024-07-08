const express = require("express")
const router = express.Router()

const authRouter = require("./authRouter")
const adminRouter = require("./adminRouter")
const teacherRouter = require("./teacherRouter")
const parentRouter = require("./parentRouter")


router.use("/auth", authRouter)
router.use("/teacher", teacherRouter)
router.use("/parent", parentRouter)
router.use("/", adminRouter)


module.exports = router