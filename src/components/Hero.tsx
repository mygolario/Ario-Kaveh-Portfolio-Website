"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";
import { GlowButton } from "@/components/GlowButton";

/** Tiny warm placeholder — matches hero tones, avoids white flash */
const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 + i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#0c0606]">
      {/* CSS picks the image — no JS swap flash on refresh */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-silhouette.jpg"
          alt=""
          fill
          priority
          quality={88}
          placeholder="blur"
          blurDataURL={HERO_BLUR}
          sizes="(min-width: 1024px) 0px, 100vw"
          className="object-cover object-[center_36%] lg:hidden"
          aria-hidden
        />
        <Image
          src="/images/hero-desktop-1080.jpg"
          alt="Ario Kaveh cinematic portrait"
          fill
          priority
          quality={88}
          placeholder="blur"
          blurDataURL={HERO_BLUR}
          sizes="(max-width: 1023px) 0px, 100vw"
          className="hidden object-cover object-center lg:block"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col px-5 pb-10 pt-24 md:px-8 md:pb-14 md:pt-28">
        <div className="mt-auto grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
          <motion.ul
            custom={0}
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="hidden max-w-[220px] space-y-2 text-sm text-white/65 lg:block"
          >
            {site.servicesNav.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[var(--accent)]">/</span>
                {item}
              </li>
            ))}
          </motion.ul>

          <div className="text-center">
            <motion.p
              custom={1}
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              className="mb-3 text-sm tracking-[0.22em] text-white/70 uppercase md:text-base"
            >
              Hi, I am
            </motion.p>
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              className="font-display text-[clamp(3.4rem,14vw,8.5rem)] leading-[0.88] font-semibold tracking-[-0.04em] text-white"
            >
              {site.shortName}
            </motion.h1>
            <motion.p
              custom={3}
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              className="mt-2 font-display text-[clamp(1.6rem,5vw,3.2rem)] tracking-[-0.03em] text-white/85"
            >
              Kaveh
            </motion.p>
            <motion.p
              custom={4}
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              className="mx-auto mt-5 max-w-md text-sm text-white/70 md:text-base"
            >
              {site.title}. {site.tagline}
            </motion.p>
            <motion.div
              custom={5}
              variants={fadeUp}
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <GlowButton href="#contact">{site.cta}</GlowButton>
              <GlowButton href="#work" variant="ghost">
                View work
              </GlowButton>
            </motion.div>
          </div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="hidden justify-self-end text-right text-sm text-white/65 lg:block"
          >
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[var(--accent)]">
              +
            </div>
            <p className="max-w-[200px] leading-relaxed">{site.availability}</p>
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 text-[11px] tracking-[0.18em] text-white/45 uppercase md:mt-14">
          <span>Scroll</span>
          <span className="hidden sm:inline">Editorial websites · Product craft</span>
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
