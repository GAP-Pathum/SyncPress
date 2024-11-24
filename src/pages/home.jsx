import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar';
import { lightTheme, darkTheme, gradientAnimation } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import img1 from '../assets/images/img1.png';
import ProfileImages from '../constants/ProfileImages';
import { FaChevronDown } from "react-icons/fa";
import ServiceCards from '../components/servicecards';
import { Link } from "react-scroll"; // Import Link for scroll

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
        width: '100%',
        transition: 'background-color 0.3s, color 0.3s' 
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
            We create your Ideas<br />Into Reality...
            <p className="text-2xl mt-10" style={{ color: colors.textSecondary, fontFamily: Fonts.SemiBold }}>
              We are ready to fulfill <br />Your all digital needs
            </p>
          </h1>
          <div>
            <h2 className="pt-12" style={{ color: colors.textPrimary, fontFamily: Fonts.Lights }}>
              Who are engaging with us currently
            </h2>
            <ProfileImages />
            <button 
              onClick={() => window.location.href = '/services'} 
              className="mt-10 text-primary rounded-lg py-2 px-8 font-semibold text-lg border-text-primary cursor-pointer"
              style={{ 
                backgroundColor: 'transparent', 
                borderColor: colors.textPrimary, 
                color: colors.textPrimary, 
                fontFamily: Fonts.SemiBold,
                boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)',
                transition: 'transform 0.3s, background-color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.backgroundColor = colors.gradient.background;
                e.target.style.color = colors.textSecondary;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = colors.textPrimary;
              }}
            >
              Let's go
            </button>
          </div>
        </div>
        <img src={img1} alt="Description of image" className="w-3/5 h-auto" />
      </div>

      <div>
      <hr style={{ borderColor: colors.textPrimary }} />
      
        {/* Add Scroll Icon here */}
        <div className="scroll-icon-container">
          <Link to="target-section" smooth={true} duration={500}>
            <FaChevronDown className="scroll-icon" />
          </Link>
        </div>
      </div>
      <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.25rem', fontFamily: Fonts.SemiBold, color: colors.textPrimary }}>
        Experience the technology with Syncpress
      </h1>

      {/* Service Cards Component */}
      <ServiceCards colors={colors} />
    </div>
  );
}

export default Home;
