import type { CSSProperties, ReactNode } from "react";
import { PALETTE } from "@/shared/config";

/** Full-bleed background every generated image starts from. */
export function OgFrame({ style, children }: { style?: CSSProperties; children: ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: PALETTE.bg,
        fontFamily: "Geist",
        color: PALETTE.ink,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
