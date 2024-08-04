import React from 'react';

const Container = ({ children, className = '' }) => (
  <div className={`container mx-auto mt-16 px-4 dark:bg-gray-900 dark:text-gray-300 ${className}`}>
    {children}
  </div>
);

export default Container;