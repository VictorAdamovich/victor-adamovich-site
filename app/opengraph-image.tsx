import { ImageResponse } from "next/og";
import { COLORS, LiveStatus, MatrixCard, loadFonts } from "@/lib/image-kit";
import { SITE, getTimeline } from "./data";

// Regenerated on Vercel at most once a day, so the image follows the current month.
export const revalidate = 86400;
export const alt = `${SITE.name} — Frontend developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const timeline = getTimeline();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: COLORS.bg,
          padding: 64,
          gap: 48,
          fontFamily: "Geist",
          color: COLORS.ink,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <LiveStatus size={22} />
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Doto", fontSize: 80, lineHeight: 0.95 }}>
            <span>Victor</span>
            <span>Adamovich</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontSize: 34, fontWeight: 500 }}>Frontend developer</span>
            <span style={{ fontSize: 24, color: COLORS.sec }}>React · Next.js · TypeScript · Web3</span>
          </div>
        </div>
        <MatrixCard timeline={timeline} dot={24} gap={11} labelSize={16} padding={36} />
      </div>
    ),
    { ...size, fonts: await loadFonts() },
  );
}
