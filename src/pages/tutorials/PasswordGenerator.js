import React from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Accordion from '../../components/Accordion';
import PasswordGenerator from '../PasswordGenerator';

const tutorialSteps = [
  {
    title: "Introduction",
    content: `
      <p>Welcome to the Password Generator API tutorial. In this guide, you will learn how to generate secure passwords using our API.</p>
      <p>This tutorial will cover:</p>
      <ul class="list-disc pl-5">
        <li>How to make API requests</li>
        <li>How to customize the generated password</li>
        <li>Best practices for using the API</li>
      </ul>
    `
  },
  {
    title: "Step 1: Make a GET Request",
    content: `
      <p>To generate a password, you need to make a GET request to the following endpoint:</p>
      <pre class="bg-gray-200 dark:bg-gray-900 text-gradient p-4 rounded mb-6 overflow-x-auto custom-scrollbar">
        <code class="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          https://api.madsens.dev/password
        </code>
      </pre>
      <p>You can customize the password by adding query parameters:</p>
      <ul class="list-disc pl-5">
        <li><strong>length</strong>: The length of the password (default: 12)</li>
        <li><strong>includeNumbers</strong>: Whether to include numbers (true/false)</li>
        <li><strong>includeSpecialChars</strong>: Whether to include special characters (true/false)</li>
        <li><strong>includeUppercase</strong>: Whether to include uppercase letters (true/false)</li>
      </ul>
    `
  },
  {
    title: "Step 2: Example Code",
    content: `
      <p>Here is an example of how to make a request to the Password Generator API using JavaScript and Axios:</p>
      <pre class="bg-gray-200 dark:bg-gray-900 text-gradient p-4 rounded mb-6 overflow-x-auto custom-scrollbar">
        <code class="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          import axios from 'axios';

          const generatePassword = async () => {
            const response = await axios.get('https://api.madsens.dev/password', {
              params: {
                length: 12,
                includeNumbers: true,
                includeSpecialChars: true,
                includeUppercase: true,
              },
            });
            console.log(response.data.password);
          };

          generatePassword();
        </code>
      </pre>
      <p>This code makes a GET request to the API and logs the generated password to the console.</p>
    `
  },
  {
    title: "Best Practices",
    content: `
      <p>To ensure you are using the Password Generator API effectively, consider the following best practices:</p>
      <ul class="list-disc pl-5">
        <li>Use secure HTTPS connections to protect your API requests</li>
        <li>Validate the password length and complexity requirements for your application</li>
        <li>Cache responses to reduce the number of API requests</li>
      </ul>
    `
  },
  {
    title: "Interactive Example",
    content: `
      <p>Use the interactive example below to generate a password:</p>
      <div id="interactive-example"></div>
    `
  },
  {
    title: "FAQ",
    content: `
      <h3>Common Questions</h3>
      <p>Here are some common questions about using the Password Generator API:</p>
      <ul class="list-disc pl-5">
        <li><strong>How do I change the length of the password?</strong> Use the <code>length</code> query parameter to specify the desired length.</li>
        <li><strong>Can I exclude certain characters?</strong> Currently, the API does not support excluding specific characters, but you can filter the generated password in your application.</li>
      </ul>
    `
  }
];

const TutorialsPasswordGenerator = () => {
  return (
    <Container>
      <Header title="Password Generator API Tutorial" />
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8">
        {tutorialSteps.map((step, index) => (
          <Accordion key={index} title={step.title} content={step.content} />
        ))}
      </div>
      <div id="interactive-example">
        <PasswordGenerator />
      </div>
    </Container>
  );
};

export default TutorialsPasswordGenerator;