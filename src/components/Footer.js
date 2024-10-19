// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#4caf50',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="white">
        © 2024 Eco-Friendly Marketplace. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
