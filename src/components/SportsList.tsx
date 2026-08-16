import React from 'react';

const ITEM_IDS = ['ultimate', 'soccer', 'baseball', 'snowboarding', 'rock-climbing'];

// One require.context call (webpack needs the literal path) — drop a photo
// named after one of the ids above into src/assets/sports/ and it fills
// that tile automatically; without one, it falls back to a blank
// placeholder tile.
const sportsCtx = require.context('../assets/sports', false, /\.(png|jpe?g|webp)$/i);
const PHOTOS: Record<string, string> = Object.fromEntries(
  sportsCtx.keys().map((key) => [key.replace(/^\.\//, '').replace(/\.[^.]+$/, ''), sportsCtx(key)])
);

// Just photos, filling the page in a plain grid — no frames, no rotation,
// no captions.
const SportsList: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
    {ITEM_IDS.map((id) =>
      PHOTOS[id] ? (
        <img key={id} src={PHOTOS[id]} alt="" className="w-full aspect-square object-cover rounded-md" />
      ) : (
        <div key={id} className="w-full aspect-square bg-gray-100 rounded-md" />
      )
    )}
  </div>
);

export default SportsList;
