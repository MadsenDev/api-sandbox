import React from 'react';

const FormInput = ({ label, type, value, onChange, className }) => (
    <div className={`mb-4 ${className}`}>
        <label className="block text-gray-700 dark:text-gray-300">{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            className={`mt-2 p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 ${className}`}
        />
    </div>
);

export default FormInput;
