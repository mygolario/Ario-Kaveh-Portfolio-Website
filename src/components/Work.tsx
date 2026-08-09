"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { liveProjects, plannedProjects } from "@/data/projects";

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.24em] text-[var(--accent)] uppercase">Selected work</p>
            <h2 className="font-display text-4xl tracking-tight text-white md:text-6xl">
              Projects with presence.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-base">
            Live product work first. New case studies appear here as each demo ships.
          </p>
        </div>

        <div className="space-y-6">
          {liveProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group grid overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.03] lg:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  quality={88}
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs tracking-wide text-white/50">
                  <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-[var(--accent)]">
                    Live
                  </span>
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-display text-3xl text-white md:text-5xl">{project.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                  {project.description}
                </p>
                {project.stack ? <p className="mt-4 text-xs tracking-[0.16em] text-white/35 uppercase">{project.stack}</p> : null}
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm text-[var(--accent)] transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    Visit project
                    <span aria-hidden>→</span>
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        {plannedProjects.length > 0 ? (
          <div className="mt-12 border-t border-white/10 pt-10">
            <p className="text-xs tracking-[0.2em] text-white/40 uppercase">Next case studies</p>
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
