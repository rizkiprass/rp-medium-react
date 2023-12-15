// CartList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // Get the access token from localStorage
        const accessToken = localStorage.getItem('accessToken');

        // Make a GET request to fetch cart items with the token in the headers
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cart`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log('Cart items response:', response.data[0]);
        setCartItems(response.data[0].payload); // Assuming response structure has a 'payload' property
      } catch (error) {
        console.error('Error fetching cart items:', error.response ? error.response.data : error.message);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.CartID}>
              <img src={item.Image} alt={item.ProductName} style={{ maxWidth: '100px' }} />
              <p>{item.ProductName}</p>
              <p>Quantity: {item.Quantity}</p>
              <p>Price: ${item.Price}</p>
              {/* Add more details if needed */}
            </li>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </ul>
    </div>
  );
  
};

export default CartList;
