"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Mail, GitBranch } from "lucide-react";
import { contact } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Reveal } from "@/components/case-district";
import WordReveal from "@/components/word-reveal";

export default function Dawn() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "0%"]);

  return (
    <section id="dawn" ref={ref} className="relative overflow-hidden">
      <motion.div
        className="absolute inset-[-8%]"
        style={reducedMotion ? undefined : { y: bgY }}
        aria-hidden="true"
      >
        <Image
          src={asset("/journey/dawn.webp")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/30 to-night/90" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-4xl flex-col items-center justify-center px-6 py-28 text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-dawn">
            KM 100 — Sunrise
          </p>
          <h2 className="font-display mt-6 text-5xl font-bold tracking-tight md:text-8xl">
            <WordReveal
              text="Where to *next?*"
              accentClass="serif-accent text-dawn"
            />
          </h2>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-headlight/75">
            The road is open. If you are building something with real
            substance — or want an engineer who ships whole platforms —
            let&apos;s talk.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-dawn px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-night transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]"
          >
            <Mail size={15} aria-hidden="true" />
            {contact.email}
          </a>
          <a
            href={contact.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-headlight/25 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-headlight transition-colors duration-200 hover:border-headlight/60"
          >
            <GitBranch size={15} aria-hidden="true" />
            GitLab
          </a>
        </Reveal>

        <footer className="absolute bottom-6 inset-x-0 px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog/70">
            Sumiyabazar — built with Next.js and Framer Motion, on one long
            night drive. © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </section>
  );
}
