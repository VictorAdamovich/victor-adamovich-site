import type { Role } from "./types";

/** Newest first: on a month two roles share, the newer one is shown. */
export const ROLES: readonly Role[] = [
  {
    company: "Mobyrix",
    description: "Checkout, payment and subscription flows",
    tone: 1,
    from: "2025-10",
  },
  {
    company: "Leime",
    description: "DeFi on Uniswap V3, MetaMask and WalletConnect",
    tone: 2,
    from: "2024-06",
    to: "2025-09",
  },
  {
    company: "PixelPlex",
    description: "Web3 apps on Wagmi and Web3Modal",
    tone: 3,
    from: "2022-09",
    to: "2024-06",
  },
  {
    company: "Freelance",
    description: "Landings and a client cabinet for online-zapis.com, a Next.js and Strapi shop",
    tone: 4,
    from: "2021-09",
    to: "2022-08",
  },
];
