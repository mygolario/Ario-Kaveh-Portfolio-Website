import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit, Syne } from "next/font/google";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { site } from "@/data/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} · ${site.title}`,
    description: site.description,
    type: "website",
    url: site.url,
    images: [{ url: "/images/hero-desktop-1080.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.title}`,
    description: site.description,
    images: ["/images/hero-desktop-1080.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.title,
  description: site.description,
  email: site.email,
  sameAs: [site.socials.linkedin].filter(Boolean),
  knowsAbout: [
    "Web design",
    "Web development",
    "Landing pages",
    "SaaS marketing websites",
    "Next.js",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-silhouette.jpg"
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-desktop-1080.jpg"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)]">
        <a
          href="/#work"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to work
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
