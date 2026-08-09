"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { liveProjects, plannedProjects, type Project } from "@/data/projects";
import { GlowButton } from "@/components/GlowButton";

gsap.registerPlugin(ScrollTrigger);

function StoryBlock({ project }: { project: Project }) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !mediaRef.current || !sectionRef.current) return;
    if (window.innerWidth < 1024) return;

    const image = mediaRef.current.querySelector("[data-parallax-image]");
    if (!image) return;

    const tween = gsap.fromTo(
      image,
      { yPercent: -8, scale: 1.08 },
      {
        yPercent: 8,
        scale: 1,
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
    <article
      ref={sectionRef}
      className="border-t border-white/10 py-16 first:border-t-0 md:py-24"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="lg:sticky lg:top-28">
          <div
            ref={mediaRef}
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-white/10 md:aspect-[16/11] lg:aspect-[4/5]"
          >
            <div data-parallax-image className="absolute inset-[-8%] will-change-transform">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                quality={88}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--accent)]/40 bg-black/45 px-3 py-1 text-xs text-[var(--accent)] backdrop-blur-md">
                Live
              </span>
              <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs text-white/75 backdrop-blur-md">
                {project.year}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-14 lg:gap-20 lg:py-6">
          <div>
            <p className="text-meta text-[var(--accent)]">{project.category}</p>
            <h3 className="text-h1 mt-3 text-white">{project.title}</h3>
            <p className="mt-5 max-w-xl text-base text-white/60 md:text-lg">
              {project.overview ?? project.description}
            </p>
            {project.stack ? <p className="text-meta mt-5 text-white/35">{project.stack}</p> : null}
          </div>

          {project.challenge ? (
            <div>
              <p className="text-meta text-white/40">01 · Challenge</p>
              <h4 className="text-h3 mt-3 text-white">What had to be solved</h4>
              <p className="mt-4 max-w-xl text-white/55">{project.challenge}</p>
            </div>
          ) : null}

          {project.approach ? (
            <div>
              <p className="text-meta text-white/40">02 · Approach</p>
              <h4 className="text-h3 mt-3 text-white">How it was built</h4>
              <p className="mt-4 max-w-xl text-white/55">{project.approach}</p>
            </div>
          ) : null}

          {project.outcome ? (
            <div>
              <p className="text-meta text-white/40">03 · Outcome</p>
              <h4 className="text-h3 mt-3 text-white">What shipped</h4>
              <p className="mt-4 max-w-xl text-white/55">{project.outcome}</p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <GlowButton href={`/work/${project.id}`}>Case study</GlowButton>
            {project.href ? (
              <GlowButton href={project.href} variant="ghost">
                Live site
              </GlowButton>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-4 md:mb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-meta mb-3 text-[var(--accent)]">Selected work</p>
            <h2 className="text-h1 text-white">Projects with presence.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-base">
            Scroll the story. Sticky media on desktop — full case studies one click away.
          </p>
        </div>

        <div>
          {liveProjects.map((project) => (
            <StoryBlock key={project.id} project={project} />
          ))}
        </div>

        {plannedProjects.length > 0 ? (
          <div className="mt-8 border-t border-white/10 pt-10">
            <p className="text-meta text-white/40">Next case studies</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
              {plannedProjects.map((p) => (
                <li key={p.id}>
                  <span className="text-white/80">{p.title}</span>
                  <span className="text-white/35"> — {p.category}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/40">
              Want yours here next?{" "}
              <Link href="/#contact" className="text-[var(--accent)] hover:underline">
                Start a project
              </Link>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
