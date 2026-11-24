import { timelineAt } from "@/entities/role";
import { PALETTE, PROFILE } from "@/shared/config";
import { renderOgImage } from "@/shared/lib/og";
import { OgFrame, OgLiveStatus } from "@/shared/ui/og";
import { ExperienceOgCard } from "@/widgets/experience";

export const alt = `${PROFILE.name} — ${PROFILE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview: name and role on the left, the experience matrix on the right. */
export function OgImage() {
  const timeline = timelineAt(new Date());

  return renderOgImage(
    <OgFrame style={{ padding: 64, gap: 48 }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
        <OgLiveStatus size={22} />
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Doto", fontSize: 80, lineHeight: 0.95 }}>
          <span>{PROFILE.firstName}</span>
          <span>{PROFILE.lastName}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontSize: 34, fontWeight: 500 }}>{PROFILE.role}</span>
          <span style={{ fontSize: 24, color: PALETTE.sec }}>{PROFILE.headline}</span>
        </div>
      </div>
      <ExperienceOgCard timeline={timeline} dot={24} gap={11} labelSize={16} padding={36} />
    </OgFrame>,
    size,
  );
}
