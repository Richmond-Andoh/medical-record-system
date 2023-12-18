// models/vitalModel.js
const mongoose = require("mongoose");

const vitalSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  bloodPressure: { type: String, required: true },
  temperature: { type: String, required: true },
  pulse: { type: String, required: true },
  spO2: { type: String, required: true },
});

const Vital = mongoose.model("Vital", vitalSchema);

module.exports = Vital;
