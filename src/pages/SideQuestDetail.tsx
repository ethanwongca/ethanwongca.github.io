import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import PatternHeader from '../components/PatternHeader';
import WorldMap from '../components/WorldMap';
import RaceTrack from '../components/RaceTrack';
import SportsList from '../components/SportsList';
import FunEatsList from '../components/FunEatsList';
import PhotoGallery from '../components/PhotoGallery';

const TITLES: Record<string, string> = {
  travel: 'Travel',
  running: 'Running',
  sports: 'Sports',
  'fun-eats': 'Fun Eats',
};

// Sports and Fun Eats carry their own title/masthead inside their
// components now, so no generic subtitle line for those.
const SUBTITLES: Record<string, string> = {
  running: '5 half-marathons in the books, first full marathon incoming.',
};

const SideQuestDetail: React.FC = () => {
  const { topic = '' } = useParams<{ topic: string }>();
  const title = TITLES[topic];

  // Travel gets the full page width (map + polaroids need the room) and a
  // faint canvas-grid backdrop instead of the plain gray page, so it reads
  // as an explorer's board rather than a form page with a map embedded.
  const isTravel = topic === 'travel';
  // Fun Eats' flip card is the page — no separate title above it, just the
  // back link, so the card itself can take up the rest of the screen.
  const isFunEats = topic === 'fun-eats';
  // Running and Sports are plain detail pages, so they get the same
  // cover-banner treatment as About/CV/Publications/Teaching instead of
  // just a title.
  const isRunning = topic === 'running';
  const isSports = topic === 'sports';

  return (
    <div className={`min-h-screen md:ml-[280px] ${isTravel ? 'bg-gray-50 dot-grid-bg' : 'bg-gray-50'}`}>
      <Sidebar />

      {isRunning && <PatternHeader variant="lines" accent="#f97316" bg="#fff7ed" />}
      {isSports && <PatternHeader variant="lines-cross" accent="#111827" bg="#f9fafb" />}

      <div className={`px-6 md:px-12 ${isRunning || isSports ? 'pt-4' : 'pt-8 md:pt-10'}`}>
        <Link
          to="/hobbies"
          className={`inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors ${isFunEats ? '' : 'mb-2'}`}
        >
          <FaArrowLeft size={12} />
          Hobbies
        </Link>
        {!isFunEats && <h1 className="text-4xl font-bold text-gray-900">{title ?? 'Not found'}</h1>}
      </div>

      {/* Main content */}
      <div className={`px-6 md:px-12 pb-24 md:pb-12 ${isFunEats ? 'pt-4' : 'pt-6'}`}>
        {!title && <p className="text-gray-500">That side quest doesn't exist.</p>}

        {isTravel && (
          <div className="space-y-8">
            <PhotoGallery folder="travel" only="even" emptyLabel="Polaroids coming soon" />
            <WorldMap />
            <PhotoGallery folder="travel" only="odd" emptyLabel="Polaroids coming soon" />
          </div>
        )}

        {isFunEats && <FunEatsList />}

        {title && !isTravel && !isFunEats && (
          <div className="max-w-4xl">
            {SUBTITLES[topic] && <p className="text-base text-gray-500 mb-6">{SUBTITLES[topic]}</p>}

            {topic === 'running' && (
              <div className="space-y-8">
                <RaceTrack />
                <PhotoGallery folder="running" emptyLabel="Race photos coming soon" />
              </div>
            )}

            {topic === 'sports' && <SportsList />}
          </div>
        )}
      </div>
      <MobileNav />
    </div>
  );
};

export default SideQuestDetail;
