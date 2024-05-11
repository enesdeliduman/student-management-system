const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const isNotAuth = require("../middlewares/isNotAuth");

router.get("/sign-in", isNotAuth, authController.signInGet)
router.post("/sign-in", authController.signInPost);
router.get("/log-out", authController.logOut);

module.exports = router;
