import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';
import SelectInput from '../components/SelectInput';
import Button from '../components/Button';
import Container from '../components/Container';
import Header from '../components/Header';
import DocumentationSection from '../components/documentation/DocumentationSection';
import ApiEndpoint from '../components/documentation/ApiEndpoint';

const DinnerSuggestion = () => {
  const [cuisine, setCuisine] = useState('');
  const [dietary, setDietary] = useState('');
  const [suggestion, setSuggestion] = useState(null);
  const [options, setOptions] = useState({ cuisines: [], dietaryPreferences: [] });

  useEffect(() => {
    const fetchOptions = async () => {
      const response = await axios.get('https://api.madsens.dev/dinner-suggestion/options');
      setOptions(response.data);
    };

    fetchOptions();
  }, []);

  const fetchSuggestion = async () => {
    const response = await axios.get('https://api.madsens.dev/dinner-suggestion', {
      params: { cuisine, dietary },
    });
    setSuggestion(response.data);
  };

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Header title="Dinner Suggestion" />
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8">
          <SelectInput
            label="Cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            options={[
              { label: 'Any', value: '' },
              ...options.cuisines.map(cuisine => ({ label: cuisine, value: cuisine })),
            ]}
          />
          <SelectInput
            label="Dietary Preference"
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
            options={[
              { label: 'Any', value: '' },
              ...options.dietaryPreferences.map(dietary => ({ label: dietary, value: dietary })),
            ]}
          />
          <Button onClick={fetchSuggestion}>Get Suggestion</Button>
          {suggestion && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded text-gray-700">
              <h3 className="text-xl font-bold">{suggestion.name}</h3>
              <p><strong>Cuisine:</strong> {suggestion.cuisine}</p>
              <p><strong>Dietary Preference:</strong> {suggestion.dietary}</p>
              <p><strong>Ingredients:</strong> {suggestion.ingredients.join(', ')}</p>
            </div>
          )}
        </div>
      </div>
      <DocumentationSection title="API Documentation">
        <ApiEndpoint
          description="To get a dinner suggestion, make a GET request to:"
          url="https://api.madsens.dev/dinner-suggestion"
          parameters={[
            { name: 'cuisine', description: 'The type of cuisine (optional)' },
            { name: 'dietary', description: 'The dietary preference (optional)' },
          ]}
          example="https://api.madsens.dev/dinner-suggestion?cuisine=Italian&dietary=Vegetarian"
          responseExample={`{
  "name": "Margherita Pizza",
  "cuisine": "Italian",
  "dietary": "Vegetarian",
  "ingredients": ["pizza dough", "tomato", "cheese", "basil"]
}`}
        />
        <ApiEndpoint
          description="To get the available options for cuisines and dietary preferences, make a GET request to:"
          url="https://api.madsens.dev/dinner-suggestion/options"
          parameters={[]}
          example="https://api.madsens.dev/dinner-suggestion/options"
          responseExample={`{
  "cuisines": ["Italian", "Chinese", "Mexican", "Mediterranean"],
  "dietaryPreferences": ["Vegetarian", "Non-Vegetarian", "Vegan"]
}`}
        />
      </DocumentationSection>
    </Container>
  );
};

export default DinnerSuggestion;