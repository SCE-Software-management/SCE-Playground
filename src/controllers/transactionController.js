const transactionService = require('../services/transactionService');

// Handle PATCH /transactions/:id/status
exports.updateTransactionStatus = (req, res) => {
  const transactionId = req.params.id;
  const { status } = req.body;

  // Validate input
  if (!status) {
    return res.status(400).json({ error: 'Missing status field' });
  }

  // Call the service to update the transaction
  const updatedTransaction = transactionService.updateTransactionStatus(transactionId, status);

  res.status(200).json(updatedTransaction);
};
