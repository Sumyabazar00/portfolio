"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useScrollTo } from "@/components/smooth-scroll";

const links = [
  { id: "highway", label: "Highway" },
  { id: "insure", label: "Insure" },
  { id: "dbox", label: "DBOX" },
  { id: "overlook", label: "Overlook" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const scrollTo = useScrollTo();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("ignition")}
          className="font-display font-700 tracking-tight text-headlight cursor-pointer"
          aria-label="Back to start"
        >
          <span className="font-bold">SUMIYA</span>
          <span className="text-fog">BAZAR</span>
        </button>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog hover:text-headlight transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("dawn")}
          className="font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-headlight/20 text-headlight hover:bg-headlight hover:text-night transition-colors duration-300 cursor-pointer"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
