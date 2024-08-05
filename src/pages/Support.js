import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Accordion from '../components/Accordion';

const faqs = [
  {
    title: "Are the APIs free to use?",
    content: `Yes, all our APIs are completely free to use. You can integrate them into your projects without any cost.`
  },
  {
    title: "Do I need an API key to use the APIs?",
    content: `No, our APIs do not require an API key. You can start using them right away without any additional setup.`
  },
  {
    title: "What formats are the API responses in?",
    content: `Our APIs return responses in JSON format, which is easy to parse and integrate into your applications.`
  },
  {
    title: "Can I use the APIs in my commercial projects?",
    content: `Yes, you can use our APIs in both personal and commercial projects without any restrictions.`
  },
  {
    title: "Is there a rate limit for the APIs?",
    content: `Currently, there are no rate limits on our APIs. However, we recommend using them responsibly and caching responses where possible.`
  }
];

const Support = () => {
  return (
    <Container>
      <Header title="Support" />
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8">
        <p className="text-gray-700 dark:text-gray-400 mb-4">
          Welcome to the support page. Here you can find various resources to help you with our APIs.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4">FAQs</h2>
        <div className="mb-8">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4">Contact Support</h2>
        <p className="text-gray-700 dark:text-gray-400">
          If you can't find the answer to your question, feel free to <a href="/contact" className="text-teal-500 hover:underline">contact us</a> directly. We're here to help!
        </p>
      </div>
    </Container>
  );
};

export default Support;