"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  "Go",
  "TypeScript",
  "Vue / Nuxt",
  "React / Next.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Kotlin",
  "OpenAI API",
  "n8n",
];

export default function Marquee() {
  const reducedMotion = useReducedMotion();
  const row = (
    <>
      {items.map((item) => (
        <span key={item} className="flex shrink-0 items-center gap-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
            {item}
          </span>
          <span
            className="h-1 w-1 rotate-45 bg-insure/60"
            aria-hidden="true"
          />
        </span>
      ))}
    </>
  );

  return (
    <div
      className="relative z-10 overflow-hidden border-y border-headlight/8 bg-night/80 py-4"
      aria-label={`Stack: ${items.join(", ")}`}
    >
      <motion.div
        className="flex w-max gap-8"
        animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        {row}
        {row}
      </motion.div>
    </div>
  );
}
