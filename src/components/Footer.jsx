// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="p-5 bg-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Gerald</p>
            <p>Web: www.beplugged.co.za</p>
        </footer>
    );
};

export default Footer;
