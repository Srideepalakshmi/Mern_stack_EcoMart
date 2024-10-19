// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: '15px' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          onClick={onBuyNow}  // Call the Buy Now function passed as a prop
        >
          Buy Now
        </Button>
        <Button 
          size="small" 
          color="secondary" 
          onClick={onAddToCart}  // Call the Add to Cart function passed as a prop
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
