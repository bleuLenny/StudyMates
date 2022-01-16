const express = require("express");
// const { forwardAuthenticated } = require("../middleware/checkAuth");
const authController = require("../controller/auth_controller");
const apiController = require("../controller/api_controller");
const router = express.Router();

router.post("/register", authController.registerSubmit);
router.post("/login", authController.loginSubmit);
router.get("/api/auth", apiController.auth);
router.get("/api/list", apiController.list);
router.get("/logout", authController.logout);

module.exports = router;
