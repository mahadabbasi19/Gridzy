"use client";

import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

// Hand-authored syntax-highlighted lines standing in for Gridzy's real
// stack (Next.js, Python-based AI automation, Flutter) — a decorative
// "live IDE" mockup, not runnable code.
const lines: { tokens: { text: string; cls: string }[] }[] = [
  {
    tokens: [
      { text: "import", cls: "text-violet-400" },
      { text: " { ", cls: "text-slate-500" },
      { text: "Agent", cls: "text-cyan-300" },
      { text: " } ", cls: "text-slate-500" },
      { text: "from", cls: "text-violet-400" },
      { text: ' "gridzy/ai";', cls: "text-amber-300" },
    ],
  },
  { tokens: [{ text: "", cls: "" }] },
  {
    tokens: [
      { text: "// full-stack: web, mobile, AI", cls: "text-slate-500 italic" },
    ],
  },
  {
    tokens: [
      { text: "export default function", cls: "text-violet-400" },
      { text: " Studio", cls: "text-cyan-300" },
      { text: "() {", cls: "text-slate-300" },
    ],
  },
  {
    tokens: [
      { text: "  const", cls: "text-violet-400" },
      { text: " stack", cls: "text-slate-200" },
      { text: " = [", cls: "text-slate-500" },
      { text: '"Next.js", "Flutter", "Python"', cls: "text-amber-300" },
      { text: "];", cls: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { text: "  const", cls: "text-violet-400" },
      { text: " automation", cls: "text-slate-200" },
      { text: " = ", cls: "text-slate-500" },
      { text: "new", cls: "text-violet-400" },
      { text: " Agent", cls: "text-cyan-300" },
      { text: "({ mode: ", cls: "text-slate-500" },
      { text: '"autonomous"', cls: "text-amber-300" },
      { text: " });", cls: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { text: "  return", cls: "text-violet-400" },
      { text: " <Build stack={stack} ai={automation} />;", cls: "text-slate-300" },
    ],
  },
  { tokens: [{ text: "}", cls: "text-slate-300" }] },
];

export function CodeMesh() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative mx-auto w-full max-w-md lg:max-w-lg"
    >
      {/* ambient rings, echoing the device-mockup language used in the Hero/Process */}
      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-white/[0.06]" />
      <div className="pointer-events-none absolute inset-10 rounded-[2rem] border border-white/[0.04]" />
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-cyan-500/10 blur-3xl" />

      <TiltCard>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/50 backdrop-blur-xl">
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <div className="ml-3 flex items-center gap-1">
              <span className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-slate-200">
                studio.tsx
              </span>
              <span className="px-2.5 py-1 text-[11px] font-medium text-slate-500">
                automation.py
              </span>
            </div>
          </div>

          {/* code body */}
          <div className="px-5 py-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.09 }}
                className="flex gap-4"
              >
                <span className="w-4 shrink-0 select-none text-right text-slate-600">
                  {i + 1}
                </span>
                <span className="whitespace-pre">
                  {line.tokens.map((t, j) => (
                    <span key={j} className={t.cls}>
                      {t.text}
                    </span>
                  ))}
                  {i === lines.length - 1 && (
                    <motion.span
                      aria-hidden
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[2px] bg-cyan-300"
                    />
                  )}
                </span>
              </motion.div>
            ))}
          </div>

          {/* status bar */}
          <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2.5 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
              Build passing
            </span>
            <span className="flex items-center gap-3">
              <span>TypeScript</span>
              <span>UTF-8</span>
            </span>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
