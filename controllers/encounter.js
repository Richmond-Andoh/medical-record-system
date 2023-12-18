const Encounter = require("../models/encounterModel");

// Start a new encounter
const startEncounter = async (req, res) => {
  try {
    const encounter = new Encounter(req.body);
    await encounter.save();
    res.status(201).json({ message: "Encounter started successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { startEncounter };
