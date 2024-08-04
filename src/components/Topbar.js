import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Topbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-teal-500 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">API Sandbox</div>
        <div className="flex items-center">
          <Link to="/" className="text-white px-4 py-2 hover:bg-purple-700 rounded">Home</Link>
          <Link to="/password-generator" className="text-white px-4 py-2 hover:bg-purple-700 rounded">Password Generator</Link>
          <Link to="/color-palette" className="text-white px-4 py-2 hover:bg-purple-700 rounded">Color Palette</Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;