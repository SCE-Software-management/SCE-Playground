const receiptService = require('../services/receiptService');

// Handle POST /receipts/send
exports.sendReceipt = (req, res) => {
  const receiptData = req.body;

  if (!receiptData || !receiptData.customer || !receiptData.transactionId) {
    return res.status(400).json({ error: 'Missing customer or transactionId' });
  }

  const result = receiptService.sendReceipt(receiptData);
  res.status(200).json(result);
};
