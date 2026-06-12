"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { skillSigns } from "@/lib/content";
import WordReveal from "@/components/word-reveal";

export default function Highway() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const trackX = useTransform(scrollYProgress, [0.05, 0.95], ["4%", "-62%"]);
  const lineY = useTransform(scrollYProgress, [0, 1], [0, -1400]);

  if (reducedMotion) {
    return (
      <section id="highway" className="relative bg-night px-6 py-28">
        <SectionHeader />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillSigns.map((s) => (
            <SignCard key={s.exit} sign={s} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="highway" ref={ref} className="relative h-[320vh] bg-night">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="road-line absolute left-1/2 top-0 h-[200%] w-[3px] -translate-x-1/2 opacity-[0.07]"
          style={{ y: lineY }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(91,130,255,0.07),transparent_60%)]"
        />

        <div className="px-6">
          <SectionHeader />
        </div>

        <motion.div
          className="mt-14 flex gap-6 pl-6 md:pl-[10vw] will-change-transform"
          style={{ x: trackX }}
        >
          {skillSigns.map((s) => (
            <SignCard key={s.exit} sign={s} wide />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mx-auto max-w-6xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-insure">
        KM 012 — The Highway
      </p>
      <h2 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl">
        <WordReveal
          text="Tools I *drive* daily"
          accentClass="serif-accent text-insure"
        />
      </h2>
      <p className="mt-4 max-w-lg text-fog leading-relaxed">
        Six lanes, one driver. Every exit on this road leads somewhere I have
        shipped real software.
      </p>
    </div>
  );
}

function SignCard({
  sign,
  wide,
}: {
  sign: (typeof skillSigns)[number];
  wide?: boolean;
}) {
  return (
    <div
      className={`shrink-0 rounded-2xl border border-headlight/10 bg-asphalt/90 p-6 transition-colors duration-300 hover:border-insure/40 ${
        wide ? "w-[280px] md:w-[340px]" : ""
      }`}
    >
      <div className="flex items-baseline justify-between border-b border-headlight/10 pb-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
          Exit {sign.exit}
        </span>
        <span className="font-display text-lg font-semibold text-headlight">
          {sign.title}
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {sign.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-sm text-fog"
          >
            <span
              className="h-1 w-4 rounded-full bg-insure/50"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
