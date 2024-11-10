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
import './Signup.css';

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
    <div className='content'>
    <h1 id='topic'>
      Welcome to SyncPress
    </h1>  
      <div className="signup-container">

  {/* Signup Form Section */}
<div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <TextField
              id="username"
              label="Username"
              variant="standard"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
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
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="standard"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field"
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
          />
          <Button type="submit" variant="contained" color="primary" className="signup-button">
            Sign Up
          </Button>
        </form>
        <p className="signin-text">
          Already have an account? <Link href="/login" className="signin-link">Sign in</Link>
        </p>
      </div>

      {/* SyncPress Information Section */}
  <div className="syncpress-info">
  <h3 className="syncpress-title">About SyncPress</h3>
  <ul className="info-list">
    <li className="info-item">
      <div className="info-topic">
        <strong>Services Offered</strong>
      </div>
      <div className="info-content">
        <ul>
          <li><strong>CV & Resume Creation:</strong> We craft personalized and professional CVs and resumes that highlight your skills and experience, helping you stand out in the competitive job market.</li>
          <li><strong>Flyer & Brochure Design:</strong> Our creative team designs visually engaging flyers and brochures tailored to your business, ensuring that your message is communicated effectively to your audience.</li>
          <li><strong>UI/UX Design:</strong> We specialize in creating user-friendly and intuitive user interfaces (UI) and seamless user experiences (UX) that keep your audience engaged.</li>
          <li><strong>Assignment Assistance:</strong> We offer expert assistance for academic assignments, providing well-researched, structured, and timely submissions to help you excel in your studies.</li>
          <li><strong>Typesetting & Document Formatting:</strong> Our typesetting services ensure that your documents are formatted professionally, making them clear, polished, and ready for publication.</li>
          <li><strong>Digital Content Creation:</strong> From social media posts to blogs and articles, we provide high-quality digital content designed to captivate and engage your audience.</li>
        </ul>
      </div>
    </li>
    <li className="info-item">
      <div className="info-topic">
        <strong>Why Choose Us</strong>
      </div>
      <div className="info-content">
        <ul>
          <li><strong>Tailored Solutions to Meet Your Unique Needs:</strong> We provide solutions customized to suit your goals and specific requirements.</li>
          <li><strong>Fast Turnaround and Attention to Detail:</strong> We deliver high-quality work quickly, ensuring you meet your deadlines without compromising quality.</li>
          <li><strong>Affordable Pricing Without Compromising Quality:</strong> Get premium services at an affordable price, offering the best value for your investment.</li>
          <li><strong>Expert Design and Typesetting Services:</strong> Our expert team ensures your documents and designs have a polished, professional finish.</li>
          <li><strong>Affordable Price:</strong> Premium services at a price that fits your budget, ensuring you get excellent value.</li>
        </ul>
      </div>
    </li>
  </ul>
</div>




    </div>
    </div>
    
  );
}

export default Signup;
