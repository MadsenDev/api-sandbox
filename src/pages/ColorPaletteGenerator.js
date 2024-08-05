import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';
import SelectInput from '../components/SelectInput';
import Button from '../components/Button';
import Container from '../components/Container';
import Header from '../components/Header';
import DocumentationSection from '../components/documentation/DocumentationSection';
import ApiEndpoint from '../components/documentation/ApiEndpoint';

const ColorPaletteGenerator = () => {
  const [numColors, setNumColors] = useState(5);
  const [baseColor, setBaseColor] = useState('#3498db');
  const [scheme, setScheme] = useState('complementary');
  const [palette, setPalette] = useState([]);

  const generatePalette = async () => {
    const response = await axios.get(`https://api.madsens.dev/color-palette`, {
      params: {
        numColors,
        baseColor,
        scheme,
      },
    });
    setPalette(response.data.palette);
  };

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Header title="Color Palette Generator" />
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormInput
              label="Number of Colors"
              type="number"
              value={numColors}
              onChange={(e) => setNumColors(e.target.value)}
            />
            <FormInput
              label="Base Color"
              type="color"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              className={'min-h-10'}
            />
            <SelectInput
              label="Scheme"
              value={scheme}
              onChange={(e) => setScheme(e.target.value)}
              options={[
                { label: 'Analogous', value: 'analogous' },
                { label: 'Complementary', value: 'complementary' },
                { label: 'Triadic', value: 'triadic' },
                { label: 'Monochromatic', value: 'monochromatic' },
              ]}
            />
          </div>
          <Button onClick={generatePalette}>Generate Palette</Button>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {palette.map((color, index) => (
            <div
              key={index}
              className="h-16 border border-gray-300 rounded"
              style={{ backgroundColor: color }}
            >
              <span className="block text-center text-white pt-4">{color}</span>
            </div>
          ))}
        </div>
      </div>
      <DocumentationSection title="API Documentation">
        <ApiEndpoint
          description="To generate a color palette, make a GET request to:"
          url="https://api.madsens.dev/color-palette"
          parameters={[
            { name: 'numColors', description: 'The number of colors in the palette (default: 5)' },
            { name: 'baseColor', description: 'The base color for the palette (default: #3498db)' },
            { name: 'scheme', description: 'The color scheme to use (analogous, complementary, triadic, monochromatic)' },
          ]}
          example="https://api.madsens.dev/color-palette?numColors=5&baseColor=%233498db&scheme=complementary"
          responseExample={`{
  "palette": [
    "#3498db",
    "#db3349",
    "#34db8f",
    "#dbda34",
    "#8a34db"
  ]
}`}
        />
      </DocumentationSection>
    </Container>
  );
};

export default ColorPaletteGenerator;