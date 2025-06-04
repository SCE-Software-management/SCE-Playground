const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// PATCH /transactions/:id/status – update transaction status
router.patch('/:id/status', transactionController.updateTransactionStatus);

module.exports = router;
