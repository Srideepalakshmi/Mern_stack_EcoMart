// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup';    // Added Signup page
import Login from './pages/Login';      // Added Login page
import theme from './theme';
import { CartProvider } from './context/CartContext';
import { AuthProvider, AuthContext } from './context/AuthContext';  // Import AuthContext

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <AuthProvider>  {/* Wrap the app with AuthProvider for authentication */}
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<PrivateRoute component={Products} />} /> {/* Protect Products route */}
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/signup" element={<Signup />} /> {/* Signup route */}
              <Route path="/login" element={<Login />} />   {/* Login route */}
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

// PrivateRoute component to check authentication before navigating
const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated } = React.useContext(AuthContext);  // Check if user is authenticated
  return isAuthenticated ? <Component /> : <Navigate to="/signup" />; // Redirect to signup if not authenticated
};

export default App;
