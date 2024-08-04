import React from 'react';

const CheckboxInput = ({ label, checked, onChange }) => (
  <div className="flex items-center mb-4">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mr-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label className="text-gray-700 dark:text-gray-300">{label}</label>
  </div>
);

export default CheckboxInput;