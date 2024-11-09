import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../services/firebaseConfig'; // Ensure this file exports your Firebase config
import { Button, TextField, Container, Typography, Box } from '@mui/material';

// Initialize Firebase app
initializeApp(firebaseConfig);

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Show success alert
      Swal.fire({
        icon: 'success',
        title: 'Signup Successful',
        text: `Welcome, ${user.email}!`,
        confirmButtonColor: '#3085d6',
      });
      
      // Optionally, clear fields or navigate to another page here
      setEmail('');
      setPassword('');
    } catch (error) {
      // Show error alert
      Swal.fire({
        icon: 'error',
        title: 'Signup Failed',
        text: error.message,
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={4}
        boxShadow={3}
        borderRadius={2}
        bgcolor="background.paper"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
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
          onClick={handleSignup}
          style={{ marginTop: '16px' }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
