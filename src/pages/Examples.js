import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';

const Examples = () => {
  return (
    <Container>
      <Header title="Examples and Tutorials" />
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8">
        <p className="text-gray-700 dark:text-gray-400 mb-4">
          Here are some examples and tutorials to help you get started with our APIs:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
          <li className="mb-2">
            <a href="/tutorials/password-generator" className="text-teal-500 hover:underline">
              Password Generator API Tutorial
            </a>
          </li>
          <li className="mb-2">
            <a href="/tutorials/color-palette" className="text-teal-500 hover:underline">
              Color Palette API Tutorial
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Examples;