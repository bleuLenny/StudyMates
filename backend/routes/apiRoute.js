const express = require("express");
const apiController = require("../controller/api_controller");
const router = express.Router();

router.get("/api/auth", apiController.auth);
router.get("/api/list", apiController.list);

module.exports = router;
