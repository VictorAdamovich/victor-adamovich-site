import { PALETTE, PROFILE } from "@/shared/config";
import { renderOgImage } from "@/shared/lib/og";
import { OgFrame, OgLiveStatus } from "@/shared/ui/og";

const size = { width: 1584, height: 396 };

/** LinkedIn profile background, text only. */
export function LinkedinBanner() {
  return renderOgImage(
    // Left side stays quiet: LinkedIn puts the profile photo there.
    <OgFrame style={{ alignItems: "center", padding: "0 72px 0 600px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <OgLiveStatus size={22} />
        <span style={{ fontFamily: "Doto", fontSize: 64, lineHeight: 1, whiteSpace: "nowrap" }}>
          {PROFILE.role}
        </span>
        <span style={{ fontSize: 26, color: PALETTE.sec }}>{PROFILE.headline}</span>
      </div>
    </OgFrame>,
    {
      ...size,
      headers: {
        "Content-Disposition": 'inline; filename="victor-adamovich-linkedin-banner.png"',
      },
    },
  );
}
