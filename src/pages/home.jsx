import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar';
import { lightTheme, darkTheme, gradientAnimation } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import img1 from '../assets/images/img1.png';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const colors = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(gradientAnimation, styleSheet.cssRules.length);
  }, []);

  return (
    <div 
      style={{ 
        background: colors.gradient.background, 
        backgroundSize: colors.gradient.backgroundSize, 
        animation: colors.gradient.animation,
        width: '100%' 
      }}
    >
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        colors={colors} 
      />
      <div className="flex justify-between items-left p-10 pb-0">
        <h1 style={{ fontSize: '50px', fontWeight: 'bold', color: colors.textPrimary, fontFamily: Fonts.Title }}>
          We create your Ideas<br/>Into Reality...
          <p style={{ fontSize: '25px', color: colors.textSecondary, fontFamily: Fonts.SemiBold}}>
          We are ready to full fill <br/>Your all digital needs</p>
        </h1>
        <img src={img1} alt="Description of image" style={{ width: '60%', height: 'auto' }} />
      </div>
      <hr/>
      <div className="flex justify-between items-left p-10 ">
        
      </div>
    </div>
  );
}

export default Home;