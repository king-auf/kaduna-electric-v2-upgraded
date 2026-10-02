const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    meter: { type: mongoose.Schema.Types.ObjectId, ref: "Meter" },
    amount: { type: Number, required: true },
    token: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    reference: { type: String, default: "" },
    paymentMode: { type: String, enum: ["demo", "paystack", "credit"], default: "demo" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
