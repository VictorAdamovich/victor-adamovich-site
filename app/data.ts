export const CONTACTS = {
  github: "https://github.com/VictorAdamovich",
  linkedin: "https://www.linkedin.com/in/victoradamovich/",
  telegram: "https://t.me/VictorAdamovich",
  email: "adamovich.victor99@gmail.com",
  cv: "/cv.pdf",
};

export const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Zustand",
  "GraphQL",
  "Jest",
  "Playwright",
];

type Role = {
  company: string;
  period: string;
  description: string;
  tone: string;
  /** inclusive month range, "YYYY-MM" */
  from: string;
  to: string;
};

export const ROLES: Role[] = [
  {
    company: "Mobyrix",
    period: "10.2025 — now",
    description: "Checkout, payment and subscription flows",
    tone: "var(--tone-1)",
    from: "2025-10",
    to: "2026-11",
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

export const NOW = "2026-11";
export const YEARS = [2021, 2022, 2023, 2024, 2025, 2026];

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
