# Demo Build Playbook — Ario Kaveh Portfolio

Use this guide in a **separate Cursor workspace**. When each demo is live, come back to the portfolio repo and flip it to `status: "live"`.

## 1. Create the demos workspace

In File Explorer / Cursor:

```
C:\Ario Vibe Coding\Ario-Portfolio-Demos\
```

Open that folder as a **new Cursor window** (File → New Window → Open Folder).

Suggested structure:

```
Ario-Portfolio-Demos/
  01-nova-metrics/          ← SaaS marketing
  02-atelier-dental/        ← Clinic multi-page
  03-ember-cafe/            ← F&B landing
  04-lumen-realty/          ← Real estate
  05-north-counsel/         ← Law / professional
  06-pulse-fit/             ← Fitness
  07-creator-folio/         ← Personal brand
  DEMO-CHECKLIST.md         ← copy of this file (optional)
```

One Next.js app **per demo** (cleanest for Vercel + screenshots).  
GitHub: create repos under `mygolario/` like `demo-nova-metrics`, or one monorepo — separate repos are simpler for a beginner.

---

## 2. Stack (same for every demo)

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --yes
npm install framer-motion
```

Ship on **Vercel** (Ario Projects team), English only, dark or brand-specific look — **not** a clone of your personal portfolio. Each demo should feel like a different client.

---

## 3. Build order (do in this order)

| # | Folder / project | Type | Pages (minimum) | Visual direction | Price signal it proves |
|---|------------------|------|-----------------|------------------|------------------------|
| 1 | `01-nova-metrics` | SaaS marketing | Home, Pricing, Features | Cool blue/graphite, product UI mock | $3.5k–$8k SaaS sites |
| 2 | `02-atelier-dental` | Business multi-page | Home, Services, About, Contact | Calm cream/soft teal, trust | $1.8k–$4k business sites |
| 3 | `03-ember-cafe` | Landing | Single long page | Warm amber, editorial food | $450–$1.2k landings |
| 4 | `04-lumen-realty` | Business | Home, Listings (fake), Contact | Clean navy/white | Business site |
| 5 | `05-north-counsel` | Professional | Home, Practice areas, Contact | Serious black/ivory | Trust / B2B |
| 6 | `06-pulse-fit` | Brand landing | Home + Programs section | Bold contrast, energetic | Landing / brand |
| 7 | `07-creator-folio` | Portfolio template | Home editorial | Minimal typography-led | Portfolio product |

**Vibeld** is already live on your portfolio — do **not** rebuild it as a demo.

---

## 4. Prompt template (paste into Cursor in each demo folder)

```text
Build a production-ready Next.js + Tailwind marketing site for "[CLIENT NAME]".

This is a fictional but realistic client demo for my freelancer portfolio.
Do NOT mention AI, templates, or that this is a demo.

Brand:
- Industry: ...
- Audience: ...
- Personality: ...
- Colors: ...
- Fonts: expressive, not Inter/Roboto/Arial

Pages: ...
Must include:
- Strong first viewport (brand first, one headline, one sentence, one CTA, dominant visual)
- Mobile responsive
- Contact CTA
- SEO metadata
- Deploy-ready for Vercel

Avoid: purple-on-white AI look, fake testimonials with real names of famous people,
generic stock-card grids, location Iran.

When done: npm run build must pass.
```

Fill brand details from the table below.

### Demo briefs (copy into the prompt)

**1. Nova Metrics**  
B2B SaaS analytics for startup ops teams. Product: dashboards, alerts, weekly reports. CTA: “Start free trial”. Sections: Hero, Logo strip (fake), Features, How it works, Pricing (3 tiers), FAQ, CTA. Look: dark UI chrome, electric blue accent, screenshot-style panels.

**2. Atelier Dental**  
Modern private dental clinic. CTA: “Book a consultation”. Pages: Home, Services (whitening, implants, checkup), About doctor (fictional), Contact with form UI. Look: soft light, lots of space, serif or refined sans, photography of clinic atmosphere (use Unsplash carefully or solid color + shapes).

**3. Ember Café**  
Specialty coffee shop / roaster. Single landing: story, menu highlights, locations (1–2 fake), newsletter. Look: warm paper + deep brown + ember orange, large typography.

**4. Lumen Realty**  
Boutique real estate. Home + 3 fake property cards + contact. Look: bright, high-end, thin type, large property imagery.

**5. North Counsel**  
Corporate law boutique. Home, Practice areas, Contact. Look: restrained, black/white/gold line accents, no cartoons.

**6. Pulse Fit**  
Gym / training brand. Landing with programs and membership CTA. Look: high contrast, strong type, motion on scroll.

**7. Creator Folio**  
Personal site for a fictional creative director “Maya Chen”. Olivia-style editorial hero, Work grid (3 projects), About, Contact. Look: editorial, full-bleed imagery.

---

## 5. Definition of done (every demo)

Checklist before you call it finished:

- [ ] `npm run build` succeeds  
- [ ] Deployed on Vercel with a public URL  
- [ ] Desktop + mobile look intentional  
- [ ] Custom metadata title/description  
- [ ] Favicon  
- [ ] No Lorem ipsum left  
- [ ] No “AI built this” wording  
- [ ] One clear primary CTA  
- [ ] Screenshot captured (see §6)

---

## 6. Screenshot for the portfolio

For each live demo:

1. Open the site at **1440×900** (or 1920×1080).  
2. Capture the **hero / first viewport** (full browser or clean crop).  
3. Save as:

```
Ario-Kaveh-Portfolio-Website/public/images/work/<id>.jpg
```

Filenames already reserved in `src/data/projects.ts`:

- `nova-metrics.jpg`
- `atelier-dental.jpg`
- `ember-cafe.jpg`
- `lumen-realty.jpg`
- `north-counsel.jpg`
- `pulse-fit.jpg`
- `creator-folio.jpg`

4. In portfolio `src/data/projects.ts`, change that project:

```ts
href: "https://your-demo.vercel.app",
status: "live",
image: "/images/work/nova-metrics.jpg",
```

5. Commit + push portfolio → Vercel auto-deploys.

---

## 7. Cursor workflow tip

- **Window A:** this portfolio (`Ario-Kaveh-Portfolio-Website`) — only update data/screenshots when a demo is done.  
- **Window B:** one demo folder at a time — finish → deploy → screenshot → then next folder.  
- Don’t start all 7 at once. Order = table in §3.

## 8. Time budget (realistic)

| Demo type | Target |
|-----------|--------|
| Landing (Ember, Pulse) | 4–8 hours |
| Multi-page business (Dental, Realty, Counsel) | 8–14 hours |
| SaaS marketing (Nova) | 10–16 hours |
| Creator folio | 6–10 hours |

Goal: **2–3 live demos in 7 days**, then keep going.

## 9. Quality bar (important)

Clients hire from **visual proof**. A mediocre live demo hurts more than “coming soon”.  
If stuck: ship Nova + Dental + Ember first — that covers SaaS, business, and landing.

---

When your first demo URL is ready, open the portfolio chat and say:  
`Nova Metrics is live at <url> — wire it into Work`.
