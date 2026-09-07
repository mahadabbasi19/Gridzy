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
      className="relative mx-auto h-56 w-full max-w-[22rem] xs:h-64 sm:h-[26rem] sm:max-w-md lg:h-[30rem]"
      style={{ perspective: "1400px" }}
    >
      {/* ambient glow */}
      <div className="absolute inset-3 rounded-[2rem] bg-primary-teal/20 blur-2xl sm:inset-8 sm:rounded-[3rem] sm:blur-3xl" />

      {/* floating 3D container: continuous bob + cursor-driven tilt */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="relative h-full w-full transition-transform duration-300 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
        >
          {/* Layer 2 — mid-ground web dashboard, offset behind */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ transform: "translateZ(0px)" }}
            className="absolute right-0 top-8 w-[78%] rounded-2xl border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl sm:top-10 sm:w-[19rem] sm:p-4 lg:w-[21rem]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber/70" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="ml-2 hidden text-[10px] font-medium text-white/40 xs:inline">
                  Gridzy Analytics
                </span>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-primary-teal/30 px-1.5 py-0.5 text-[8px] font-semibold text-amber xs:px-2 xs:text-[9px]">
                <TrendingUp size={9} className="shrink-0" /> +18%
              </span>
            </div>

            <svg
              viewBox="0 0 160 44"
              className="mt-2.5 h-10 w-full overflow-visible xs:mt-4 xs:h-16"
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

            <div className="mt-2 grid grid-cols-3 gap-1.5 border-t border-white/10 pt-2 xs:mt-3 xs:gap-2 xs:pt-3">
              <div>
                <p className="text-[11px] font-black text-white xs:text-sm">140ms</p>
                <p className="text-[7px] text-white/40 xs:text-[9px]">Load</p>
              </div>
              <div>
                <p className="text-[11px] font-black text-white xs:text-sm">98</p>
                <p className="text-[7px] text-white/40 xs:text-[9px]">Score</p>
              </div>
              <div>
                <p className="text-[11px] font-black text-white xs:text-sm">24</p>
                <p className="text-[7px] text-white/40 xs:text-[9px]">Deploys</p>
              </div>
            </div>

            <div className="mt-3 hidden flex-col gap-2 border-t border-white/10 pt-3 xs:flex">
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
                  <div className="h-1 w-12 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-primary-teal"
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Layer 1 — foreground mobile app mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ transform: "translateZ(60px)" }}
            className="absolute -bottom-2 left-0 w-[54%] rounded-xl border border-white/20 bg-white/10 p-1.5 shadow-2xl backdrop-blur-md xs:rounded-2xl xs:p-2.5 sm:w-48 sm:rounded-3xl sm:p-3.5 lg:w-52"
          >
            <div className="flex items-center justify-between px-0.5 text-white/70">
              <span className="text-[7px] font-semibold xs:text-[9px]">9:41</span>
              <div className="flex items-center gap-1">
                <Signal size={8} className="xs:hidden" />
                <Wifi size={8} className="xs:hidden" />
                <Battery size={10} className="xs:hidden" />
                <Signal size={10} className="hidden xs:block" />
                <Wifi size={10} className="hidden xs:block" />
                <Battery size={12} className="hidden xs:block" />
              </div>
            </div>

            <div className="mt-1.5 flex items-center justify-between xs:mt-3">
              <p className="text-[10px] font-extrabold text-white xs:text-sm">Gridzy</p>
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 xs:h-6 xs:w-6">
                <Bell size={9} className="text-amber xs:hidden" />
                <Bell size={12} className="hidden text-amber xs:block" />
              </div>
            </div>

            <div className="mt-1.5 flex gap-1 xs:mt-3 xs:gap-1.5">
              {categories.map((c, i) => (
                <span
                  key={c}
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[7px] font-semibold xs:px-2.5 xs:py-1 xs:text-[9px]",
                    i === 0
                      ? "bg-amber text-charcoal"
                      : "border border-white/15 text-white/50"
                  )}
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-2 hidden grid-cols-2 gap-2 xs:grid">
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

            <div className="mt-2 hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 xs:flex">
              <Activity size={13} className="text-amber" />
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary-teal to-amber" />
              </div>
            </div>
          </motion.div>

          {/* Layer 3 — floating status badge, frontmost */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ transform: "translateZ(90px)" }}
            className="absolute -bottom-3 right-0 flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-1.5 py-1 shadow-lg backdrop-blur-lg xs:-bottom-4 xs:right-1 xs:gap-1.5 xs:px-2.5 xs:py-1.5 sm:-bottom-6 sm:right-2 sm:gap-2 sm:px-4 sm:py-2"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="whitespace-nowrap text-[7px] font-semibold text-emerald-50 xs:text-[9px] sm:text-[11px]">
              <span className="xs:hidden">AI Active</span>
              <span className="hidden xs:inline sm:hidden">
                AI Engine <span className="text-emerald-400/70">•</span> 99.9%
              </span>
              <span className="hidden sm:inline">
                AI Engine Active <span className="text-emerald-400/70">•</span>{" "}
                99.9% Uptime
              </span>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
