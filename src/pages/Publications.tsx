import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import PatternHeader from '../components/PatternHeader';
import { FaRegFileAlt } from 'react-icons/fa';

const Publications: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 md:ml-[280px]">
      <Sidebar />

      {/* Cover banner – full width, fades into the page below */}
      <PatternHeader variant="waves" />

      {/* Title – directly underneath the banner */}
      <div className="px-6 md:px-12 pt-4">
        <h1 className="text-4xl font-bold text-gray-900">Publications</h1>
      </div>

      {/* Main content */}
      <div className="px-6 md:px-12 pt-6 pb-24 md:pb-12 min-h-screen">
        <div className="max-w-3xl">
          <p className="text-gray-400 text-base mb-10">
            A collection of peer-reviewed research, workshop papers, and chapters.
          </p>

          <div className="flex flex-col items-center justify-center py-24 text-gray-300">
            <FaRegFileAlt size={52} className="mb-4" />
            <p className="text-lg italic">Publications coming soon</p>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Publications;
