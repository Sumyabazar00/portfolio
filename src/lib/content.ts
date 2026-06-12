export const chapters = [
  { id: "ignition", label: "Ignition", km: 0 },
  { id: "highway", label: "Highway", km: 12 },
  { id: "insure", label: "District Insure", km: 34 },
  { id: "dbox", label: "District DBOX", km: 58 },
  { id: "overlook", label: "Overlook", km: 81 },
  { id: "dawn", label: "Dawn", km: 100 },
] as const;

export const skillSigns = [
  {
    exit: "01",
    title: "Backend",
    items: ["Go", "Fiber", "Node.js", "Express", "REST APIs"],
  },
  {
    exit: "02",
    title: "Frontend",
    items: ["Vue / Nuxt 3", "React / Next.js", "Tailwind", "NuxtUI", "shadcn/ui"],
  },
  {
    exit: "03",
    title: "Data",
    items: ["PostgreSQL", "MySQL", "Prisma", "Drizzle", "GORM"],
  },
  {
    exit: "04",
    title: "Infra",
    items: ["Docker", "Nginx", "PM2", "VPS ops", "GitLab CI"],
  },
  {
    exit: "05",
    title: "AI & Automation",
    items: ["OpenAI API", "RAG pipelines", "n8n", "AI claim estimation"],
  },
  {
    exit: "06",
    title: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "Material 3", "Flutter (learning)"],
  },
] as const;

export const insurePlatform = {
  district: "District 01",
  name: "Insure Platform",
  tagline: "The *operating* *system* for Mongolia's insurance industry",
  description:
    "A multi-stakeholder ecosystem where brokers, insurers, loss adjusters and customers transact in one network — contracts, claims, damage assessment, payments and regulator sync, built and run by one engineer.",
  stats: [
    { value: 110, suffix: "+", label: "database tables" },
    { value: 82, suffix: "", label: "API handlers" },
    { value: 394, suffix: "", label: "Vue components" },
    { value: 9, suffix: "+", label: "external integrations" },
  ],
  features: [
    {
      icon: "network",
      title: "Multi-tenant ecosystem",
      text: "Insurers, brokers and adjusters scoped by organization across 41 route groups, driven by a four-level RBAC menu system.",
    },
    {
      icon: "landmark",
      title: "Regulator integration",
      text: "Mandatory vehicle liability (AJDH) policies priced by the national regulator, with atomic dual-record purchases on mobile.",
    },
    {
      icon: "lock",
      title: "Three-layer auth + encryption",
      text: "Employee JWTs, partner HMAC tokens and customer sessions — every payload AES-256 encrypted in transit.",
    },
    {
      icon: "zap",
      title: "Real-time event hub",
      text: "WebSocket notifications pushing claim updates, messages and payment confirmations to web and mobile clients.",
    },
    {
      icon: "credit-card",
      title: "Payment orchestration",
      text: "Idempotent QPay settlement with per-product invoice splits and a corporate bank gateway service.",
    },
    {
      icon: "smartphone",
      title: "Insure Mobile",
      text: "Native Android customer app in Kotlin and Jetpack Compose — Material 3, encrypted API layer, bringing end customers into the same ecosystem.",
    },
    {
      icon: "bot",
      title: "AI Estimation Service",
      text: "A standalone Go microservice that estimates vehicle damage costs from claim evidence, feeding adjuster workflows.",
    },
    {
      icon: "file-text",
      title: "Document service",
      text: "Headless document pipeline rendering policy PDFs and claim letters for every contract issued on the platform.",
    },
  ],
  stack: ["Go", "Fiber", "GORM", "PostgreSQL", "Nuxt 3", "Tailwind", "Kotlin / Compose"],
} as const;

export const dreamBox = {
  district: "District 02",
  name: "DreamBox",
  tagline: "Live loot-case platform with *real* *money* and *real* *users*",
  url: "dbox.mn",
  description:
    "A CS2 loot-case platform running in production: players open cases, win skins and withdraw them through a fully automated Steam trade bot. Real payments, real inventory, real operational stakes.",
  stats: [
    { value: 5000, suffix: "+", label: "registered players" },
    { value: 169, suffix: "", label: "automated tests" },
    { value: 4, suffix: "", label: "independent auth layers" },
    { value: 23, suffix: "+", label: "admin API routes" },
  ],
  features: [
    {
      icon: "bot",
      title: "Steam trade bot",
      text: "Automated skin delivery with TOTP trade confirmation, refresh-token sessions and a DB-driven dispatch queue isolated in its own process.",
    },
    {
      icon: "credit-card",
      title: "Real-money wallet",
      text: "QPay settlement with idempotent callbacks, a transactional balance ledger and a full admin audit trail.",
    },
    {
      icon: "boxes",
      title: "Case engine",
      text: "Rarity tiers, drop-rate modeling and admin-managed stock and pricing behind every case opening.",
    },
    {
      icon: "shield-check",
      title: "Defense in depth",
      text: "Four auth layers — edge middleware, layouts, API guards and role checks — kept in sync across five roles.",
    },
    {
      icon: "radio",
      title: "Live updates",
      text: "Server-sent events and an internal event bus stream openings, wins and withdrawals to the UI in real time.",
    },
    {
      icon: "activity",
      title: "Production discipline",
      text: "169 tests across 7 suites, strict migration policy, PM2 process isolation and pre-flight checks on critical paths.",
    },
  ],
  stack: ["Next.js 16", "React 19", "Express", "Prisma", "PostgreSQL", "Zustand", "Framer Motion"],
} as const;

export const otherProjects = [
  {
    name: "Hunt Digital",
    text: "Mongolia's hunting and fishing license platform — multi-role access, enforcement tooling, full i18n.",
    stack: ["Go", "Next.js 15", "PostgreSQL"],
  },
  {
    name: "AI Insurance Claims",
    text: "Intelligent claim processing with AI assessment automation and fraud signals.",
    stack: ["Go", "Next.js", "OpenAI API"],
  },
  {
    name: "Vet Clinic Manager",
    text: "Multi-tenant veterinary clinic suite — appointments, invoicing, inventory.",
    stack: ["React 19", "Express", "Drizzle"],
  },
  {
    name: "Auction",
    text: "Full-stack auction marketplace with real-time bidding and Dockerized CI/CD.",
    stack: ["Go", "Next.js", "Docker"],
  },
] as const;

export const about = {
  lines: [
    "I'm Sumiyabazar — a fullstack engineer from Ulaanbaatar, Mongolia, born in 2003.",
    "Since January 2025 I've been the sole engineer behind an InsureTech company's entire product: backend, frontend, mobile, infrastructure and the database underneath it all.",
    "I build things that last and have real substance — no eye-wash projects, no corner-cutting. Every platform on this page runs in production with real users and real money.",
    "Right now I'm expanding into native mobile with Kotlin and Jetpack Compose, and aiming at the kind of senior engineering judgment that survives the AI era.",
  ],
  facts: [
    { k: "BASE", v: "Ulaanbaatar, Mongolia" },
    { k: "ROLE", v: "Solo fullstack engineer, InsureTech" },
    { k: "SINCE", v: "January 2025" },
    { k: "NOW", v: "Kotlin / Compose, Flutter" },
  ],
} as const;

export const contact = {
  email: "bazarbazar821@gmail.com",
  gitlab: "https://gitlab.com/bazarbazar821",
} as const;
