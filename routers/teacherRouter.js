const express = require("express");
const router = express.Router();

const teacherController = require("../controllers/teacherController");
const isTeacher = require("../middlewares/isTeacher");

router.get("/", isTeacher, teacherController.index);
router.get("/attendance/groups", isTeacher, teacherController.attendanceGroups);
router.get("/attendance/:groupId", isTeacher, teacherController.attendance);
router.post("/attendance/:groupId", isTeacher, teacherController.attendanceFinal);

router.get("/groups", isTeacher, teacherController.groups);
router.get("/group/:id", isTeacher, teacherController.group);

module.exports = router;
