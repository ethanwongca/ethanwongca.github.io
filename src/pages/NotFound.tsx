import React from 'react';
import { Link } from 'react-router-dom';
import { FaCompass } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';

const NotFound: React.FC = () => (
  <div className="min-h-screen bg-gray-50 md:ml-[280px]">
    <Sidebar />
    <div className="px-6 md:px-12 pt-8 md:pt-10 pb-24 md:pb-12">
      <h1 className="sr-only">Page not found</h1>
      <div className="flex flex-col items-center justify-center py-24 text-gray-300 text-center">
        <FaCompass size={52} className="mb-4" />
        <p className="text-lg italic mb-4">That page doesn't exist.</p>
        <Link to="/" className="text-blue-600 hover:underline text-base not-italic">
          Back to Overview
        </Link>
      </div>
    </div>
    <MobileNav />
  </div>
);

export default NotFound;
