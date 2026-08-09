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
].filter((item): item is { key: string; label: string; href: string } => Boolean(item.href));

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          project: data.get("project"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Could not send. Please email me directly.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please email me directly.");
    }
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
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[var(--accent)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <div>
                <p className="text-xs tracking-[0.16em] text-white/40 uppercase">Email</p>
                <p className="mt-1 text-white">{site.email}</p>
              </div>
              <span className="text-[var(--accent)] transition-transform group-hover:translate-x-1">→</span>
            </a>

            {socialEntries.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {socialEntries.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white transition-colors hover:border-[var(--accent)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
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
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm text-white/60">
              Name
              <input
                required
                name="name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]/60 focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm text-white/60">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]/60 focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm text-white/60">
            Project type
            <select
              name="project"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]/60 focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
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
              className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]/60 focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
              placeholder="Goals, timeline, references…"
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <GlowButton type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : site.cta}
            </GlowButton>
            {status === "sent" ? (
              <p className="text-sm text-emerald-400/90">Message sent. I&apos;ll reply within 24 hours.</p>
            ) : null}
            {status === "error" ? <p className="text-sm text-red-400/90">{error}</p> : null}
            {status === "idle" || status === "loading" ? (
              <p className="text-sm text-white/40">Usually replies within 24 hours.</p>
            ) : null}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
