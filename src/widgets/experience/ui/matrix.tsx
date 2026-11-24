import { type Timeline, type TimelineCell, roleId } from "@/entities/role";
import { toneVar } from "@/shared/config";
import { cx } from "@/shared/lib/css";
import { Meta } from "@/shared/ui/text";
import styles from "./experience.module.css";

const MONTH_LETTERS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function Dot({ cell }: { cell: TimelineCell }) {
  const { role, isNow, month, opacity } = cell;
  if (!role) return <span className={cx(styles.dot, styles.empty)} style={{ opacity }} />;
  return (
    <span
      className={styles.dot}
      data-dot={roleId(role)}
      style={{ background: isNow ? "var(--accent)" : toneVar(role.tone) }}
      title={`${month} · ${isNow ? "now" : role.company}`}
    />
  );
}

/** One dot per month, one row per year; hovering a role lights up its dots. */
export function Matrix({ timeline }: { timeline: Timeline }) {
  return (
    <figure className={styles.matrixCol}>
      <div
        className={styles.matrix}
        role="img"
        aria-label={`Work timeline since ${timeline.since}, ${timeline.months} months so far`}
      >
        <span />
        {MONTH_LETTERS.map((m, i) => (
          <Meta key={i} small className={styles.month}>
            {m}
          </Meta>
        ))}
        {timeline.rows.map((row) => (
          <div key={row.year} className={styles.row}>
            <Meta small style={{ opacity: row.opacity }}>
              {row.year}
            </Meta>
            {row.cells.map((cell) => (
              <Dot key={cell.month} cell={cell} />
            ))}
          </div>
        ))}
      </div>
      <Meta as="figcaption" small>
        1 dot = 1 month · red is now
      </Meta>
    </figure>
  );
}
