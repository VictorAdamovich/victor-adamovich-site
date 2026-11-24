# victor-adamovich-site

Personal one-screen site of Victor Adamovich, frontend developer. Next.js (App Router), statically prerendered and revalidated daily (ISR), light theme inspired by nothing.tech.

The experience matrix, its month count and the OG image are computed from the current date (`buildTimeline` in `src/entities/role/model/timeline.ts`), so they move forward every month without a redeploy.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build && npm start
```

## Structure

[Feature-Sliced Design](https://feature-sliced.design). `app/` holds only Next.js route files that re-export from `src/`; the empty root `pages/` keeps Next from taking `src/pages` for the Pages Router.

```
src/
  app/        root layout, metadata, fonts, global styles
  pages/      home, og-image, linkedin-banner
  widgets/    header, about, experience, footer
  entities/   role (data, timeline, role item), project
  shared/     config (profile, site, contacts, stack, palette), lib (month, css, og), ui, assets
```

Content: profile copy, contacts and stack in `src/shared/config`, roles in `src/entities/role/model/roles.ts`, projects in `src/entities/project`. Colors live once in `src/shared/config/theme.ts`: the site gets them as CSS variables, generated images use the values directly. Put your CV at `public/cv.pdf`.

Styles: each slice has its own CSS module next to its component; `src/app/styles/globals.css` holds only tokens and the reset. Shared typography is `Meta` / `Title` in `src/shared/ui/text`.

Fonts: Geist and Geist Mono (`geist` package), Doto (SIL OFL) self-hosted in `src/shared/assets/fonts`.

## LinkedIn banner

`/linkedin-banner.png` renders a 1584×396 text-only profile background (status, title, stack) with the same fonts and colors as the OG image (`src/shared/lib/og`, `src/shared/ui/og`). Download it and upload it to LinkedIn.
