import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    const orderData = { name, address, email };

    try {
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        clearCart();
        navigate('/');  // Redirect to home after placing order
      } else {
        alert('Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error placing order');
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Enter Order Details
      </Typography>

      <form onSubmit={handleOrderSubmit}>
        <TextField
          label="Name"
          fullWidth
          sx={{ marginBottom: '20px' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Address"
          fullWidth
          sx={{ marginBottom: '20px' }}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <TextField
          label="Email"
          fullWidth
          sx={{ marginBottom: '20px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Order
        </Button>
      </form>
    </Box>
  );
};

export default Checkout;
