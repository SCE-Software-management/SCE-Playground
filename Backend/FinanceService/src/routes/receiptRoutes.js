const express = require('express');
const router = express.Router();
const receiptController = require('../controllers/receiptController');

// POST /receipts/send – send receipt by email
router.post('/send', receiptController.sendReceipt);

module.exports = router;
