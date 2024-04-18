const express = require("express")
const router = express.Router()

const authRouter = require("./authRouter")
const adminRouter = require("./adminRouter")

router.use("/auth", authRouter)
router.use("/", adminRouter)

module.exports = router