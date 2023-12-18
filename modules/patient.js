const mongoose = require("mongoose");

const patients = mongoose.Schema({
  surname: { type: String, required: true },
  othernames: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  emergencyName: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  relationship: { type: String, required: true },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
