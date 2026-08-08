export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  href: string | null;
  image: string;
  status: "live" | "coming";
};

export const projects: Project[] = [
  {
    id: "vibeld",
    title: "Vibeld",
    category: "AI Website Builder",
    year: "2026",
    description:
      "Agency-grade multi-page sites from a one-line brief — describe, edit with chat, publish.",
    href: "https://vibeld.com",
    image: "/images/horizon.png",
    status: "live",
  },
  {
    id: "saas-nova",
    title: "Nova Metrics",
    category: "SaaS Marketing",
    year: "2026",
    description: "Product marketing site for a B2B analytics platform — homepage, pricing, and docs entry.",
    href: null,
    image: "/images/sit-blue.png",
    status: "coming",
  },
  {
    id: "atelier-dental",
    title: "Atelier Dental",
    category: "Clinic Website",
    year: "2026",
    description: "Calm, premium multi-page site for a modern dental practice with booking intent.",
    href: null,
    image: "/images/portrait-beam.png",
    status: "coming",
  },
  {
    id: "ember-cafe",
    title: "Ember Café",
    category: "F&B Brand Site",
    year: "2026",
    description: "Warm editorial landing experience for a specialty coffee brand.",
    href: null,
    image: "/images/walk-silhouette.png",
    status: "coming",
  },
  {
    id: "lumen-realty",
    title: "Lumen Realty",
    category: "Real Estate",
    year: "2026",
    description: "High-trust property marketing site with listings-ready layout.",
    href: null,
    image: "/images/profile-red.png",
    status: "coming",
  },
  {
    id: "north-counsel",
    title: "North Counsel",
    category: "Professional Services",
    year: "2026",
    description: "Sharp law firm website focused on clarity, credibility, and contact conversion.",
    href: null,
    image: "/images/portrait-upward.png",
    status: "coming",
  },
  {
    id: "pulse-fit",
    title: "Pulse Fit",
    category: "Fitness & Wellness",
    year: "2026",
    description: "Energetic fitness brand site with programs, coaches, and membership CTA.",
    href: null,
    image: "/images/hero-silhouette.png",
    status: "coming",
  },
  {
    id: "creator-folio",
    title: "Creator Folio",
    category: "Personal Brand",
    year: "2026",
    description: "Personal brand portfolio template for founders and creatives.",
    href: null,
    image: "/images/sit-blue.png",
    status: "coming",
  },
];
