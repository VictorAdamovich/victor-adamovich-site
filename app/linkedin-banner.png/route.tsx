import { ImageResponse } from "next/og";
import { COLORS, LiveStatus, loadFonts } from "@/lib/image-kit";

// LinkedIn profile background, 1584×396: text only.
export const revalidate = 86400;

const WIDTH = 1584;
const HEIGHT = 396;

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: COLORS.bg,
          // Left side stays quiet: LinkedIn puts the profile photo there.
          padding: "0 72px 0 600px",
          fontFamily: "Geist",
          color: COLORS.ink,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <LiveStatus size={22} />
          <span style={{ fontFamily: "Doto", fontSize: 64, lineHeight: 1, whiteSpace: "nowrap" }}>
            Frontend developer
          </span>
          <span style={{ fontSize: 26, color: COLORS.sec }}>React · Next.js · TypeScript · Web3</span>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: await loadFonts(),
      headers: {
        "Content-Disposition": 'inline; filename="victor-adamovich-linkedin-banner.png"',
      },
    },
  );
}
