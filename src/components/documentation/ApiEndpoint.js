import React from 'react';

const ApiEndpoint = ({ description, url, parameters, example }) => (
  <div>
    <p className="mb-4 text-lg">{description}</p>
    <pre className="bg-gray-200 dark:bg-gray-900 text-gradient p-4 rounded mb-6 overflow-x-auto custom-scrollbar">
      <code className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        {url}
      </code>
    </pre>
    <p className="mb-4 text-xl font-bold">Query Parameters</p>
    <dl className="mb-6 pl-5 space-y-4">
      {parameters.map(param => (
        <div key={param.name}>
          <dt className="font-semibold text-gray-900 dark:text-white">{param.name}</dt>
          <dd className="ml-4 text-gray-700 dark:text-gray-300">{param.description}</dd>
        </div>
      ))}
    </dl>
    <p className="mb-4 text-lg">Example:</p>
    <pre className="bg-gray-200 dark:bg-gray-900 text-gradient p-4 rounded overflow-x-auto custom-scrollbar">
      <code className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        {example}
      </code>
    </pre>
  </div>
);

export default ApiEndpoint;