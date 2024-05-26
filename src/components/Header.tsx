import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">Ethan Parker Wong</div>
        <div className="flex space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-400"}
          >
            About
          </NavLink>
          <NavLink 
            to="/cv" 
            className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-400"}
          >
            CV
          </NavLink>
          <NavLink 
            to="/publications" 
            className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-400"}
          >
            Publications
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-400"}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/socials" 
            className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-400"}
          >
            Socials
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
