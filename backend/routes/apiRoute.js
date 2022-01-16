const express = require("express");
const apiController = require("../controller/api_controller");
const router = express.Router();

router.get("/auth", apiController.auth);
router.get("/list", apiController.list);
router.get("/info/:email", apiController.info);

module.exports = router;
