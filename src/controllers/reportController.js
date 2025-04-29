const reportService = require('../services/reportService');

// Handle GET /reports/monthly
exports.getMonthlyReport = (req, res) => {
  const { month, year } = req.query;

  if (!month || !year) {
    return res.status(400).json({ error: 'Missing month or year' });
  }

  const report = reportService.generateMonthlyReport(month, year);
  res.status(200).json(report);
};

// Handle GET /reports/overview
exports.getFinancialOverview = (req, res) => {
  const overview = reportService.generateFinancialOverview();
  res.status(200).json(overview);
};

// Handle GET /reports/live
exports.getLiveTracking = (req, res) => {
  const liveData = reportService.getLiveTracking();
  res.status(200).json(liveData);
};
