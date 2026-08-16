import React from 'react';
import { NavLink } from 'react-router-dom';
import headshot from '../assets/headshot.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { NAV_ITEMS } from '../data/navItems';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
    isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
  }`;

const Sidebar: React.FC = () => (
  <div
    className="hidden md:flex fixed bg-white flex-col p-8 overflow-y-auto"
    style={{ width: '280px', height: '100vh', left: '0', top: '0' }}
  >
    {/* Profile */}
    <div className="text-center mb-6">
      <img src={headshot} alt="Ethan Wong" className="w-40 h-40 rounded-lg mx-auto mb-4 object-cover" />
      <h2 className="font-bold text-xl text-gray-800">Ethan Wong</h2>
      <p className="text-sm text-gray-400 mt-1">ML Engineer and Researcher</p>
    </div>

    {/* Navigation */}
    <nav className="flex-1 space-y-1">
      {NAV_ITEMS.map(({ to, end, label }) => (
        <NavLink key={to} to={to} end={end} className={navLinkClass}>
          {label}
        </NavLink>
      ))}
    </nav>

    {/* Social icons */}
    <div className="flex justify-center space-x-5 text-gray-400 pt-6">
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
);

export default Sidebar;
