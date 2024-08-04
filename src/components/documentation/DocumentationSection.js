import React from 'react';
import Header from '../Header';
import '../../styles/documentation.css';

const DocumentationSection = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8 overflow-x-auto custom-scrollbar">
    <Header title={title} />
    <div className="text-gray-700 dark:text-gray-300">
      {children}
    </div>
  </div>
);

export default DocumentationSection;