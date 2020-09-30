const mongoose = require("mongoose");

const Transaction = mongoose.Schema({
  transactionId: {
    type: String,
  },
  userId: {
    type: String,
  },
  salesId: {
    type: String,
  },
  productId: {
    type: String,
  },
  productName: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  transactionStatus: {
    type: Boolean,
  },
});

module.exports = mongoose.model("transaction", Transaction);
