// src/Nav.jsx
import React, { useState } from 'react';

const Nav = () => {
    // State to manage the visibility of the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold relative z-50">MyLogo</div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white">About</a>
                    <a href="#" className="text-gray-300 hover:text-white">Services</a>
                    <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none relative z-50">
                        {/* Hamburger Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-gray-900  flex justify-center items-center z-[48]">
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="text-white text-lg hover:text-gray-300">Home</a>
                        <a href="#" className="text-white text-lg hover:text-gray-300">About</a>
                        <a href="#" className="text-white text-lg hover:text-gray-300">Services</a>
                        <a href="#" className="text-white text-lg hover:text-gray-300">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;