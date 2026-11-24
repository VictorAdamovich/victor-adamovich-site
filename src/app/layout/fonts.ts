import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// Doto (SIL OFL) — dot-matrix display face, self-hosted
const doto = localFont({
  src: "../../shared/assets/fonts/Doto-Bold.woff2",
  weight: "700",
  variable: "--font-doto",
  display: "swap",
});

/** Classes that define --font-doto, --font-geist-sans and --font-geist-mono. */
export const fontVariables = `${doto.variable} ${GeistSans.variable} ${GeistMono.variable}`;
