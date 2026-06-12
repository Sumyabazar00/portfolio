"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { otherProjects, about } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Reveal } from "@/components/case-district";
import WordReveal from "@/components/word-reveal";

export default function Overlook() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section id="overlook" ref={ref} className="relative overflow-hidden">
      <motion.div
        className="absolute inset-[-10%]"
        style={reducedMotion ? undefined : { y: bgY }}
        aria-hidden="true"
      >
        <Image
          src={asset("/journey/overlook.webp")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/60 to-night" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-40">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-dawn">
            KM 081 — The Overlook
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            <WordReveal
              text="Pull over. *Look* *down.*"
              accentClass="serif-accent text-dawn"
            />
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-fog">
            Every light down there is something I shipped — platforms for
            insurers, regulators, clinics and marketplaces.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-headlight/10">
          {otherProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="group grid gap-3 border-b border-headlight/10 py-8 transition-colors duration-300 hover:border-dawn/40 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-8">
                <span className="font-mono text-[11px] tracking-[0.25em] text-fog/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-headlight transition-transform duration-300 ease-out group-hover:translate-x-3 md:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">
                    {p.text}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-headlight/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-fog transition-colors duration-300 group-hover:border-dawn/30 group-hover:text-headlight"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-28 grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-dawn">
              The Driver
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              <WordReveal
                text="One engineer, *whole* *platforms*"
                accentClass="serif-accent text-dawn"
              />
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-fog">
              {about.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="glass rounded-2xl p-6">
              {about.facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`flex items-baseline justify-between gap-4 py-3.5 ${
                    i > 0 ? "border-t border-headlight/8" : ""
                  }`}
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                    {f.k}
                  </dt>
                  <dd className="text-right text-sm text-headlight">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
