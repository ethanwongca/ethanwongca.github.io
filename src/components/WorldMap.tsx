import React, { useMemo, useState } from 'react';
import { Mercator } from '@visx/geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, Geometry } from 'geojson';
import worldTopology from 'world-atlas/countries-50m.json';

type CountryProps = { name: string };

const WIDTH = 800;
const HEIGHT = 420;

const VISITED_COLOR = '#2563eb'; // blue-600, matches site accent
const UNVISITED_COLOR = '#e5e7eb'; // gray-200

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

const world = feature(
  worldTopology as unknown as Topology,
  (worldTopology as unknown as Topology).objects.countries as GeometryCollection<CountryProps>
) as unknown as FeatureCollection<Geometry, CountryProps>;

// Antarctica is hugely exaggerated under Mercator and would otherwise force
// the whole map to shrink to make room for it — drop it from the fit and
// from what's drawn.
const countries = world.features.filter((f) => f.properties.name !== 'Antarctica');
const countriesForFit = { type: 'FeatureCollection' as const, features: countries };

const WorldMap: React.FC = () => {
  const [hovered, setHovered] = useState<{ name: string; x: number; y: number } | null>(null);

  const visitedCount = useMemo(
    () => countries.filter((c) => VISITED_COUNTRIES.has(c.properties.name)).length,
    []
  );

  return (
    <div>
      <div className="relative">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-auto" role="img" aria-label="World map with visited countries highlighted">
          <Mercator<(typeof countries)[number]>
            data={countries}
            fitSize={[[WIDTH, HEIGHT], countriesForFit as never]}
          >
            {(mercator) => (
              <g>
                {mercator.features.map(({ feature: f, path }, i) => {
                  const visited = VISITED_COUNTRIES.has(f.properties.name);
                  return (
                    <path
                      key={`country-${i}`}
                      d={path || ''}
                      fill={visited ? VISITED_COLOR : UNVISITED_COLOR}
                      stroke="#ffffff"
                      strokeWidth={0.5}
                      className="transition-colors duration-150"
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                        setHovered({
                          name: f.properties.name,
                          x: e.clientX - (rect?.left ?? 0),
                          y: e.clientY - (rect?.top ?? 0),
                        });
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                        setHovered({
                          name: f.properties.name,
                          x: e.clientX - (rect?.left ?? 0),
                          y: e.clientY - (rect?.top ?? 0),
                        });
                      }}
                      onMouseLeave={() => setHovered(null)}
                    />
                  );
                })}
              </g>
            )}
          </Mercator>
        </svg>
        {hovered && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white shadow-sm"
            style={{ left: hovered.x, top: hovered.y - 8 }}
          >
            {hovered.name}
            {VISITED_COUNTRIES.has(hovered.name) ? ' ✓' : ''}
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: VISITED_COLOR }} />
          Visited ({visitedCount})
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: UNVISITED_COLOR }} />
          Not yet
        </span>
      </div>
    </div>
  );
};

export default WorldMap;
