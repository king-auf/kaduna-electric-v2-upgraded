const { validationResult } = require("express-validator");
const Transaction = require("../models/Transaction");
const { canCustomerBuyToken } = require("../services/creditService");

const initializePurchase = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const allowed = await canCustomerBuyToken(req.user._id);
  if (!allowed) {
    return res.status(403).json({
      message: "You still have outstanding credit. Please repay before making another purchase.",
    });
  }

  const { amount, meterId } = req.body;

  const transaction = await Transaction.create({
    user: req.user._id,
    meter: meterId || null,
    amount,
    status: "success",
    reference: `TX-${Date.now()}`,
    paymentMode: "demo",
    token: `TOKEN-${Math.floor(100000 + Math.random() * 900000)}`,
  });

  res.status(201).json({
    message: "Token purchased successfully",
    transaction,
  });
};

const getHistory = async (req, res) => {
  const transactions = await Transaction.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json({ transactions });
};

module.exports = { initializePurchase, getHistory };
