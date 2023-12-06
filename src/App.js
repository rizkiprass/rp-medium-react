// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductList />} />
          {/* Add other routes as needed */}
          <Route path="/" element={<h2>Welcome to Your E-commerce App</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
