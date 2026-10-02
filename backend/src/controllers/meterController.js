const { validationResult } = require("express-validator");
const Meter = require("../models/Meter");

const addMeter = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { meterNumber, meterName, address } = req.body;

  const meter = await Meter.create({
    user: req.user._id,
    meterNumber,
    meterName: meterName || "Main Meter",
    address: address || "",
    isVerified: false,
  });

  res.status(201).json({ message: "Meter added", meter });
};

const getMeters = async (req, res) => {
  const meters = await Meter.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json({ meters });
};

module.exports = { addMeter, getMeters };
