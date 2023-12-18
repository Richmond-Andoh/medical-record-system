const Vital = require("../models/vitalModel");

const submitVitals = async (req, res) => {
  try {
    const vital = new Vital(req.body);
    await vital.save();
    res.status(201).json({ message: "Vitals submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { submitVitals };
