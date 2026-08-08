"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
            <Image
              src="/images/portrait-upward.png"
              alt="Ario Kaveh portrait"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          </div>
          <div className="absolute -right-3 -bottom-3 hidden h-40 w-28 overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:block lg:-right-6">
            <Image src="/images/portrait-beam.png" alt="" fill className="object-cover" sizes="120px" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs tracking-[0.24em] text-[var(--accent)] uppercase">About</p>
          <h2 className="font-display text-4xl tracking-tight text-white md:text-6xl">
            Designer. Builder.
            <span className="block text-white/55">Founder energy.</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/60 md:text-base">
            <p>
              I&apos;m {site.name} — a web designer and developer focused on sites that look cinematic and perform in the real world.
            </p>
            <p>
              I build landing pages, business websites, SaaS marketing sites, and redesigns with a product mindset: clear structure, strong visuals, and clean handoff.
            </p>
            <p>
              Outside client work I&apos;m building{" "}
              <a href="https://vibeld.com" target="_blank" rel="noreferrer" className="text-[var(--accent)] underline-offset-4 hover:underline">
                Vibeld
              </a>
              , an AI website builder for agency-grade marketing sites.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-xs tracking-[0.18em] text-white/40 uppercase">Focus</dt>
              <dd className="mt-2 text-white">Websites & product sites</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.18em] text-white/40 uppercase">Stack</dt>
              <dd className="mt-2 text-white">Next.js · React · Tailwind</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.18em] text-white/40 uppercase">Delivery</dt>
              <dd className="mt-2 text-white">Fast · revision-ready</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.18em] text-white/40 uppercase">Clients</dt>
              <dd className="mt-2 text-white">International</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
