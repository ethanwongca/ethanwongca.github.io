import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaBriefcase, FaRegFileAlt } from 'react-icons/fa';

const tabClass = ({ isActive }: { isActive: boolean }) =>
  `flex flex-col items-center gap-0.5 px-4 py-2 text-xs font-medium transition-colors ${
    isActive ? 'text-blue-600' : 'text-gray-400'
  }`;

const MobileNav: React.FC = () => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around z-50">
    <NavLink to="/" end className={tabClass}>
      <FaUser size={18} />
      <span>Overview</span>
    </NavLink>
    <NavLink to="/cv" className={tabClass}>
      <FaBriefcase size={18} />
      <span>Experience</span>
    </NavLink>
    <NavLink to="/publications" className={tabClass}>
      <FaRegFileAlt size={18} />
      <span>Publications</span>
    </NavLink>
  </nav>
);

export default MobileNav;
