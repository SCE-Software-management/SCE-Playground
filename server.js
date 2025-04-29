console.log('server.js started');

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

console.log('loading routes...');

const invoiceRoutes = require('./src/routes/invoiceRoutes');
app.use('/invoices', invoiceRoutes);
console.log('invoiceRoutes loaded');

const transactionRoutes = require('./src/routes/transactionRoutes');
app.use('/transactions', transactionRoutes);
console.log('transactionRoutes loaded');

const receiptRoutes = require('./src/routes/receiptRoutes');
app.use('/receipts', receiptRoutes);
console.log('receiptRoutes loaded');

const reportRoutes = require('./src/routes/reportRoutes');
app.use('/reports', reportRoutes);
console.log('reportRoutes loaded');

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`FinanceService is running on port ${PORT}`);
});
