const express = require("express");
const router = express.Router();

const teacherController = require("../controllers/teacherController");
const isTeacher = require("../middlewares/isTeacher");

router.get("/", isTeacher, teacherController.index);
router.get("/attendance", isTeacher, teacherController.attendance);
router.get("/attendance/:groupId", isTeacher, teacherController.attendanceFinal);
// router.get("/attendance/:groupId/final", isTeacher, teacherController.attendanceFinal);



module.exports = router;
