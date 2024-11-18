// src/Signup.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/firebaseConfig';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: 'Error',
        text: 'Passwords do not match!',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
      return;
    }

    if (!formData.agreed) {
      Swal.fire({
        title: 'Error',
        text: 'You must agree to the terms and conditions.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        Swal.fire({
          title: 'Signup Successful!',
          text: 'You have successfully signed up.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        console.log('User created:', userCredential.user);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to SyncPress</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <TextField
              id="username"
              label="Username"
              variant="standard"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full"
              required
            />
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
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="standard"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          <FormControlLabel
            control={
              <Checkbox
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required
              />
            }
            label="I agree to the terms and conditions"
            className="text-sm"
          />
          <Button type="submit" variant="contained" color="primary" className="w-full">
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account? <Link href="/login" className="text-blue-500">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
