"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowButton } from "@/components/GlowButton";

gsap.registerPlugin(ScrollTrigger);

export function AtmosphereStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !sectionRef.current || !imageRef.current) return;

    const tween = gsap.fromTo(
      imageRef.current,
      { yPercent: -12 },
      {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] border border-white/8">
        <div className="relative min-h-[280px] overflow-hidden md:min-h-[420px]">
          <div ref={imageRef} className="absolute inset-[-12%] will-change-transform">
            <Image
              src="/images/horizon.jpg"
              alt=""
              fill
              quality={88}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/20" />
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <div className="max-w-xl">
              <p className="text-meta text-[var(--accent)]">Approach</p>
              <h2 className="text-h2 mt-3 text-white">Built to feel premium. Shipped to convert.</h2>
              <p className="mt-4 text-sm text-white/60 md:text-base">
                Strong first impression, clear offer, and motion that feels intentional — not noisy.
              </p>
              <div className="mt-6">
                <GlowButton href="/#contact">Start a project</GlowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
