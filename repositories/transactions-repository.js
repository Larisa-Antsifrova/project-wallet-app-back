const Transaction = require('../models/transaction-model');

class Transactions {
  async getAllTransactions() {
    // TODO: Add search by owner ID
    return await Transaction.find();
  }

  async addTransaction(transaction) {
    // TODO: Add owner field with current user ID
    return await Transaction.create({
      ...transaction,
    });
  }
}

module.exports = new Transactions();
