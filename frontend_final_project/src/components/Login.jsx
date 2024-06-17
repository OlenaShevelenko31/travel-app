import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });
      const { success, message, userId } = response.data;

      if (success) {
        localStorage.setItem('userId', userId); // storing userId in localStorage
        console.log(userId);
        navigate(`/home`);
      } else {
        console.log('Login failed:', message); 
      }
    } catch (err) {
      console.log('Login error:', err);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          value={email}
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          value={password}
        />
        <button type="submit">Login</button>
      </form>
      <p>OR</p>
      <Link to="/">Register</Link>
    </div>
  );
}

export default Register;
