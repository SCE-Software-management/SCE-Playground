// Simulate updating a transaction status
exports.updateTransactionStatus = (id, newStatus) => {
    // Fake "database" record (simulation only)
    const updatedTransaction = {
      id: id,
      status: newStatus,
      updatedAt: new Date().toISOString()
    };
  
    console.log('Transaction updated:', updatedTransaction);
    return updatedTransaction;
  };
  