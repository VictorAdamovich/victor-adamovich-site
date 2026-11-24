/** A calendar month as "YYYY-MM": sorts and compares as a plain string. */
export type MonthKey = `${number}-${number}`;

const pad = (n: number) => String(n).padStart(2, "0");

/** monthIndex is 0-based (0 = January). */
export const toMonthKey = (year: number, monthIndex: number): MonthKey =>
  `${year}-${pad(monthIndex + 1)}` as MonthKey;

export const yearOf = (key: MonthKey) => Number(key.slice(0, 4));

/** Months since year 0: the difference of two ordinals is a month count. */
export const monthOrdinal = (key: MonthKey) => yearOf(key) * 12 + Number(key.slice(5)) - 1;

/** "2025-10" → "10.2025" */
export const formatMonth = (key: MonthKey) => `${key.slice(5)}.${key.slice(0, 4)}`;

/** The month a moment falls into in the given time zone. */
export function monthAt(date: Date, timeZone: string): MonthKey {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
  }).formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((p) => p.type === type)!.value;
  return `${get("year")}-${get("month")}` as MonthKey;
}
