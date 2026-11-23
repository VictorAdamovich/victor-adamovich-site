import { ImageResponse } from "next/og";
import { COLORS, LiveStatus, MatrixCard, loadFonts } from "@/lib/image-kit";
import { getTimeline } from "@/app/data";

// LinkedIn profile background, 1584×396. Same daily ISR as the OG image:
// download /linkedin-banner.png each month and upload it to LinkedIn.
export const revalidate = 86400;

const WIDTH = 1584;
const HEIGHT = 396;

export async function GET() {
  const timeline = getTimeline();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          background: COLORS.bg,
          // Left ~40% stays quiet: LinkedIn puts the profile photo there.
          padding: "0 72px 0 560px",
          gap: 56,
          fontFamily: "Geist",
          color: COLORS.ink,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 22, flex: 1 }}>
          <LiveStatus size={20} />
          <span style={{ fontFamily: "Doto", fontSize: 40, lineHeight: 1, whiteSpace: "nowrap" }}>Frontend developer</span>
          <span style={{ fontSize: 22, color: COLORS.sec }}>React · Next.js · TypeScript · Web3</span>
        </div>
        <MatrixCard timeline={timeline} dot={20} gap={9} labelSize={14} padding={28} />
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
