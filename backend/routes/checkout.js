const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST route to handle order submissions
router.post('/', async (req, res) => {
  const { name, address, email } = req.body;

  console.log('Received order:', req.body);  // Debug: Log incoming order data

  try {
    const newOrder = new Order({ name, address, email });  // Create new order
    const savedOrder = await newOrder.save();  // Save order to the database

    console.log('Order saved successfully:', savedOrder);  // Debug: Log saved order data
    res.status(200).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error saving order:', error);  // Debug: Log any errors
    res.status(500).json({ message: 'Failed to place order', error });
  }
});

module.exports = router;
