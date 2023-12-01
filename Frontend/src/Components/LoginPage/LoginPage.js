
import React, { useState } from 'react';
import axios from 'axios';
import "./LoginPage.css";

function LoginPage(){

    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
        console.log("email", Email);
        const response = await axios.post('http://localhost:3010/login', {
            Email,
            password,
        });

        if (response.data.success) {
            alert('Login successful');
        } else {
            alert('Login failed. Please check your credentials.');
        }
        } catch (error) {
        console.error('Error during login:', error);
        }
    };


    return (
        <div>
          <h1>Login</h1>
          <div>
            <label>Email:</label>
            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      );
}

export default LoginPage;