import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NOW, ROLES, SITE, YEARS } from "./data";

export const dynamic = "force-static";
export const alt = `${SITE.name} — Frontend developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TONES: Record<string, string> = {
  "var(--tone-1)": "#111111",
  "var(--tone-2)": "#5c5c57",
  "var(--tone-3)": "#9b9b95",
  "var(--tone-4)": "#cdcdc7",
};

function dotColor(y: number, m: number) {
  const k = `${y}-${String(m + 1).padStart(2, "0")}`;
  if (k === NOW) return "#d71921";
  const role = ROLES.find((r) => k >= r.from && k <= r.to);
  return role ? TONES[role.tone] : null;
}

export default async function Image() {
  const font = (f: string) => readFile(join(process.cwd(), "app/fonts", f));
  const [doto, regular, medium, mono] = await Promise.all([
    font("Doto-Bold.woff"),
    font("Geist-Regular.ttf"),
    font("Geist-Medium.ttf"),
    font("GeistMono-Regular.ttf"),
  ]);

  const DOT = 24;
  const GAP = 11;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ededea",
          padding: 64,
          gap: 48,
          fontFamily: "Geist",
          color: "#111111",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "Geist Mono", fontSize: 22 }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#16a34a" }} />
            <span>Open to offers</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Doto", fontSize: 80, lineHeight: 0.95 }}>
            <span>Victor</span>
            <span>Adamovich</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontSize: 34, fontWeight: 500 }}>Frontend developer</span>
            <span style={{ fontSize: 24, color: "#55554f" }}>React · Next.js · TypeScript · Web3</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 24,
            background: "#ffffff",
            borderRadius: 24,
            border: "1px solid rgba(17,17,17,0.08)",
            padding: 36,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: GAP }}>
            {YEARS.map((y) => (
              <div key={y} style={{ display: "flex", alignItems: "center", gap: GAP }}>
                <span style={{ width: 56, fontFamily: "Geist Mono", fontSize: 16, color: "#73736d" }}>{y}</span>
                {Array.from({ length: 12 }, (_, m) => {
                  const c = dotColor(y, m);
                  return (
                    <div
                      key={m}
                      style={{
                        width: DOT,
                        height: DOT,
                        borderRadius: DOT / 2,
                        background: c ?? "transparent",
                        border: c ? "none" : "1px solid rgba(17,17,17,0.14)",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <span style={{ fontFamily: "Geist Mono", fontSize: 16, color: "#73736d" }}>
            09.2021 — now · 1 dot = 1 month
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Doto", data: doto, weight: 700, style: "normal" },
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
