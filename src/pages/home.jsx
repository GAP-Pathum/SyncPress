import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar';
import { lightTheme, darkTheme, GlobalStyle } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import img1 from '../assets/images/img1.png';
import ProfileImages from '../constants/ProfileImages';
import { FaChevronDown } from "react-icons/fa";
import ServiceCards from '../components/servicecards';
import { Link } from "react-scroll";
import Footer from '../components/footer/footer';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set darkTheme as default
  const colors = isDarkMode ? darkTheme : lightTheme;

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
      <GlobalStyle />
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        colors={colors} 
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-10 pb-0">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: colors.textPrimary, fontFamily: Fonts.Title }}>
            We Make Ideas<br />Into Reality...
            <p className="text-lg md:text-2xl mt-6" style={{ color: colors.textSecondary, fontFamily: Fonts.SemiBold }}>
              We are ready to fulfill your all digital needs
            </p>
          </h1>
          <div>
            <h2 className="pt-8 font-semibold text-lg" style={{ color: colors.textPrimary, fontFamily: Fonts.Lights }}>
              Who are engaging with us currently
            </h2>
            <ProfileImages />
            <button 
              onClick={() => window.location.href = '/services'} 
              className="mt-6 py-2 px-8 font-semibold text-lg border-2 border-text-primary rounded-lg cursor-pointer"
              style={{ 
                backgroundColor: 'transparent', 
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

        {/* Image */}
        <img 
          src={img1} 
          alt="Description of image" 
          className="w-3/4 md:w-3/5 h-auto mt-6 md:mt-0 mb-10"
        />
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center items-center mb-10">
        <Link to="services" smooth={true} duration={1000}>
          <FaChevronDown size={50} color={colors.textPrimary} />
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mt-10 text-center" style={{ color: colors.textPrimary, fontFamily: Fonts.Title }}>
        Experience the easiness with SyncPress easily !
      </h1>

      {/* Service Cards */}
      <ServiceCards isDarkMode={isDarkMode} colors={colors} />

      {/* Footer */}
      <Footer colors={colors} />
    </div>
  );
}

export default Home;
