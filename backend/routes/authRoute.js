const express = require("express");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const authController = require("../controller/auth_controller");
const router = express.Router();

router.get("/register", forwardAuthenticated, authController.register);
router.post("/register", authController.registerSubmit);

router.get("/login", authController.login);
router.post("/login", forwardAuthenticated, authController.loginSubmit);

router.get("/logout", authController.logout);

module.exports = router;
