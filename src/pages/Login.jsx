import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { lightTheme, darkTheme, gradientAnimation } from '../constants/colors';
import { Fonts } from '../constants/fonts';

function Login() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const colors = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(gradientAnimation, styleSheet.cssRules.length);
  }, []);

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
    <div 
      style={{ 
        background: colors.gradient.background,
        animation: colors.gradient.animation,
      }}
    >
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">SyncPress</div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            style={{ 
              padding: '8px 12px', 
              borderRadius: '4px', 
              cursor: 'pointer',
              color: isDarkMode ? '#1f2937' : '#f9f9f9', 
              transition: 'background-color 0.3s, color 0.3s' 
            }}
          >
            {isDarkMode ? '☀' : '🌙'}
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Signup
          </button>
        </div>
      </nav>

      <div
        className="flex items-center justify-center min-h-screen"
        style={{ backgroundColor: colors.gradient }}
      >
        <div
          className="w-8/9 p-6 space-y-8 rounded-lg"
          style={{
            backgroundColor: colors.backgroundSecondary,
            color: colors.gradient,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.8)',
          }}
        >
          <h1 className="text-2xl font-bold text-center" style={{ color: colors.textPrimary }}>Welcome back to SyncPress</h1>
          <h2 className="text-xl font-semibold text-center" style={{ color: colors.textPrimary }}>Login</h2>
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
                InputLabelProps={{ style: { color: colors.textSecondary } }}
                InputProps={{ style: { color: colors.textPrimary } }}
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
                InputLabelProps={{ style: { color: colors.textSecondary } }}
                InputProps={{ style: { color: colors.textPrimary } }}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              className="w-full py-2"
              style={{
                backgroundColor: colors.accentPrimary,
                color: colors.textButton,
                fontFamily: Fonts.Topic,
              }}
            >
              Login
            </Button>
          </form>
          <p className="text-center">
            Don't have an account?{' '}
            <Link href="/signup" style={{ color: colors.link }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
