const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", isAuth, adminController.index);
router.get("/students", isAdmin, adminController.students);
router.get("/student/:id", isAdmin, adminController.student);
router.get("/student/:id/practice-exams", isAdmin, adminController.studentPractices);
router.get("/student/:id/settings", isAdmin, adminController.studentSettingsGet);
router.post("/student/:id/settings", adminController.studentSettingsPost);
// router.get("/student/:id/truancies", isAdmin, adminController.studentTruancies);
// router.get("/student/:id/truancie/delete", isAdmin, adminController.studentTruancieDelete);
// router.get("/students/truancies/add", isAdmin, adminController.studentTruanciesAddGet)
// router.post("/students/truancies/add", isAdmin, adminController.studentTruanciesAddPost)

router.get("/teachers", isAdmin, adminController.teachers);
router.get("/teacher/:id", isAdmin, adminController.teacher);
router.get("/teacher/:id/settings", isAdmin, adminController.teacherSettingsGet);
router.post("/teacher/:id/settings", adminController.teacherSettingsPost);
router.get("/teacher/:id/leaves", isAdmin, adminController.teacherLeaves);
router.get("/teacher/:id/leave/delete", isAdmin, adminController.teacherLeaveDelete);

router.get("/parent-settings/:id", isAdmin, adminController.parentSettingsGet)
router.post("/parent-settings/:id", adminController.parentSettingsPost);


module.exports = router;
