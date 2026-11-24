import { PALETTE, TONES } from "@/shared/config";
import { cssVars } from "@/shared/lib/css";

const tones = Object.fromEntries(TONES.map((color, i) => [`tone${i + 1}`, color]));

/** Palette as :root custom properties (--bg, --line-strong, --tone-1…). */
export const themeCss = cssVars(":root", { ...PALETTE, ...tones });
