const express = require("express");
const router = express.Router();
const nurseController = require("../controllers/nurseController");

router.post("/submit-vitals", nurseController.submitVitals);

module.exports = router;
