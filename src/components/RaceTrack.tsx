import React, { useEffect, useRef, useState } from 'react';
import { GiRunningShoe, GiFinishLine, GiMedal } from 'react-icons/gi';

const ROUTE_PATH = 'M 40 170 C 160 60, 260 190, 380 110 S 620 40, 760 70';
const MARKER_FRACTIONS = [0.2, 0.4, 0.6, 0.8];
const MARKER_LABELS = ['5K', '10K', '15K', '20K'];

interface Point {
  x: number;
  y: number;
}

// Markers are read directly off the rendered path's own geometry (via
// getPointAtLength) rather than eyeballed by hand, so they always sit
// exactly on the line no matter how the curve is tweaked.
const RaceTrack: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [markers, setMarkers] = useState<Point[]>([]);
  const [start, setStart] = useState<Point | null>(null);
  const [finish, setFinish] = useState<Point | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    setMarkers(MARKER_FRACTIONS.map((f) => path.getPointAtLength(f * total)));
    setStart(path.getPointAtLength(0));
    setFinish(path.getPointAtLength(total));
  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <svg viewBox="0 0 800 220" className="w-full h-auto" role="img" aria-label="Stylized race route with distance markers">
        <path d={ROUTE_PATH} fill="none" stroke="#e5e7eb" strokeWidth={14} strokeLinecap="round" />
        <path ref={pathRef} id="race-route" d={ROUTE_PATH} fill="none" stroke="#2563eb" strokeWidth={3} strokeLinecap="round" />

        {start && (
          <>
            <circle cx={start.x} cy={start.y} r={7} fill="#16a34a" stroke="#ffffff" strokeWidth={2} />
            <text x={start.x} y={start.y + 26} textAnchor="middle" fontSize={13} fontWeight={700} fill="#4b5563">
              START
            </text>
          </>
        )}

        {markers.map((m, i) => (
          <g key={MARKER_LABELS[i]}>
            <circle cx={m.x} cy={m.y} r={5} fill="#ffffff" stroke="#2563eb" strokeWidth={2.5} />
            <text x={m.x} y={m.y - 14} textAnchor="middle" fontSize={12} fontWeight={700} fill="#9ca3af">
              {MARKER_LABELS[i]}
            </text>
          </g>
        ))}

        {finish && (
          <>
            <circle cx={finish.x} cy={finish.y} r={7} fill="#dc2626" stroke="#ffffff" strokeWidth={2} />
            <text x={finish.x} y={finish.y + 26} textAnchor="middle" fontSize={13} fontWeight={700} fill="#4b5563">
              FINISH
            </text>
          </>
        )}

        {/* A runner looping the route — glued to the exact same path via
            mpath, so it can never drift off the line. */}
        <text fontSize={22} textAnchor="middle" dominantBaseline="central">
          🏃
          <animateMotion dur="7s" repeatCount="indefinite">
            <mpath href="#race-route" />
          </animateMotion>
        </text>
      </svg>

      <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center mt-2 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-gray-600">
          <GiRunningShoe size={22} className="text-blue-600 flex-shrink-0" />
          <span className="font-semibold">5 half-marathons</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <GiFinishLine size={22} className="text-blue-600 flex-shrink-0" />
          <span className="font-semibold">1 full marathon incoming</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <GiMedal size={22} className="text-blue-600 flex-shrink-0" />
          <span className="font-semibold">Chasing the next PR</span>
        </div>
      </div>
    </div>
  );
};

export default RaceTrack;
