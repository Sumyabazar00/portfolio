"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useVelocity,
  useMotionValueEvent,
} from "framer-motion";
import { chapters } from "@/lib/content";
import { useScrollTo } from "@/components/smooth-scroll";

export default function JourneyProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });
  const [km, setKm] = useState(0);
  const [active, setActive] = useState(0);
  const [speed, setSpeed] = useState(0);
  const scrollTo = useScrollTo();

  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { stiffness: 60, damping: 22 });

  useMotionValueEvent(smoothVelocity, "change", (v) => {
    const next = Math.min(180, Math.round(Math.abs(v) / 14));
    setSpeed((prev) => (prev === next ? prev : next));
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.round(v * 1000) / 10;
    if (next !== km) setKm(next);
    let idx = 0;
    for (let i = 0; i < chapters.length; i++) {
      const el = document.getElementById(chapters[i].id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
        idx = i;
      }
    }
    if (idx !== active) setActive(idx);
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-insure via-dbox-neon to-dawn z-50 lg:hidden"
        style={{ scaleX: progress }}
      />

      <nav
        aria-label="Journey chapters"
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-5"
      >
        {chapters.map((c, i) => (
          <button
            key={c.id}
            onClick={() => scrollTo(c.id)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={`Go to ${c.label}`}
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                active === i
                  ? "text-headlight opacity-100"
                  : "text-fog opacity-0 group-hover:opacity-70"
              }`}
            >
              {String(i).padStart(2, "0")} {c.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === i
                  ? "h-2.5 w-2.5 bg-headlight shadow-[0_0_12px_rgba(242,244,248,0.8)]"
                  : "h-1.5 w-1.5 bg-fog/40 group-hover:bg-fog"
              }`}
            />
          </button>
        ))}
      </nav>

      <div className="fixed bottom-6 left-6 z-50 hidden md:block font-mono text-[11px] tracking-[0.25em] text-fog select-none">
        ODO {km.toFixed(1).padStart(5, "0")} KM
      </div>

      <div className="pointer-events-none fixed bottom-6 right-6 z-50 hidden md:block text-right select-none">
        <div className="font-mono text-3xl font-medium tabular-nums leading-none text-headlight/90">
          {String(speed).padStart(3, "0")}
        </div>
        <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-fog">
          km/h
        </div>
      </div>
    </>
  );
}
