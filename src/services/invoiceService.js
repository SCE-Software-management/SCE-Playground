exports.createInvoice = (data) => {
    return {
      id: Date.now(),
      customer: data.customer,
      amount: data.amount,
      date: new Date().toISOString()
    };
  };
  