// routes/patientRoutes.js
const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

router.post("/register", patientController.registerPatient);
