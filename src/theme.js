// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#388e3c',  // Green for sustainability
    },
    secondary: {
      main: '#ffcc80',  // Light Orange for eco warmth
    },
    background: {
      default: '#f4f4f4',  // Light background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#388e3c',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'medium',
      color: '#ffcc80',
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
  },
});

export default theme;
