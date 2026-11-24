import type { Metadata, Viewport } from "next";
import { CONTACTS, PALETTE, PROFILE, SITE, STACK } from "@/shared/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  applicationName: PROFILE.name,
  authors: [{ name: PROFILE.name, url: SITE.url }],
  creator: PROFILE.name,
  keywords: [
    PROFILE.name,
    PROFILE.role,
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Web3 frontend",
    "DeFi",
    "Wagmi",
    "WalletConnect",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: PROFILE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
    firstName: PROFILE.firstName,
    lastName: PROFILE.lastName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { email: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: PALETTE.bg,
  colorScheme: "light",
};

/** schema.org Person, for search engines. */
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  url: SITE.url,
  jobTitle: PROFILE.role,
  email: CONTACTS.mailto,
  knowsAbout: STACK,
  sameAs: [CONTACTS.github, CONTACTS.linkedin, CONTACTS.telegram],
};
