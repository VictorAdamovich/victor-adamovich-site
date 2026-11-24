/** "lineStrong" → "line-strong", "tone1" → "tone-1" */
const kebab = (s: string) => s.replace(/[A-Z]|\d+/g, (c) => `-${c.toLowerCase()}`);

/** Custom properties for a selector: { lineStrong: "#000" } → "--line-strong:#000" */
export function cssVars(selector: string, vars: Record<string, string>): string {
  const body = Object.entries(vars)
    .map(([name, value]) => `--${kebab(name)}:${value}`)
    .join(";");
  return `${selector}{${body}}`;
}

/** Joins class names, skipping falsy ones: cx("a", cond && "b") */
export const cx = (...names: (string | false | null | undefined)[]) => names.filter(Boolean).join(" ");
