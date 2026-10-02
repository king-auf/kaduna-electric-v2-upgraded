const mongoose = require("mongoose");

const meterSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    meterNumber: { type: String, required: true, unique: true },
    meterName: { type: String, default: "Main Meter" },
    address: { type: String, default: "" },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meter", meterSchema);
