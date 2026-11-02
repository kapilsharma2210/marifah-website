"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, CalendarClock, ChevronDown, Info, MessageCircle, Scale } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  PENALTIES, TAX_TABS, calculate, chargeSchedule, fmtAED, hasRepeat, needsAmount, needsCount, needsDates, resolveDeadline,
  type Inputs, type Penalty, type TaxType,
} from "@/lib/penalties/rules";
import { fmtISO, fmtLong } from "@/lib/penalties/dates";

const WHATSAPP = "971505815245";

/** The most searched penalties appear first in each list. */
const COMMON = new Set([
  "vat-late-registration", "vat-late-return", "vat-late-payment", "vat-voluntary-disclosure", "vat-late-deregistration",
  "ct-late-registration", "ct-late-return", "ct-late-payment", "ct-voluntary-disclosure", "ct-late-deregistration",
  "excise-late-registration", "excise-late-return", "excise-late-payment",
  "einv-system", "einv-invoice", "einv-credit-note", "einv-asp-changes",
]);

function todayInDubai() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Dubai" });
}

const fieldLabel = "text-sm font-medium text-foreground block mb-1.5";
const hint = "text-xs text-muted-foreground mt-1";

export function PenaltyCalculator() {
  const [tax, setTax] = useState<TaxType>("vat");
  const [penaltyId, setPenaltyId] = useState("vat-late-return");
  const [deadlineMode, setDeadlineMode] = useState<"period" | "date">("period");
  const [inputs, setInputs] = useState<Inputs>({});
  const [amountText, setAmountText] = useState("");
  const [showSchedule, setShowSchedule] = useState(false);

  useEffect(() => {
    setInputs((i) => ({ ...i, actionDate: i.actionDate || todayInDubai() }));
  }, []);

  const list = useMemo(() => PENALTIES.filter((p) => p.tax === tax), [tax]);
  const common = list.filter((p) => COMMON.has(p.id));
  const other = list.filter((p) => !COMMON.has(p.id));
  const penalty = PENALTIES.find((p) => p.id === penaltyId) as Penalty;
  const m = penalty.method;

  const chooseTax = (t: TaxType) => {
    setTax(t);
    const first = PENALTIES.find((p) => p.tax === t && COMMON.has(p.id))!;
    choosePenalty(first.id);
  };
  const choosePenalty = (id: string) => {
    setPenaltyId(id);
    setShowSchedule(false);
    const p = PENALTIES.find((x) => x.id === id)!;
    setDeadlineMode(p.deadlineHelper ? "period" : "date");
  };

  const effectiveInputs: Inputs = {
    ...inputs,
    deadline: deadlineMode === "date" || !penalty.deadlineHelper ? inputs.deadline : undefined,
    periodEnd: deadlineMode === "period" && penalty.deadlineHelper ? inputs.periodEnd : undefined,
    amount: amountText ? Number(amountText.replace(/,/g, "")) : undefined,
  };
  const result = calculate(penalty, effectiveInputs);
  const schedule = needsDates(m) && result.ok && !result.onTime ? chargeSchedule(penalty, effectiveInputs) : [];
  const computedDeadline = penalty.deadlineHelper && deadlineMode === "period" ? resolveDeadline(penalty, effectiveInputs) : null;
  const monthly = ["tieredMonthly", "monthlyCapped", "latePayment", "voluntaryDisclosure", "noDisclosureBeforeAudit", "einvSystem"].includes(m.type);

  const set = (k: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((i) => ({ ...i, [k]: e.target.type === "checkbox" ? e.target.checked : k === "count" ? Number(e.target.value) : e.target.value }));

  const helperLabel = penalty.deadlineHelper === "ctReturn" ? "9 months after the period end" : "28 days after the period end";
  const waText = encodeURIComponent(`Hello Marifah Tax Advisory, I used your penalty calculator for "${penalty.title}" and would like advice.`);

  return (
    <div className="rounded-3xl border border-primary/20 bg-card shadow-sm overflow-hidden">
      {/* Tax tabs */}
      <div role="tablist" aria-label="Tax type" className="flex overflow-x-auto border-b border-border bg-background/60">
        {TAX_TABS.map((t) => {
          const active = t.id === tax;
          return (
            <button key={t.id} role="tab" aria-selected={active} onClick={() => chooseTax(t.id)}
              className={`shrink-0 px-5 sm:px-7 py-4 text-sm font-semibold border-b-2 transition-colors ${active ? "border-primary text-primary bg-card" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-[1fr_400px]">
        {/* Inputs */}
        <div className="p-5 sm:p-8 space-y-6">
          <div>
            <label htmlFor="pc-penalty" className={fieldLabel}>What happened?</label>
            <div className="relative">
              <select id="pc-penalty" value={penaltyId} onChange={(e) => choosePenalty(e.target.value)}
                className="w-full h-12 appearance-none rounded-xl border border-input bg-background pl-4 pr-10 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <optgroup label="Most common">
                  {common.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
                </optgroup>
                {other.length > 0 && (
                  <optgroup label="Other penalties">
                    {other.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
                  </optgroup>
                )}
              </select>
              <ChevronDown className="w-4 h-4 text-muted-foreground absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <p className={hint}>{penalty.summary}</p>
          </div>

          <div className="rounded-xl bg-primary/5 border border-primary/10 px-4 py-3 flex gap-3">
            <Scale className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground">{penalty.display}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{penalty.legal}</p>
            </div>
          </div>

          {needsDates(m) && (
            <div className="space-y-4">
              {penalty.deadlineHelper && (
                <div role="radiogroup" aria-label="How to set the deadline" className="inline-flex rounded-full border border-border p-1 bg-background text-xs font-semibold">
                  {(["period", "date"] as const).map((mode) => (
                    <button key={mode} role="radio" aria-checked={deadlineMode === mode} onClick={() => setDeadlineMode(mode)}
                      className={`px-4 py-1.5 rounded-full transition-colors ${deadlineMode === mode ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                      {mode === "period" ? "Use tax period end" : "Enter the deadline"}
                    </button>
                  ))}
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                {penalty.deadlineHelper && deadlineMode === "period" ? (
                  <div>
                    <label htmlFor="pc-period" className={fieldLabel}>Tax period end</label>
                    <Input id="pc-period" type="date" value={inputs.periodEnd ?? ""} onChange={set("periodEnd")} className="h-11 bg-background" />
                    <p className={hint}>
                      {computedDeadline ? <>Deadline: <strong className="text-foreground">{fmtLong(computedDeadline)}</strong> ({helperLabel})</> : `The deadline is ${helperLabel}.`}
                    </p>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="pc-deadline" className={fieldLabel}>{penalty.deadlineLabel ?? "Deadline"}</label>
                    <Input id="pc-deadline" type="date" value={inputs.deadline ?? ""} onChange={set("deadline")} className="h-11 bg-background" />
                  </div>
                )}
                <div>
                  <label htmlFor="pc-action" className={fieldLabel}>{penalty.actionLabel ?? "Date"}</label>
                  <Input id="pc-action" type="date" value={inputs.actionDate ?? ""} onChange={set("actionDate")} className="h-11 bg-background" />
                </div>
              </div>
            </div>
          )}

          {needsAmount(m) && (
            <div className="sm:max-w-xs">
              <label htmlFor="pc-amount" className={fieldLabel}>{penalty.amountLabel ?? "Amount (AED)"}</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">AED</span>
                <Input id="pc-amount" inputMode="decimal" value={amountText} placeholder="0"
                  onChange={(e) => setAmountText(e.target.value.replace(/[^\d.,]/g, ""))} className="h-11 bg-background pl-12 tabular-nums" />
              </div>
            </div>
          )}

          {needsCount(m) && (
            <div className="sm:max-w-xs">
              <label htmlFor="pc-count" className={fieldLabel}>
                Number of {m.type === "perCase" || m.type === "einvPerDocument" ? m.unit : "documents"}
                {m.type === "einvPerDocument" ? " in the month" : ""}
              </label>
              <Input id="pc-count" type="number" min={1} step={1} value={inputs.count ? String(inputs.count) : ""} onChange={set("count")} className="h-11 bg-background tabular-nums" />
            </div>
          )}

          {hasRepeat(m) && (
            <label className="flex items-start gap-2.5 text-sm text-foreground cursor-pointer">
              <input type="checkbox" checked={!!inputs.repeat} onChange={set("repeat")} className="mt-0.5 w-4 h-4 accent-[#1B2B5B] shrink-0" />
              <span>This is a repeat violation within 24 months of the last one</span>
            </label>
          )}

          {penalty.notes && penalty.notes.length > 0 && (
            <ul className="space-y-2">
              {penalty.notes.map((n) => (
                <li key={n} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                  <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />{n}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Result */}
        <aside aria-live="polite" className="bg-primary text-primary-foreground p-6 sm:p-8 flex flex-col">
          <p className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70">Estimated penalty</p>
          {result.ok ? (
            <>
              <p className="mt-2 text-4xl sm:text-5xl font-bold tabular-nums leading-tight">AED {fmtAED(result.total)}</p>
              {result.onTime ? (
                <p className="mt-2 text-sm text-primary-foreground/80">On time — no penalty.</p>
              ) : result.daysLate !== undefined ? (
                <p className="mt-2 text-sm text-primary-foreground/80 flex items-center gap-1.5">
                  <CalendarClock className="w-4 h-4" />
                  {result.daysLate} day{result.daysLate === 1 ? "" : "s"} late
                  {monthly && result.months ? ` · ${result.months} month${result.months === 1 ? "" : "s"} charged` : ""}
                </p>
              ) : null}

              {result.lines.length > 0 && (
                <dl className="mt-6 space-y-2.5 border-t border-primary-foreground/15 pt-5">
                  {result.lines.map((l) => (
                    <div key={l.label} className="flex justify-between gap-4 text-sm">
                      <dt className="text-primary-foreground/80">{l.label}</dt>
                      <dd className="font-semibold tabular-nums shrink-0">{l.amount < 0 ? "−" : ""}AED {fmtAED(Math.abs(l.amount))}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {result.deadline && !result.onTime && (
                <p className="mt-4 text-xs text-primary-foreground/70">
                  Deadline {fmtLong(result.deadline)} · {penalty.actionLabel?.replace(" (or today)", "")} {fmtLong(result.actionDate!)}
                </p>
              )}

              {schedule.length > 1 && (
                <div className="mt-4">
                  <button onClick={() => setShowSchedule((s) => !s)} className="text-xs font-semibold underline underline-offset-2 text-primary-foreground/90">
                    {showSchedule ? "Hide" : "Show"} the dates each month was charged
                  </button>
                  {showSchedule && (
                    <ol className="mt-2 max-h-40 overflow-y-auto text-xs text-primary-foreground/80 space-y-0.5 tabular-nums">
                      {schedule.map((d, i) => <li key={d}>Month {i + 1}: {fmtLong(d)}</li>)}
                    </ol>
                  )}
                </div>
              )}

              {result.warnings.map((w) => (
                <p key={w} className="mt-4 flex gap-2 text-xs leading-relaxed bg-primary-foreground/10 rounded-lg p-3">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />{w}
                </p>
              ))}
            </>
          ) : (
            <>
              <p className="mt-2 text-4xl sm:text-5xl font-bold tabular-nums leading-tight text-primary-foreground/40">AED —</p>
              <p className="mt-3 text-sm text-primary-foreground/80">Enter: {result.missing.replace(" (AED)", "")}</p>
            </>
          )}

          <div className="mt-auto pt-8 space-y-3">
            <p className="text-sm text-primary-foreground/85">Facing a penalty? We can check it, file what's outstanding and, where there are grounds, help you request a reconsideration.</p>
            <a href={`https://wa.me/${WHATSAPP}?text=${waText}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-primary-foreground text-primary px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              <MessageCircle className="w-4 h-4" /> Talk to a tax professional
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export { fmtISO };
