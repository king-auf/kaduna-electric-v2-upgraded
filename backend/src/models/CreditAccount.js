const mongoose = require("mongoose");

const creditAccountSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    currentBalance: { type: Number, default: 0 },
    maxLimit: { type: Number, default: 20000 },
    totalUsed: { type: Number, default: 0 },
    totalRepaid: { type: Number, default: 0 },
    status: { type: String, enum: ["active", "blocked"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CreditAccount", creditAccountSchema);
