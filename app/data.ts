export const SITE = {
  url: "https://victor-adamovich-site.vercel.app",
  name: "Victor Adamovich",
  title: "Victor Adamovich — Frontend developer (React, Next.js, Web3)",
  description:
    "Frontend developer with 4.5 years in React, Next.js and TypeScript. DeFi swaps, wallet connections, checkouts and subscription flows. Open to offers.",
};

export const CONTACTS = {
  github: "https://github.com/VictorAdamovich",
  linkedin: "https://www.linkedin.com/in/victoradamovich/",
  telegram: "https://t.me/VictorAdamovich",
  email: "adamovich.victor99@gmail.com",
  cv: "/cv.pdf",
};

export const STACK = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Redux Toolkit",
  "Zustand",
  "GraphQL",
  "Jest",
  "React Testing Library",
  "Playwright",
  "Wagmi",
  "Web3Modal",
  "WalletConnect",
  "MetaMask",
  "Uniswap V3",
  "Strapi",
  "Chrome extensions",
];

type Role = {
  company: string;
  period: string;
  description: string;
  tone: string;
  /** inclusive month range, "YYYY-MM"; no `to` means the role is ongoing */
  from: string;
  to?: string;
};

export const ROLES: Role[] = [
  {
    company: "Mobyrix",
    period: "10.2025 — now",
    description: "Checkout, payment and subscription flows",
    tone: "var(--tone-1)",
    from: "2025-10",
  },
  {
    company: "Leime",
    period: "06.2024 — 09.2025",
    description: "DeFi on Uniswap V3, MetaMask and WalletConnect",
    tone: "var(--tone-2)",
    from: "2024-06",
    to: "2025-09",
  },
  {
    company: "PixelPlex",
    period: "09.2022 — 06.2024",
    description: "Web3 apps on Wagmi and Web3Modal",
    tone: "var(--tone-3)",
    from: "2022-09",
    to: "2024-05",
  },
  {
    company: "Freelance",
    period: "09.2021 — 08.2022",
    description:
      "Landings and a client cabinet for online-zapis.com, a Next.js and Strapi shop",
    tone: "var(--tone-4)",
    from: "2021-09",
    to: "2022-08",
  },
];

export type Month = `${number}-${string}`;

const pad = (n: number) => String(n).padStart(2, "0");
const toIndex = (k: string) => {
  const [y, m] = k.split("-").map(Number);
  return y * 12 + (m - 1);
};

/** Current month as "YYYY-MM" in Minsk time. */
export function currentMonth(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Minsk",
    year: "numeric",
    month: "2-digit",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)!.value;
  return `${get("year")}-${get("month")}`;
}

/** Everything the experience matrix needs, computed for a given month. */
export function getTimeline(now = currentMonth()) {
  const start = ROLES.reduce((min, r) => (r.from < min ? r.from : min), ROLES[0].from);
  const firstYear = Number(start.slice(0, 4));
  const lastYear = Number(now.slice(0, 4));
  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);
  const roles = ROLES.map((r) => ({ ...r, to: r.to ?? now }));
  const months = toIndex(now) - toIndex(start) + 1;
  const [sy, sm] = [start.slice(0, 4), start.slice(5)];
  const [ny, nm] = [now.slice(0, 4), now.slice(5)];

  return {
    now,
    years,
    months,
    range: `${sm}.${sy} — ${nm}.${ny}`,
    /** role active in a month, or null; the current month is flagged */
    at(year: number, monthIndex: number) {
      const k = `${year}-${pad(monthIndex + 1)}`;
      if (k > now) return null;
      const role = roles.find((r) => k >= r.from && k <= r.to);
      return role ? { key: k, role, isNow: k === now } : null;
    },
  };
}

export const PROJECTS = [
  {
    domain: "web3antivirus.io",
    href: "https://web3antivirus.io",
    description: "Security checks for crypto wallets and transactions",
  },
  {
    domain: "koalaswap.app",
    href: "https://koalaswap.app",
    description: "Token swap interface for a decentralized exchange",
  },
  {
    domain: "esimplus.me",
    href: "https://esimplus.me",
    description: "eSIM data plans and virtual phone numbers",
  },
  {
    domain: "nicegram.me/hub",
    href: "https://nicegram.me/hub",
    description: "Web hub for the Nicegram messenger",
  },
];
