// UAE tax administrative penalties, from the official consolidated texts:
//
//  • VAT & Excise Tax (and the Tax Procedures Law as it applies to them):
//    Cabinet Decision No. 40 of 2017, as amended by Nos. 49 of 2021, 108 of 2021 and 129 of 2025.
//    The amounts below are those in force from 14 April 2026 (Cabinet Decision No. 129 of 2025).
//  • Corporate Tax: Cabinet Decision No. 75 of 2023, as amended by No. 10 of 2024.
//  • E-invoicing: Cabinet Decision No. 173 of 2026 (replaced No. 106 of 2025).
//
// If the FTA changes a penalty, update it here; the calculator and the reference table both read this file.

import {
  addDays, addMonthsRule, ctReturnDeadline, daysLate, fmtISO, fmtLong, monthlyChargeDates, parseDate, vatReturnDeadline,
  type MonthRule,
} from "./dates";

export type TaxType = "vat" | "ct" | "excise" | "einv";

export const TAX_TABS: { id: TaxType; label: string; short: string }[] = [
  { id: "vat", label: "VAT", short: "VAT" },
  { id: "ct", label: "Corporate Tax", short: "Corporate Tax" },
  { id: "excise", label: "Excise Tax", short: "Excise" },
  { id: "einv", label: "E-Invoicing", short: "E-Invoicing" },
];

export const VAT_REGIME_START = "2026-04-14";

/** How a penalty is worked out. */
export type Method =
  | { type: "fixed"; amount: number; repeat?: number }
  | { type: "perCase"; amount: number; unit: string }
  | { type: "returnLate"; first: number; repeat: number } // one-off, VAT/Excise late return
  | { type: "tieredMonthly"; first12: number; after12: number } // CT late return / declaration
  | { type: "monthlyCapped"; first: number; monthly: number; cap: number } // late deregistration
  | { type: "latePayment"; annualRate: number }
  | { type: "voluntaryDisclosure"; monthlyRate: number }
  | { type: "noDisclosureBeforeAudit"; fixedRate: number; monthlyRate: number }
  | { type: "percentOfTax"; rate: number }
  | { type: "higherOf"; amount: number; rate: number }
  | { type: "einvSystem"; first: number; monthly: number; cap12m: number }
  | { type: "einvPerDocument"; amount: number; capPerMonth: number; unit: string }
  | { type: "einvDaily"; perDay: number; capPerMonth: number };

/** Where the deadline comes from when the user does not type it in. */
export type DeadlineHelper = "vatReturn" | "ctReturn" | null;

export type Penalty = {
  id: string;
  tax: TaxType;
  title: string;
  /** Short line shown under the title. */
  summary: string;
  /** Human-readable amount for the reference table. */
  display: string;
  legal: string;
  method: Method;
  monthRule?: MonthRule;
  deadlineHelper?: DeadlineHelper;
  /** Label for the deadline date field. */
  deadlineLabel?: string;
  /** Label for the date the obligation was met. */
  actionLabel?: string;
  /** Label for the money amount field. */
  amountLabel?: string;
  notes?: string[];
  /** Applies only to VAT/Excise items whose amount changed on 14 April 2026. */
  regimeSensitive?: boolean;
};

const TPL = (item: number) => `Cabinet Decision No. 40 of 2017 as amended (incl. No. 129 of 2025), Table 1, item ${item}`;
const VAT3 = (item: number) => `Cabinet Decision No. 40 of 2017 as amended (incl. No. 129 of 2025), Table 3, item ${item}`;
const EXC2 = (item: number) => `Cabinet Decision No. 40 of 2017 as amended, Table 2, item ${item}`;
const CT = (item: number) => `Cabinet Decision No. 75 of 2023 as amended by No. 10 of 2024, item ${item}`;
const EINV = "Cabinet Decision No. 173 of 2026 (e-invoicing penalties)";

const LATE_PAYMENT_NOTE =
  "14% a year is charged as one-twelfth (about 1.17%) of the unpaid tax for each month or part of a month, starting the day after the due date.";
const VD_DUE_NOTE =
  "For tax due under a voluntary disclosure or a tax assessment, the payment deadline is 20 business days after submitting the disclosure or receiving the assessment.";

/** Tax Procedures Law penalties shared by VAT and Excise Tax (Table 1). */
function procedural(tax: "vat" | "excise"): Penalty[] {
  const label = tax === "vat" ? "VAT" : "Excise Tax";
  const helper: DeadlineHelper = tax === "vat" ? "vatReturn" : null;
  return [
    {
      id: `${tax}-late-registration`, tax, title: `Late ${label} registration`,
      summary: "Registration application not submitted within the deadline.",
      display: "AED 10,000", legal: TPL(3), method: { type: "fixed", amount: 10_000 },
      notes: [
        tax === "vat"
          ? "You must apply within 30 days of exceeding the AED 375,000 mandatory threshold. The FTA can also assess VAT from the date you should have been registered, which carries late-payment penalties of its own."
          : "Registration is required before you start importing, producing or stockpiling excise goods.",
      ],
    },
    {
      id: `${tax}-late-return`, tax, title: `Late ${label} return filing`,
      summary: "Return not filed by the deadline — one penalty per late return.",
      display: "AED 1,000 (AED 2,000 if repeated within 24 months)", legal: TPL(8),
      method: { type: "returnLate", first: 1_000, repeat: 2_000 },
      deadlineHelper: helper, deadlineLabel: "Return deadline", actionLabel: "Date filed (or today)",
      notes: ["Tax paid late is penalised separately — use “Late payment of tax”."],
    },
    {
      id: `${tax}-late-payment`, tax, title: `Late payment of ${label}`,
      summary: "Tax not paid by the due date.",
      display: "14% a year on the unpaid tax, charged monthly", legal: TPL(9),
      method: { type: "latePayment", annualRate: 0.14 }, monthRule: "nextFirst", regimeSensitive: true,
      deadlineHelper: helper, deadlineLabel: "Payment due date", actionLabel: "Date paid (or today)", amountLabel: "Unpaid tax (AED)",
      notes: [LATE_PAYMENT_NOTE, VD_DUE_NOTE],
    },
    {
      id: `${tax}-voluntary-disclosure`, tax, title: "Voluntary disclosure of an error",
      summary: "You correct an under-declared return yourself, before any FTA audit notice.",
      display: "1% of the tax difference per month or part month", legal: TPL(11),
      method: { type: "voluntaryDisclosure", monthlyRate: 0.01 }, monthRule: "nextFirst", regimeSensitive: true,
      deadlineHelper: helper, deadlineLabel: "Original return deadline", actionLabel: "Date of voluntary disclosure", amountLabel: "Tax difference (AED)",
      notes: ["Counted from the day after the original return deadline until the day you submit the disclosure."],
    },
    {
      id: `${tax}-no-disclosure-audit`, tax, title: "Error found after an FTA audit notice",
      summary: "No voluntary disclosure was made before the FTA notified you of a tax audit.",
      display: "15% of the tax difference + 1% per month", legal: TPL(12),
      method: { type: "noDisclosureBeforeAudit", fixedRate: 0.15, monthlyRate: 0.01 }, monthRule: "nextFirst", regimeSensitive: true,
      deadlineHelper: helper, deadlineLabel: "Original return deadline", actionLabel: "Date of disclosure or tax assessment", amountLabel: "Tax difference (AED)",
      notes: ["The 1% runs from the day after the original return deadline until you make the disclosure, or until the FTA issues its tax assessment if you don't."],
    },
    {
      id: `${tax}-incorrect-return`, tax, title: "Incorrect tax return",
      summary: "A return with an error, not corrected before the deadline.",
      display: "AED 500", legal: TPL(10), method: { type: "fixed", amount: 500 },
      notes: ["No penalty if you correct the return before its deadline, or if a voluntary disclosure shows no change in the tax due."],
    },
    {
      id: `${tax}-late-deregistration`, tax, title: `Late ${label} deregistration`,
      summary: "Deregistration application not submitted within the deadline.",
      display: "AED 1,000, then AED 1,000 a month (max AED 10,000)", legal: TPL(4),
      method: { type: "monthlyCapped", first: 1_000, monthly: 1_000, cap: 10_000 }, monthRule: "nextFirst",
      deadlineLabel: "Deregistration deadline", actionLabel: "Date applied (or today)",
      notes: [tax === "vat" ? "The VAT deregistration application is due within 20 business days of the event that requires it (for example, ceasing taxable supplies)." : "The deadline depends on when you stopped the excise activity."],
    },
    {
      id: `${tax}-failure-notify-changes`, tax, title: "Failure to update your tax record",
      summary: "Changes (address, activity, owners, etc.) not reported to the FTA.",
      display: "AED 1,000 (AED 5,000 if repeated within 24 months)", legal: TPL(5),
      method: { type: "fixed", amount: 1_000, repeat: 5_000 },
    },
    {
      id: `${tax}-records`, tax, title: "Failure to keep required records",
      summary: "Accounting and tax records not kept as the law requires.",
      display: "AED 10,000 (AED 20,000 if repeated within 24 months)", legal: TPL(1),
      method: { type: "fixed", amount: 10_000, repeat: 20_000 },
    },
    {
      id: `${tax}-arabic`, tax, title: "Records not provided in Arabic",
      summary: "Requested data, records or documents not submitted in Arabic.",
      display: "AED 5,000", legal: TPL(2), method: { type: "fixed", amount: 5_000 },
    },
    {
      id: `${tax}-audit`, tax, title: "Failure to facilitate a tax audit",
      summary: "Not cooperating with an FTA tax auditor.",
      display: "AED 20,000", legal: TPL(13), method: { type: "fixed", amount: 20_000 },
    },
    {
      id: `${tax}-legal-rep-notify`, tax, title: "Legal representative: appointment not notified",
      summary: "Paid from the legal representative's own funds.",
      display: "AED 1,000", legal: TPL(6), method: { type: "fixed", amount: 1_000 },
    },
    {
      id: `${tax}-legal-rep-return`, tax, title: "Legal representative: late return",
      summary: "Paid from the legal representative's own funds.",
      display: "AED 1,000 (AED 2,000 if repeated within 24 months)", legal: TPL(7),
      method: { type: "returnLate", first: 1_000, repeat: 2_000 },
      deadlineHelper: helper, deadlineLabel: "Return deadline", actionLabel: "Date filed (or today)",
    },
    {
      id: `${tax}-on-behalf`, tax, title: "Failure to account for tax on behalf of another person",
      summary: "Tax you had to calculate and pay for someone else, paid late.",
      display: "14% a year on the unpaid tax, charged monthly", legal: TPL(14),
      method: { type: "latePayment", annualRate: 0.14 }, monthRule: "nextFirst", regimeSensitive: true,
      deadlineLabel: "Payment due date", actionLabel: "Date paid (or today)", amountLabel: "Unpaid tax (AED)",
      notes: [LATE_PAYMENT_NOTE],
    },
    {
      id: `${tax}-imports`, tax, title: "Tax on imported goods not calculated",
      summary: "Tax due on imports not declared or not paid.",
      display: "50% of the unpaid or undeclared tax", legal: TPL(15),
      method: { type: "percentOfTax", rate: 0.5 }, amountLabel: "Unpaid or undeclared tax (AED)",
    },
  ];
}

export const PENALTIES: Penalty[] = [
  // ── VAT ──
  ...procedural("vat"),
  {
    id: "vat-price-display", tax: "vat", title: "Prices not shown inclusive of VAT",
    summary: "Prices displayed without VAT included.", display: "AED 5,000", legal: VAT3(1),
    method: { type: "fixed", amount: 5_000 },
  },
  {
    id: "vat-margin", tax: "vat", title: "Profit margin scheme not notified",
    summary: "Applying VAT on the margin without notifying the FTA.", display: "AED 2,500", legal: VAT3(2),
    method: { type: "fixed", amount: 2_500 },
  },
  {
    id: "vat-designated-zone", tax: "vat", title: "Designated Zone goods conditions breached",
    summary: "Conditions for keeping or moving goods in a Designated Zone not met.",
    display: "AED 50,000 or 50% of the tax, whichever is higher", legal: VAT3(3),
    method: { type: "higherOf", amount: 50_000, rate: 0.5 }, amountLabel: "Tax on the goods (AED)",
  },
  {
    id: "vat-tax-invoice", tax: "vat", title: "Tax invoice not issued on time",
    summary: "Tax invoice (or alternative document) not issued within the legal period.",
    display: "AED 2,500 per case", legal: VAT3(4), method: { type: "perCase", amount: 2_500, unit: "invoices" },
    notes: ["A tax invoice must generally be issued within 14 days of the supply."],
  },
  {
    id: "vat-credit-note", tax: "vat", title: "Tax credit note not issued on time",
    summary: "Tax credit note (or alternative document) not issued within the legal period.",
    display: "AED 2,500 per case", legal: VAT3(5), method: { type: "perCase", amount: 2_500, unit: "credit notes" },
  },
  {
    id: "vat-electronic-invoice", tax: "vat", title: "Electronic invoice conditions not met",
    summary: "Conditions for electronic tax invoices or credit notes not complied with.",
    display: "AED 2,500 per case", legal: VAT3(6), method: { type: "perCase", amount: 2_500, unit: "documents" },
  },

  // ── Corporate Tax ──
  {
    id: "ct-late-registration", tax: "ct", title: "Late Corporate Tax registration",
    summary: "Registration application not submitted by your FTA deadline.", display: "AED 10,000", legal: CT(14),
    method: { type: "fixed", amount: 10_000 },
    notes: [
      "FTA waiver initiative: the AED 10,000 is waived (or refunded) if you file your first Corporate Tax return, or annual declaration, within 7 months of the end of your first tax period. Check the current FTA public clarification for eligibility.",
    ],
  },
  {
    id: "ct-late-return", tax: "ct", title: "Late Corporate Tax return filing",
    summary: "Return not filed within 9 months of the end of the tax period.",
    display: "AED 500 a month for months 1–12, then AED 1,000 a month", legal: CT(7),
    method: { type: "tieredMonthly", first12: 500, after12: 1_000 }, monthRule: "lastDay",
    deadlineHelper: "ctReturn", deadlineLabel: "Return deadline", actionLabel: "Date filed (or today)",
    notes: ["Charged for each month or part of a month: even one day late is a full month.", "Tax paid late is penalised separately — use “Late payment of Corporate Tax”."],
  },
  {
    id: "ct-late-payment", tax: "ct", title: "Late payment of Corporate Tax",
    summary: "Tax not paid within 9 months of the end of the tax period.",
    display: "14% a year on the unpaid tax, charged monthly", legal: CT(8),
    method: { type: "latePayment", annualRate: 0.14 }, monthRule: "lastDay",
    deadlineHelper: "ctReturn", deadlineLabel: "Payment due date", actionLabel: "Date paid (or today)", amountLabel: "Unpaid Corporate Tax (AED)",
    notes: [LATE_PAYMENT_NOTE, VD_DUE_NOTE],
  },
  {
    id: "ct-voluntary-disclosure", tax: "ct", title: "Voluntary disclosure of an error",
    summary: "You correct an under-declared return yourself, before any FTA audit notice.",
    display: "1% of the tax difference per month or part month", legal: CT(10),
    method: { type: "voluntaryDisclosure", monthlyRate: 0.01 }, monthRule: "lastDay",
    deadlineHelper: "ctReturn", deadlineLabel: "Original payment due date", actionLabel: "Date of voluntary disclosure", amountLabel: "Tax difference (AED)",
    notes: ["Counted from the day after the original due date until the day you submit the disclosure."],
  },
  {
    id: "ct-no-disclosure-audit", tax: "ct", title: "Error found after an FTA audit notice",
    summary: "No voluntary disclosure was made before the FTA notified you of a tax audit.",
    display: "15% of the tax difference + 1% per month", legal: CT(11),
    method: { type: "noDisclosureBeforeAudit", fixedRate: 0.15, monthlyRate: 0.01 }, monthRule: "lastDay",
    deadlineHelper: "ctReturn", deadlineLabel: "Original payment due date", actionLabel: "Date of disclosure or tax assessment", amountLabel: "Tax difference (AED)",
    notes: ["The 1% runs until you make the disclosure, or until the FTA issues its tax assessment if you don't."],
  },
  {
    id: "ct-incorrect-return", tax: "ct", title: "Incorrect Corporate Tax return",
    summary: "A return with an error, not corrected before the deadline.", display: "AED 500", legal: CT(9),
    method: { type: "fixed", amount: 500 },
    notes: ["No penalty if you correct the return before its deadline."],
  },
  {
    id: "ct-late-declaration", tax: "ct", title: "Late or missing declaration",
    summary: "For example, the annual declaration of an exempt person.",
    display: "AED 500 a month for months 1–12, then AED 1,000 a month", legal: CT(13),
    method: { type: "tieredMonthly", first12: 500, after12: 1_000 }, monthRule: "lastDay",
    deadlineLabel: "Declaration deadline", actionLabel: "Date submitted (or today)",
  },
  {
    id: "ct-late-deregistration", tax: "ct", title: "Late Corporate Tax deregistration",
    summary: "Deregistration not applied for within 3 months of ceasing business.",
    display: "AED 1,000, then AED 1,000 a month (max AED 10,000)", legal: CT(3),
    method: { type: "monthlyCapped", first: 1_000, monthly: 1_000, cap: 10_000 }, monthRule: "lastDay",
    deadlineLabel: "Deregistration deadline", actionLabel: "Date applied (or today)",
  },
  {
    id: "ct-failure-notify-changes", tax: "ct", title: "Failure to update your tax record",
    summary: "Changes to your tax record not reported to the FTA.",
    display: "AED 1,000 (AED 5,000 if repeated within 24 months)", legal: CT(4),
    method: { type: "fixed", amount: 1_000, repeat: 5_000 },
  },
  {
    id: "ct-records", tax: "ct", title: "Failure to keep required records",
    summary: "Records and information not kept as the law requires.",
    display: "AED 10,000 (AED 20,000 if repeated within 24 months)", legal: CT(1),
    method: { type: "fixed", amount: 10_000, repeat: 20_000 },
  },
  {
    id: "ct-arabic", tax: "ct", title: "Records not provided in Arabic",
    summary: "Requested data, records or documents not submitted in Arabic.", display: "AED 5,000", legal: CT(2),
    method: { type: "fixed", amount: 5_000 },
  },
  {
    id: "ct-audit", tax: "ct", title: "Failure to facilitate a tax audit",
    summary: "Not cooperating with an FTA tax auditor.", display: "AED 20,000", legal: CT(12),
    method: { type: "fixed", amount: 20_000 },
  },
  {
    id: "ct-legal-rep-notify", tax: "ct", title: "Legal representative: appointment not notified",
    summary: "Paid from the legal representative's own funds.", display: "AED 1,000", legal: CT(5),
    method: { type: "fixed", amount: 1_000 },
  },
  {
    id: "ct-legal-rep-return", tax: "ct", title: "Legal representative: late return",
    summary: "Paid from the legal representative's own funds.",
    display: "AED 500 a month for months 1–12, then AED 1,000 a month", legal: CT(6),
    method: { type: "tieredMonthly", first12: 500, after12: 1_000 }, monthRule: "lastDay",
    deadlineHelper: "ctReturn", deadlineLabel: "Return deadline", actionLabel: "Date filed (or today)",
  },

  // ── Excise Tax ──
  ...procedural("excise"),
  {
    id: "excise-price-display", tax: "excise", title: "Prices not shown inclusive of Excise Tax",
    summary: "Prices displayed without Excise Tax included.", display: "AED 5,000", legal: EXC2(1),
    method: { type: "fixed", amount: 5_000 },
  },
  {
    id: "excise-designated-zone", tax: "excise", title: "Designated Zone conditions breached",
    summary: "Conditions for transferring, storing or processing excise goods not met.",
    display: "AED 50,000 or 50% of the tax, whichever is higher", legal: EXC2(2),
    method: { type: "higherOf", amount: 50_000, rate: 0.5 }, amountLabel: "Excise Tax on the goods (AED)",
  },
  {
    id: "excise-price-lists", tax: "excise", title: "Price lists not provided",
    summary: "Required price lists for excise goods not provided.",
    display: "AED 5,000 (AED 10,000 if repeated)", legal: EXC2(3),
    method: { type: "fixed", amount: 5_000, repeat: 10_000 },
  },

  // ── E-invoicing ──
  {
    id: "einv-system", tax: "einv", title: "E-invoicing system or ASP not in place",
    summary: "E-invoicing not implemented, or no Accredited Service Provider appointed, by your deadline.",
    display: "AED 5,000, then AED 5,000 a month (max AED 50,000 in 12 months)", legal: EINV,
    method: { type: "einvSystem", first: 5_000, monthly: 5_000, cap12m: 50_000 }, monthRule: "nextFirst",
    deadlineLabel: "Your e-invoicing deadline", actionLabel: "Date implemented (or today)",
    notes: ["Applies only once your mandatory e-invoicing date has passed."],
  },
  {
    id: "einv-invoice", tax: "einv", title: "E-invoice not issued and transmitted on time",
    summary: "Each e-invoice not issued or sent through the system on time.",
    display: "AED 100 per invoice (max AED 5,000 per calendar month)", legal: EINV,
    method: { type: "einvPerDocument", amount: 100, capPerMonth: 5_000, unit: "e-invoices" },
  },
  {
    id: "einv-credit-note", tax: "einv", title: "E-credit note not issued and transmitted on time",
    summary: "Each e-credit note not issued or sent through the system on time.",
    display: "AED 100 per credit note (max AED 5,000 per calendar month)", legal: EINV,
    method: { type: "einvPerDocument", amount: 100, capPerMonth: 5_000, unit: "e-credit notes" },
  },
  {
    id: "einv-asp-changes", tax: "einv", title: "ASP not told about changes to your data",
    summary: "Changes to your FTA-registered data not passed to your Accredited Service Provider on time.",
    display: "AED 250 per day (max AED 5,000 per calendar month)", legal: EINV,
    method: { type: "einvDaily", perDay: 250, capPerMonth: 5_000 },
    deadlineLabel: "Notification deadline", actionLabel: "Date notified (or today)",
  },
];

export const penaltiesFor = (tax: TaxType) => PENALTIES.filter((p) => p.tax === tax);

// ─────────────────────────────────────────────────────────────────────────────
// Calculation

export type Inputs = {
  deadline?: string;
  /** Tax period end, used to work out the deadline when `deadline` is empty. */
  periodEnd?: string;
  actionDate?: string;
  amount?: number;
  repeat?: boolean;
  count?: number;
  /** For per-document e-invoicing penalties: documents in one calendar month. */
};

export type ResultLine = { label: string; amount: number };
export type Result =
  | { ok: false; missing: string }
  | {
      ok: true;
      total: number;
      lines: ResultLine[];
      deadline?: string;
      actionDate?: string;
      daysLate?: number;
      months?: number;
      onTime?: boolean;
      warnings: string[];
    };

const round2 = (n: number) => Math.round(n * 100) / 100;

export function needsDates(m: Method) {
  return ["returnLate", "tieredMonthly", "monthlyCapped", "latePayment", "voluntaryDisclosure", "noDisclosureBeforeAudit", "einvSystem", "einvDaily"].includes(m.type);
}
export function needsAmount(m: Method) {
  return ["latePayment", "voluntaryDisclosure", "noDisclosureBeforeAudit", "percentOfTax", "higherOf"].includes(m.type);
}
export function needsCount(m: Method) {
  return m.type === "perCase" || m.type === "einvPerDocument";
}
export function hasRepeat(m: Method) {
  return (m.type === "fixed" && m.repeat !== undefined) || m.type === "returnLate";
}

export function resolveDeadline(p: Penalty, inputs: Inputs): Date | null {
  const direct = inputs.deadline ? parseDate(inputs.deadline) : null;
  if (direct) return direct;
  const end = inputs.periodEnd ? parseDate(inputs.periodEnd) : null;
  if (!end) return null;
  if (p.deadlineHelper === "vatReturn") return vatReturnDeadline(end);
  if (p.deadlineHelper === "ctReturn") return ctReturnDeadline(end);
  return null;
}

export function calculate(p: Penalty, inputs: Inputs): Result {
  const m = p.method;
  const warnings: string[] = [];
  const amount = inputs.amount ?? NaN;
  const count = Math.floor(inputs.count ?? NaN);

  if (needsAmount(m) && !(amount > 0)) return { ok: false, missing: p.amountLabel ?? "Amount" };
  if (needsCount(m) && !(count > 0)) return { ok: false, missing: "Number of documents" };

  // Penalties that don't depend on dates
  if (!needsDates(m)) {
    switch (m.type) {
      case "fixed": {
        const repeat = !!inputs.repeat && m.repeat !== undefined;
        const v = repeat ? m.repeat! : m.amount;
        return { ok: true, total: v, lines: [{ label: repeat ? "Repeat violation (within 24 months)" : "Penalty", amount: v }], warnings };
      }
      case "perCase": {
        const v = m.amount * count;
        return { ok: true, total: v, lines: [{ label: `${count} ${m.unit} × AED ${m.amount.toLocaleString("en-US")}`, amount: v }], warnings };
      }
      case "percentOfTax": {
        const v = round2(amount * m.rate);
        return { ok: true, total: v, lines: [{ label: `${m.rate * 100}% of AED ${fmtAED(amount)}`, amount: v }], warnings };
      }
      case "higherOf": {
        const pct = round2(amount * m.rate);
        const v = Math.max(m.amount, pct);
        return {
          ok: true, total: v,
          lines: [{ label: pct > m.amount ? `${m.rate * 100}% of the tax (higher than AED ${fmtAED(m.amount)})` : `Minimum penalty (50% of the tax is AED ${fmtAED(pct)})`, amount: v }],
          warnings,
        };
      }
      case "einvPerDocument": {
        const raw = m.amount * count;
        const v = Math.min(raw, m.capPerMonth);
        const lines = [{ label: `${count} ${m.unit} × AED ${m.amount}`, amount: raw }];
        if (raw > m.capPerMonth) lines.push({ label: `Capped at AED ${fmtAED(m.capPerMonth)} for the calendar month`, amount: v - raw });
        return { ok: true, total: v, lines, warnings: ["Enter the documents for one calendar month; the cap applies per month."] };
      }
    }
  }

  // Date-based penalties
  const deadline = resolveDeadline(p, inputs);
  if (!deadline) return { ok: false, missing: p.deadlineHelper ? "Deadline or tax period end" : p.deadlineLabel ?? "Deadline" };
  const action = inputs.actionDate ? parseDate(inputs.actionDate) : null;
  if (!action) return { ok: false, missing: p.actionLabel ?? "Date" };

  const late = daysLate(deadline, action);
  const base = { deadline: fmtISO(deadline), actionDate: fmtISO(action), daysLate: late };
  if (late === 0) {
    return { ok: true, total: 0, lines: [], ...base, months: 0, onTime: true, warnings };
  }

  const rule = p.monthRule ?? "nextFirst";
  const charges = monthlyChargeDates(deadline, action, rule);
  const months = charges.length;

  if (p.regimeSensitive && fmtISO(addDays(deadline, 1)) < VAT_REGIME_START) {
    warnings.push(
      `Part of this delay falls before 14 April 2026. Penalties for that part were set under the previous rules (Cabinet Decision No. 49 of 2021: 2% + 4% + 1% a day for late payment, and 5%–40% for voluntary disclosures), so the FTA's figure may be different. This result applies today's rules to the whole period.`
    );
  }

  switch (m.type) {
    case "returnLate": {
      const v = inputs.repeat ? m.repeat : m.first;
      return {
        ok: true, total: v, months, ...base, warnings,
        lines: [{ label: inputs.repeat ? "Repeat late filing (within 24 months)" : "First late filing", amount: v }],
      };
    }
    case "tieredMonthly": {
      const a = Math.min(months, 12);
      const b = Math.max(0, months - 12);
      const lines: ResultLine[] = [{ label: `${a} month${a === 1 ? "" : "s"} × AED ${fmtAED(m.first12)} (months 1–12)`, amount: a * m.first12 }];
      if (b) lines.push({ label: `${b} month${b === 1 ? "" : "s"} × AED ${fmtAED(m.after12)} (month 13 onwards)`, amount: b * m.after12 });
      return { ok: true, total: a * m.first12 + b * m.after12, lines, months, ...base, warnings };
    }
    case "monthlyCapped": {
      const raw = m.first + (months - 1) * m.monthly;
      const v = Math.min(raw, m.cap);
      const lines: ResultLine[] = [{ label: "Late application", amount: m.first }];
      if (months > 1) lines.push({ label: `${months - 1} further month${months - 1 === 1 ? "" : "s"} × AED ${fmtAED(m.monthly)}`, amount: (months - 1) * m.monthly });
      if (raw > m.cap) lines.push({ label: `Capped at AED ${fmtAED(m.cap)}`, amount: v - raw });
      return { ok: true, total: v, lines, months, ...base, warnings };
    }
    case "latePayment": {
      const perMonth = amount * (m.annualRate / 12);
      const v = round2(perMonth * months);
      return {
        ok: true, total: v, months, ...base, warnings,
        lines: [{ label: `${months} month${months === 1 ? "" : "s"} × AED ${fmtAED(round2(perMonth))} (14% ÷ 12 of AED ${fmtAED(amount)})`, amount: v }],
      };
    }
    case "voluntaryDisclosure": {
      const v = round2(amount * m.monthlyRate * months);
      return {
        ok: true, total: v, months, ...base, warnings,
        lines: [{ label: `${months} month${months === 1 ? "" : "s"} × 1% of AED ${fmtAED(amount)}`, amount: v }],
      };
    }
    case "noDisclosureBeforeAudit": {
      const fixed = round2(amount * m.fixedRate);
      const monthly = round2(amount * m.monthlyRate * months);
      return {
        ok: true, total: round2(fixed + monthly), months, ...base, warnings,
        lines: [
          { label: `Fixed 15% of AED ${fmtAED(amount)}`, amount: fixed },
          { label: `${months} month${months === 1 ? "" : "s"} × 1%`, amount: monthly },
        ],
      };
    }
    case "einvSystem": {
      // AED 5,000 when the failure starts, then AED 5,000 for each further month or part month,
      // with no more than AED 50,000 in any 12 consecutive months.
      let total = 0;
      const lines: ResultLine[] = [];
      for (let block = 0; block * 12 < months; block++) {
        const n = Math.min(12, months - block * 12);
        const raw = n * m.monthly;
        const v = Math.min(raw, m.cap12m);
        total += v;
        const from = fmtLong(charges[block * 12]);
        lines.push({ label: `${n} month${n === 1 ? "" : "s"} from ${from} × AED ${fmtAED(m.monthly)}${raw > m.cap12m ? ` (capped at AED ${fmtAED(m.cap12m)})` : ""}`, amount: v });
      }
      return { ok: true, total, lines, months, ...base, warnings };
    }
    case "einvDaily": {
      // AED 250 for each day or part day, capped at AED 5,000 per calendar month.
      const perMonth = new Map<string, number>();
      for (let d = addDays(deadline, 1); d <= action; d = addDays(d, 1)) {
        const key = fmtISO(d).slice(0, 7);
        perMonth.set(key, (perMonth.get(key) ?? 0) + 1);
      }
      let total = 0;
      const lines: ResultLine[] = [];
      for (const [key, days] of perMonth) {
        const raw = days * m.perDay;
        const v = Math.min(raw, m.capPerMonth);
        total += v;
        const label = new Date(`${key}-01T00:00:00Z`).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
        lines.push({ label: `${label}: ${days} day${days === 1 ? "" : "s"} × AED ${m.perDay}${raw > m.capPerMonth ? ` (capped at AED ${fmtAED(m.capPerMonth)})` : ""}`, amount: v });
      }
      return { ok: true, total, lines, months, ...base, warnings };
    }
  }
  return { ok: false, missing: "Inputs" };
}

export function fmtAED(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });
}

/** Charge dates for the "how it was counted" breakdown. */
export function chargeSchedule(p: Penalty, inputs: Inputs) {
  const deadline = resolveDeadline(p, inputs);
  const action = inputs.actionDate ? parseDate(inputs.actionDate) : null;
  if (!deadline || !action) return [];
  return monthlyChargeDates(deadline, action, p.monthRule ?? "nextFirst").map(fmtISO);
}

export { addMonthsRule };
