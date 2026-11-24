import { PALETTE, PROFILE } from "@/shared/config";

/** Green dot + "Open to offers", sized from the font size. */
export function OgLiveStatus({ size = 22 }: { size?: number }) {
  const dot = Math.round(size * 0.55);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: dot, fontFamily: "Geist Mono", fontSize: size }}>
      <div style={{ width: dot, height: dot, borderRadius: dot / 2, background: PALETTE.live }} />
      <span>{PROFILE.status}</span>
    </div>
  );
}
