import React from 'react';
import { Pattern, PatternLines, PatternCircles, PatternWaves, PatternHexagons } from '@visx/pattern';

export type PatternVariant =
  | 'circles'
  | 'waves'
  | 'lines'
  | 'hexagons'
  | 'lines-horizontal'
  | 'lines-cross'
  | 'lines-diagonal-rtl'
  | 'circles-complement'
  | 'visx-waves';

interface PatternHeaderProps {
  /** Which visx pattern to tile across the banner — nine variants pulled from visx's own pattern gallery. */
  variant: PatternVariant;
  /** Stroke/fill color for the pattern shapes. Defaults to the site's blue accent. */
  accent?: string;
  /** Background tint behind the pattern. Defaults to blue-50. */
  bg?: string;
  className?: string;
}

const TILE = 10;
const TRAVEL = TILE * 5; // a multiple of the tile size, so the loop is seamless

// Original per-variant defaults (blue-400 for circles, blue-500 for the
// rest) so CV/Teaching/Publications — which don't pass accent/bg — render
// pixel-identical to before this component grew more variants.
const DEFAULT_ACCENT: Record<PatternVariant, string> = {
  circles: '#60a5fa',
  waves: '#3b82f6',
  lines: '#3b82f6',
  hexagons: '#3b82f6',
  'lines-horizontal': '#3b82f6',
  'lines-cross': '#3b82f6',
  'lines-diagonal-rtl': '#3b82f6',
  'circles-complement': '#3b82f6',
  'visx-waves': '#3b82f6',
};

const VERTICAL_DRIFT: PatternVariant[] = ['circles', 'hexagons', 'circles-complement', 'lines-horizontal'];

// A full-bleed cover banner in the same spirit as PageHeader, but tiled with
// one of visx's SVG patterns instead of the streamgraph — used on pages
// that don't have a hero of their own. accent/bg default to the original
// blue so CV/Teaching/Publications render exactly as before.
//
// Motion is plain CSS, not SVG SMIL (<animateTransform> on patternTransform):
// that's the technique visx's own docs demo uses, but it doesn't actually
// animate in Chromium when tested here. Instead the pattern-filled rect is
// rendered oversized and slid with a CSS transform loop — the same
// duplicate-and-translate trick StreamGraph already uses, just simpler here
// since a <pattern> tiles infinitely by construction.
const PatternHeader: React.FC<PatternHeaderProps> = ({ variant, accent, bg = '#eff6ff', className }) => {
  const resolvedAccent = accent ?? DEFAULT_ACCENT[variant];
  const id = `pattern-header-${variant}-${resolvedAccent.replace('#', '')}`;
  const drift = VERTICAL_DRIFT.includes(variant) ? 'pattern-drift-y' : 'pattern-drift-x';

  return (
    <div className={`relative w-full h-[6.6rem] sm:h-[8.4rem] md:h-[10.8rem] overflow-hidden ${className ?? ''}`}>
      <div
        className={drift}
        style={
          drift === 'pattern-drift-y'
            ? { position: 'absolute', top: 0, left: 0, right: 0, height: `calc(100% + ${TRAVEL}px)` }
            : { position: 'absolute', top: 0, left: 0, bottom: 0, width: `calc(100% + ${TRAVEL}px)` }
        }
      >
        <svg width="100%" height="100%" className="block">
          <rect width="100%" height="100%" fill={bg} />
          {variant === 'circles' && (
            <Pattern id={id} width={TILE} height={TILE}>
              <circle cx={TILE / 2} cy={TILE / 2} r={3} fill={resolvedAccent} />
            </Pattern>
          )}
          {variant === 'waves' && (
            <Pattern id={id} width={TILE} height={TILE}>
              <path
                d={`M 0 ${TILE / 2} c ${TILE / 8} ${-TILE / 4}, ${(TILE * 3) / 8} ${-TILE / 4}, ${TILE / 2} 0
                    c ${TILE / 8} ${TILE / 4}, ${(TILE * 3) / 8} ${TILE / 4}, ${TILE / 2} 0
                    M ${-TILE / 2} ${TILE / 2}
                    c ${TILE / 8} ${TILE / 4}, ${(TILE * 3) / 8} ${TILE / 4}, ${TILE / 2} 0
                    M ${TILE} ${TILE / 2}
                    c ${TILE / 8} ${-TILE / 4}, ${(TILE * 3) / 8} ${-TILE / 4}, ${TILE / 2} 0`}
                fill="none"
                stroke={resolvedAccent}
                strokeWidth={1.5}
              />
            </Pattern>
          )}
          {variant === 'lines' && (
            <PatternLines id={id} width={TILE} height={TILE} stroke={resolvedAccent} strokeWidth={1.5} orientation={['diagonal']} />
          )}
          {variant === 'hexagons' && <PatternHexagons id={id} height={TILE} size={TILE / 2.4} fill="none" stroke={resolvedAccent} strokeWidth={1.2} />}
          {variant === 'lines-horizontal' && (
            <PatternLines id={id} width={TILE} height={TILE} stroke={resolvedAccent} strokeWidth={1.5} orientation={['horizontal']} />
          )}
          {variant === 'lines-cross' && (
            <PatternLines id={id} width={TILE} height={TILE} stroke={resolvedAccent} strokeWidth={1} orientation={['vertical', 'horizontal']} />
          )}
          {variant === 'lines-diagonal-rtl' && (
            <PatternLines id={id} width={TILE} height={TILE} stroke={resolvedAccent} strokeWidth={1.5} orientation={['diagonalRightToLeft']} />
          )}
          {variant === 'circles-complement' && (
            <PatternCircles id={id} width={TILE} height={TILE} radius={2} fill={resolvedAccent} complement />
          )}
          {variant === 'visx-waves' && <PatternWaves id={id} width={TILE} height={TILE} fill="transparent" stroke={resolvedAccent} strokeWidth={1.2} />}
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent" />
    </div>
  );
};

export default PatternHeader;
