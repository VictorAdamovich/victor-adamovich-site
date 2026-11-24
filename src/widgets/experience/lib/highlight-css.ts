type Classes = { root: string; dot: string };

/**
 * Hovering or focusing a role (`[data-role]`) lights up its months on the
 * matrix (`[data-dot]`): other dots dim, its own dots grow. One rule pair per
 * role id; class names come from the CSS module, so they are passed in.
 */
export function highlightCss(ids: readonly string[], { root, dot }: Classes): string {
  const active = (id: string) => `.${root}:has([data-role="${id}"]:is(:hover, :focus-visible))`;
  const dim = ids.map((id) => `${active(id)} .${dot}:not([data-dot="${id}"])`).join(",");
  const grow = ids.map((id) => `${active(id)} .${dot}[data-dot="${id}"]`).join(",");
  return `${dim}{opacity:0.15}${grow}{transform:scale(1.12)}`;
}
