"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { skillSigns } from "@/lib/content";
import WordReveal from "@/components/word-reveal";

export default function Highway() {
  const reducedMotion = useReducedMotion();

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

  return <HighwayStack />;
}

function HighwayStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="highway"
      className="relative bg-night px-6 pt-28 pb-[14vh] md:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,130,255,0.06),transparent_55%)]"
      />

      <div className="relative">
        <SectionHeader />

        <div ref={containerRef} className="relative mt-12">
          {skillSigns.map((s, i) => (
            <StackCard
              key={s.exit}
              sign={s}
              index={i}
              total={skillSigns.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({
  sign,
  index,
  total,
  progress,
}: {
  sign: (typeof skillSigns)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Tall pinned wrapper gives each card a long scroll "dwell" so visitors can
  // read it before the next card slides up and overlays it. Earlier cards
  // scale down and sit higher, leaving a peek of the stack beneath.
  const targetScale = 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-[88vh] min-h-[620px] items-center justify-center">
      <motion.div
        style={{ scale, top: `${index * 1.4}rem` }}
        className="relative origin-top w-full max-w-5xl"
      >
        <SignCard sign={sign} index={index} total={total} stacked />
      </motion.div>
    </div>
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
  index,
  total,
  stacked,
}: {
  sign: (typeof skillSigns)[number];
  index?: number;
  total?: number;
  stacked?: boolean;
}) {
  if (!stacked) {
    // Reduced-motion / grid fallback — original compact card.
    return (
      <div className="rounded-2xl border border-headlight/10 bg-asphalt/90 p-6 transition-colors duration-300 hover:border-insure/40">
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

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-gradient-to-b from-[#0f1117] to-[#08090e] p-8 shadow-2xl shadow-black/60 md:p-12">
      {/* top accent + faint drive-blue glow + exit watermark */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-insure/70 to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-insure/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-3 -top-8 select-none text-[8rem] font-bold leading-none text-headlight/[0.04] md:text-[11rem]"
      >
        {sign.exit}
      </span>

      <div className="relative flex items-end justify-between gap-4 border-b border-white/[0.07] pb-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-insure">
            Exit {sign.exit}
            {typeof index === "number" && typeof total === "number" && (
              <span className="text-fog/50"> / {String(total).padStart(2, "0")}</span>
            )}
          </span>
          <h3 className="font-display mt-2.5 text-3xl font-semibold text-headlight md:text-4xl">
            {sign.title}
          </h3>
        </div>
        <span
          aria-hidden="true"
          className="hidden h-3 w-3 shrink-0 rounded-full bg-insure shadow-[0_0_18px_5px_rgba(91,130,255,0.55)] md:block"
        />
      </div>

      <ul className="relative mt-7 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
        {sign.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3.5 text-lg font-medium text-headlight/90 md:text-xl"
          >
            <span
              className="h-1.5 w-6 shrink-0 rounded-full bg-insure"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
