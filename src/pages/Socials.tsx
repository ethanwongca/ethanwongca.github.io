import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle, FaEnvelope } from 'react-icons/fa';

const Socials: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Socials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="mailto:ethanwongca@gmail.com" className="block bg-white shadow rounded-lg p-4 hover:shadow-md">
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-black w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Email</h2>
          </div>
          <p className="text-gray-700">ethanwongca@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/ethanwongca/" className="block bg-white shadow rounded-lg p-4 hover:shadow-md">
          <div className="flex items-center mb-2">
            <FaLinkedin className="text-black w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">LinkedIn</h2>
          </div>
          <p className="text-gray-700">Ethan Parker Wong</p>
        </a>
        <a href="https://github.com/ethanwongca" className="block bg-white shadow rounded-lg p-4 hover:shadow-md">
          <div className="flex items-center mb-2">
            <FaGithub className="text-black w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">GitHub</h2>
          </div>
          <p className="text-gray-700">ethanwongca</p>
        </a>
        <a href="https://scholar.google.ca/citations?user=6uV1dXIAAAAJ&hl=en&oi=sra" className="block bg-white shadow rounded-lg p-4 hover:shadow-md">
          <div className="flex items-center mb-2">
            <FaGoogle className="text-black w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Google Scholar</h2>
          </div>
          <p className="text-gray-700">Ethan Parker Wong</p>
        </a>
      </div>
    </div>
  );
};

export default Socials;
