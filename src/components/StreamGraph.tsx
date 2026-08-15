import React, { useMemo } from 'react';
import { AreaStack } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import { stack, stackOffsetSilhouette, stackOrderInsideOut, curveBasis } from 'd3-shape';

const KEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'] as const;
type LayerKey = (typeof KEYS)[number];
type DataRow = { t: number } & Record<LayerKey, number>;

const POINTS = 60;
const WIDTH = 800;
const HEIGHT = 220;

// Extra points generated on each side of [0, POINTS), outside the visible
// viewBox, purely so curveBasis's endpoint clamping (its tangent at the
// very first/last point of an array differs from the interior) happens
// off-screen rather than right at the tile edge.
const PAD = 6;

// visx's own streamgraph demo palette (mustard/cherry/navy/white/blue/sky/slate).
const COLORS = ['#ffc409', '#f14702', '#262d97', 'white', '#036ecd', '#9ecadd', '#51666e'];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

interface LayerConfig {
  base: number;
  harmonics: { freq: number; amp: number; phase: number }[];
}

function valueAt(layer: LayerConfig, t: number) {
  const value = layer.harmonics.reduce(
    (sum, h) => sum + h.amp * Math.sin((2 * Math.PI * h.freq * t) / POINTS + h.phase),
    layer.base
  );
  return Math.max(1, value);
}

// Each layer is a sum of integer-frequency sine waves, so valueAt(t) is
// exactly periodic with period POINTS — value(0) === value(POINTS) — which
// is what makes the two looped copies line up in the first place.
function generateData(): DataRow[] {
  const rand = seededRandom(7);
  const layers: LayerConfig[] = KEYS.map(() => ({
    base: 6 + rand() * 4,
    harmonics: Array.from({ length: 3 }, (_, h) => ({
      freq: h + 1,
      amp: (3 / (h + 1)) * (0.6 + rand()),
      phase: rand() * Math.PI * 2,
    })),
  }));

  const rows: DataRow[] = [];
  for (let t = -PAD; t <= POINTS + PAD; t++) {
    const row = { t } as DataRow;
    layers.forEach((layer, i) => {
      row[KEYS[i]] = valueAt(layer, t);
    });
    rows.push(row);
  }
  return rows;
}

const xScale = scaleLinear<number>({ domain: [0, POINTS], range: [0, WIDTH] });

interface StreamGraphProps {
  className?: string;
}

const StreamGraph: React.FC<StreamGraphProps> = ({ className }) => {
  const { data, yScale } = useMemo(() => {
    const rows = generateData();
    const stacked = stack<DataRow, LayerKey>()
      .keys(KEYS as unknown as LayerKey[])
      .offset(stackOffsetSilhouette)
      .order(stackOrderInsideOut)(rows);

    let yMin = Infinity;
    let yMax = -Infinity;
    stacked.forEach((layer) => {
      layer.forEach(([y0, y1]) => {
        yMin = Math.min(yMin, y0, y1);
        yMax = Math.max(yMax, y0, y1);
      });
    });

    return { data: rows, yScale: scaleLinear<number>({ domain: [yMin, yMax], range: [HEIGHT, 0] }) };
  }, []);

  // The svg's own viewport clips anything outside "0 0 WIDTH HEIGHT" by
  // default, so the padded guard points (t < 0 or t > POINTS) never render —
  // only the clean interior of the curve is visible.
  //
  // Offset is "silhouette", not the more common "wiggle": wiggle computes a
  // baseline that accumulates across the whole series, so even with
  // perfectly periodic input values the stacked-and-offset output drifts
  // over one period and never lines back up — which showed up as a visible
  // kink where the two looped copies met. Silhouette centers each x-column
  // independently (offset = -sum/2 at that column only), so periodic input
  // gives periodic output and the two copies tile with no seam.
  const svg = (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" className="w-full h-full block">
      <AreaStack<DataRow, LayerKey>
        data={data}
        keys={KEYS as unknown as LayerKey[]}
        curve={curveBasis}
        offset="silhouette"
        order="insideout"
        x={(d) => xScale(d.data.t) ?? 0}
        y0={(d) => yScale(d[0]) ?? 0}
        y1={(d) => yScale(d[1]) ?? 0}
      >
        {({ stacks, path }) =>
          stacks.map((s, i) => (
            <path key={s.key} d={path(s) || ''} fill={COLORS[i % COLORS.length]} fillOpacity={0.8} />
          ))
        }
      </AreaStack>
    </svg>
  );

  return (
    <div className={`stream-flow-track ${className ?? ''}`} aria-hidden="true">
      {svg}
      {svg}
    </div>
  );
};

export default StreamGraph;
