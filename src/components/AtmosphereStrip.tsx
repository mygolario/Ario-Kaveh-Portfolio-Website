"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowButton } from "@/components/GlowButton";

export function AtmosphereStrip() {
  return (
    <section className="relative px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] border border-white/8">
        <div className="relative min-h-[280px] md:min-h-[420px]">
          <Image
            src="/images/horizon.jpg"
            alt=""
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/20" />
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <p className="text-xs tracking-[0.24em] text-[var(--accent)] uppercase">Approach</p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-5xl">
                Built to feel premium. Shipped to convert.
              </h2>
              <p className="mt-4 text-sm text-white/60 md:text-base">
                Strong first impression, clear offer, and motion that feels intentional — not noisy.
              </p>
              <div className="mt-6">
                <GlowButton href="#contact">Start a project</GlowButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
