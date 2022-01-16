const express = require("express");
const authController = require("../controller/auth_controller");
const apiController = require("../controller/api_controller");
const router = express.Router();

router.post("/register", authController.registerSubmit);
router.post("/login", authController.loginSubmit);
router.get("/logout", authController.logout);

module.exports = router;
