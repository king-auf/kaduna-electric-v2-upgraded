const CreditAccount = require("../models/CreditAccount");
const CreditLedger = require("../models/CreditLedger");

const MAX_CREDIT_LIMIT = 20000;
const MAX_SINGLE_CREDIT_ISSUE = 5000;

const issueCredit = async ({ userId, amount, createdBy, note }) => {
  if (!amount || amount <= 0) {
    throw new Error("Credit amount must be greater than zero");
  }

  if (amount > MAX_SINGLE_CREDIT_ISSUE) {
    throw new Error(`A single credit issue cannot exceed ${MAX_SINGLE_CREDIT_ISSUE}`);
  }

  const account = await CreditAccount.findOne({ user: userId });
  if (!account) {
    throw new Error("Customer credit account not found");
  }

  const projected = account.currentBalance + amount;
  if (projected > MAX_CREDIT_LIMIT) {
    throw new Error(`Outstanding credit would exceed the ${MAX_CREDIT_LIMIT} limit`);
  }

  account.currentBalance += amount;
  account.totalUsed += amount;
  await account.save();

  await CreditLedger.create({
    user: userId,
    type: "credit_issue",
    amount,
    balanceAfter: account.currentBalance,
    createdBy,
    note: note || "Credit issued",
  });

  return account;
};

const repayCredit = async ({ userId, amount, createdBy, note }) => {
  if (!amount || amount <= 0) {
    throw new Error("Repayment amount must be greater than zero");
  }

  const account = await CreditAccount.findOne({ user: userId });
  if (!account) {
    throw new Error("Customer credit account not found");
  }

  if (amount > account.currentBalance) {
    throw new Error("Repayment cannot exceed current outstanding balance");
  }

  account.currentBalance -= amount;
  account.totalRepaid += amount;
  if (account.currentBalance === 0) {
    account.status = "active";
  }
  await account.save();

  await CreditLedger.create({
    user: userId,
    type: "credit_repayment",
    amount,
    balanceAfter: account.currentBalance,
    createdBy,
    note: note || "Credit repayment",
  });

  return account;
};

const canCustomerBuyToken = async (userId) => {
  const account = await CreditAccount.findOne({ user: userId });
  return !account || account.currentBalance === 0;
};

module.exports = {
  issueCredit,
  repayCredit,
  canCustomerBuyToken,
  MAX_CREDIT_LIMIT,
  MAX_SINGLE_CREDIT_ISSUE,
};
