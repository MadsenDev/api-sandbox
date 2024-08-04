import React from 'react';

const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="mt-4 p-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded w-full dark:bg-gradient-to-r dark:from-purple-700 dark:to-teal-700"
  >
    {children}
  </button>
);

export default Button;