import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:8000/', {name, email, password });
      console.log(result);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        
      <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          placeholder='name'
          value={name}
        />
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
        <button type="submit">Register</button>
      </form>
      <p>OR</p>
      <Link to="/login">Login Page</Link>
    </div>
  );
}

export default Register;
