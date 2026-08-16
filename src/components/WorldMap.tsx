import React, { useMemo, useState } from 'react';
import { Mercator } from '@visx/geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, Geometry } from 'geojson';
import world from 'world-atlas/countries-50m.json';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TRAVEL_LOCATIONS } from '../data/travelLocations';

type CountryProps = { name: string };

// The frame is tall enough to show the map's full height without a
// vertical scrollbar; it's still narrower than WIDTH on most screens, so
// there's real map to scroll left/right on.
const WIDTH = 950;
const HEIGHT = 500;
const FRAME_HEIGHT = 520;

const VISITED_COLOR = '#2563eb'; // blue-600, matches the site's accent
const UNVISITED_COLOR = '#d1d5db'; // gray-300, clearly darker than the page background, unlike gray-200

const VISITED_COUNTRIES = new Set([
  'United States of America',
  'Canada',
  'Egypt',
  'Cambodia',
  'China',
  'Japan',
  'Jordan',
  'Malaysia',
  'Philippines',
  'Singapore',
  'South Korea',
  'Thailand',
  'Turkey',
  'United Arab Emirates',
  'Uzbekistan',
  'Austria',
  'Belgium',
  'Czechia',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Italy',
  'Netherlands',
  'Portugal',
  'Slovakia',
  'Spain',
  'United Kingdom',
  'Vatican',
  'Bahamas',
  'Dominican Rep.',
  'Mexico',
  'Australia',
  'Ecuador',
]);

const worldTopology = world as unknown as Topology;
const worldFeatures = feature(
  worldTopology,
  worldTopology.objects.countries as GeometryCollection<CountryProps>
) as unknown as FeatureCollection<Geometry, CountryProps>;

// Antarctica is hugely exaggerated under Mercator and would otherwise force
// the whole map to shrink to make room for it, so it's dropped from the fit
// and from what's drawn.
const countries = worldFeatures.features.filter((f) => f.properties.name !== 'Antarctica');
const countriesForFit = { type: 'FeatureCollection' as const, features: countries };

// One require.context call per literal path (webpack macro) — matches the
// same folder PhotoGallery reads, so a pin's thumbnail is always the same
// photo that shows up in the gallery below.
const travelCtx = require.context('../assets/travel', false, /\.(png|jpe?g|webp)$/i);
const PHOTO_SRC: Record<string, string> = Object.fromEntries(
  travelCtx.keys().map((key) => [key.replace(/^\.\//, '').replace(/\.[^.]+$/, ''), travelCtx(key)])
);

const WorldMap: React.FC = () => {
  const [hoveredCountry, setHoveredCountry] = useState<{ name: string; x: number; y: number } | null>(null);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  const visitedCount = useMemo(
    () => countries.filter((c) => VISITED_COUNTRIES.has(c.properties.name)).length,
    []
  );

  return (
    <div className="relative rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 pt-4 pb-2">
        <h3 className="text-2xl font-bold text-gray-900">{visitedCount} countries visited</h3>
        <p className="text-gray-400 text-sm">{TRAVEL_LOCATIONS.length} photo stops. Scroll to explore the map.</p>
      </div>

      <div className="overflow-auto border-y border-gray-100" style={{ maxHeight: FRAME_HEIGHT }}>
        <div className="relative" style={{ width: WIDTH, height: HEIGHT }}>
          <svg
            width={WIDTH}
            height={HEIGHT}
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            role="img"
            aria-label="Map of visited countries with pins for each travel photo"
          >
            <Mercator<(typeof countries)[number]>
              data={countries}
              fitSize={[[WIDTH, HEIGHT], countriesForFit as never]}
            >
              {(mercator) => {
                const project = (lat: number, lon: number) => mercator.projection([lon, lat]);

                return (
                  <g>
                    {mercator.features.map(({ feature: f, path }, i) => {
                      const visited = VISITED_COUNTRIES.has(f.properties.name);
                      // onMouseMove alone would leave the tooltip unplaced
                      // until the first movement inside a shape, so enter
                      // and move share one handler.
                      const track = (e: React.MouseEvent<SVGPathElement>) => {
                        const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                        setHoveredCountry({
                          name: f.properties.name,
                          x: e.clientX - (rect?.left ?? 0),
                          y: e.clientY - (rect?.top ?? 0),
                        });
                      };
                      return (
                        <path
                          key={`country-${i}`}
                          d={path || ''}
                          fill={visited ? VISITED_COLOR : UNVISITED_COLOR}
                          stroke="#ffffff"
                          strokeWidth={0.6}
                          className="transition-colors duration-150"
                          onMouseEnter={track}
                          onMouseMove={track}
                          onMouseLeave={() => setHoveredCountry(null)}
                        />
                      );
                    })}

                    {TRAVEL_LOCATIONS.map((loc) => {
                      const p = project(loc.lat, loc.lon);
                      if (!p) return null;
                      const isHovered = hoveredPin === loc.id;
                      return (
                        <g
                          key={loc.id}
                          transform={`translate(${p[0]}, ${p[1]})`}
                          onMouseEnter={() => setHoveredPin(loc.id)}
                          onMouseLeave={() => setHoveredPin(null)}
                          style={{ cursor: 'pointer' }}
                        >
                          {isHovered && (
                            <circle r={9} fill="#dc2626" opacity={0.25} className="animate-ping" style={{ transformOrigin: 'center' }} />
                          )}
                          <FaMapMarkerAlt
                            size={isHovered ? 22 : 17}
                            color="#dc2626"
                            style={{
                              transform: `translate(${isHovered ? -11 : -8.5}px, ${isHovered ? -21 : -17}px)`,
                              transition: 'transform 150ms ease-out',
                            }}
                          />
                        </g>
                      );
                    })}
                  </g>
                );
              }}
            </Mercator>
          </svg>

          {hoveredCountry && (
            <div
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white shadow-sm"
              style={{ left: hoveredCountry.x, top: hoveredCountry.y - 8 }}
            >
              {hoveredCountry.name}
              {VISITED_COUNTRIES.has(hoveredCountry.name) ? ' ✓' : ''}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 px-5 py-4 text-sm">
        <span className="flex items-center gap-1.5 font-medium text-gray-700">
          <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: VISITED_COLOR }} />
          Visited ({visitedCount})
        </span>
        <span className="flex items-center gap-1.5 font-medium text-gray-700">
          <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: UNVISITED_COLOR }} />
          Not yet
        </span>
        <span className="flex items-center gap-1.5 text-gray-500">
          <FaMapMarkerAlt size={12} color="#dc2626" />
          Hover a pin for the photo
        </span>
      </div>

      {/* Hovered-pin preview: a mini polaroid of the actual photo, pinned to
          a fixed spot on the card so it stays visible no matter where the
          map has been scrolled to. */}
      {hoveredPin && PHOTO_SRC[hoveredPin] && (
        <div className="pointer-events-none absolute z-20 bg-white p-2 pb-3 rounded-sm shadow-xl w-32" style={{ top: 78, left: 16 }}>
          <img src={PHOTO_SRC[hoveredPin]} alt="" className="w-full h-24 object-cover" />
          <p className="text-center text-[11px] text-gray-500 italic mt-1.5 truncate px-0.5">
            {TRAVEL_LOCATIONS.find((l) => l.id === hoveredPin)?.caption}
          </p>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
