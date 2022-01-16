const express = require("express");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const authController = require("../controller/auth_controller");
const passport = require("../middleware/passport");
const router = express.Router();

// router.get("/register", authController.register);
router.post("/register", authController.registerSubmit);

router.get("/login", forwardAuthenticated, authController.login);
router.post("/login", authController.loginSubmit);

router.get("/api/", function(req, res) {
    console.log(req.session)
    res.send([req.session,req.user])
  }
);

router.get("/logout", authController.logout);

module.exports = router;
