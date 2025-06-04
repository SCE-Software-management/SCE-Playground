// Simulate sending receipt by email
exports.sendReceipt = (data) => {
    const receipt = {
      transactionId: data.transactionId,
      customer: data.customer,
      status: 'sent',
      sentAt: new Date().toISOString()
    };
  
    console.log('Receipt sent to:', data.customer);
    return receipt;
  };
  