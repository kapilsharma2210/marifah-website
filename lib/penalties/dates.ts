// Date helpers for FTA penalty calculations. All dates are plain "YYYY-MM-DD" strings
// handled in UTC, so results never shift with the visitor's time zone.

export type MonthRule =
  /** Corporate Tax (Cabinet Decision 75/2023, Art. 3): if the month has no such date, use the last day of that month. */
  | "lastDay"
  /** VAT / Excise / Tax Procedures (Cabinet Decision 40/2017 as amended): if the month has no such date, use the 1st of the next month. */
  | "nextFirst";

export function parseDate(s: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d ? dt : null;
}

export function fmtISO(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function fmtLong(d: Date | string) {
  const dt = typeof d === "string" ? parseDate(d) : d;
  return dt ? dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }) : "";
}

export function addDays(d: Date, n: number) {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + n));
}

const daysInMonth = (y: number, m: number) => new Date(Date.UTC(y, m + 1, 0)).getUTCDate();

/** The same day-of-month, `n` months after `start`, applying the month-end rule. */
export function addMonthsRule(start: Date, n: number, rule: MonthRule) {
  const y = start.getUTCFullYear();
  const m = start.getUTCMonth() + n;
  const day = start.getUTCDate();
  const ty = y + Math.floor(m / 12);
  const tm = ((m % 12) + 12) % 12;
  const dim = daysInMonth(ty, tm);
  if (day <= dim) return new Date(Date.UTC(ty, tm, day));
  return rule === "lastDay" ? new Date(Date.UTC(ty, tm, dim)) : new Date(Date.UTC(ty, tm + 1, 1));
}

/**
 * Dates on which a "monthly" penalty is imposed: the day after the deadline, then the same
 * date every month. Every date up to and including `until` counts ("each month or part thereof").
 */
export function monthlyChargeDates(deadline: Date, until: Date, rule: MonthRule, max = 600) {
  const first = addDays(deadline, 1);
  const dates: Date[] = [];
  for (let k = 0; k < max; k++) {
    const d = addMonthsRule(first, k, rule);
    if (d > until) break;
    dates.push(d);
  }
  return dates;
}

/** Days late (0 if on time). */
export function daysLate(deadline: Date, actual: Date) {
  return Math.max(0, Math.round((actual.getTime() - deadline.getTime()) / 86_400_000));
}

/** Corporate Tax return / payment deadline: 9 months after the end of the tax period. */
export function ctReturnDeadline(periodEnd: Date) {
  const isMonthEnd = periodEnd.getUTCDate() === daysInMonth(periodEnd.getUTCFullYear(), periodEnd.getUTCMonth());
  if (isMonthEnd) {
    return new Date(Date.UTC(periodEnd.getUTCFullYear(), periodEnd.getUTCMonth() + 10, 0));
  }
  return addMonthsRule(periodEnd, 9, "lastDay");
}

/** VAT return / payment deadline: the 28th day after the end of the tax period. */
export function vatReturnDeadline(periodEnd: Date) {
  return addDays(periodEnd, 28);
}
