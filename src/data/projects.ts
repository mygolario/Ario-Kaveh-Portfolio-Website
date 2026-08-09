export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  href: string | null;
  image: string;
  status: "live" | "planned";
  /** Short stack note for case studies */
  stack?: string;
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
    stack: "Next.js · Product design",
  },
  // --- Planned demos (hidden until status: "live" + real href + product screenshot) ---
  {
    id: "saas-nova",
    title: "Nova Metrics",
    category: "SaaS Marketing",
    year: "2026",
    description: "B2B analytics marketing site — homepage, pricing, and docs entry.",
    href: null,
    image: "/images/work/nova-metrics.jpg",
    status: "planned",
    stack: "Next.js · Tailwind",
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
