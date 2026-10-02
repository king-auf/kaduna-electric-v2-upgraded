const User = require("../models/User");
const Meter = require("../models/Meter");
const Transaction = require("../models/Transaction");
const CreditAccount = require("../models/CreditAccount");

const getDashboardStats = async (req, res) => {
  const [customerCount, meterCount, transactionCount, creditAccounts] = await Promise.all([
    User.countDocuments({ role: "customer" }),
    Meter.countDocuments(),
    Transaction.countDocuments(),
    CreditAccount.find({ currentBalance: { $gt: 0 } }),
  ]);

  res.json({
    stats: {
      customerCount,
      meterCount,
      transactionCount,
      outstandingCreditAccounts: creditAccounts.length,
      totalOutstanding: creditAccounts.reduce((sum, account) => sum + account.currentBalance, 0),
    },
  });
};

module.exports = { getDashboardStats };
