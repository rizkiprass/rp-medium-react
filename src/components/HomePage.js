// HomePage.js
import React from 'react';

const HomePage = () => {
  const imageUrl = 'http://localhost:8080/uploads/popcat.jpg'; // Replace with the actual image filename
  return (
    <div>
      <h2>Welcome to Your E-commerce App</h2>
      <img
        src="https://picsum.photos/200" // Replace with the actual URL of your image
        alt="E-commerce Banner"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <img
        src={imageUrl}
        alt="popcatimagelocal"
        style={{ maxWidth: '10%', height: 'auto' }}
      />
      {/* Add content for the home page as needed */}
    </div>
  );
};

export default HomePage;
