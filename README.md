# Ario Kaveh Portfolio

Personal portfolio — Web Designer & Developer.

## Develop

```bash
npm install
npm run dev
```

## Contact form

Works out of the box via **FormSubmit** (confirm the first activation email to `kavehcareer@gmail.com`).

Optional upgrade — set in Vercel / `.env.local`:

```
RESEND_API_KEY=re_...
RESEND_FROM="Ario Portfolio <onboarding@resend.dev>"
```

## Demos

See `DEMO-BUILD-GUIDE.md` and the sibling folder:

`C:\Ario Vibe Coding\Ario-Portfolio-Demos\`

When a demo is live, set `status: "live"` + `href` in `src/data/projects.ts` and drop a screenshot in `public/images/work/`.

## Deploy

```bash
npx vercel --prod --scope ario-projects
```
