import React from 'react';

const SelectInput = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-gray-700 dark:text-gray-300">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="mt-2 p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;