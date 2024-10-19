// src/pages/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';



const About = () => {
  return (
    <Container>
      <Box sx={{ marginTop: '50px' }}>
        <Typography variant="h3" gutterBottom>
          About EcoMart
        </Typography>
        <Typography variant="body1" paragraph>
          EcoMart is an online marketplace that offers sustainable and eco-friendly products 
          aimed at reducing environmental impact. We curate a wide range of reusable, 
          recyclable, and biodegradable goods for a more sustainable lifestyle.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to make eco-friendly shopping easy and accessible for everyone. 
          Whether you’re looking for everyday essentials or unique eco-conscious gifts, 
          EcoMart is your one-stop shop for all things green.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
