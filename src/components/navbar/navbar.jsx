import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode, colors }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility
    const menuRef = useRef(null); // Reference to the mobile menu

    // Close the menu if the user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-toggle')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav 
            className="p-4 flex justify-between items-center transition-all duration-300 ease-in-out"
            style={{ backgroundColor: 'transparent' }} // Set background to transparent
        >
            {/* Logo */}
            <div 
                className={`text-2xl font-bold transition-colors duration-300 ease-in-out 
                ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
                SyncPress
            </div>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex-grow md:flex md:justify-center md:items-center">
                <ul className="flex space-x-8">
                    <li className="nav-item">
                        <a 
                            href="#home" 
                            className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#services" 
                            className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                        >
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#about" 
                            className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                        >
                            About Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#contact" 
                            className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#signup" 
                            className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                        >
                            Signup
                        </a>
                    </li>
                </ul>
            </div>

            {/* Buttons (Right Side) */}
            <div className='ai-right'>
                {/* Theme Toggle Button */}
                <button 
                    onClick={() => setIsDarkMode(!isDarkMode)} 
                    className="text-white p-2 rounded transition-all duration-300 ease-in-out"
                    style={{ 
                        backgroundColor: 'trranparent', 
                        borderRadius: '4px',
                    }}
                >
                    {isDarkMode ? '☀' : '🌙'}
                </button>
            </div>

            {/* Menu Toggle Button (Mobile Only) */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="menu-toggle text-white p-2 rounded md:hidden"
                style={{ 
                    backgroundColor: 'transparent', 
                    borderRadius: '4px',
                }}
            >
                {isMenuOpen ? '✖' : '☰'} {/* Hamburger Icon or Close Icon */}
            </button>

            {/* Mobile Menu (when isMenuOpen is true) */}
            {isMenuOpen && (
                <div 
                    ref={menuRef} 
                    className="absolute top-0 right-0 bg-black bg-opacity-50 p-6 w-full h-1/2 md:hidden transition-all duration-500 ease-in-out z-10 backdrop-blur-md" 
                    style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    }}
                >
                    {/* Close the menu when clicking on the close icon */}
                    <ul className="flex flex-col space-y-4">
                        <li className="nav-item">
                            <a 
                                href="#home" 
                                className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#services" 
                                className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                            >
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#about" 
                                className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                            >
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#contact" 
                                className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#signup" 
                                className={`text-white transition-colors duration-300 ease-in-out hover:text-gray-400`}
                            >
                                Signup
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
