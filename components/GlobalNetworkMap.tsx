"use client";

import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";

// Deterministic pseudo-random (no Math.random) so the SSR-rendered
// markup matches the client hydration pass exactly — same seed always
// produces the same dot scatter.
function seeded(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

// Loose continent bounding boxes in a 400x240 viewBox — stylized, not
// geographically precise, just enough to read as "world map".
const continents = [
  { x0: 28, x1: 118, y0: 28, y1: 108, count: 16 }, // North America
  { x0: 92, x1: 142, y0: 118, y1: 192, count: 12 }, // South America
  { x0: 172, x1: 214, y0: 28, y1: 78, count: 10 }, // Europe
  { x0: 172, x1: 226, y0: 84, y1: 170, count: 14 }, // Africa
  { x0: 226, x1: 360, y0: 22, y1: 132, count: 20 }, // Asia
  { x0: 300, x1: 365, y0: 148, y1: 190, count: 8 }, // Australia
];

const dots = continents.flatMap((c, ci) =>
  Array.from({ length: c.count }, (_, i) => {
    const seed = ci * 100 + i;
    const x = c.x0 + seeded(seed) * (c.x1 - c.x0);
    const y = c.y0 + seeded(seed + 0.37) * (c.y1 - c.y0);
    return { x, y };
  })
);

const hubs = [
  { name: "Karachi", x: 278, y: 96 },
  { name: "London", x: 190, y: 56 },
  { name: "New York", x: 72, y: 68 },
];

const arcs: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 2],
];

function arcPath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - 26;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

export function GlobalNetworkMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mx-auto h-[18rem] w-full max-w-[24rem] sm:h-[22rem] sm:max-w-lg lg:h-[26rem]"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full overflow-hidden rounded-3xl border border-primary-teal/30 bg-deep-teal/40 shadow-2xl backdrop-blur-xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(21,91,88,0.35),transparent)]" />

        <svg
          viewBox="0 0 400 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* dot-matrix landmasses */}
          {dots.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r={1.4}
              fill="rgba(234,244,243,0.28)"
            />
          ))}

          {/* connecting arcs */}
          {arcs.map(([ai, bi], i) => (
            <motion.path
              key={i}
              d={arcPath(hubs[ai], hubs[bi])}
              fill="none"
              stroke="#F5A623"
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeDasharray="4 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.75 }}
              transition={{ duration: 1.2, delay: 0.6 + i * 0.2 }}
            />
          ))}
          {arcs.map(([ai, bi], i) => (
            <motion.circle
              key={`pulse-${i}`}
              r={2.2}
              fill="#F5A623"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: 1 + i * 0.5,
                ease: "linear",
              }}
            >
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                begin={`${1 + i * 0.5}s`}
                path={arcPath(hubs[ai], hubs[bi])}
              />
            </motion.circle>
          ))}

          {/* hub nodes */}
          {hubs.map((h, i) => (
            <g key={h.name}>
              <motion.circle
                cx={h.x}
                cy={h.y}
                r={3}
                fill="none"
                stroke="#F5A623"
                strokeWidth={1}
                initial={{ opacity: 0.6, r: 3 }}
                animate={{ opacity: [0.6, 0, 0.6], r: [3, 11, 3] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              />
              <circle cx={h.x} cy={h.y} r={3} fill="#F5A623" />
              <text
                x={h.x}
                y={h.y - 9}
                textAnchor="middle"
                className="fill-[#EAF4F3]"
                style={{ fontSize: "8px", fontWeight: 700, opacity: 0.85 }}
              >
                {h.name}
              </text>
            </g>
          ))}
        </svg>

        {/* Card 1 — active hubs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute right-2 top-2 flex items-center gap-1.5 rounded-xl border border-primary-teal/40 bg-deep-teal/70 px-2.5 py-2 shadow-lg backdrop-blur-md sm:right-4 sm:top-4 sm:gap-2 sm:px-3.5 sm:py-2.5"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
          </span>
          <MapPin size={12} className="shrink-0 text-amber" />
          <span className="whitespace-nowrap text-[9px] font-semibold text-[#EAF4F3] sm:text-[11px]">
            Active Hubs: PK • UK • US
          </span>
        </motion.div>

        {/* Card 2 — engineers online */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.15 }}
          className="absolute bottom-2 left-2 flex items-center gap-2 rounded-xl border border-primary-teal/40 bg-deep-teal/70 px-2.5 py-2 shadow-lg backdrop-blur-md sm:bottom-4 sm:left-4 sm:gap-3 sm:px-3.5 sm:py-2.5"
        >
          <div className="flex shrink-0 items-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{ marginLeft: i === 0 ? 0 : -8 }}
                className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-deep-teal bg-primary-teal text-[9px] font-bold text-white shadow-[0_0_8px_rgba(245,166,35,0.35)] sm:h-6 sm:w-6"
              >
                <Users size={9} />
              </div>
            ))}
          </div>
          <span className="whitespace-nowrap text-[9px] font-semibold text-[#EAF4F3] sm:text-[11px]">
            1,200+ Engineers Online
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
