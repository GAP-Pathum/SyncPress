// src/Login.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './login.css'; // Reusing the styles for consistency

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const auth = getAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        Swal.fire({
          title: 'Login Successful!',
          text: 'Welcome back!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        console.log('User signed in:', userCredential.user);
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
        console.error('Error:', error.code, error.message);
      });
  };

  return (
    <div className='content'>
     <h1 id='topic'>
      Welcome back to SyncPress
    </h1> 
      <div className="login-container">
        {/* Login Form Section */}
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <TextField
                id="email"
                label="Email"
                variant="standard"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div className="input-group">
              <TextField
                id="password"
                label="Password"
                variant="standard"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <Button type="submit" variant="contained" color="primary" className="signup-button">
              Login
            </Button>
          </form>
          <p className="signin-text">
            Don't have an account? <Link href="/signup" className="signin-link">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
