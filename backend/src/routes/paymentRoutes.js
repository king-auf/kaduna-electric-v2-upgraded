const express = require("express");
const { body } = require("express-validator");
const { initializePurchase, getHistory } = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/initialize",
  protect,
  [
    body("amount").isNumeric().withMessage("Amount must be numeric"),
  ],
  initializePurchase
);

router.get("/history", protect, getHistory);

module.exports = router;
