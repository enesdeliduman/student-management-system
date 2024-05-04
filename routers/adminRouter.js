const express = require("express")
const router = express.Router()

const adminController = require("../controllers/adminController")

router.get("/", adminController.index)
router.get("/students", adminController.students)
router.get("/student/:id", adminController.student)
router.get("/student/:id/practice-exams", adminController.studentPractices)

router.route("/student/:id/settings")
    .get(adminController.studentSettingsGet)
    .post(adminController.studentSettingsPost);

router.route("/parent-settings/:id")
    .get(adminController.parentSettingsGet)
    .post(adminController.parentSettingsPost);

module.exports = router