"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.24em] text-[var(--accent)] uppercase">Selected work</p>
            <h2 className="font-display text-4xl tracking-tight text-white md:text-6xl">
              Projects with presence.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-base">
            Live product work and curated demos. More case studies ship as each build goes live.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-white/[0.03]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-90" />
                <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] tracking-wide text-white/80 backdrop-blur-md">
                  {project.status === "live" ? "Live" : "Coming soon"}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="mb-2 flex items-center justify-between gap-3 text-xs text-white/55">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-display text-2xl text-white md:text-3xl">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/60">{project.description}</p>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent)] transition-all hover:gap-3"
                  >
                    Visit project
                    <span aria-hidden>→</span>
                  </a>
                ) : (
                  <p className="mt-4 text-sm text-white/40">Demo link landing soon</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
