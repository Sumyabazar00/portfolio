"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScrollTo } from "@/components/smooth-scroll";

const NAME = "SUMIYABAZAR";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Ignition() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const scrollTo = useScrollTo();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  return (
    <section
      id="ignition"
      ref={ref}
      className="relative h-[100svh] overflow-hidden vignette"
    >
      <motion.div
        className="absolute inset-0"
        style={reducedMotion ? undefined : { scale: bgScale }}
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-0"
          animate={reducedMotion ? undefined : { scale: [1, 1.08, 1] }}
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
        >
          <video
          className="h-full w-full object-cover"
          poster={`${BASE}/journey/keyframe-a.webp`}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
        >
            <source src={`${BASE}/video/hero.mp4`} type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/20 to-night" />
      </motion.div>

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={reducedMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-mono text-[11px] md:text-xs uppercase tracking-[0.4em] text-fog"
        >
          Ulaanbaatar — Night Drive // Ignition
        </motion.p>

        <h1
          className="font-display headline-glow mt-6 text-[13vw] leading-[0.95] font-bold tracking-tight md:text-[8.5rem]"
          aria-label={NAME}
        >
          {NAME.split("").map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              className="inline-block"
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.35 + i * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 max-w-xl text-base md:text-lg text-fog leading-relaxed"
        >
          Fullstack engineer. I ship entire{" "}
          <span className="serif-accent text-headlight">
            production platforms
          </span>{" "}
          solo — insurance ecosystems, real-money gaming, AI-driven claims.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("highway")}
            className="cursor-pointer rounded-full bg-headlight px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-night transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]"
          >
            Start the drive
          </button>
          <button
            onClick={() => scrollTo("dawn")}
            className="cursor-pointer rounded-full border border-headlight/25 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-headlight transition-colors duration-200 hover:border-headlight/60"
          >
            Skip to contact
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo("highway")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex cursor-pointer flex-col items-center gap-2 text-fog hover:text-headlight transition-colors"
        aria-label="Scroll to skills"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll to drive
        </span>
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  );
}
