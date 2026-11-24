import { PROFILE } from "./profile";

export const SITE = {
  url: "https://victor-adamovich-site.vercel.app",
  title: `${PROFILE.name} — ${PROFILE.role} (React, Next.js, Web3)`,
  description:
    "Frontend developer with 4.5 years in React, Next.js and TypeScript. DeFi swaps, wallet connections, checkouts and subscription flows. Open to offers.",
} as const;
