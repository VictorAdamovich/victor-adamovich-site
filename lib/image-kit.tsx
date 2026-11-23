import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getTimeline } from "@/app/data";

/** Shared pieces for generated images (OG, LinkedIn banner). */

export const COLORS = {
  bg: "#ededea",
  card: "#ffffff",
  ink: "#111111",
  sec: "#55554f",
  muted: "#73736d",
  live: "#16a34a",
  now: "#d71921",
};

const TONES: Record<string, string> = {
  "var(--tone-1)": "#111111",
  "var(--tone-2)": "#5c5c57",
  "var(--tone-3)": "#9b9b95",
  "var(--tone-4)": "#cdcdc7",
};

export async function loadFonts() {
  const font = (f: string) => readFile(join(process.cwd(), "app/fonts", f));
  const [doto, regular, medium, mono] = await Promise.all([
    font("Doto-Bold.woff"),
    font("Geist-Regular.ttf"),
    font("Geist-Medium.ttf"),
    font("GeistMono-Regular.ttf"),
  ]);
  return [
    { name: "Doto", data: doto, weight: 700 as const, style: "normal" as const },
    { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Geist Mono", data: mono, weight: 400 as const, style: "normal" as const },
  ];
}

export function LiveStatus({ size = 22 }: { size?: number }) {
  const dot = Math.round(size * 0.55);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: Math.round(size * 0.55), fontFamily: "Geist Mono", fontSize: size }}>
      <div style={{ width: dot, height: dot, borderRadius: dot / 2, background: COLORS.live }} />
      <span>Open to offers</span>
    </div>
  );
}

type MatrixProps = {
  timeline: ReturnType<typeof getTimeline>;
  dot: number;
  gap: number;
  labelSize: number;
  padding: number;
};

/** The experience matrix as a white card: one dot per month, red is now. */
export function MatrixCard({ timeline, dot, gap, labelSize, padding }: MatrixProps) {
  const color = (y: number, m: number) => {
    const t = timeline.at(y, m);
    if (!t) return null;
    return t.isNow ? COLORS.now : TONES[t.role.tone];
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: Math.round(gap * 2),
        background: COLORS.card,
        borderRadius: Math.round(padding * 0.66),
        border: "1px solid rgba(17,17,17,0.08)",
        padding,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap }}>
        {timeline.years.map((y) => (
          <div key={y} style={{ display: "flex", alignItems: "center", gap }}>
            <span style={{ width: labelSize * 3.5, fontFamily: "Geist Mono", fontSize: labelSize, color: COLORS.muted }}>
              {y}
            </span>
            {Array.from({ length: 12 }, (_, m) => {
              const c = color(y, m);
              return (
                <div
                  key={m}
                  style={{
                    width: dot,
                    height: dot,
                    borderRadius: dot / 2,
                    background: c ?? "transparent",
                    border: c ? "none" : "1px solid rgba(17,17,17,0.14)",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <span style={{ fontFamily: "Geist Mono", fontSize: labelSize, color: COLORS.muted }}>
        {timeline.range} · {timeline.months} months
      </span>
    </div>
  );
}
