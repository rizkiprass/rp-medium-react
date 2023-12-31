// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import ProductList from './components/ProductList';
import HomePage from './components/HomePage';
import Cart from './components/Cart'; // Import komponen Cart
import AddProduct from './components/AddProduct'; // Import AddProductPage

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} /> {/* Tambahkan route untuk Cart */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
