export const site = {
  name: "Ario Kaveh",
  shortName: "Ario",
  logo: "Ario.",
  title: "Web Designer & Developer",
  tagline: "High-converting websites for brands and products.",
  description:
    "Ario Kaveh — web designer and developer crafting cinematic marketing sites, product pages, and digital experiences.",
  email: "kavehcareer@gmail.com",
  cta: "Start a project",
  availability: "Open for international projects",
  servicesNav: ["Landing pages", "Business websites", "SaaS & product sites", "UI redesign"],
  socials: {
    linkedin: "https://www.linkedin.com/in/ario-kaveh-a2497538a/",
    telegram: null as string | null,
    instagram: null as string | null,
    whatsapp: null as string | null,
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const services = [
  {
    id: "01",
    title: "Landing pages",
    description: "Focused single-page sites built to convert — clear offer, strong visuals, fast load.",
  },
  {
    id: "02",
    title: "Business websites",
    description: "Multi-page sites for brands that need presence, trust, and room to grow.",
  },
  {
    id: "03",
    title: "SaaS & product sites",
    description: "Marketing sites for products — messaging, pricing, and launch-ready structure.",
  },
  {
    id: "04",
    title: "Portfolio sites",
    description: "Personal and studio portfolios that feel editorial, not templated.",
  },
  {
    id: "05",
    title: "UI redesigns",
    description: "Refresh an existing site with sharper hierarchy, motion, and modern craft.",
  },
] as const;
