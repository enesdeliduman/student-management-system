const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const isTeacher = require("../middlewares/isTeacher");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const isParent = require("../middlewares/isParent");

router.get("/", isAuth, adminController.index);
router.get("/students", isAdmin, adminController.students);
router.get("/student/:id", isTeacher, adminController.student);
router.get("/student/:id/practice-exams", isTeacher || isParent, adminController.studentPractices);
router.get("/student/:id/settings", isAdmin, adminController.studentSettingsGet);
router.post("/student/:id/settings", adminController.studentSettingsPost);
router.get("/attendances/confirm", isAdmin, adminController.attendancesConfirmGet)
router.post("/attendances/confirm", adminController.attendancesConfirmPost)
router.get("/student/:id/truancies", isAdmin || isParent, adminController.studentTruancies);
router.get("/student/:id/truancie/delete", isAdmin, adminController.studentTruancieDelete);

router.get("/teachers", isAdmin, adminController.teachers);
router.get("/teacher/:id", isAdmin, adminController.teacher);
router.get("/teacher/:id/settings", isAdmin, adminController.teacherSettingsGet);
router.post("/teacher/:id/settings", adminController.teacherSettingsPost);
router.get("/teacher/:id/leaves", isAdmin, adminController.teacherLeaves);
router.get("/teacher/:id/leave/delete", isAdmin, adminController.teacherLeaveDelete);

router.get("/parent-settings/:id", isAdmin, adminController.parentSettingsGet)
router.post("/parent-settings/:id", adminController.parentSettingsPost);

router.get("/groups", isTeacher, adminController.groups);
router.get("/group/:id", isTeacher, adminController.group);

router.get("/add", isAdmin, adminController.add);
router.get("/add/student", isAdmin, adminController.addStudentGet);
router.post("/add/student", isAdmin, adminController.addStudentPost);
router.get("/add/teacher", isAdmin, adminController.addTeacherGet);
router.post("/add/teacher", isAdmin, adminController.addTeacherPost);
router.get("/add/parent", isAdmin, adminController.addParentGet);
router.post("/add/parent", isAdmin, adminController.addParentPost);
router.get("/add/group", isAdmin, adminController.addGroupGet);
router.post("/add/group", isAdmin, adminController.addGroupPost);

module.exports = router;
