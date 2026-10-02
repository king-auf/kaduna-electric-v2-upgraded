const express = require("express");
const { protect, authorize } = require("../middleware/authMiddleware");
const {
  getCreditAccount,
  issueCreditToUser,
  recordCreditRepayment,
  getAllCreditAccounts,
  getCreditLedger,
} = require("../controllers/creditController");

const router = express.Router();

router.get("/me", protect, getCreditAccount);
router.get("/ledger", protect, getCreditLedger);
router.post("/issue", protect, authorize("creditAdmin", "superAdmin"), issueCreditToUser);
router.post("/repay", protect, authorize("creditAdmin", "superAdmin"), recordCreditRepayment);
router.get("/all", protect, authorize("creditAdmin", "superAdmin"), getAllCreditAccounts);

module.exports = router;
