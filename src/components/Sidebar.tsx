import React from 'react';
import { NavLink } from 'react-router-dom';
import headshot from '../assets/headshot.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
    isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
  }`;

const Sidebar: React.FC = () => (
  <div
    className="bg-white border-r border-gray-200 flex flex-col p-8 flex-shrink-0"
    style={{ width: '280px', minHeight: '100vh' }}
  >
    {/* Profile */}
    <div className="text-center mb-6">
      <img
        src={headshot}
        alt="Ethan Wong"
        className="w-36 h-36 rounded-full object-cover mx-auto mb-4 shadow-md"
      />
      <h2 className="font-bold text-xl text-gray-800">Ethan Wong</h2>
      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
        AI Engineer &amp; Researcher
      </p>
    </div>

    {/* Social icons */}
    <div className="flex justify-center space-x-5 text-gray-400 mb-6">
      <a href="https://www.linkedin.com/in/ethanwongca/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
        <FaLinkedin size={22} />
      </a>
      <a href="https://scholar.google.com/citations?user=ethanwongca" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
        <SiGooglescholar size={22} />
      </a>
      <a href="https://github.com/ethanwongca" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition-colors">
        <FaGithub size={22} />
      </a>
    </div>

    {/* Divider */}
    <hr className="border-gray-200 mb-6" />

    {/* Navigation */}
    <nav className="flex-1 space-y-1">
      <NavLink to="/" end className={navLinkClass}>Overview</NavLink>
      <NavLink to="/cv" className={navLinkClass}>Experience</NavLink>
      <NavLink to="/publications" className={navLinkClass}>Publications</NavLink>
    </nav>
  </div>
);

export default Sidebar;
