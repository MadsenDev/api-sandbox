import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto mt-16 px-4 dark:bg-gray-900 dark:text-gray-300">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-300">Welcome to the API Sandbox</h1>
      <p className="text-center mt-6 text-gray-600 dark:text-gray-400">Explore the APIs using the menu above.</p>
      
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Introduction</h2>
        <p className="text-gray-700 dark:text-gray-400 mb-8">
          The API Sandbox provides a safe and interactive environment for developers to experiment with our APIs. Here, you can test out different endpoints, generate responses, and understand how to integrate our APIs into your projects.
        </p>
        
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Featured APIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">Password Generator API</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4">Generate secure and customizable passwords for your applications.</p>
            <Link to="/password-generator" className="text-teal-500 hover:underline">Learn more &rarr;</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">Color Palette API</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4">Create harmonious color palettes based on a base color and scheme.</p>
            <Link to="/color-palette" className="text-teal-500 hover:underline">Learn more &rarr;</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">Dinner Suggestion API</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4">Get random dinner suggestions for your meal planning needs.</p>
            <Link to="/dinner-suggestion" className="text-teal-500 hover:underline">Learn more &rarr;</Link>
            </div>
        </div>
        
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">How to Use</h2>
        <p className="text-gray-700 dark:text-gray-400 mb-8">
          Using the API Sandbox is simple. Select the API you want to explore from the menu, configure the parameters as needed, and see the results instantly. You can copy the responses and integrate them into your projects easily.
        </p>
        
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Contact and Support</h2>
        <p className="text-gray-700 dark:text-gray-400">
          If you have any questions or need assistance, feel free to <Link to="/contact" className="text-teal-500 hover:underline">contact us</Link>. We're here to help you make the most out of our API Sandbox.
        </p>
      </div>
    </div>
  );
};

export default Home;