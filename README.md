# victor-adamovich-site

Personal one-screen site of Victor Adamovich, frontend developer. Next.js (App Router), statically prerendered and revalidated daily (ISR), light theme inspired by nothing.tech.

The experience matrix, its month count and the OG image are computed from the current date (`getTimeline` in `app/data.ts`), so they move forward every month without a redeploy.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build && npm start
```

Content (contacts, roles, projects) lives in `app/data.ts`. Put your CV at `public/cv.pdf`.

Fonts: Geist and Geist Mono (`geist` package), Doto (SIL OFL) self-hosted in `app/fonts`.

## LinkedIn banner

`/linkedin-banner.png` renders a 1584×396 text-only profile background (status, title, stack) with the same fonts and colors as the OG image (`lib/image-kit.tsx`). Download it and upload it to LinkedIn.
