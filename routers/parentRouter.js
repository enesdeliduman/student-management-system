const express = require("express");
const router = express.Router();

const parentController = require("../controllers/parentController");
const isParent = require("../middlewares/isParent");

router.get("/", isParent, parentController.index)
router.get("/students", isParent, parentController.students)
router.get("/student/:id", isParent, parentController.student)
router.get("/student/:id/practice-exams", isParent, parentController.studentPractices);
router.get("/student/:id/truancies", isParent, parentController.studentTruancies);

module.exports = router;
