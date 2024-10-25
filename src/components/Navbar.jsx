// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-5 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerald's Portfolio</h1>
        <div>
          <a href="#skills" className="mx-2">Skills</a>
          <a href="#projects" className="mx-2">Projects</a>
          <a href="#contact" className="mx-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
