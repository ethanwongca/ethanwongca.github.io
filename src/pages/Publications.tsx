import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import { FaRegFileAlt } from 'react-icons/fa';

const Publications: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 md:ml-[280px]">
      <Sidebar />

      {/* Main content */}
      <div className="p-6 md:p-12 pb-24 md:pb-12 min-h-screen">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Publications</h1>
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
