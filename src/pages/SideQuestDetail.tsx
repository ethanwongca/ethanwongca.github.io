import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaTools } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import WorldMap from '../components/WorldMap';

const TITLES: Record<string, string> = {
  travel: 'Travel',
  running: 'Running',
  soccer: 'Soccer',
  ultimate: 'Ultimate',
  taekwondo: 'Taekwondo',
  drawing: 'Drawing',
  woodworking: 'Woodworking',
  cinema: 'Cinema & Acting',
};

const UnderConstruction: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-24 text-gray-300">
    <FaTools size={52} className="mb-4" />
    <p className="text-lg italic">Under construction</p>
  </div>
);

const SideQuestDetail: React.FC = () => {
  const { topic = '' } = useParams<{ topic: string }>();
  const title = TITLES[topic];

  return (
    <div className="min-h-screen bg-gray-50 md:ml-[280px]">
      <Sidebar />

      {/* No banner here — it's a quick detail page, doesn't need the animation */}
      <div className="px-6 md:px-12 pt-8 md:pt-10">
        <Link to="/side-quests" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-2">
          <FaArrowLeft size={12} />
          Side Quests
        </Link>
        <h1 className="text-4xl font-bold text-gray-900">{title ?? 'Not found'}</h1>
      </div>

      {/* Main content */}
      <div className="px-6 md:px-12 pt-6 pb-24 md:pb-12">
        <div className="max-w-4xl">
          {!title && <p className="text-gray-500">That side quest doesn't exist.</p>}
          {topic === 'travel' && (
            <>
              <p className="text-base text-gray-500 mb-4">34 countries visited so far.</p>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <WorldMap />
              </div>
            </>
          )}
          {title && topic !== 'travel' && <UnderConstruction />}
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default SideQuestDetail;
