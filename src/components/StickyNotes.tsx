import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRunning, FaFutbol, FaGlobeAmericas, FaPaintBrush, FaTheaterMasks } from 'react-icons/fa';
import { GiFrisbee, GiBlackBelt, GiHandSaw } from 'react-icons/gi';

interface QuestNote {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  color: string;
  rotation: number;
}

const NOTES: QuestNote[] = [
  { id: 'travel', label: 'Travel', sublabel: '34 countries', icon: <FaGlobeAmericas size={30} />, color: '#fef08a', rotation: -4 },
  { id: 'running', label: 'Running', sublabel: '5 halfs · 1 full incoming', icon: <FaRunning size={30} />, color: '#fed7aa', rotation: 3 },
  { id: 'soccer', label: 'Soccer', icon: <FaFutbol size={30} />, color: '#bfdbfe', rotation: -3 },
  { id: 'ultimate', label: 'Ultimate', icon: <GiFrisbee size={30} />, color: '#bbf7d0', rotation: 4 },
  { id: 'taekwondo', label: 'Taekwondo', sublabel: 'Black Belt', icon: <GiBlackBelt size={30} />, color: '#fbcfe8', rotation: -2 },
  { id: 'drawing', label: 'Drawing', icon: <FaPaintBrush size={30} />, color: '#ddd6fe', rotation: 4 },
  { id: 'woodworking', label: 'Woodworking', icon: <GiHandSaw size={30} />, color: '#fecaca', rotation: -3 },
  { id: 'cinema', label: 'Cinema & Acting', icon: <FaTheaterMasks size={30} />, color: '#a5f3fc', rotation: 2 },
];

// A small movement threshold below which a pointerdown+up counts as a click
// (navigate) rather than a drag (rearrange) — otherwise every drag would
// also fire a navigation on release.
const CLICK_THRESHOLD_PX = 6;
const ZOOM_TRANSITION_MS = 350;

const StickyNote: React.FC<{ note: QuestNote; index: number; zIndex: number; onFocus: () => void }> = ({
  note,
  index,
  zIndex,
  onFocus,
}) => {
  const navigate = useNavigate();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [zooming, setZooming] = useState(false);
  const drag = useRef<{ startX: number; startY: number; origX: number; origY: number; moved: boolean } | null>(null);

  // The idle wobble animates the standalone `rotate` property (not the
  // `transform` shorthand), so it can run independently of the drag
  // position below and the hover/zoom scale, with no fighting over which
  // one "wins" the transform.
  const scale = zooming ? 8 : dragging ? 1.12 : hovering ? 1.08 : 1;

  return (
    <div
      className="select-none"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        touchAction: 'none',
        zIndex: zooming ? 50 : zIndex,
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
        if (!moved) {
          setZooming(true);
          setTimeout(() => navigate(`/side-quests/${note.id}`), ZOOM_TRANSITION_MS);
        }
      }}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      <div
        className="sticky-wobble w-52 h-52 p-5 shadow-md flex flex-col items-center justify-center text-center text-gray-800"
        style={
          {
            backgroundColor: note.color,
            scale,
            opacity: zooming ? 0 : 1,
            transition: `scale ${zooming ? ZOOM_TRANSITION_MS : 150}ms ${zooming ? 'ease-in' : 'ease-out'}, opacity ${ZOOM_TRANSITION_MS}ms ease-in`,
            cursor: dragging ? 'grabbing' : 'pointer',
            boxShadow: dragging ? '0 16px 24px -6px rgb(0 0 0 / 0.35)' : undefined,
            '--base-rotation': `${note.rotation}deg`,
            animationDelay: `${index * 0.35}s`,
            animationDuration: `${4.5 + (index % 3) * 0.6}s`,
            animationPlayState: dragging ? 'paused' : 'running',
          } as React.CSSProperties
        }
      >
        <div className="mb-2">{note.icon}</div>
        <p className="font-bold text-base">{note.label}</p>
        {note.sublabel && <p className="text-sm mt-1">{note.sublabel}</p>}
      </div>
    </div>
  );
};

// The Side Quests corkboard: each note is a theme. Drag one to rearrange it;
// click (without dragging) to zoom into that theme's own page. Positions
// reset on reload — there's no backend to persist a real visitor's layout.
const StickyNotes: React.FC = () => {
  const [topId, setTopId] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-8 justify-center py-10 px-6">
      {NOTES.map((note, index) => (
        <StickyNote
          key={note.id}
          note={note}
          index={index}
          zIndex={topId === note.id ? 10 : 1}
          onFocus={() => setTopId(note.id)}
        />
      ))}
    </div>
  );
};

export default StickyNotes;
