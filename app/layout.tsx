import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { CONTACTS, SITE, STACK } from "./data";
import "./globals.css";

// Doto (SIL OFL) — dot-matrix display face, self-hosted
const doto = localFont({
  src: "./fonts/Doto-Bold.woff2",
  weight: "700",
  variable: "--font-doto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    "Victor Adamovich",
    "Frontend developer",
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
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
    firstName: "Victor",
    lastName: "Adamovich",
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
  themeColor: "#EDEDEA",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: "Frontend developer",
  email: `mailto:${CONTACTS.email}`,
  knowsAbout: STACK,
  sameAs: [CONTACTS.github, CONTACTS.linkedin, CONTACTS.telegram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${doto.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
