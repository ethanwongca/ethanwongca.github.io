import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">Ethan Wong</div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">About</Link>
          <Link to="/cv" className="hover:text-gray-400">CV</Link>
          <Link to="/publications" className="hover:text-gray-400">Publications</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/socials" className="hover:text-gray-400">Socials</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
