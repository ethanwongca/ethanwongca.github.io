import React from 'react';
import { Pattern } from '@visx/pattern';

interface PatternHeaderProps {
  /** Which animated visx pattern to tile across the banner. */
  variant: 'circles' | 'waves';
  className?: string;
}

const TILE = 10;
const TRAVEL = TILE * 5; // a multiple of the tile size, so the loop is seamless
const DOT_COLOR = '#60a5fa'; // blue-400
const WAVE_COLOR = '#3b82f6'; // blue-500
const BG_COLOR = '#eff6ff'; // blue-50 — same family as the site accent, distinct from the page's gray-50

// A full-bleed cover banner in the same spirit as PageHeader, but tiled with
// one of visx's SVG patterns instead of the streamgraph — used on the pages
// that don't have a hero of their own.
//
// Motion is plain CSS, not SVG SMIL (<animateTransform> on patternTransform):
// that's the technique visx's own docs demo uses, but it doesn't actually
// animate in Chromium when tested here. Instead the pattern-filled rect is
// rendered oversized and slid with a CSS transform loop — the same
// duplicate-and-translate trick StreamGraph already uses, just simpler here
// since a <pattern> tiles infinitely by construction.
const PatternHeader: React.FC<PatternHeaderProps> = ({ variant, className }) => {
  const id = `pattern-header-${variant}`;
  const isCircles = variant === 'circles';

  return (
    <div className={`relative w-full h-[6.6rem] sm:h-[8.4rem] md:h-[10.8rem] overflow-hidden ${className ?? ''}`}>
      <div
        className={isCircles ? 'pattern-drift-y' : 'pattern-drift-x'}
        style={
          isCircles
            ? { position: 'absolute', top: 0, left: 0, right: 0, height: `calc(100% + ${TRAVEL}px)` }
            : { position: 'absolute', top: 0, left: 0, bottom: 0, width: `calc(100% + ${TRAVEL}px)` }
        }
      >
        <svg width="100%" height="100%" className="block">
          <rect width="100%" height="100%" fill={BG_COLOR} />
          {isCircles ? (
            <Pattern id={id} width={TILE} height={TILE}>
              <circle cx={TILE / 2} cy={TILE / 2} r={3} fill={DOT_COLOR} />
            </Pattern>
          ) : (
            <Pattern id={id} width={TILE} height={TILE}>
              <path
                d={`M 0 ${TILE / 2} c ${TILE / 8} ${-TILE / 4}, ${(TILE * 3) / 8} ${-TILE / 4}, ${TILE / 2} 0
                    c ${TILE / 8} ${TILE / 4}, ${(TILE * 3) / 8} ${TILE / 4}, ${TILE / 2} 0
                    M ${-TILE / 2} ${TILE / 2}
                    c ${TILE / 8} ${TILE / 4}, ${(TILE * 3) / 8} ${TILE / 4}, ${TILE / 2} 0
                    M ${TILE} ${TILE / 2}
                    c ${TILE / 8} ${-TILE / 4}, ${(TILE * 3) / 8} ${-TILE / 4}, ${TILE / 2} 0`}
                fill="none"
                stroke={WAVE_COLOR}
                strokeWidth={1.5}
              />
            </Pattern>
          )}
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent" />
    </div>
  );
};

export default PatternHeader;
