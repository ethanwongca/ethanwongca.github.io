import React from 'react';
import { NavLink } from 'react-router-dom';
import headshot from '../assets/headshot.jpg';
import {
  FaLinkedin,
  FaGithub,
  FaUser,
  FaBriefcase,
  FaRegFileAlt,
  FaChalkboardTeacher,
  FaPuzzlePiece,
} from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const navItems = [
  { to: '/', end: true, label: 'Overview', icon: FaUser },
  { to: '/experience', end: false, label: 'Experience', icon: FaBriefcase },
  { to: '/publications', end: false, label: 'Publications', icon: FaRegFileAlt },
  { to: '/teaching', end: false, label: 'Teaching', icon: FaChalkboardTeacher },
  { to: '/side-quests', end: false, label: 'Side Quests', icon: FaPuzzlePiece },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
    isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
  }`;

const Sidebar: React.FC = () => (
  <div
    className="hidden md:flex fixed bg-white border-r border-gray-200 flex-col p-8 overflow-y-auto"
    style={{ width: '280px', height: '100vh', left: '0', top: '0' }}
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
        ML Engineer and Researcher
      </p>
    </div>

    {/* Social icons */}
    <div className="flex justify-center space-x-5 text-gray-400 mb-6">
      <a href="https://www.linkedin.com/in/ethanwongca/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
        <FaLinkedin size={26} />
      </a>
      <a href="https://scholar.google.com/citations?user=ethanwongca" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
        <SiGooglescholar size={26} />
      </a>
      <a href="https://github.com/ethanwongca" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition-colors">
        <FaGithub size={26} />
      </a>
    </div>

    {/* Divider */}
    <hr className="border-gray-200 mb-6" />

    {/* Navigation */}
    <nav className="flex-1 space-y-1">
      {navItems.map(({ to, end, label, icon: Icon }) => (
        <NavLink key={to} to={to} end={end} className={navLinkClass}>
          {({ isActive }) => (
            <>
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-colors ${
                  isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}
              >
                <Icon size={15} />
              </span>
              {label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  </div>
);

export default Sidebar;
