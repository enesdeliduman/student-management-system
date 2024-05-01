const express = require("express")
const router = express.Router()

const adminController = require("../controllers/adminController")

router.get("/", adminController.index)
router.get("/students", adminController.students)
router.get("/student/:id", adminController.student)
router.get("/student/:id/practice-exams", adminController.studentPractices)
router.get("/student/:id/settings", adminController.studentSettings)

module.exports = router