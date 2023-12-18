const express = require("express");
const router = express.Router();
const encounterController = require("../controllers/encounterController");

router.post("/start", encounterController.startEncounter);

module.exports = router;
