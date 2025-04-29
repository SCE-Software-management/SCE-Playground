const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// GET /reports/monthly – get monthly reports
router.get('/monthly', reportController.getMonthlyReport);

// GET /reports/overview – get financial overview
router.get('/overview', reportController.getFinancialOverview);

// GET /reports/live – return real-time income and expense tracking
router.get('/live', reportController.getLiveTracking);

module.exports = router;
