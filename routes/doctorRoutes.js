const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.get("/patients", doctorController.viewPatients);

router.get("/patients/:patientId", doctorController.viewPatientDetails);

module.exports = router;
