import {
  type MonthKey,
  formatMonth,
  monthOrdinal,
  toMonthKey,
  yearOf,
} from "@/shared/lib/month";
import type { Role } from "./types";

export type TimelineCell = {
  month: MonthKey;
  /** role worked in this month; null for empty and future months */
  role: Role | null;
  isNow: boolean;
  /** future months fade out towards the end of the grid */
  opacity: number;
};

export type TimelineRow = { year: number; opacity: number; cells: TimelineCell[] };

export type Timeline = {
  now: MonthKey;
  rows: TimelineRow[];
  /** months from the first role to now, inclusive */
  months: number;
  /** first month of the first role, "MM.YYYY" */
  since: string;
  /** open-ended: only the start is fixed */
  range: string;
};

/** How far the last empty dot fades: 1 → 0.06. */
const FADE_DEPTH = 0.94;

const roleAt = (roles: readonly Role[], month: MonthKey) =>
  roles.find((r) => month >= r.from && (!r.to || month <= r.to)) ?? null;

/**
 * The experience matrix for a given month: one row per year from the first
 * role, plus one fading row for next year, since the timeline has no end.
 */
export function buildTimeline(roles: readonly Role[], now: MonthKey): Timeline {
  const start = roles.map((r) => r.from).reduce((a, b) => (b < a ? b : a));
  const firstYear = yearOf(start);
  const lastYear = yearOf(now) + 1;
  const fadeSpan = monthOrdinal(toMonthKey(lastYear, 11)) - monthOrdinal(now) + 1;

  const opacityAt = (month: MonthKey) => {
    if (month <= now) return 1;
    const steps = monthOrdinal(month) - monthOrdinal(now);
    return Number((1 - (steps / fadeSpan) * FADE_DEPTH).toFixed(2));
  };

  const cellAt = (month: MonthKey): TimelineCell => ({
    month,
    role: month <= now ? roleAt(roles, month) : null,
    isNow: month === now,
    opacity: opacityAt(month),
  });

  const rows = Array.from({ length: lastYear - firstYear + 1 }, (_, i): TimelineRow => {
    const year = firstYear + i;
    const cells = Array.from({ length: 12 }, (_, m) => cellAt(toMonthKey(year, m)));
    return { year, opacity: cells[0].opacity, cells };
  });

  const since = formatMonth(start);

  return {
    now,
    rows,
    months: monthOrdinal(now) - monthOrdinal(start) + 1,
    since,
    range: `${since} — ∞`,
  };
}
