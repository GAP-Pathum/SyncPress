import React from 'react';
import 'tailwindcss/tailwind.css';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">SyncPress</div>
            <ul className="flex space-x-10">
                <li className="nav-item">
                    <a href="#home" className="text-white hover:text-gray-400 transition duration-300">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#services" className="text-white hover:text-gray-400 transition duration-300">Services</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="text-white hover:text-gray-400 transition duration-300">About Us</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="text-white hover:text-gray-400 transition duration-300">Contact</a>
                </li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Signup</button>
        </nav>
    );
};

export default Navbar;