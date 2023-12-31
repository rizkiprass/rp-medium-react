import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [addToCartMessage, setAddToCartMessage] = useState('');

  const handleAddToCart = async (productId) => {
    try {
      // Get the access token from localStorage
      const accessToken = localStorage.getItem('accessToken');

      // Make a POST request to add the product to the cart with the token in the headers
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/cart/add`,
        { productId, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Check if the response contains a message
      if (response.data && response.data.payload && response.data.payload.message) {
        setAddToCartMessage(response.data.payload.message);
        // Optionally, you can display the message to the user
      }

      // Optionally, you can provide feedback to the user that the product has been added to the cart
    } catch (error) {
      console.error(
        'Error adding product to cart:',
        error.response ? error.response.data : error.message
      );
      // Handle the error and provide feedback to the user if needed
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log('Products response:', response.data);
        setProducts(response.data[0].payload);
      } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {addToCartMessage && <p>{addToCartMessage}</p>}
      <ul>
        {products.map((product) => (
          <li key={`${product.ProductID}-${product.ProductName}`}>
            <h3>{product.ProductName}</h3>
            <p>{product.Description}</p>
            <p>Price: ${product.Price}</p>
            {product.Image && (
              <img
                src={`${product.Image}`}
                alt={product.ProductName}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            )}
            <button onClick={() => handleAddToCart(product.ProductID)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
