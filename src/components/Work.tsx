"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { liveProjects, plannedProjects } from "@/data/projects";

export function Work() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="relative scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-meta mb-3 text-[var(--accent)]">Selected work</p>
            <h2 className="text-h1 text-white">Projects with presence.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-base">
            Live product work first. Open a case study for the story — or visit the live site.
          </p>
        </div>

        <div className="space-y-8">
          {liveProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group grid overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.03] transition-colors duration-500 hover:border-[var(--accent)]/35 lg:grid-cols-[1.15fr_0.85fr]"
            >
              <Link href={`/work/${project.id}`} className="relative min-h-[280px] overflow-hidden lg:min-h-[440px]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  quality={88}
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-[1.15s] ease-out group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70 lg:bg-gradient-to-r lg:from-transparent lg:to-black/25" />
                <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur-md transition group-hover:border-[var(--accent)]/50 group-hover:text-white">
                  View case study →
                </span>
              </Link>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs tracking-wide text-white/50">
                  <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-[var(--accent)]">
                    Live
                  </span>
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-h2 text-white transition-colors group-hover:text-white">
                  <Link href={`/work/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                  {project.description}
                </p>
                {project.stack ? (
                  <p className="text-meta mt-4 text-white/35">{project.stack}</p>
                ) : null}
                <div className="mt-8 flex flex-wrap gap-5 text-sm">
                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-2 text-[var(--accent)] transition-all hover:gap-3"
                  >
                    Case study
                    <span aria-hidden>→</span>
                  </Link>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-white/55 transition hover:text-white"
                    >
                      Live site
                      <span aria-hidden>↗</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {plannedProjects.length > 0 ? (
          <div className="mt-12 border-t border-white/10 pt-10">
            <p className="text-meta text-white/40">Next case studies</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
              {plannedProjects.map((p) => (
                <li key={p.id}>
                  <span className="text-white/80">{p.title}</span>
                  <span className="text-white/35"> — {p.category}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
