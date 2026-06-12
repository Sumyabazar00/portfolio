"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useScrollInView } from "@/lib/use-scroll-in-view";

export default function WordReveal({
  text,
  accentClass = "serif-accent",
  className,
  delay = 0,
}: {
  text: string;
  accentClass?: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useScrollInView(ref);
  const reducedMotion = useReducedMotion();

  const words = text.split(" ").map((word) => {
    const accented = word.startsWith("*");
    return { word: word.replaceAll("*", ""), accented };
  });

  if (reducedMotion) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span key={i} className={w.accented ? accentClass : undefined}>
            {w.word}
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} aria-label={text.replaceAll("*", "")}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
            <motion.span
              className={`inline-block ${w.accented ? accentClass : ""}`}
              initial={{ y: "115%" }}
              animate={inView ? { y: 0 } : { y: "115%" }}
              transition={{
                duration: 0.75,
                delay: delay + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {w.word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
