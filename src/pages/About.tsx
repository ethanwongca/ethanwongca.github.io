import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import headshot from '../assets/headshot.jpg';
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
    <div className="flex items-center gap-2 text-base md:text-lg text-gray-500 mb-6 font-mono">
      <span className="text-blue-400">&gt;</span>
      <span>Looking for </span>
      <span className="text-blue-600 font-semibold">{displayed}</span>
      <span className="animate-pulse text-blue-400">|</span>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 md:ml-[280px]">
      <Sidebar />

      {/* Mobile profile header */}
      <div className="md:hidden bg-white border-b border-gray-200 px-6 pt-8 pb-6 text-center">
        <img
          src={headshot}
          alt="Ethan Wong"
          className="w-28 h-28 rounded-full object-cover mx-auto mb-4 shadow-md"
        />
        <h2 className="font-bold text-xl text-gray-800">Ethan Wong</h2>
        <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 mb-4">
          AI Engineer &amp; Researcher
        </p>
        <div className="flex justify-center space-x-5 text-gray-400">
          <a href="https://www.linkedin.com/in/ethanwongca/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://scholar.google.com/citations?user=ethanwongca" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
            <SiGooglescholar size={24} />
          </a>
          <a href="https://github.com/ethanwongca" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition-colors">
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6 md:p-12 pb-24 md:pb-12 min-h-screen">
        {/* Name – hidden on mobile since it's in the profile header */}
        <h1 className="hidden md:block text-6xl font-bold text-gray-900 mb-3">Ethan Parker Wong</h1>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-base md:text-2xl mb-4">
          <FaMapMarkerAlt className="mr-1.5" size={14} />
          <span>Vancouver, BC</span>
        </div>

        {/* Typewriter */}
        <TypewriterText />

        {/* Bio */}
        <p className="text-base md:text-2xl leading-relaxed text-gray-700 mb-7 max-w-4xl">
          MSc Candidate at the <strong>University of Toronto</strong>, researching culture and
          LLMs. Currently, an <strong>AI Engineer Intern at Electronic Arts</strong>. Previously worked at{' '}
          <strong>Amazon</strong> and the <strong>United Nations</strong>.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
          <span className="bg-green-100 text-green-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-sm uppercase tracking-wide">
            AI Engineer Intern @ EA
          </span>
          <span className="bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-sm uppercase tracking-wide">
            MSc Candidate @ UofT
          </span>
          <span className="bg-orange-100 text-orange-700 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-sm uppercase tracking-wide">
            Former Amazon Intern
          </span>
        </div>

        {/* Recent Updates */}
        <h3 className="text-base uppercase tracking-widest text-gray-400 font-semibold mb-5">
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
                <p className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  {update.date}
                </p>
                <p className="text-base md:text-lg text-gray-700">{update.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience & Education */}
        <h3 className="text-base uppercase tracking-widest text-gray-400 font-semibold mb-6">
          Experience &amp; Education
        </h3>
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          {partnerLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 w-auto object-contain opacity-50 grayscale"
            />
          ))}
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default About;
