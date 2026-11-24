import type { ElementType, HTMLAttributes } from "react";
import { cx } from "@/shared/lib/css";
import styles from "./text.module.css";

type Props = HTMLAttributes<HTMLElement> & { as?: ElementType };

/** Small mono caption: dates, ranges, footnotes. */
export function Meta({ as: Tag = "span", small, className, ...rest }: Props & { small?: boolean }) {
  return <Tag className={cx(styles.meta, small && styles.small, className)} {...rest} />;
}

/** Medium-weight 15px heading: card titles, company names, the brand name. */
export function Title({ as: Tag = "span", className, ...rest }: Props) {
  return <Tag className={cx(styles.title, className)} {...rest} />;
}
