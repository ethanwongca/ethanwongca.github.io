import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import CV from './pages/CV';
import Publications from './pages/Publications';
import Teaching from './pages/Teaching';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

// Code-split: Hobbies and SideQuestDetail both pull in world map data
// (~750KB of TopoJSON), which shouldn't be part of the bundle every other
// page has to download too.
const Hobbies = lazy(() => import('./pages/Hobbies'));
const SideQuestDetail = lazy(() => import('./pages/SideQuestDetail'));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<CV />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/side-quests" element={<Hobbies />} />
          <Route path="/side-quests/:topic" element={<SideQuestDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
