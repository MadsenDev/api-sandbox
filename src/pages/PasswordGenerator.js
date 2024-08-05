import React, { useState } from 'react';
import axios from 'axios';
import { FaClipboard, FaCheck } from 'react-icons/fa'; // Import the clipboard and check icons
import FormInput from '../components/FormInput';
import CheckboxInput from '../components/CheckboxInput';
import Button from '../components/Button';
import Container from '../components/Container';
import Header from '../components/Header';
import DocumentationSection from '../components/documentation/DocumentationSection';
import ApiEndpoint from '../components/documentation/ApiEndpoint';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = async () => {
    const response = await axios.get(`https://api.madsens.dev/password`, {
      params: {
        length,
        includeNumbers,
        includeSpecialChars,
        includeUppercase,
      },
    });
    setPassword(response.data.password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Change back after 2 seconds
    });
  };

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Header title="Password Generator" />
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8">
          <FormInput
            label="Length"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <div className="flex flex-wrap gap-4 mb-4">
            <CheckboxInput
              label="Include Numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <CheckboxInput
              label="Include Special Characters"
              checked={includeSpecialChars}
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            />
            <CheckboxInput
              label="Include Uppercase"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
          </div>
          <Button onClick={generatePassword}>Generate Password</Button>
          {password && (
            <div
              className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded text-gray-700 flex items-center cursor-pointer"
              onClick={copyToClipboard}
            >
              <pre className="flex-1">{password}</pre>
              <div className="flex items-center" style={{ minWidth: '75px' }}>
                {copied ? (
                  <>
                    <FaCheck className="text-xl text-green-500 transition-colors duration-300" />
                    <span className="ml-2 text-green-500">Copied</span>
                  </>
                ) : (
                  <FaClipboard className="text-xl text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-500 transition-colors duration-300" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <DocumentationSection title="API Documentation">
        <ApiEndpoint
          description="To generate a password, make a GET request to:"
          url="https://api.madsens.dev/password"
          parameters={[
            { name: 'length', description: 'The length of the password (default: 12)' },
            { name: 'includeNumbers', description: 'Whether to include numbers (true/false)' },
            { name: 'includeSpecialChars', description: 'Whether to include special characters (true/false)' },
            { name: 'includeUppercase', description: 'Whether to include uppercase letters (true/false)' },
          ]}
          example="https://api.madsens.dev/password?length=12&includeNumbers=true&includeSpecialChars=true&includeUppercase=true"
          responseExample={`{
            "password": "aB3$eFgH"
          }`}
        />
      </DocumentationSection>
    </Container>
  );
};

export default PasswordGenerator;