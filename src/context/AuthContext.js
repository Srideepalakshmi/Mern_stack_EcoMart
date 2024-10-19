import React, { createContext, useState, useEffect } from 'react';

// Create an Auth Context
export const AuthContext = createContext();

// Auth Provider component to wrap around your app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in (you can use localStorage or make an API call)
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username, password) => {
    // Login logic here (API call to check credentials)
    // On success:
    localStorage.setItem('user', username);  // Save the user to localStorage
    setIsAuthenticated(true);
  };

  const signup = (username, password) => {
    // Signup logic here (API call to create user)
    // On success:
    localStorage.setItem('user', username);  // Save the user to localStorage
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
