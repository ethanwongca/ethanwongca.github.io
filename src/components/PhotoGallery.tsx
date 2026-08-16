import React, { useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { TRAVEL_LOCATIONS } from '../data/travelLocations';

type Folder = 'travel' | 'running' | 'fun-eats';

// Each context call needs a literal path (webpack resolves it at build
// time), so one call per folder rather than a dynamic path — drop a photo
// into src/assets/<folder>/ and it shows up here with no code change.
const travelCtx = require.context('../assets/travel', false, /\.(png|jpe?g|webp)$/i);
const runningCtx = require.context('../assets/running', false, /\.(png|jpe?g|webp)$/i);
const funEatsCtx = require.context('../assets/fun-eats', false, /\.(png|jpe?g|webp)$/i);

const CONTEXTS: Record<Folder, RequireContext> = {
  travel: travelCtx,
  running: runningCtx,
  'fun-eats': funEatsCtx,
};

// Caption per photo, keyed by filename (no extension) — travel captions
// come from the shared location data so the gallery and the map never fall
// out of sync. Add a new photo's location to travelLocations.ts and both
// pick it up automatically.
const CAPTIONS: Partial<Record<Folder, Record<string, string>>> = {
  travel: Object.fromEntries(TRAVEL_LOCATIONS.map((loc) => [loc.id, loc.caption])),
  running: {
    'half-marathon-1': 'Beneva Vancouver Half Marathon',
    'some-other-half-marathon': 'BMO Vancouver Half Marathon',
    'some-other-run': 'Scotiabank Vancouver Half Marathon',
  },
};

interface Photo {
  src: string;
  caption?: string;
}

const loadPhotos = (folder: Folder): Photo[] => {
  const ctx = CONTEXTS[folder];
  const captions = CAPTIONS[folder];
  return ctx
    .keys()
    .sort()
    .map((key) => {
      const name = key.replace(/^\.\//, '').replace(/\.[^.]+$/, '');
      return { src: ctx(key), caption: captions?.[name] };
    });
};

// Deterministic per-index tilt so polaroids look hand-scattered without
// reshuffling on every re-render.
const TILTS = [-6, 4, -3, 7, -5, 2, -7, 5, -4, 6];

// A small movement threshold below which a pointerdown+up counts as a
// stray click rather than a drag — keeps a tap on mobile from feeling like
// it accidentally nudged the photo.
const DRAG_THRESHOLD_PX = 3;

const DraggablePhoto: React.FC<{
  src: string;
  caption?: string;
  rotation: number;
  zIndex: number;
  onFocus: () => void;
}> = ({ src, caption, rotation, zIndex, onFocus }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);

  return (
    <div
      className="select-none"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, touchAction: 'none', zIndex }}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        onFocus();
        drag.current = { startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y };
      }}
      onPointerMove={(e) => {
        if (!drag.current) return;
        const { startX, startY, origX, origY } = drag.current;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (!dragging && Math.hypot(dx, dy) > DRAG_THRESHOLD_PX) setDragging(true);
        setPos({ x: origX + dx, y: origY + dy });
      }}
      onPointerUp={() => {
        drag.current = null;
        setDragging(false);
      }}
    >
      <div
        className="bg-white p-3 pb-4 shadow-md rounded-sm w-48"
        style={{
          transform: `rotate(${rotation}deg) scale(${dragging ? 1.08 : 1})`,
          cursor: dragging ? 'grabbing' : 'grab',
          boxShadow: dragging ? '0 18px 26px -8px rgb(0 0 0 / 0.35)' : undefined,
          transition: dragging ? 'none' : 'transform 150ms ease-out, box-shadow 150ms ease-out',
        }}
      >
        <img src={src} alt={caption ?? ''} className="w-full h-44 object-cover" draggable={false} />
        <p className="text-center text-sm text-gray-500 italic mt-2 h-5 truncate px-1">{caption}</p>
      </div>
    </div>
  );
};

interface PhotoGalleryProps {
  folder: Folder;
  emptyLabel?: string;
  /** Render only every other photo — lets a folder's photos be split into
   * two groups (e.g. some above a map, some below) so it's obvious there's
   * a gallery here without scrolling past a wall of photos first. */
  only?: 'even' | 'odd';
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ folder, emptyLabel = 'Photos coming soon', only }) => {
  const allPhotos = loadPhotos(folder);
  const photos = only ? allPhotos.filter((_, i) => (i % 2 === 0) === (only === 'even')) : allPhotos;
  const [topSrc, setTopSrc] = useState<string | null>(null);

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 border-2 border-dashed border-gray-200 rounded-xl text-gray-300">
        <FaCamera size={36} />
        <p className="text-base italic">{emptyLabel}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center py-6">
      {photos.map((photo, i) => (
        <DraggablePhoto
          key={photo.src}
          src={photo.src}
          caption={photo.caption}
          rotation={TILTS[i % TILTS.length]}
          zIndex={topSrc === photo.src ? 10 : 1}
          onFocus={() => setTopSrc(photo.src)}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
