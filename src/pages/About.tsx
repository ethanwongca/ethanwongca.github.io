import React from 'react';
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import PageHeader from '../components/PageHeader';
import headshot from '../assets/headshot.jpg';
import amazonLogo from '../assets/amazon.jpg';
import eaLogo from '../assets/ea.svg';
import ubcLogo from '../assets/ubc.png';
import unLogo from '../assets/un.png';
import utorontoLogo from '../assets/utoronto.png';

const updates = [
  { date: 'September 2026', text: 'Joining the Cognitive Lexicon Lab at the University of Toronto', active: true },
  { date: 'May 2026', text: 'Starting as an AI Engineer at Electronic Arts', active: false },
  { date: 'May 2026', text: 'Graduated from the University of British Columbia', active: false },
];

const partnerLogos = [
  { src: utorontoLogo, alt: 'University of Toronto', url: 'https://web.cs.toronto.edu/' },
  { src: eaLogo, alt: 'Electronic Arts', url: 'https://www.ea.com/en-ca/careers/teams/technology' },
  { src: amazonLogo, alt: 'Amazon', url: 'https://www.amazon.science/tag/supply-chain-optimization-technologies' },
  { src: unLogo, alt: 'United Nations', url: 'https://unite.un.org/en' },
  { src: ubcLogo, alt: 'UBC', url: 'https://www.cs.ubc.ca/' },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 md:ml-[280px]">
      <Sidebar />

      {/* Cover banner – full width, no box, fades into the page below */}
      <PageHeader />

      {/* Name – directly underneath the banner, hidden on mobile since it's
          in the profile header below */}
      <div className="hidden md:block px-12 pt-4">
        <h1 className="text-6xl font-bold text-gray-900">Ethan Parker Wong</h1>
      </div>

      {/* Mobile profile header – avatar overlaps the banner's bottom edge */}
      <div className="md:hidden bg-white border-b border-gray-200 px-6 pb-6 text-center">
        <img
          src={headshot}
          alt="Ethan Wong"
          className="w-28 h-28 rounded-full object-cover mx-auto -mt-14 mb-4 shadow-md ring-4 ring-white relative z-10"
        />
        <h2 className="font-bold text-xl text-gray-800">Ethan Wong</h2>
        <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
          ML Engineer and Researcher
        </p>
        <p className="flex items-center justify-center gap-1.5 text-base text-gray-400 mt-1.5 mb-4">
          <FaMapMarkerAlt size={16} />
          <span>Toronto, ON</span>
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
      <div className="px-6 md:px-12 pt-6 pb-24 md:pb-12">
        {/* Location – hidden on mobile since it's in the profile header */}
        <p className="hidden md:flex items-center gap-2 text-lg text-gray-500 mb-5 font-medium">
          <FaMapMarkerAlt size={20} />
          <span>Toronto, ON</span>
        </p>

        {/* Bio */}
        <p className="text-base md:text-2xl leading-relaxed text-gray-700 mb-7 max-w-4xl">
          MSc Candidate at the <strong>University of Toronto</strong>, researching culture and
          LLMs. Previously worked as an AI Engineer at <strong>Electronic Arts</strong>, BI Engineer at <strong>Amazon</strong>, and an AI Fellow at the <strong>United Nations</strong>.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
          <span className="bg-green-100 text-green-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-sm uppercase tracking-wide">
            Prev AI Engineer Intern @ EA
          </span>
          <span className="bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-sm uppercase tracking-wide">
            MSc Candidate @ UofT
          </span>
          <span className="bg-orange-100 text-orange-700 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-sm uppercase tracking-wide">
            Prev BI Engineer Intern @ Amazon
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
            <a key={logo.alt} href={logo.url} target="_blank" rel="noreferrer">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default About;
