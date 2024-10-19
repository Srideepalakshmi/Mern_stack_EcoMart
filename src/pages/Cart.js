// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Redirect to order details page or form
    navigate('/checkout');
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        cartItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
            }}
          >
            <Typography variant="body1">{item.name}</Typography>
            <Typography variant="body1">{item.price}</Typography>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </Box>
        ))
      )}

      {cartItems.length > 0 && (
        <Box sx={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleCheckout}>
            Buy Now
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginLeft: '10px' }}
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
