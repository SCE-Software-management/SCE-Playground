const invoiceService = require('../services/invoiceService');

// Handle POST /invoices
exports.createInvoice = (req, res) => {
  const invoiceData = req.body;

  // Call the service to create the invoice
  const newInvoice = invoiceService.createInvoice(invoiceData);

  // Return the created invoice to the client
  res.status(201).json(newInvoice);
};
