import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaBriefcase, FaRegFileAlt, FaChalkboardTeacher, FaPuzzlePiece } from 'react-icons/fa';

const tabClass = ({ isActive }: { isActive: boolean }) =>
  `flex flex-col items-center gap-0.5 px-1.5 py-2 text-[10px] font-medium transition-colors ${
    isActive ? 'text-blue-600' : 'text-gray-400'
  }`;

const MobileNav: React.FC = () => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around z-50">
    <NavLink to="/" end className={tabClass}>
      <FaUser size={16} />
      <span>Overview</span>
    </NavLink>
    <NavLink to="/experience" className={tabClass}>
      <FaBriefcase size={16} />
      <span>Experience</span>
    </NavLink>
    <NavLink to="/publications" className={tabClass}>
      <FaRegFileAlt size={16} />
      <span>Publications</span>
    </NavLink>
    <NavLink to="/teaching" className={tabClass}>
      <FaChalkboardTeacher size={16} />
      <span>Teaching</span>
    </NavLink>
    <NavLink to="/side-quests" className={tabClass}>
      <FaPuzzlePiece size={16} />
      <span>Side Quests</span>
    </NavLink>
  </nav>
);

export default MobileNav;
