import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import CV from './pages/CV';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Socials from './pages/Socials';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
