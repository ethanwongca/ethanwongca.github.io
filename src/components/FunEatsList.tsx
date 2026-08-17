import React, { useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';

interface CitySection {
  city: string;
  spots: string[];
}

const SECTIONS: CitySection[] = [
  {
    city: 'Toronto',
    spots: ['Pai', 'Found Coffee', 'Bar Isabel', 'Miss Fu in Chengdu', 'Mizzica Gelato', 'DaiLo'],
  },
  {
    city: 'Vancouver',
    spots: ['East is East', 'Nightingale', 'John 3:16', 'Anh and Chi', 'Fat Mao', 'Phnom Penh'],
  },
  {
    city: 'Montreal',
    spots: ['St-Viateur Bagel', 'Bouillon Bilk', "Schwartz's Deli", 'Monarque', 'Campo Poulet Portugais'],
  },
];

const CARD_FACE_STYLE: React.CSSProperties = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
};

// A two-sided menu card that fills the page: a plain cover on the front,
// the actual recommendations on the back, flipped with a real 3D rotation
// rather than a slide or a fade.
const FunEatsList: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{ perspective: '2400px' }} className="w-full">
      <div
        className="relative w-full cursor-pointer min-h-[72vh] md:min-h-[78vh]"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 700ms cubic-bezier(0.4, 0.1, 0.2, 1)',
        }}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-label="Flip menu"
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFlipped((f) => !f)}
      >
        {/* Front: cover */}
        <div
          className="absolute inset-0 bg-[#fbf6ea] border-4 border-double border-gray-800 rounded-sm shadow-xl flex flex-col items-center justify-center text-center px-4 sm:px-8"
          style={CARD_FACE_STYLE}
        >
          <p className="font-lora italic text-gray-400 text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">
            Food, Coffee &amp; Etc.
          </p>
          <h3 className="font-playfair font-black text-4xl sm:text-6xl md:text-8xl text-gray-900 leading-tight break-words">
            Recs
            <br />
            by Me!
          </h3>
          <div className="w-24 h-px bg-gray-400 my-6 sm:my-8" />
          <p className="font-lora italic text-gray-500 text-base sm:text-lg md:text-xl">
            Toronto &middot; Vancouver &middot; Montreal
          </p>
          <p className="font-lora text-gray-400 text-xs sm:text-sm mt-10 sm:mt-14 flex items-center gap-2">
            <FaSyncAlt size={13} />
            Tap to open
          </p>
        </div>

        {/* Back: the actual menu */}
        <div
          className="absolute inset-0 bg-[#fbf6ea] border-4 border-double border-gray-800 rounded-sm shadow-xl px-4 py-8 sm:px-8 sm:py-10 md:px-16 md:py-12 overflow-y-auto"
          style={{ ...CARD_FACE_STYLE, transform: 'rotateY(180deg)' }}
        >
          <p className="font-lora text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 flex items-center gap-2">
            <FaSyncAlt size={13} />
            Tap to flip back
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {SECTIONS.map((section) => (
              <div key={section.city}>
                <h4 className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900">{section.city}</h4>
                <div className="w-12 h-px bg-gray-400 my-3 sm:my-4" />
                <ul className="space-y-2 sm:space-y-3">
                  {section.spots.map((spot) => (
                    <li key={spot} className="font-lora text-base sm:text-lg md:text-xl text-gray-700 flex items-baseline gap-2">
                      <span className="text-gray-400 text-xs">&#9670;</span>
                      {spot}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunEatsList;
