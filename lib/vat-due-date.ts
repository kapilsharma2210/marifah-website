// UAE VAT return due dates.
//
// Rule: the return and the VAT payable are due by the 28th day after the end of the tax period
// (Federal Decree-Law No. 8 of 2017 on VAT, Article 64, and its Executive Regulation). When that day
// is not a working day, the deadline moves to the next working day:
//   - Weekends: Saturday and Sunday (UAE weekend since 1 January 2022).
//   - Official UAE public holidays (Cabinet Resolution No. 27 of 2024 and the yearly announcements).
// Example: period ending 31 October 2026 -> 28 November 2026 is a Saturday -> due Monday 30 November 2026.
//
// Weekends are calculated automatically, so nothing needs updating month to month.
// HOLIDAYS: add each year's official dates when the UAE Cabinet announces them, and replace
// expected Islamic holiday dates with the confirmed ones (they depend on moon sighting).

export const HOLIDAYS_LAST_CHECKED = "2026-11-12";

/** Official UAE public holidays (private sector). `expected` = not yet confirmed (moon sighting). */
export const UAE_HOLIDAYS: { date: string; name: string; expected?: boolean }[] = [
  // 2026
  { date: "2026-01-01", name: "New Year's Day" },
  { date: "2026-03-19", name: "Eid Al Fitr" },
  { date: "2026-03-20", name: "Eid Al Fitr" },
  { date: "2026-03-21", name: "Eid Al Fitr" },
  { date: "2026-05-26", name: "Arafat Day" },
  { date: "2026-05-27", name: "Eid Al Adha" },
  { date: "2026-05-28", name: "Eid Al Adha" },
  { date: "2026-05-29", name: "Eid Al Adha" },
  { date: "2026-06-16", name: "Hijri New Year" },
  { date: "2026-08-28", name: "Prophet's Birthday" },
  { date: "2026-12-02", name: "UAE National Day" },
  { date: "2026-12-03", name: "UAE National Day" },
  // 2027 (Islamic holidays are expected dates until confirmed)
  { date: "2027-01-01", name: "New Year's Day" },
  { date: "2027-03-09", name: "Eid Al Fitr", expected: true },
  { date: "2027-03-10", name: "Eid Al Fitr", expected: true },
  { date: "2027-03-11", name: "Eid Al Fitr", expected: true },
  { date: "2027-05-15", name: "Arafat Day", expected: true },
  { date: "2027-05-16", name: "Eid Al Adha", expected: true },
  { date: "2027-05-17", name: "Eid Al Adha", expected: true },
  { date: "2027-05-18", name: "Eid Al Adha", expected: true },
  { date: "2027-06-06", name: "Hijri New Year", expected: true },
  { date: "2027-08-14", name: "Prophet's Birthday", expected: true },
  { date: "2027-12-02", name: "UAE National Day" },
  { date: "2027-12-03", name: "UAE National Day" },
];

const HOLIDAY_MAP = new Map(UAE_HOLIDAYS.map((h) => [h.date, h]));

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const MONTHS_SHORT = MONTHS.map((m) => m.slice(0, 3));

// ── date helpers (ISO yyyy-mm-dd, calculated in UTC so time zones never shift a day) ──
const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);
const toIso = (d: Date) => d.toISOString().slice(0, 10);
export const addDays = (iso: string, n: number) => { const d = toDate(iso); d.setUTCDate(d.getUTCDate() + n); return toIso(d); };
export const daysBetween = (from: string, to: string) => Math.round((toDate(to).getTime() - toDate(from).getTime()) / 86_400_000);
const lastDayOfMonth = (year: number, month0: number) => toIso(new Date(Date.UTC(year, month0 + 1, 0)));
const weekday = (iso: string) => toDate(iso).getUTCDay(); // 0 = Sunday, 6 = Saturday

export const formatLong = (iso: string) =>
  toDate(iso).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
export const formatShort = (iso: string) =>
  toDate(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
export const weekdayName = (iso: string) => toDate(iso).toLocaleDateString("en-GB", { weekday: "long", timeZone: "UTC" });

/** Today's date in Dubai, as yyyy-mm-dd. */
export function dubaiToday(now: Date = new Date()): string {
  return now.toLocaleDateString("en-CA", { timeZone: "Asia/Dubai" });
}

export type TaxPeriod = { start: string; end: string; label: string };

/** Quarterly period starting in `startMonth0` of `year` (e.g. Aug 2026 -> 1 Aug – 31 Oct 2026). */
export function quarterPeriod(year: number, startMonth0: number): TaxPeriod {
  const endMonthAbs = startMonth0 + 2;
  const endYear = year + Math.floor(endMonthAbs / 12);
  const endMonth0 = endMonthAbs % 12;
  const start = `${year}-${String(startMonth0 + 1).padStart(2, "0")}-01`;
  const end = lastDayOfMonth(endYear, endMonth0);
  const label = `${MONTHS_SHORT[startMonth0]}${endYear !== year ? ` ${year}` : ""} – ${MONTHS_SHORT[endMonth0]} ${endYear}`;
  return { start, end, label };
}

/** Monthly period. */
export function monthPeriod(year: number, month0: number): TaxPeriod {
  return { start: `${year}-${String(month0 + 1).padStart(2, "0")}-01`, end: lastDayOfMonth(year, month0), label: `${MONTHS[month0]} ${year}` };
}

export type DueDate = {
  /** The 28th day after the period ends. */
  standard: string;
  /** The actual deadline after moving past weekends and public holidays. */
  due: string;
  /** Why the deadline moved, one line per skipped day (empty if it did not move). */
  skipped: { date: string; reason: string }[];
  /** True if any skipped holiday is still an expected (unconfirmed) date. */
  dependsOnExpectedHoliday: boolean;
};

export function vatDueDate(periodEnd: string): DueDate {
  const standard = addDays(periodEnd, 28);
  let due = standard;
  const skipped: DueDate["skipped"] = [];
  let dependsOnExpectedHoliday = false;
  for (let guard = 0; guard < 15; guard++) {
    const wd = weekday(due);
    const holiday = HOLIDAY_MAP.get(due);
    if (holiday) {
      skipped.push({ date: due, reason: `${holiday.name}${holiday.expected ? " (expected date)" : ""} public holiday` });
      if (holiday.expected) dependsOnExpectedHoliday = true;
    } else if (wd === 6 || wd === 0) {
      skipped.push({ date: due, reason: wd === 6 ? "Saturday" : "Sunday" });
    } else break;
    due = addDays(due, 1);
  }
  return { standard, due, skipped, dependsOnExpectedHoliday };
}

/** "18 days left", "Due today", "Deadline passed 3 days ago". */
export function countdown(today: string, due: string): { days: number; text: string; tone: "ok" | "soon" | "urgent" | "overdue" } {
  const days = daysBetween(today, due);
  if (days < 0) return { days, text: `Deadline passed ${-days} day${days === -1 ? "" : "s"} ago`, tone: "overdue" };
  if (days === 0) return { days, text: "Due today", tone: "urgent" };
  return { days, text: `${days} day${days === 1 ? "" : "s"} left`, tone: days <= 3 ? "urgent" : days <= 14 ? "soon" : "ok" };
}

/** The most recently ended quarter (start month and year) for a given day — the one whose return is due next. */
export function latestEndedQuarter(today: string): { year: number; startMonth0: number } {
  const [y, m] = today.split("-").map(Number); // m is 1-12
  // Quarter ending last month starts three months ago.
  const abs = y * 12 + (m - 1) - 3;
  return { year: Math.floor(abs / 12), startMonth0: abs % 12 };
}

/** The most recently ended month. */
export function latestEndedMonth(today: string): { year: number; month0: number } {
  const [y, m] = today.split("-").map(Number);
  const abs = y * 12 + (m - 1) - 1;
  return { year: Math.floor(abs / 12), month0: abs % 12 };
}

/** The next `count` quarterly deadlines that haven't passed (one for each of the FTA's quarterly cycles). */
export function upcomingQuarterDeadlines(today: string, count = 3): { period: TaxPeriod; due: DueDate }[] {
  const { year, startMonth0 } = latestEndedQuarter(today);
  const out: { period: TaxPeriod; due: DueDate }[] = [];
  for (let i = -1; out.length < count && i < 12; i++) {
    const abs = year * 12 + startMonth0 + i;
    const period = quarterPeriod(Math.floor(abs / 12), ((abs % 12) + 12) % 12);
    const due = vatDueDate(period.end);
    if (daysBetween(today, due.due) >= 0) out.push({ period, due });
  }
  return out;
}
