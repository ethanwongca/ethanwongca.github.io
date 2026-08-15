import React from 'react';

// Shown while a lazy-loaded route chunk (Hobbies/SideQuestDetail, which pull
// in the ~750KB world map data) is still downloading, so navigating there
// doesn't look like a blank/broken page for a moment.
const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gray-50 md:ml-[280px] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-sm text-gray-400">Loading…</p>
    </div>
  </div>
);

export default PageLoader;
