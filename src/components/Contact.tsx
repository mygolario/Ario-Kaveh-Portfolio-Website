"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { GlowButton } from "@/components/GlowButton";

const socialEntries = [
  { key: "linkedin", label: "LinkedIn", href: site.socials.linkedin },
  { key: "telegram", label: "Telegram", href: site.socials.telegram },
  { key: "instagram", label: "Instagram", href: site.socials.instagram },
  { key: "whatsapp", label: "WhatsApp", href: site.socials.whatsapp },
] as const;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const project = String(data.get("project") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Project inquiry from ${name || "your site"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="relative scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs tracking-[0.24em] text-[var(--accent)] uppercase">Contact</p>
          <h2 className="font-display text-4xl tracking-tight text-white md:text-6xl">
            Tell me about the project.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55 md:text-base">
            Share goals, timeline, and links. We&apos;ll align on scope, then I&apos;ll send a clear proposal and invoice.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[var(--accent)]/40"
            >
              <div>
                <p className="text-xs tracking-[0.16em] text-white/40 uppercase">Email</p>
                <p className="mt-1 text-white">{site.email}</p>
              </div>
              <span className="text-[var(--accent)] transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              {socialEntries.map((item) =>
                item.href ? (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white transition-colors hover:border-[var(--accent)]/40"
                  >
                    {item.label}
                  </a>
                ) : (
                  <div
                    key={item.key}
                    className="rounded-2xl border border-dashed border-white/10 px-4 py-4 text-sm text-white/30"
                    title="Coming soon"
                  >
                    {item.label}
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm text-white/60">
              Name
              <input
                required
                name="name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]/60"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm text-white/60">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]/60"
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm text-white/60">
            Project type
            <select
              name="project"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]/60"
              defaultValue="Landing page"
            >
              <option>Landing page</option>
              <option>Business website</option>
              <option>SaaS / product site</option>
              <option>Portfolio site</option>
              <option>UI redesign</option>
              <option>Other</option>
            </select>
          </label>

          <label className="mt-5 block text-sm text-white/60">
            Message
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]/60"
              placeholder="Goals, timeline, references…"
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <GlowButton type="submit">{site.cta}</GlowButton>
            {status === "sent" ? (
              <p className="text-sm text-white/55">Opening your email client…</p>
            ) : (
              <p className="text-sm text-white/40">Usually replies within 24 hours.</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
