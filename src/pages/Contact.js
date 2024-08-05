import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';

const Contact = () => {
  return (
    <Container>
      <Header title="Contact and Support" />
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8">
        <p className="text-gray-700 dark:text-gray-400 mb-4">
          If you have any questions or need assistance, please reach out to us:
        </p>
        <p className="text-gray-700 dark:text-gray-400 mb-2">
          Email: <a href="mailto:chris@madsens.dev" className="text-teal-500 hover:underline">chris@madsens.dev</a>
        </p>
        <p className="text-gray-700 dark:text-gray-400">
          You can also visit our <a href="/support" className="text-teal-500 hover:underline">support page</a> for more resources.
        </p>
      </div>
    </Container>
  );
};

export default Contact;