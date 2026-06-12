"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  animate,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useScrollInView } from "@/lib/use-scroll-in-view";
import {
  Network,
  Landmark,
  Lock,
  Zap,
  CreditCard,
  Bot,
  Boxes,
  ShieldCheck,
  Radio,
  Activity,
  Smartphone,
  FileText,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import WordReveal from "@/components/word-reveal";

const icons: Record<string, LucideIcon> = {
  network: Network,
  landmark: Landmark,
  lock: Lock,
  zap: Zap,
  "credit-card": CreditCard,
  bot: Bot,
  boxes: Boxes,
  "shield-check": ShieldCheck,
  radio: Radio,
  activity: Activity,
  smartphone: Smartphone,
  "file-text": FileText,
};

const accents = {
  insure: {
    label: "text-insure",
    bar: "bg-insure",
    chip: "border-insure/25 text-insure",
    cardHover: "hover:border-insure/40",
    iconBg: "bg-insure/10 text-insure",
    glow: "bg-[radial-gradient(ellipse_at_top,rgba(91,130,255,0.10),transparent_55%)]",
  },
  dbox: {
    label: "text-dbox",
    bar: "bg-dbox-neon",
    chip: "border-dbox-neon/30 text-dbox",
    cardHover: "hover:border-dbox-neon/45",
    iconBg: "bg-dbox-neon/15 text-dbox",
    glow: "bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_55%)]",
  },
} as const;

export type DistrictData = {
  district: string;
  name: string;
  tagline: string;
  url?: string;
  description: string;
  stats: ReadonlyArray<{ value: number; suffix: string; label: string }>;
  features: ReadonlyArray<{ icon: string; title: string; text: string }>;
  stack: ReadonlyArray<string>;
};

export default function CaseDistrict({
  id,
  km,
  index,
  data,
  accent,
  image,
}: {
  id: string;
  km: string;
  index: string;
  data: DistrictData;
  accent: keyof typeof accents;
  image: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const a = accents[accent];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id={id} ref={ref} className="relative overflow-hidden">
      <motion.div
        className="absolute inset-[-10%]"
        style={reducedMotion ? undefined : { y: bgY }}
        aria-hidden="true"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/55 to-night" />
      </motion.div>
      <div className={`absolute inset-0 ${a.glow}`} aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-40">
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute -top-4 right-2 select-none text-[9rem] font-bold leading-none text-headlight/[0.05] md:text-[16rem]"
        >
          {index}
        </span>
        <Reveal>
          <p
            className={`font-mono text-[11px] uppercase tracking-[0.4em] ${a.label}`}
          >
            {km} — {data.district}
          </p>
          <h2 className="font-display mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            <WordReveal text={data.name} />
          </h2>
          <p className="mt-3 text-lg md:text-xl text-headlight/80">
            <WordReveal
              text={data.tagline}
              delay={0.15}
              accentClass={`serif-accent ${a.label}`}
            />
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-fog">
            {data.description}
            {data.url && (
              <a
                href={`https://${data.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-3 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest ${a.label} hover:underline`}
              >
                {data.url}
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            )}
          </p>
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-headlight/10 bg-headlight/10 md:grid-cols-4">
          {data.stats.map((s) => (
            <div key={s.label} className="bg-asphalt/80 p-6 backdrop-blur-sm">
              <div className="font-display text-3xl font-bold tabular-nums md:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.features.map((f, i) => {
            const Icon = icons[f.icon] ?? Zap;
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <div
                  className={`glass h-full rounded-2xl p-6 transition-colors duration-300 ${a.cardHover}`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${a.iconBg}`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex flex-wrap gap-2.5">
          {data.stack.map((t) => (
            <span
              key={t}
              className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest ${a.chip}`}
            >
              {t}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useScrollInView(ref);
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 36 }}
      animate={
        reducedMotion || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }
      }
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useScrollInView(ref);
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!inView || reducedMotion) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reducedMotion]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
