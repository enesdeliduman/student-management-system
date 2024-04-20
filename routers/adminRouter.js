const express = require("express")
const router = express.Router()

const adminController = require("../controllers/adminController")

router.get("/", adminController.index)
router.get("/students", adminController.students)
router.get("/student/:id", adminController.student)

module.exports = router