const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env file

// Create an express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());  // For parsing JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)  // No deprecated options
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const checkoutRoute = require('./routes/checkout');
app.use('/api/checkout', checkoutRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
