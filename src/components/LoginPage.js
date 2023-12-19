import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        Email: email,
        Password: password,
      });

      console.log(response);

      // Assuming the authentication token is returned in the response
      const { accessToken } = response.data[0].payload;;

      // Store the token in localStorage or a more secure storage solution
      localStorage.setItem('accessToken', accessToken);

      // Log the token to the console for debugging
    console.log(localStorage.getItem('accessToken'));

      // Redirect or perform additional actions after successful login
      console.log('Login successful!');
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
