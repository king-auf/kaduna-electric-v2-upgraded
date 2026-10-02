const express = require("express");
const { protect, authorize } = require("../middleware/authMiddleware");
const { getDashboardStats } = require("../controllers/adminController");

const router = express.Router();

router.get("/dashboard", protect, authorize("admin", "superAdmin"), getDashboardStats);

module.exports = router;
