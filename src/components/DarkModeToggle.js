import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Cookies from 'js-cookie';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for existing dark mode preference in cookies
    const savedPreference = Cookies.get('darkMode') === 'true';
    setDarkMode(savedPreference);

    if (savedPreference) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference in cookies
    Cookies.set('darkMode', darkMode, { expires: 365 });
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded ml-4 transition duration-500 ease-in-out transform hover:scale-110"
    >
      {darkMode ? (
        <FaSun className="text-2xl text-yellow-400 transition duration-500 ease-in-out" />
      ) : (
        <FaMoon className="text-2xl text-gray-800 transition duration-500 ease-in-out" />
      )}
    </button>
  );
};

export default DarkModeToggle;