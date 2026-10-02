const CreditAccount = require("../models/CreditAccount");
const CreditLedger = require("../models/CreditLedger");
const { issueCredit, repayCredit } = require("../services/creditService");

const getCreditAccount = async (req, res) => {
  const account = await CreditAccount.findOne({ user: req.user._id }).populate("user", "name email");
  res.json({ account });
};

const issueCreditToUser = async (req, res) => {
  try {
    const result = await issueCredit({
      userId: req.body.userId,
      amount: Number(req.body.amount),
      createdBy: req.user._id,
      note: req.body.note || "Credit issued by admin",
    });

    res.status(201).json({ message: "Credit issued successfully", account: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const recordCreditRepayment = async (req, res) => {
  try {
    const result = await repayCredit({
      userId: req.body.userId,
      amount: Number(req.body.amount),
      createdBy: req.user._id,
      note: req.body.note || "Customer repayment recorded",
    });

    res.json({ message: "Repayment recorded", account: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllCreditAccounts = async (req, res) => {
  const accounts = await CreditAccount.find({}).populate("user", "name email role");
  res.json({ accounts });
};

const getCreditLedger = async (req, res) => {
  const items = await CreditLedger.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json({ items });
};

module.exports = {
  getCreditAccount,
  issueCreditToUser,
  recordCreditRepayment,
  getAllCreditAccounts,
  getCreditLedger,
};
