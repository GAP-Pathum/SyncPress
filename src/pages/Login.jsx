import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig'; // Make sure to have this file set up
import { Button, TextField, Typography } from '@mui/material';

// Initialize Firebase app
initializeApp(firebaseConfig);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Show success alert
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: `Welcome back, ${user.email}!`,
        confirmButtonColor: '#3085d6',
      });

      // Clear input fields after login
      setEmail('');
      setPassword('');
    } catch (error) {
      // Show error alert
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Log In
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{ marginTop: '16px' }}
        >
          Log In
        </Button>
      </div>
    </div>
  );
}
