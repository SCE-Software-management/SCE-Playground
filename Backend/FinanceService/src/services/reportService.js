// Generate a simulated monthly report
exports.generateMonthlyReport = (month, year) => {
    const report = {
      month,
      year,
      totalTransactions: 20,
      totalAmount: 5000,
      generatedAt: new Date().toISOString()
    };
  
    console.log('Monthly report generated:', report);
    return report;
  };
  
  // Generate a simulated financial overview
  exports.generateFinancialOverview = () => {
    const overview = {
      totalIncome: 15000,
      totalExpenses: 7000,
      netProfit: 8000,
      generatedAt: new Date().toISOString()
    };
  
    console.log('Financial overview generated:', overview);
    return overview;
  };
  
  // Generate a simulated real-time tracking of income and expenses
  exports.getLiveTracking = () => {
    const live = {
      incomeToday: 3000,
      expensesToday: 1200,
      currentBalance: 1800,
      lastUpdated: new Date().toISOString()
    };
  
    console.log('Live tracking data:', live);
    return live;
  };
  