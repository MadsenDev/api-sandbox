import React, { useState } from 'react';
import '../styles/accordion.css'; // Import the CSS file

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-gray-300"
      >
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">{title}</h3>
      </button>
      {isOpen && (
        <div className="mt-2 pl-4 pr-2 py-2 bg-gray-100 dark:bg-gray-600 rounded-md accordion-content">
          <p
            className="text-gray-700 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: content }}
          ></p>
        </div>
      )}
    </div>
  );
};

export default Accordion;