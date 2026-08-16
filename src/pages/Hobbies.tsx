import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import StickyNotes from '../components/StickyNotes';

const Hobbies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 md:ml-[280px]">
      <Sidebar />

      {/* Title – no banner on this page, straight to the top */}
      <div className="px-6 md:px-12 pt-8 md:pt-10">
        <h1 className="text-6xl font-bold text-gray-900">Hobbies</h1>
      </div>

      {/* Main content — a corkboard of sticky notes, one per theme. Drag a
          note to rearrange it, or click it to open that theme's page. */}
      <div className="px-6 md:px-12 pt-6 pb-24 md:pb-12">
        <div className="max-w-4xl">
          <StickyNotes />
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Hobbies;
