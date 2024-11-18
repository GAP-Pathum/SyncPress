import React from 'react';
import Navbar from '../components/navbar/navbar';
import { lightModeColors, darkModeColors } from '../constants/colors'; // Update the path as necessary

function Home() {
  const colors = lightModeColors; // Change to lightModeColors for light mode

  return (
    <div style={{ background: `linear-gradient(to bottom, ${colors.primary}, ${colors.background})`, width: '100%', backgroundOpacity: '50%' }}>
      <Navbar />
      <h1 style={{ fontSize: '50px', fontWeight: 'bold', color: colors.topic, textAlign: 'left', backgroundColor: colors.background, backgroundOpacity: '50%' }}>
        We create your Idea
      </h1>
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: colors.background, backgroundOpacity: '50%' }}>
        <div style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '32px', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.secondary }}>
            Welcome to Tailwind CSS
          </h1>
          <p style={{ color: colors.accent, marginTop: '16px' }}>
            This is a sample page styled using Tailwind CSS in a React Vite project.
          </p>
          <button style={{ marginTop: '24px', padding: '8px 16px', backgroundColor: colors.primary, color: 'white', borderRadius: '4px', hover: { backgroundColor: colors.secondary } }}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;