import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import CV from './pages/CV';
import Publications from './pages/Publications';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </Router>
  );
};

export default App;
