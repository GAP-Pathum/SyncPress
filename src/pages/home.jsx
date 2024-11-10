// src/Home.jsx
import React from 'react';
import './home.css';

function Home() {
  const services = [
    { title: 'CV & Resume Creation', description: 'Personalized, professional CVs that highlight your skills.' },
    { title: 'Flyer & Brochure Design', description: 'Visually engaging designs for your business.' },
    { title: 'UI/UX Design', description: 'User-friendly and intuitive interfaces.' },
    { title: 'Assignment Assistance', description: 'Expert help for well-structured submissions.' },
    { title: 'Typesetting & Formatting', description: 'Professionally formatted documents.' },
    { title: 'Digital Content Creation', description: 'High-quality digital content.' },
  ];

  return (
    <div className="home-content">
      <h1 className="home-title">Welcome to SyncPress Services</h1>
      <div className="card-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
