export type ProjectHighlight = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  /** External live URL */
  href: string | null;
  image: string;
  status: "live" | "planned";
  stack?: string;
  /** Case study fields — required for live projects shown on /work/[slug] */
  role?: string;
  services?: string[];
  overview?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  highlights?: ProjectHighlight[];
  gallery?: string[];
};

/** Only `live` projects render in Work. Planned demos stay here until you ship them. */
export const projects: Project[] = [
  {
    id: "vibeld",
    title: "Vibeld",
    category: "Product · Website Builder",
    year: "2026",
    description:
      "Agency-grade multi-page sites from a one-line brief — describe, edit with chat, publish.",
    href: "https://vibeld.com",
    image: "/images/horizon.jpg",
    status: "live",
    stack: "Next.js · Product design · AI workflows",
    role: "Founder · Product · Design · Engineering",
    services: ["Product design", "Marketing site", "Full-stack build"],
    overview:
      "Vibeld turns a one-line business brief into a polished multi-page marketing site you can refine with chat and publish instantly — built for founders and agencies who need craft without a long production cycle.",
    challenge:
      "Most AI site builders feel templated. The product needed to feel agency-grade: multi-page structure, editorial design packs, chat editing that patches surgically, and a publish flow that doesn’t dump users into config hell.",
    approach:
      "Led product direction around describe → edit → publish. Designed a cinematic marketing presence for Vibeld itself, then engineered the builder experience so first output feels intentional — navigation, sections, imagery, and conversion paths included.",
    outcome:
      "A live product at vibeld.com with a clear narrative, working studio flow, and a portfolio-ready case that proves end-to-end product craft — not just a landing page.",
    highlights: [
      { label: "Model", value: "Brief → multi-page site" },
      { label: "Edit", value: "Chat copilot patches" },
      { label: "Ship", value: "Subdomain + custom domain" },
    ],
    gallery: ["/images/horizon.jpg", "/images/portrait-beam.jpg"],
  },
  {
    id: "saas-nova",
    title: "Nova Metrics",
    category: "SaaS Marketing",
    year: "2026",
    description:
      "B2B ops analytics marketing site — homepage, pricing, trial flow, and product UI.",
    href: "https://demo-nova-metrics.vercel.app",
    image: "/images/work/nova-metrics.png",
    status: "live",
    stack: "Next.js · TypeScript · Tailwind · Vercel",
    role: "Design · Front-end development",
    services: ["SaaS marketing site", "Product UI mock", "Conversion design"],
    overview:
      "A cool blue/graphite SaaS marketing site for an ops analytics product — live dashboards, smart alerts, and weekly reports — built to convert founders and ops teams into trials.",
    challenge:
      "SaaS marketing pages often feel template-heavy. Nova needed a credible product presence: clear value prop, pricing clarity, and a dashboard preview that sells the product before signup.",
    approach:
      "Designed a dark, high-trust SaaS look with brand-first hero, dashboard mock as the visual anchor, then features, how-it-works, pricing, FAQ, and a trial form. Shipped as a production Next.js site on Vercel.",
    outcome:
      "A live demo at demo-nova-metrics.vercel.app that proves SaaS marketing craft — product UI, conversion path, and polish suitable for a mid-five-figure site engagement.",
    highlights: [
      { label: "Pages", value: "Home · Pricing · Legal" },
      { label: "Proof", value: "Live dashboard preview" },
      { label: "CTA", value: "Trial form + pricing" },
    ],
    gallery: ["/images/work/nova-metrics.png"],
  },
  {
    id: "atelier-dental",
    title: "Atelier Dental",
    category: "Clinic Website",
    year: "2026",
    description: "Premium multi-page site for a modern dental practice with booking intent.",
    href: null,
    image: "/images/work/atelier-dental.jpg",
    status: "planned",
    stack: "Next.js · Tailwind",
  },
  {
    id: "ember-cafe",
    title: "Ember Café",
    category: "F&B Brand Site",
    year: "2026",
    description: "Warm editorial landing experience for a specialty coffee brand.",
    href: null,
    image: "/images/work/ember-cafe.jpg",
    status: "planned",
    stack: "Next.js · Tailwind",
  },
  {
    id: "lumen-realty",
    title: "Lumen Realty",
    category: "Real Estate",
    year: "2026",
    description: "High-trust property marketing site with listings-ready layout.",
    href: null,
    image: "/images/work/lumen-realty.jpg",
    status: "planned",
    stack: "Next.js · Tailwind",
  },
  {
    id: "north-counsel",
    title: "North Counsel",
    category: "Professional Services",
    year: "2026",
    description: "Law firm website focused on clarity, credibility, and contact conversion.",
    href: null,
    image: "/images/work/north-counsel.jpg",
    status: "planned",
    stack: "Next.js · Tailwind",
  },
  {
    id: "pulse-fit",
    title: "Pulse Fit",
    category: "Fitness & Wellness",
    year: "2026",
    description: "Fitness brand site with programs, coaches, and membership CTA.",
    href: null,
    image: "/images/work/pulse-fit.jpg",
    status: "planned",
    stack: "Next.js · Tailwind",
  },
  {
    id: "creator-folio",
    title: "Creator Folio",
    category: "Personal Brand",
    year: "2026",
    description: "Personal brand portfolio for founders and creatives.",
    href: null,
    image: "/images/work/creator-folio.jpg",
    status: "planned",
    stack: "Next.js · Tailwind",
  },
];

export const liveProjects = projects.filter((p) => p.status === "live");
export const plannedProjects = projects.filter((p) => p.status === "planned");

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

export function getLiveProjectById(id: string) {
  return liveProjects.find((p) => p.id === id);
}

export function getAdjacentLiveProjects(id: string) {
  const index = liveProjects.findIndex((p) => p.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: liveProjects[index - 1] ?? null,
    next: liveProjects[index + 1] ?? null,
  };
}
