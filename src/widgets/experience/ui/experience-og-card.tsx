import type { Timeline, TimelineCell } from "@/entities/role";
import { PALETTE, toneColor } from "@/shared/config";

type Props = {
  timeline: Timeline;
  dot: number;
  gap: number;
  labelSize: number;
  padding: number;
};

const dotColor = ({ role, isNow }: TimelineCell) =>
  !role ? null : isNow ? PALETTE.accent : toneColor(role.tone);

/** The experience matrix as a white card for generated images. */
export function ExperienceOgCard({ timeline, dot, gap, labelSize, padding }: Props) {
  const label = { fontFamily: "Geist Mono", fontSize: labelSize, color: PALETTE.muted };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: Math.round(gap * 2),
        background: PALETTE.card,
        borderRadius: Math.round(padding * 0.66),
        border: `1px solid ${PALETTE.line}`,
        padding,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap }}>
        {timeline.rows.map((row) => (
          <div key={row.year} style={{ display: "flex", alignItems: "center", gap }}>
            <span style={{ ...label, width: labelSize * 3.5, opacity: row.opacity }}>{row.year}</span>
            {row.cells.map((cell) => {
              const color = dotColor(cell);
              return (
                <div
                  key={cell.month}
                  style={{
                    width: dot,
                    height: dot,
                    borderRadius: dot / 2,
                    background: color ?? "transparent",
                    border: color ? "none" : `1px solid ${PALETTE.dotEmpty}`,
                    opacity: color ? 1 : cell.opacity,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <span style={label}>{timeline.range}</span>
    </div>
  );
}
