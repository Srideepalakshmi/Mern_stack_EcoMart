// src/pages/Home.js
import React, { useContext } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ecoImage from '../assets/eco.jpg'; // Add an eco-friendly hero image
import { AuthContext } from '../context/AuthContext'; // Import AuthContext to check authentication

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext); // Get authentication status from AuthContext

  const handleShopNow = () => {
    if (isAuthenticated) {
      navigate('/products');  // If user is authenticated, go to the products page
    } else {
      navigate('/signup');    // If not authenticated, redirect to signup
    }
  };

  return (
    <Box sx={{ backgroundImage: `url(${ecoImage})`, backgroundSize: 'cover', height: '90%', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Typography variant="h1" sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '20px' }}>
          Sustainable Living Starts Here
        </Typography>
        <Typography variant="h4" sx={{ color: '#fff', marginBottom: '30px' }}>
          Explore a wide range of eco-friendly products to reduce your carbon footprint.
        </Typography>
        <Button onClick={handleShopNow} variant="contained" color="secondary" size="large">
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
