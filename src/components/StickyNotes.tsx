import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface QuestNote {
  id: string;
  label: string;
  sublabel?: string;
  color: string;
  rotation: number;
}

// Soccer, ultimate, and martial arts live under one "Sports" note (their
// own detail page still lists each separately). Drawing is dropped for now.
const NOTES: QuestNote[] = [
  { id: 'travel', label: 'Travel', sublabel: '34 countries', color: '#f59e0b', rotation: -4 },
  { id: 'running', label: 'Running', sublabel: '5 halfs · 1 full incoming', color: '#ef4444', rotation: 3 },
  { id: 'sports', label: 'Sports', color: '#ec4899', rotation: -2 },
  { id: 'fun-eats', label: 'Fun Eats', color: '#14b8a6', rotation: -3 },
];

// A small movement threshold below which a pointerdown+up counts as a click
// (navigate) rather than a drag (rearrange) — otherwise every drag would
// also fire a navigation on release.
const CLICK_THRESHOLD_PX = 6;

const StickyNote: React.FC<{ note: QuestNote; zIndex: number; onFocus: () => void }> = ({ note, zIndex, onFocus }) => {
  const navigate = useNavigate();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const drag = useRef<{ startX: number; startY: number; origX: number; origY: number; moved: boolean } | null>(null);

  const scale = dragging ? 1.1 : hovering ? 1.05 : 1;

  return (
    <div
      className="select-none"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        touchAction: 'none',
        zIndex,
      }}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        onFocus();
        setDragging(true);
        drag.current = { startX: event.clientX, startY: event.clientY, origX: pos.x, origY: pos.y, moved: false };
      }}
      onPointerMove={(event) => {
        if (!drag.current) return;
        const { startX, startY, origX, origY } = drag.current;
        const dx = event.clientX - startX;
        const dy = event.clientY - startY;
        if (Math.hypot(dx, dy) > CLICK_THRESHOLD_PX) drag.current.moved = true;
        setPos({ x: origX + dx, y: origY + dy });
      }}
      onPointerUp={() => {
        const moved = drag.current?.moved;
        drag.current = null;
        setDragging(false);
        if (moved) return;
        navigate(`/hobbies/${note.id}`);
      }}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      <div
        className="relative w-52 h-52 p-5 rounded-lg flex flex-col items-center justify-center text-center text-gray-900"
        style={{
          background: `linear-gradient(155deg, color-mix(in srgb, ${note.color} 100%, white 35%), ${note.color})`,
          transform: `rotate(${note.rotation}deg) scale(${scale})`,
          transition: 'transform 150ms ease-out',
          cursor: dragging ? 'grabbing' : 'pointer',
        }}
      >
        <p className="font-bold text-xl">{note.label}</p>
        {note.sublabel && <p className="text-base mt-1 opacity-75">{note.sublabel}</p>}
      </div>
    </div>
  );
};

// The Hobbies corkboard: each note is a theme. Drag one to rearrange it;
// click (without dragging) to open that theme's own page. Positions reset
// on reload — there's no backend to persist a real visitor's layout.
const StickyNotes: React.FC = () => {
  const [topId, setTopId] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-8 justify-center pt-2 pb-10 px-6">
      {NOTES.map((note) => (
        <StickyNote key={note.id} note={note} zIndex={topId === note.id ? 10 : 1} onFocus={() => setTopId(note.id)} />
      ))}
    </div>
  );
};

export default StickyNotes;
