/**
 * The one source of colors: the site gets them as CSS variables
 * (see `themeCss`), generated images use the values directly.
 */
export const PALETTE = {
  bg: "#ededea",
  card: "#ffffff",
  ink: "#111111",
  sec: "#55554f",
  muted: "#73736d",
  line: "rgba(17, 17, 17, 0.08)",
  lineStrong: "rgba(17, 17, 17, 0.12)",
  dotEmpty: "rgba(17, 17, 17, 0.14)",
  accent: "#d71921",
  live: "#16a34a",
} as const;

/** Role colors, newest role darkest. */
export const TONES = ["#111111", "#5c5c57", "#9b9b95", "#cdcdc7"] as const;

export type Tone = 1 | 2 | 3 | 4;

export const toneVar = (tone: Tone) => `var(--tone-${tone})`;
export const toneColor = (tone: Tone) => TONES[tone - 1];
