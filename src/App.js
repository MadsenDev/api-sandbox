import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import PasswordGenerator from './pages/PasswordGenerator';
import ColorPaletteGenerator from './pages/ColorPaletteGenerator';
import DinnerSuggestion from './pages/DinnerSuggestion';
import Examples from './pages/Examples';
import Contact from './pages/Contact';
import Support from './pages/Support';
import TutorialsPasswordGenerator from './pages/tutorials/PasswordGenerator';

function App() {
  return (
    <Router>
      <div className="App min-h-screen dark:bg-gray-900 dark:text-gray-300">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/color-palette" element={<ColorPaletteGenerator />} />
          <Route path="/dinner-suggestion" element={<DinnerSuggestion />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />

          <Route path="/tutorials/password-generator" element={<TutorialsPasswordGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;