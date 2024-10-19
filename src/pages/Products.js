// src/pages/Products.js
import React, { useContext } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext'; // Import useCart for cart context
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { AuthContext } from '../context/AuthContext'; // Import AuthContext to check authentication

// Dummy products data
const products = [
  { id: 1, name: 'Reusable Water Bottle', description: 'Eco-friendly stainless steel bottle', price: 25, image: '/images/water-bottle.jpg' },
  { id: 2, name: 'Organic Cotton Bag', description: 'Sustainable cotton shopping bag', price: 15, image: '/images/cotton-bag.jpg' },
  { id: 3, name: 'Bamboo Toothbrush', description: 'Biodegradable bamboo toothbrush', price: 8, image: '/images/bamboo-toothbrush.jpg' },
  { id: 4, name: 'Reusable Coffee Cup', description: 'Sustainable coffee cup made from bamboo fibers', price: 12, image: '/images/reusable-cup.jpg' },
  { id: 5, name: 'Stainless Steel Straw Set', description: 'Eco-friendly reusable straw set with cleaner', price: 10, image: '/images/steel-straw.jpg' },
  { id: 6, name: 'Compostable Plates', description: 'Biodegradable disposable plates made from natural fibers', price: 18, image: '/images/compostable-plates.jpg' },
  { id: 7, name: 'Bamboo Bowls', description: 'Sustainable bamboo serving bowls', price: 22, image: '/images/bamboo-bowls.jpg' },
];

const Products = () => {
  const { addToCart } = useCart(); // Get the addToCart function from context
  const navigate = useNavigate(); // Initialize useNavigate
  const { isAuthenticated } = useContext(AuthContext); // Get authentication status from AuthContext

  // Function to handle Buy Now action
  const handleBuyNow = (product) => {
    if (!isAuthenticated) {
      // If user is not authenticated, redirect to the login page
      navigate('/login');
      return;
    }
    addToCart(product); // Add product to cart if authenticated
    navigate('/cart'); // Navigate to the cart page
  };

  // Function to handle Add to Cart action
  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      // If user is not authenticated, redirect to the login page
      navigate('/login');
      return;
    }
    addToCart(product); // Add product to cart if authenticated
  };

  return (
    <Container sx={{ paddingTop: '20px' }}>
      <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '40px' }}>
        Eco-friendly Products
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}> {/* Responsive grid layout */}
            <ProductCard 
              product={product} 
              onAddToCart={() => handleAddToCart(product)}  // Handle Add to Cart
              onBuyNow={() => handleBuyNow(product)}       // Handle Buy Now
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
