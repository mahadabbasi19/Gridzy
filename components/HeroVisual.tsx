"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
import { HeroSearchBar } from "./HeroSearchBar";

// Quick-access tiles link straight to their matching service detail page.
const appTiles = [
  { icon: Code2, label: "Web", slug: "website-development" },
  { icon: BrainCircuit, label: "AI", slug: "ai-automations" },
  { icon: Smartphone, label: "Mobile", slug: "mobile-app-development" },
  { icon: Palette, label: "Brand", slug: "graphics-brand-design" },
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
      className="relative mx-auto h-72 w-full max-w-[15rem] xs:h-80 xs:max-w-[16rem] sm:h-[26rem] sm:max-w-md lg:h-[30rem]"
      style={{ perspective: "1400px" }}
    >
      {/* ambient glow */}
      <div className="absolute inset-3 rounded-[2rem] bg-primary-teal/20 blur-2xl sm:inset-8 sm:rounded-[3rem] sm:blur-3xl" />
      <div className="absolute inset-6 rounded-[2rem] bg-amber/10 blur-3xl sm:inset-12 sm:rounded-[3rem]" />

      {/* floating 3D container: continuous bob + cursor-driven tilt.
          Below sm, only the mobile app mockup shows (full-size,
          full detail, centered) — there simply isn't room for the
          full overlapping dashboard+mockup composition in a narrow
          phone column without them colliding. At sm and up, the full
          desktop layered composition (dashboard + mockup + status
          badge, absolutely positioned and overlapping) appears. */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-full w-full items-center justify-center sm:block"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="relative flex h-full w-full items-center justify-center sm:block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Layer 2 — mid-ground web dashboard, offset behind (desktop only).
              The cursor-driven tilt lives here (decorative only) rather than
              on the shared wrapper — keeping it off the interactive mobile
              mockup below means the search bar and its dropdown never shift
              position under the cursor mid-click, which was silently
              swallowing taps/clicks on its buttons. */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              transform: `translateZ(0px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              transition: "transform 0.3s ease-out",
            }}
            className="hidden rounded-2xl border border-white/15 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 ring-1 ring-white/5 backdrop-blur-xl sm:absolute sm:right-0 sm:top-10 sm:block sm:w-[19rem] lg:w-[21rem]"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/favicon.png"
                  alt="Gridzy"
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] shrink-0 rounded-full ring-1 ring-white/20"
                />
                <span className="text-[10px] font-bold tracking-wide text-white/80">
                  Gridzy Analytics
                </span>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-primary-teal/30 px-2 py-0.5 text-[9px] font-semibold text-amber">
                <TrendingUp size={10} /> +18%
              </span>
            </div>

            <svg
              viewBox="0 0 160 44"
              className="mt-4 h-16 w-full overflow-visible"
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

          {/* Layer 1 — mobile app mockup. Alone (centered, full detail)
              below sm; becomes the overlapping foreground layer at sm+. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ transform: "translateZ(60px)" }}
            className="relative w-full max-w-[9.5rem] rounded-[2rem] border border-white/20 bg-white/10 p-1.5 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-md xs:max-w-[10.5rem] sm:absolute sm:-bottom-2 sm:left-0 sm:w-36 sm:max-w-none lg:w-40"
          >
            {/* device bezel notch */}
            <div className="absolute left-1/2 top-1.5 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-black/40" />

            <div className="rounded-[1.6rem] bg-white/5 p-2.5 pt-3.5">
              <div className="flex items-center justify-between px-0.5 text-white/70">
                <span className="text-[9px] font-semibold">9:41</span>
                <div className="flex items-center gap-1">
                  <Signal size={10} />
                  <Wifi size={10} />
                  <Battery size={12} />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/logos/favicon.png"
                    alt="Gridzy"
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 rounded-full ring-1 ring-white/20"
                  />
                  <p className="text-sm font-extrabold text-white">Gridzy</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Bell size={12} className="text-amber" />
                </div>
              </div>

              <div className="mt-3">
                <HeroSearchBar />
              </div>

              <div className="relative z-10 mt-3 grid grid-cols-2 gap-2">
                {appTiles.map((t) => (
                  <Link
                    key={t.label}
                    href={`/services/${t.slug}`}
                    className="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3 transition-transform active:scale-95 hover:border-amber/40 hover:bg-white/10"
                  >
                    <t.icon size={16} className="text-primary-teal" strokeWidth={2} />
                    <span className="text-[8px] font-medium text-white/50">
                      {t.label}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                <Activity size={13} className="text-amber" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary-teal to-amber" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
