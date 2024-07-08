const express = require("express");
const router = express.Router();

const parentController = require("../controllers/parentController");
const isParent = require("../middlewares/isParent");

router.get("/", isParent, parentController.index)
router.get("/students", isParent, parentController.students)
router.get("/student/:id", isParent, parentController.student)

module.exports = router;
