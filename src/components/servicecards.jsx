import React, { useEffect } from 'react';
import { Fonts } from '../constants/fonts'; // Add this line to import Fonts
import { services } from '../Details/services'; // Import the services from services.js

const ServiceCards = ({ colors }) => {
    useEffect(() => {
        const gradientAnimation = `
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(gradientAnimation, styleSheet.cssRules.length);
    }, []);

    return (
        <div className="flex flex-col gap-4 p-4">
            {services.map((service, index) => (
                <div 
                    key={index} 
                    className={`shadow-md rounded-lg p-10 ml-10 mr-10 ${index % 2 === 0 ? 'self-end text-right' : 'self-start text-left'}`}
                    style={{
                        backgroundColor: colors.cardBackground, // Use cardBackground for the card's background
                        color: colors.textPrimary, // Set text color to textPrimary
                    }}
                >
                    <div className="flex items-center mb-4">
                        {/* Render the icon */}
                        <div className="mr-4">{service.icon}</div>
                        <h3 
                            className="text-xl font-semibold" 
                            style={{ color: colors.textPrimary, fontFamily: Fonts.Title }}
                        >
                            {service.title}
                        </h3>
                    </div>
                    <p 
                        className="text-m" 
                        style={{ color: colors.textSecondary, fontFamily: Fonts.Title }}
                    >
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ServiceCards;
