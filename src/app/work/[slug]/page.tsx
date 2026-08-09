import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import { Header } from "@/components/Header";
import {
  getAdjacentLiveProjects,
  getLiveProjectById,
  liveProjects,
} from "@/data/projects";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return liveProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getLiveProjectById(slug);
  if (!project) return {};

  return {
    title: `${project.title} · Case study`,
    description: project.overview ?? project.description,
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.overview ?? project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getLiveProjectById(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentLiveProjects(project.id);
  const gallery = project.gallery?.length ? project.gallery : [project.image];

  return (
    <main className="flex-1">
      <Header />

      <article>
        <header className="relative min-h-[70svh] overflow-hidden pt-24 md:min-h-[85svh] md:pt-28">
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt=""
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/55 to-black/35" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1400px] flex-col justify-end px-5 pb-12 md:min-h-[85svh] md:px-8 md:pb-16">
            <Link
              href="/#work"
              className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              <span aria-hidden>←</span> All work
            </Link>
            <p className="text-meta text-[var(--accent)]">
              {project.category} · {project.year}
            </p>
            <h1 className="text-h1 mt-3 max-w-4xl text-white">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
              {project.overview ?? project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.href ? (
                <GlowButton href={project.href}>{`Visit ${project.title}`}</GlowButton>
              ) : null}
              <GlowButton href="/#contact" variant="ghost">
                Start a project
              </GlowButton>
            </div>
          </div>
        </header>

        <section className="border-y border-white/10 px-5 py-10 md:px-8">
          <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-3">
            <div>
              <p className="text-meta text-white/40">Role</p>
              <p className="mt-2 text-white">{project.role ?? "Design & development"}</p>
            </div>
            <div>
              <p className="text-meta text-white/40">Stack</p>
              <p className="mt-2 text-white">{project.stack ?? "—"}</p>
            </div>
            <div>
              <p className="text-meta text-white/40">Services</p>
              <p className="mt-2 text-white">
                {project.services?.join(" · ") ?? "Web design & development"}
              </p>
            </div>
          </div>
        </section>

        {project.highlights?.length ? (
          <section className="px-5 py-14 md:px-8 md:py-20">
            <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-3">
              {project.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-meta text-[var(--accent)]">{item.label}</p>
                  <p className="text-h3 mt-3 text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="space-y-10">
              {project.challenge ? (
                <div>
                  <p className="text-meta text-[var(--accent)]">Challenge</p>
                  <h2 className="text-h3 mt-3 text-white">What had to be solved</h2>
                  <p className="mt-4 text-white/60">{project.challenge}</p>
                </div>
              ) : null}
              {project.approach ? (
                <div>
                  <p className="text-meta text-[var(--accent)]">Approach</p>
                  <h2 className="text-h3 mt-3 text-white">How it was built</h2>
                  <p className="mt-4 text-white/60">{project.approach}</p>
                </div>
              ) : null}
              {project.outcome ? (
                <div>
                  <p className="text-meta text-[var(--accent)]">Outcome</p>
                  <h2 className="text-h3 mt-3 text-white">What shipped</h2>
                  <p className="mt-4 text-white/60">{project.outcome}</p>
                </div>
              ) : null}
            </div>

            <div className="space-y-5">
              {gallery.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="group relative aspect-[16/10] overflow-hidden rounded-[1.6rem] border border-white/10"
                >
                  <Image
                    src={src}
                    alt={`${project.title} visual ${index + 1}`}
                    fill
                    quality={88}
                    sizes="(max-width:1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-meta text-white/40">Next step</p>
              <h2 className="text-h2 mt-3 text-white">Have a project in mind?</h2>
              <p className="mt-3 max-w-md text-white/55">
                Tell me the goal — I&apos;ll come back with scope, timeline, and a clear proposal.
              </p>
            </div>
            <GlowButton href="/#contact">{site.cta}</GlowButton>
          </div>
        </section>

        <nav className="border-t border-white/10 px-5 py-10 md:px-8">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
            {prev ? (
              <Link href={`/work/${prev.id}`} className="group max-w-[45%]">
                <p className="text-meta text-white/40">Previous</p>
                <p className="mt-2 text-lg text-white transition group-hover:text-[var(--accent)] md:text-2xl">
                  ← {prev.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/work/${next.id}`} className="group max-w-[45%] text-right">
                <p className="text-meta text-white/40">Next</p>
                <p className="mt-2 text-lg text-white transition group-hover:text-[var(--accent)] md:text-2xl">
                  {next.title} →
                </p>
              </Link>
            ) : (
              <Link href="/#work" className="group text-right">
                <p className="text-meta text-white/40">Work</p>
                <p className="mt-2 text-lg text-white transition group-hover:text-[var(--accent)] md:text-2xl">
                  Back to work →
                </p>
              </Link>
            )}
          </div>
        </nav>
      </article>

      <Footer />
    </main>
  );
}
