"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40">
        <Image
          src="/images/walk-silhouette.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[var(--bg)]/70 to-[var(--bg)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="mb-3 text-xs tracking-[0.24em] text-[var(--accent)] uppercase">Services</p>
          <h2 className="font-display text-4xl tracking-tight text-white md:text-6xl">
            What I build for clients.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/55 md:text-base">
            Clear packages, fast delivery, production-ready handoff on modern stacks — Next.js, React, and Tailwind by default.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              className="group rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-6 transition-colors duration-500 hover:border-[var(--accent)]/35 hover:bg-white/[0.05] md:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-[var(--accent)]">{service.id}</span>
                <span className="h-px w-16 bg-gradient-to-r from-[var(--accent)]/80 to-transparent transition-all duration-500 group-hover:w-24" />
              </div>
              <h3 className="font-display text-2xl text-white md:text-3xl">{service.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
