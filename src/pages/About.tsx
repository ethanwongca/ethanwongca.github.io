import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import amazonLogo from '../assets/amazon.jpg';
import eaLogo from '../assets/ea.svg';
import ubcLogo from '../assets/ubc.png';
import unLogo from '../assets/un.png';
import utorontoLogo from '../assets/utoronto.png';

const updates = [
  { date: 'September 2026', text: 'Joining the Cognitive Lexicon Lab at the University of Toronto', active: true },
  { date: 'May 2026', text: 'Starting as an AI Engineer at Electronic Arts', active: false },
  { date: 'July 2025', text: 'Ended Internship at Amazon SCOT Forecasting', active: false },
];

const partnerLogos = [
  { src: utorontoLogo, alt: 'University of Toronto' },
  { src: eaLogo, alt: 'Electronic Arts' },
  { src: amazonLogo, alt: 'Amazon' },
  { src: unLogo, alt: 'United Nations' },
  { src: ubcLogo, alt: 'UBC' },
];

const phrases = [
  'LLM research opportunities',
  'AI engineering roles',
  'ML research collaborations',
  'impactful NLP projects',
];

const TypewriterText: React.FC = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx]);

  return (
    <div className="flex items-center gap-2 text-base text-gray-500 mb-6 font-mono">
      <span className="text-blue-400">&gt;</span>
      <span>Looking for </span>
      <span className="text-blue-600 font-semibold">{displayed}</span>
      <span className="animate-pulse text-blue-400">|</span>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-12 overflow-y-auto">
        {/* Name */}
        <h1 className="text-5xl font-bold text-gray-900 mb-3">Ethan Parker Wong</h1>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-lg mb-4">
          <FaMapMarkerAlt className="mr-1.5" size={16} />
          <span>Vancouver, BC</span>
        </div>

        {/* Typewriter */}
        <TypewriterText />

        {/* Bio */}
        <p className="text-2xl leading-relaxed text-gray-700 mb-7 max-w-4xl">
          MSc Candidate at the <strong>University of Toronto</strong>, researching culture and
          LLMs. Currently, <strong>AI Engineer at Electronic Arts</strong>. Previously worked at{' '}
          <strong>Amazon</strong> and the <strong>United Nations</strong>.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-sm uppercase tracking-wide">
            AI Engineer Intern @ EA
          </span>
          <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-sm uppercase tracking-wide">
            MSc Candidate @ UofT
          </span>
          <span className="bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-sm uppercase tracking-wide">
            Former Amazon Intern
          </span>
        </div>

        {/* Recent Updates */}
        <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-5">
          Recent Updates
        </h3>
        <div className="space-y-6 mb-12">
          {updates.map((update, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div
                className={`mt-2 w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                  idx === 0 ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  {update.date}
                </p>
                <p className="text-base text-gray-700">{update.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience & Education */}
        <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-6">
          Experience &amp; Education
        </h3>
        <div className="flex items-center gap-10">
          {partnerLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain opacity-50 grayscale"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
