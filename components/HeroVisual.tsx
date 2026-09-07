"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Battery,
  Bell,
  BrainCircuit,
  Code2,
  Palette,
  Signal,
  Smartphone,
  TrendingUp,
  Wifi,
} from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["Web", "AI", "Mobile"] as const;

const appTiles = [
  { icon: Code2, label: "Web" },
  { icon: BrainCircuit, label: "AI" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Palette, label: "Brand" },
];

const projects = [
  { name: "Northstar AI", status: "Deploying", pct: 82 },
  { name: "Vertex Dashboard", status: "Live", pct: 100 },
  { name: "Orbit Health", status: "In QA", pct: 64 },
];

// Simple polyline for the analytics sparkline — hand-authored points,
// no charting lib needed for a decorative hero graphic.
const chartPoints = "0,38 20,30 40,34 60,18 80,22 100,10 120,14 140,4 160,8";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateX: (0.5 - py) * 10,
      rotateY: (px - 0.5) * 14,
    });
  };

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <div
      className="relative mx-auto w-full max-w-[22rem] sm:h-[26rem] sm:max-w-md lg:h-[30rem]"
      style={{ perspective: "1400px" }}
    >
      {/* ambient glow */}
      <div className="absolute inset-3 rounded-[2rem] bg-primary-teal/20 blur-2xl sm:inset-8 sm:rounded-[3rem] sm:blur-3xl" />

      {/* floating 3D container: continuous bob + cursor-driven tilt.
          Below sm the two cards stack in normal document flow (no
          overlap risk in a narrow column); at sm+ they switch to the
          absolute-positioned layered/overlapping desktop composition. */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col gap-3 sm:block sm:h-full sm:w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="relative flex flex-col gap-3 transition-transform duration-300 ease-out sm:block sm:h-full sm:w-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
        >
          {/* Layer 2 — web dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ transform: "translateZ(0px)" }}
            className="relative order-1 w-full rounded-2xl border border-white/15 bg-white/[0.06] p-3.5 shadow-2xl backdrop-blur-xl sm:absolute sm:right-0 sm:top-10 sm:order-none sm:w-[19rem] sm:p-4 lg:w-[21rem]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber/70" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="ml-2 text-[10px] font-medium text-white/40">
                  Gridzy Analytics
                </span>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-primary-teal/30 px-2 py-0.5 text-[9px] font-semibold text-amber">
                <TrendingUp size={10} className="shrink-0" /> +18%
              </span>
            </div>

            <svg
              viewBox="0 0 160 44"
              className="mt-4 h-14 w-full overflow-visible sm:h-16"
              fill="none"
            >
              <defs>
                <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5A623" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                points={`0,44 ${chartPoints} 160,44`}
                fill="url(#heroChartFill)"
              />
              <polyline
                points={chartPoints}
                stroke="#F5A623"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
              <div>
                <p className="text-sm font-black text-white">140ms</p>
                <p className="text-[9px] text-white/40">Load</p>
              </div>
              <div>
                <p className="text-sm font-black text-white">98</p>
                <p className="text-[9px] text-white/40">Score</p>
              </div>
              <div>
                <p className="text-sm font-black text-white">24</p>
                <p className="text-[9px] text-white/40">Deploys</p>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              {projects.map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 shrink-0 rounded-full",
                      p.status === "Live" ? "bg-emerald-400" : "bg-amber"
                    )}
                  />
                  <span className="flex-1 truncate text-[10px] text-white/70">
                    {p.name}
                  </span>
                  <div className="h-1 w-12 shrink-0 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-primary-teal"
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Layer 1 — mobile app mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ transform: "translateZ(60px)" }}
            className="relative order-2 w-[70%] max-w-[13rem] self-start rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:absolute sm:-bottom-2 sm:left-0 sm:order-none sm:w-48 sm:max-w-none sm:p-3.5 lg:w-52"
          >
            <div className="flex items-center justify-between px-0.5 text-white/70">
              <span className="text-[9px] font-semibold">9:41</span>
              <div className="flex items-center gap-1">
                <Signal size={10} />
                <Wifi size={10} />
                <Battery size={12} />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm font-extrabold text-white">Gridzy</p>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <Bell size={12} className="text-amber" />
              </div>
            </div>

            <div className="mt-3 flex gap-1.5">
              {categories.map((c, i) => (
                <span
                  key={c}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[9px] font-semibold",
                    i === 0
                      ? "bg-amber text-charcoal"
                      : "border border-white/15 text-white/50"
                  )}
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {appTiles.map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3"
                >
                  <t.icon size={16} className="text-primary-teal" strokeWidth={2} />
                  <span className="text-[8px] font-medium text-white/50">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
              <Activity size={13} className="text-amber" />
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary-teal to-amber" />
              </div>
            </div>
          </motion.div>

          {/* Layer 3 — floating status badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ transform: "translateZ(90px)" }}
            className="relative order-3 flex w-fit items-center gap-1.5 self-end rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 shadow-lg backdrop-blur-lg sm:absolute sm:-bottom-6 sm:right-2 sm:order-none sm:gap-2 sm:px-4 sm:py-2"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="whitespace-nowrap text-[10px] font-semibold text-emerald-50 sm:text-[11px]">
              AI Engine <span className="hidden xs:inline">Active</span>{" "}
              <span className="text-emerald-400/70">•</span> 99.9% Uptime
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
