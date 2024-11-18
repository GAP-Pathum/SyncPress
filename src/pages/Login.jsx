// src/Login.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Welcome back to SyncPress</h1>
        <h2 className="text-xl font-semibold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <TextField
              id="email"
              label="Email"
              variant="standard"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          <div className="space-y-2">
            <TextField
              id="password"
              label="Password"
              variant="standard"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          <Button type="submit" variant="contained" color="primary" className="w-full py-2">
            Login
          </Button>
        </form>
        <p className="text-center text-gray-600">
          Don't have an account? <Link href="/signup" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
