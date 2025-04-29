const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

// check what we're importing
console.log('Controller loaded:', invoiceController);

// POST /invoices – create a new invoice
router.post('/', invoiceController.createInvoice);

module.exports = router;
