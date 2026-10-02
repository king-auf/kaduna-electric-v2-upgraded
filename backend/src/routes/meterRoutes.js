const express = require("express");
const { body } = require("express-validator");
const { addMeter, getMeters } = require("../controllers/meterController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  protect,
  [
    body("meterNumber").notEmpty().withMessage("Meter number is required"),
  ],
  addMeter
);

router.get("/", protect, getMeters);

module.exports = router;
