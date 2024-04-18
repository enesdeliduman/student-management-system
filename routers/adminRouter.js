const express = require("express")
const router = express.Router()

const adminController = require("../controllers/adminController")

router.get("/", adminController.index)
router.get("/students", adminController.students)
router.get("/student/:no", adminController.student)

module.exports = router