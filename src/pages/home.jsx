import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar';
import { lightTheme, darkTheme, gradientAnimation } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import img1 from '../assets/images/img1.png';
import ProfileImages from '../constants/ProfileImages';

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
      <div className="flex justify-between items-start p-10 pb-0">
        <div>
          <h1 className="text-5xl font-bold" style={{ color: colors.textPrimary, fontFamily: Fonts.Title }}>
            We create your Ideas<br/>Into Reality...
            <p className="text-2xl" style={{ color: colors.textSecondary, fontFamily: Fonts.SemiBold }}>
              We are ready to fulfill <br/>Your all digital needs
            </p>
          </h1>
          <div>
            <h2 className="pt-12" style={{ color: colors.textPrimary, fontFamily: Fonts.Lights }}>
              Who are engaging with us currently
            </h2>
            <ProfileImages/>
            <button 
              onClick={() => window.location.href = '/services'} 
              className="mt-5 bg-accentPrimary text-primary rounded-lg py-2 px-4 font-semibold text-lg border-none cursor-pointer"
              style={{ backgroundColor: colors.accentPrimary, color: colors.textPrimary, fontFamily: Fonts.SemiBold }}
            >
              Let's go
            </button>
          </div>
        </div>
        <img src={img1} alt="Description of image" className="w-3/5 h-auto" />
      </div>
      <hr/>
      <div className="flex justify-between items-start p-10">
      </div>
    </div>
  );
}

export default Home;