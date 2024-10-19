const mongoose = require('mongoose');

// Define an order schema
const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Export the order model
module.exports = mongoose.model('Order', orderSchema);
