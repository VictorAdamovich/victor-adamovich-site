import type { ReactNode } from "react";
import { fontVariables } from "./fonts";
import { jsonLd } from "./metadata";
import { themeCss } from "./theme";
import "../styles/globals.css";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <style>{themeCss}</style>
      </head>
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
