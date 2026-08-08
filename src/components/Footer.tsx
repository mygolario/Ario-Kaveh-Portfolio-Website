import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl text-white">{site.logo}</p>
          <p className="mt-1 text-sm text-white/40">
            {site.title} · © {year}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/50">
          <a href={`mailto:${site.email}`} className="hover:text-white">
            Email
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://vibeld.com" target="_blank" rel="noreferrer" className="hover:text-white">
            Vibeld
          </a>
        </div>
      </div>
    </footer>
  );
}
