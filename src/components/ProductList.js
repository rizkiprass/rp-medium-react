// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Get the access token from localStorage
        const accessToken = localStorage.getItem('accessToken');

        // Make a GET request to fetch products with the token in the headers
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log('Products response:', response.data);

        // Update the state with the fetched products
        setProducts(response.data[0].payload);
      } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
      }
    };

    // Call the fetchProducts function
    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={`${product.ProductID}-${product.ProductName}`}>
            <h3>{product.ProductName}</h3>
            <p>{product.Description}</p>
            <p>Price: ${product.Price}</p>
            {product.Image && (
              <img
                src={`${process.env.REACT_APP_API_URL}/uploads/${product.Image}`}
                alt={product.ProductName}
                style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the size as needed
              />
            )}
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
