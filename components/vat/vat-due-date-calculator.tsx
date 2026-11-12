"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, ArrowRight, CalendarCheck2, CalendarClock, Info } from "lucide-react";
import {
  MONTHS, MONTHS_SHORT, countdown, dubaiToday, formatLong, formatShort, latestEndedMonth, latestEndedQuarter,
  monthPeriod, quarterPeriod, upcomingQuarterDeadlines, vatDueDate, type DueDate, HOLIDAYS_LAST_CHECKED,
} from "@/lib/vat-due-date";

const TONE: Record<ReturnType<typeof countdown>["tone"], string> = {
  ok: "bg-emerald-50 text-emerald-800 border-emerald-200",
  soon: "bg-amber-50 text-amber-800 border-amber-200",
  urgent: "bg-red-50 text-red-700 border-red-200",
  overdue: "bg-red-600 text-white border-red-600",
};

/** One sentence explaining why the deadline moved, or null if it didn't. */
export function dueDateReason(d: DueDate): string | null {
  if (!d.skipped.length) return null;
  const first = d.skipped[0];
  const what = first.reason === "Saturday" || first.reason === "Sunday" ? `is a ${first.reason}` : `falls on the ${first.reason}`;
  return `${formatShort(d.standard)} ${what}, so the deadline moves to the next working day.`;
}

/** Today in Dubai, set after the page loads so the countdown is always live (never a cached date). */
function useToday() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => { setToday(dubaiToday()); }, []);
  return today;
}

const selectCls =
  "w-full h-11 rounded-xl border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function VatDueDateCalculator({ compact = false }: { compact?: boolean }) {
  const today = useToday();
  const [freq, setFreq] = useState<"quarterly" | "monthly">("quarterly");
  const [qStart, setQStart] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  // Default to the period whose return is due next.
  useEffect(() => {
    if (!today) return;
    if (freq === "quarterly") { const q = latestEndedQuarter(today); setQStart(q.startMonth0); setYear(q.year); }
    else { const m = latestEndedMonth(today); setMonth(m.month0); setYear(m.year); }
  }, [today, freq]);

  const thisYear = today ? Number(today.slice(0, 4)) : 2026;
  const years = [thisYear - 1, thisYear, thisYear + 1];

  const result = useMemo(() => {
    if (!today || year === null) return null;
    const period = freq === "quarterly" ? (qStart === null ? null : quarterPeriod(year, qStart)) : month === null ? null : monthPeriod(year, month);
    if (!period) return null;
    const due = vatDueDate(period.end);
    return { period, due, cd: countdown(today, due.due), periodOpen: today <= period.end };
  }, [today, freq, qStart, month, year]);

  return (
    <div className={`rounded-3xl border border-primary/15 bg-card shadow-sm ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}>
      <div className="flex items-center gap-3 mb-5">
        <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><CalendarClock className="w-5 h-5" /></span>
        <div>
          <h3 className="text-lg font-bold text-foreground leading-tight">VAT Return Due Date Calculator</h3>
          <p className="text-xs text-muted-foreground">Pick your tax period to see your filing and payment deadline.</p>
        </div>
      </div>

      {/* Inputs */}
      <div role="radiogroup" aria-label="Filing frequency" className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-muted mb-4">
        {(["quarterly", "monthly"] as const).map((f) => (
          <button key={f} role="radio" aria-checked={freq === f} onClick={() => setFreq(f)}
            className={`h-9 rounded-lg text-sm font-semibold transition-colors ${freq === f ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
            {f === "quarterly" ? "Quarterly" : "Monthly"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-3">
        <label className="block">
          <span className="block text-xs font-medium text-muted-foreground mb-1.5">{freq === "quarterly" ? "Your VAT quarter" : "Month"}</span>
          {freq === "quarterly" ? (
            <select className={selectCls} value={qStart ?? ""} onChange={(e) => setQStart(Number(e.target.value))} disabled={!today}>
              {MONTHS_SHORT.map((m, i) => (
                <option key={m} value={i}>{m} – {MONTHS_SHORT[(i + 2) % 12]}</option>
              ))}
            </select>
          ) : (
            <select className={selectCls} value={month ?? ""} onChange={(e) => setMonth(Number(e.target.value))} disabled={!today}>
              {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
            </select>
          )}
        </label>
        <label className="block">
          <span className="block text-xs font-medium text-muted-foreground mb-1.5">{freq === "quarterly" ? "Starting in" : "Year"}</span>
          <select className={`${selectCls} w-28`} value={year ?? ""} onChange={(e) => setYear(Number(e.target.value))} disabled={!today}>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </label>
      </div>

      {/* Result */}
      <div aria-live="polite" className="mt-5 rounded-2xl border border-border bg-background p-5 min-h-[164px]">
        {!result ? (
          <div className="animate-pulse space-y-3"><div className="h-3 w-32 bg-muted rounded" /><div className="h-7 w-56 bg-muted rounded" /><div className="h-6 w-28 bg-muted rounded-full" /></div>
        ) : (
          <>
            <p className="text-xs text-muted-foreground">Tax period {formatShort(result.period.start)} – {formatShort(result.period.end)}</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-3">Return and payment due</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
              <p className="text-xl sm:text-2xl font-bold text-foreground">{formatLong(result.due.due)}</p>
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-bold tabular-nums ${TONE[result.cd.tone]}`}>
                {result.cd.tone === "overdue" ? <AlertTriangle className="w-4 h-4" /> : <CalendarCheck2 className="w-4 h-4" />}{result.cd.text}
              </span>
            </div>
            {dueDateReason(result.due) && (
              <p className="mt-3 text-sm text-muted-foreground flex gap-2"><Info className="w-4 h-4 mt-0.5 text-primary shrink-0" />{dueDateReason(result.due)}</p>
            )}
            {result.periodOpen && (
              <p className="mt-2 text-xs text-muted-foreground">This tax period hasn&apos;t ended yet. You can file once it ends on {formatShort(result.period.end)}.</p>
            )}
            {result.due.dependsOnExpectedHoliday && (
              <p className="mt-2 text-xs text-muted-foreground">This date depends on an expected public holiday that is not yet confirmed.</p>
            )}
            {result.cd.tone === "overdue" && (
              <a href="/uae-tax-penalty-calculator" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red-700 hover:underline">
                Filed or paid late? Check the penalty <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </>
        )}
      </div>

      {!compact && (
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
          VAT returns and payment are due by the 28th day after the end of the tax period. If that day is a Saturday, Sunday or an official UAE public
          holiday, the deadline moves to the next working day. Islamic holiday dates depend on moon sighting, and the FTA can announce other extensions,
          so check the FTA&apos;s notice for your period. Holiday dates last checked {formatShort(HOLIDAYS_LAST_CHECKED)}.
        </p>
      )}
    </div>
  );
}

/** The next three quarterly deadlines (one for each FTA quarterly cycle), with days left. */
export function UpcomingVatDeadlines() {
  const today = useToday();
  const items = today ? upcomingQuarterDeadlines(today, 3) : null;
  return (
    <div className="space-y-3">
      {(items ?? [null, null, null]).map((it, i) =>
        !it || !today ? (
          <div key={i} className="h-[92px] rounded-2xl border border-border bg-card animate-pulse" />
        ) : (
          <div key={it.period.end} className="rounded-2xl border border-border bg-card p-4 sm:p-5 flex items-center gap-4">
            <div className="w-14 shrink-0 text-center rounded-xl bg-primary text-primary-foreground py-2">
              <p className="text-[10px] font-semibold uppercase tracking-wider opacity-80">{MONTHS_SHORT[Number(it.due.due.slice(5, 7)) - 1]}</p>
              <p className="text-2xl font-bold leading-none tabular-nums">{Number(it.due.due.slice(8, 10))}</p>
            </div>
            {(() => { const cd = countdown(today, it.due.due); const badge = (cls: string) => (
              <span className={`shrink-0 rounded-full border px-3 py-1 text-xs sm:text-sm font-bold tabular-nums ${TONE[cd.tone]} ${cls}`}>{cd.text}</span>
            ); return (
              <>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Quarter {it.period.label}</p>
                  <p className="font-semibold text-foreground leading-snug">{formatLong(it.due.due)}</p>
                  {dueDateReason(it.due) && <p className="text-xs text-muted-foreground mt-0.5">Moved from {formatShort(it.due.standard)} ({it.due.skipped[0].reason.replace(" public holiday", "")})</p>}
                  {badge("inline-block mt-2 sm:hidden")}
                </div>
                {badge("hidden sm:inline-block")}
              </>
            ); })()}
          </div>
        ),
      )}
    </div>
  );
}
