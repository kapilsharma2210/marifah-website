// UAE tax updates feed shown on /uae-tax-updates (and the latest three on the homepage).
//
// HOW TO ADD AN UPDATE: add an object at the top of UPDATES (newest first) and change LAST_REVIEWED.
// Only add changes confirmed by an official source (tax.gov.ae, mof.gov.ae, uaelegislation.gov.ae,
// a customs authority) or, failing that, by two reputable advisers. Always include a source link.

import { slugify } from "./blog-data";

export const LAST_REVIEWED = "2026-11-11";

export type UpdateCategory = "vat" | "ct" | "excise" | "customs" | "einv" | "procedures";

export const CATEGORIES: { id: UpdateCategory; label: string }[] = [
  { id: "ct", label: "Corporate Tax" },
  { id: "vat", label: "VAT" },
  { id: "einv", label: "E-Invoicing" },
  { id: "excise", label: "Excise Tax" },
  { id: "customs", label: "Customs" },
  { id: "procedures", label: "Penalties & Procedures" },
];

export type UpdateKind =
  | "Federal Decree-Law" | "Cabinet Decision" | "Ministerial Decision" | "FTA Decision"
  | "Public Clarification" | "Deadline" | "Announcement" | "Customs Notice";

export type TaxUpdate = {
  id: string;
  /** Date the change was issued, published or announced (YYYY-MM-DD). Used for ordering. */
  date: string;
  /** When it takes effect, if different from `date` (YYYY-MM-DD). */
  effective?: string;
  category: UpdateCategory;
  kind: UpdateKind;
  title: string;
  summary: string;
  /** Who should act, in one line. */
  whoIsAffected?: string;
  sources: { label: string; url: string }[];
  /** A Marifah guide or tool that explains it further. */
  related?: { label: string; href: string };
};

const blog = (title: string) => `/blog/${slugify(title)}`;
const FTA_CT = "https://tax.gov.ae/en/legislation/corporate.tax.aspx";
const FTA_VAT = "https://tax.gov.ae/en/legislation/vat.legislation.aspx";
const EINV_GUIDE = { label: "Our e-invoicing guide", href: blog("E-Invoicing in the UAE: Deadlines, Requirements and Penalties") };

export const UPDATES: TaxUpdate[] = [
  // ── Upcoming deadlines ──
  {
    id: "einv-phase-2", date: "2027-03-31", effective: "2027-07-01", category: "einv", kind: "Deadline",
    title: "E-invoicing Phase 2: appoint an Accredited Service Provider by 31 March 2027",
    summary: "Businesses with revenue below AED 50 million must appoint an Accredited Service Provider (ASP) by 31 March 2027 and start issuing e-invoices from 1 July 2027.",
    whoIsAffected: "All other VAT-registered and in-scope businesses",
    sources: [{ label: "Ministry of Finance – legislation", url: "https://mof.gov.ae/en/financial-legislation/" }],
    related: EINV_GUIDE,
  },
  {
    id: "einv-phase-1-golive", date: "2027-01-01", category: "einv", kind: "Deadline",
    title: "E-invoicing goes live for businesses with revenue of AED 50 million or more",
    summary: "From 1 January 2027, businesses with revenue of AED 50 million or more must issue and receive invoices through the UAE e-invoicing system via their Accredited Service Provider.",
    whoIsAffected: "Businesses with revenue of AED 50 million or more",
    sources: [{ label: "Ministry of Finance – legislation", url: "https://mof.gov.ae/en/financial-legislation/" }],
    related: EINV_GUIDE,
  },
  {
    id: "vat-old-credits-deadline", date: "2026-12-31", category: "procedures", kind: "Deadline",
    title: "Last day to claim old VAT credit balances under the transitional rule",
    summary: "Under Federal Decree-Law No. 17 of 2025, refunds of excess input tax are limited to five years. If your five-year period had expired by 1 January 2026, or expires during 2026, you have until 31 December 2026 to request the refund.",
    whoIsAffected: "Businesses with VAT credit balances from 2021 or earlier",
    sources: [{ label: "Ministry of Finance announcement", url: "https://mof.gov.ae/en/news/ministry-of-finance-to-implement-amendments-to-the-tax-procedures-law-starting-early-2026/" }],
    related: { label: "Our VAT refunds guide", href: blog("VAT Refunds in the UAE: How to Claim Back Excess Input Tax") },
  },
  {
    id: "ct-march-ye-deadline", date: "2026-12-31", category: "ct", kind: "Deadline",
    title: "Corporate Tax returns due for financial years ending 31 March 2026",
    summary: "Returns and payment are due within 9 months of the end of the tax period. For a year ending 31 March 2026, the deadline is 31 December 2026. A late return costs AED 500 for the first month, even if only one day late.",
    whoIsAffected: "Companies with a 31 March year-end",
    sources: [{ label: "FTA – Corporate Tax legislation", url: FTA_CT }],
    related: { label: "Check a late-filing penalty", href: "/uae-tax-penalty-calculator" },
  },
  {
    id: "toptax-registration-deadline", date: "2026-11-30", category: "ct", kind: "Deadline",
    title: "Top-up Tax registration deadline for large multinational groups",
    summary: "Under FTA Decision No. 12 of 2026, entities whose first in-scope financial year ended before 30 April 2026 must register for the Domestic Minimum Top-up Tax by 30 November 2026.",
    whoIsAffected: "Members of multinational groups with revenue of EUR 750 million or more",
    sources: [{ label: "FTA – Corporate Tax legislation", url: FTA_CT }, { label: "Baker McKenzie MENA tax update (Q3 2026)", url: "https://www.bakermckenzie.com/-/media/files/insight/publications/2026/10/mena_quarterly-tax-update_july-2026--september-2026.pdf" }],
  },

  // ── Published changes ──
  {
    id: "cd-173-2026", date: "2026-10-30", category: "einv", kind: "Cabinet Decision",
    title: "New e-invoicing penalties: Cabinet Decision No. 173 of 2026 replaces No. 106 of 2025",
    summary: "Failing to implement e-invoicing or appoint a service provider costs AED 5,000 plus AED 5,000 a month (maximum AED 50,000 in 12 months). Each e-invoice or e-credit note not issued on time costs AED 100, up to AED 5,000 a month. Not telling your provider about data changes costs AED 250 a day, up to AED 5,000 a month.",
    whoIsAffected: "Businesses once their e-invoicing date applies",
    sources: [{ label: "The National", url: "https://www.thenationalnews.com/business/2026/11/01/uae-updates-e-invoicing-penalties-for-businesses/" }],
    related: { label: "Calculate an e-invoicing penalty", href: "/uae-tax-penalty-calculator" },
  },
  {
    id: "einv-asp-30oct", date: "2026-10-25", effective: "2026-10-30", category: "einv", kind: "Announcement",
    title: "Phase 1 e-invoicing: service provider appointment due by 30 October 2026",
    summary: "Ministerial Decision No. 66 of 2026 moved the deadline for businesses with revenue of AED 50 million or more to appoint an Accredited Service Provider from 31 July to 30 October 2026. The go-live date of 1 January 2027 did not change, which the FTA restated on 25 October 2026.",
    whoIsAffected: "Businesses with revenue of AED 50 million or more",
    sources: [{ label: "Ministry of Finance – legislation", url: "https://mof.gov.ae/en/financial-legislation/" }],
    related: EINV_GUIDE,
  },
  {
    id: "fta-17-2026", date: "2026-09-28", effective: "2026-10-01", category: "vat", kind: "FTA Decision",
    title: "Input VAT on employee expenses: FTA Decision No. 17 of 2026",
    summary: "Sets the cases and conditions for recovering input VAT on goods and services provided to employees, such as transport, accommodation and parking. Issued on 9 September 2026 and published on 28 September 2026.",
    whoIsAffected: "VAT-registered employers",
    sources: [{ label: "FTA – Decision No. 17 of 2026", url: "https://tax.gov.ae/en/legislation/fta-decision-no-17-of-2026.aspx" }],
  },
  {
    id: "fta-15-2026", date: "2026-09-15", effective: "2026-09-15", category: "ct", kind: "FTA Decision",
    title: "Corporate Tax exemption applications: FTA Decision No. 15 of 2026",
    summary: "Replaces FTA Decision No. 7 of 2023. The standard deadline to apply for exemption from Corporate Tax is extended from 60 to 90 business days after the end of the tax period, with transitional deadlines of 31 October and 31 December 2026 for certain entities.",
    whoIsAffected: "Exempt persons such as qualifying funds, pension funds and certain government-owned entities",
    sources: [{ label: "FTA – Corporate Tax legislation", url: FTA_CT }, { label: "Deloitte summary", url: "https://www.deloitte.com/middle-east/en/services/tax/perspectives/fta-issues-new-decision-on-provisions-regarding-exemption-from-corporate-tax.html" }],
  },
  {
    id: "cd-149-2026", date: "2026-09-10", effective: "2026-10-01", category: "vat", kind: "Cabinet Decision",
    title: "Amended VAT Executive Regulation (Cabinet Decision No. 149 of 2026)",
    summary: "Updates the VAT rules on composite supplies, employee costs, healthcare goods, cash payments, the profit margin scheme and capital assets. Most changes apply from 1 October 2026; the new input tax apportionment rules apply from the first tax year starting after 1 October 2027.",
    whoIsAffected: "All VAT-registered businesses",
    sources: [{ label: "FTA – VAT legislation", url: FTA_VAT }],
  },
  {
    id: "vatp046", date: "2026-09-04", category: "vat", kind: "Public Clarification",
    title: "VAT Public Clarification VATP046 on the 2025 VAT amendments",
    summary: "Explains the recent VAT law changes, including the definition of a non-resident, when an electronic document counts as a valid tax invoice, and the five-year limit on refunds.",
    sources: [{ label: "FTA – VAT legislation", url: FTA_VAT }],
  },
  {
    id: "vatp045", date: "2026-08-26", effective: "2026-01-01", category: "vat", kind: "Public Clarification",
    title: "No more self-invoicing on imports of Concerned Goods (VATP045)",
    summary: "From 1 January 2026, businesses no longer need to issue a self-invoice for imports of Concerned Goods under the reverse charge. Supporting documents are still needed to recover the input tax.",
    whoIsAffected: "Importers of Concerned Goods (such as gold and electronics)",
    sources: [{ label: "FTA – VAT legislation", url: FTA_VAT }],
  },
  {
    id: "fta-13-2026", date: "2026-08-20", effective: "2026-10-01", category: "vat", kind: "FTA Decision",
    title: "Due diligence on suppliers before recovering input VAT: FTA Decision No. 13 of 2026",
    summary: "Sets the measures, procedures and conditions businesses must follow to verify that their purchases are genuine before deducting input tax. It supports the 2026 rule allowing the FTA to deny input tax linked to tax evasion the buyer knew or should have known about.",
    whoIsAffected: "All VAT-registered businesses, especially in high-risk sectors",
    sources: [{ label: "FTA – VAT legislation", url: FTA_VAT }],
  },
  {
    id: "cd-137-2026", date: "2026-08-06", effective: "2026-09-01", category: "excise", kind: "Cabinet Decision",
    title: "Minimum excise price for vape liquids: AED 1 per millilitre",
    summary: "Cabinet Decision No. 137 of 2026 sets a minimum excise price of AED 1 per ml for liquids used in electronic smoking devices, from 1 September 2026. The 100% excise rate applies to that price, so a 60 ml bottle carries at least AED 60 of excise tax.",
    whoIsAffected: "Importers, producers and stockpilers of e-liquids",
    sources: [{ label: "Cabinet Decision No. 137 of 2026 (MoF)", url: "https://mof.gov.ae/wp-content/uploads/2026/08/Cabinet-Decision-No.137-of-2026-on-Excise-Price-for-Tobacco-Products-and-Liquids-used-in-Electronic-Smoking-Devices-and-Tools_17082026.pdf" }, { label: "The National", url: "https://www.thenationalnews.com/news/uae/2026/08/06/uae-to-introduce-minimum-taxation-price-for-e-cigarette-and-vape-liquids-from-september-1/" }],
  },
  {
    id: "fta-12-2026", date: "2026-08-04", category: "ct", kind: "FTA Decision",
    title: "Top-up Tax registration and deregistration timelines: FTA Decision No. 12 of 2026",
    summary: "Sets when large multinational groups must register for, update and deregister from the Domestic Minimum Top-up Tax (the 15% minimum tax), alongside the new registration service in EmaraTax.",
    whoIsAffected: "Members of multinational groups with revenue of EUR 750 million or more",
    sources: [{ label: "FTA – Corporate Tax legislation", url: FTA_CT }],
  },
  {
    id: "md-131-2026", date: "2026-07-29", category: "ct", kind: "Ministerial Decision",
    title: "Small Business Relief extended to 31 December 2029",
    summary: "Ministerial Decision No. 131 of 2026 extends Small Business Relief to tax periods ending on or before 31 December 2029. The AED 3 million revenue limit is unchanged, and Qualifying Free Zone Persons and large multinational group members still cannot use it.",
    whoIsAffected: "Resident businesses with revenue of AED 3 million or less",
    sources: [{ label: "Farahat & Co summary", url: "https://farahatco.com/blog/uae-extends-small-business-relief-until-31-december-2029-under-ministerial-decision-no-131-of-2026/" }, { label: "Baker McKenzie MENA tax update (Q3 2026)", url: "https://www.bakermckenzie.com/-/media/files/insight/publications/2026/10/mena_quarterly-tax-update_july-2026--september-2026.pdf" }],
    related: { label: "Our Small Business Relief guide", href: blog("Small Business Relief UAE — Who Qualifies and How to Elect It") },
  },
  {
    id: "ctp011", date: "2026-07-15", category: "ct", kind: "Public Clarification",
    title: "Transfer pricing: documenting downward adjustments (CTP011)",
    summary: "Sets out the documents needed to support a downward transfer pricing adjustment, including benchmarking and matching adjustments by the related party.",
    whoIsAffected: "Businesses with related-party transactions",
    sources: [{ label: "FTA – Corporate Tax legislation", url: FTA_CT }],
  },
  {
    id: "fta-6-2026", date: "2026-07-14", effective: "2026-01-01", category: "ct", kind: "FTA Decision",
    title: "Extra compliance step for free zone distributors: FTA Decision No. 6 of 2026",
    summary: "Qualifying Free Zone Persons that distribute goods in or from a Designated Zone need an agreed-upon procedures report from a UAE-licensed auditor, due 30 days after the Corporate Tax return deadline. Applies to tax periods starting on or after 1 January 2026.",
    whoIsAffected: "Free zone companies claiming the 0% rate on distribution income",
    sources: [{ label: "FTA – Corporate Tax legislation", url: FTA_CT }],
  },
  {
    id: "einv-pilot", date: "2026-07-01", category: "einv", kind: "Announcement",
    title: "E-invoicing pilot and voluntary adoption begin",
    summary: "A pilot with a taxpayer working group selected by the Ministry of Finance started on 1 July 2026, and any business meeting the requirements may adopt e-invoicing voluntarily from that date.",
    sources: [{ label: "Ministry of Finance – legislation", url: "https://mof.gov.ae/en/financial-legislation/" }],
    related: EINV_GUIDE,
  },
  {
    id: "cd-129-2025", date: "2026-04-14", category: "procedures", kind: "Cabinet Decision",
    title: "New VAT and Excise penalties in force (Cabinet Decision No. 129 of 2025)",
    summary: "Late payment is now 14% a year charged monthly instead of 2% + 4% + 1% a day. Voluntary disclosures cost 1% a month instead of 5%–40%, an error found after an audit notice is 15% plus 1% a month, and an incorrect return is AED 500.",
    whoIsAffected: "VAT and Excise Tax registrants",
    sources: [{ label: "FTA announcement", url: "https://tax.gov.ae/en/media.centre/news/federal.tax.authority.announces.entry.into.force.of.the.decision.amending.administrative.penalties.imposed.for.violations.of.tax.legislation.and.calls.on.registrants.to.benefit.from.the.advantages.of.the.new.decision.aspx" }],
    related: { label: "Our UAE tax penalties guide", href: blog("UAE Tax Penalties 2026: Every FTA Fine Explained and What Changed on 14 April") },
  },
  {
    id: "fdl-16-2025", date: "2026-01-01", category: "vat", kind: "Federal Decree-Law",
    title: "VAT law amendments take effect (Federal Decree-Law No. 16 of 2025)",
    summary: "Self-invoicing under the reverse charge is no longer required, excess input tax can be carried forward for no more than five years, and the FTA can deny input tax on purchases linked to tax evasion that the buyer knew or should have known about.",
    whoIsAffected: "All VAT-registered businesses",
    sources: [{ label: "The National – 2026 tax changes", url: "https://www.thenationalnews.com/business/economy/2025/12/29/uae-tax-changes-2026/" }],
  },
  {
    id: "fdl-17-2025", date: "2026-01-01", category: "procedures", kind: "Federal Decree-Law",
    title: "Tax Procedures Law amendments take effect (Federal Decree-Law No. 17 of 2025)",
    summary: "Introduces a five-year limit for requesting refunds or using credit balances, with a transitional window to 31 December 2026, and expands the FTA's powers to issue binding directions and audit late refund claims.",
    whoIsAffected: "All taxpayers",
    sources: [{ label: "Ministry of Finance announcement", url: "https://mof.gov.ae/en/news/ministry-of-finance-to-implement-amendments-to-the-tax-procedures-law-starting-early-2026/" }],
  },
  {
    id: "cd-197-2025", date: "2026-01-01", category: "excise", kind: "Cabinet Decision",
    title: "Sugar-based excise tax on sweetened drinks (Cabinet Decision No. 197 of 2025)",
    summary: "Excise on sweetened drinks now depends on sugar content: under 5 g per 100 ml is exempt, 5 g to under 8 g is AED 0.79 per litre, and 8 g or more is AED 1.09 per litre. Without a lab report, the highest band applies.",
    whoIsAffected: "Producers and importers of sweetened beverages",
    sources: [{ label: "Ministry of Finance announcement", url: "https://mof.gov.ae/en/news/ministry-of-finance-announces-new-amendments-to-the-excise-tax-for-the-tiered-volumetric-model-on-sweetened-beverages/" }],
  },
  {
    id: "customs-12-digit", date: "2025-07-23", category: "customs", kind: "Customs Notice",
    title: "12-digit customs tariff codes introduced",
    summary: "The UAE is moving from 8-digit to 12-digit customs tariff codes in line with the GCC Integrated Customs Tariff (Cabinet Decision No. 119 of 2024). Dubai Customs began a phased implementation under Customs Notice 10/2025. Importers should update the codes in their product records to avoid misclassification fines.",
    whoIsAffected: "Importers and exporters",
    sources: [{ label: "Deloitte summary", url: "https://www.deloitte.com/middle-east/en/services/tax/perspectives/dubai-customs-implements-expanded-tariff-code.html" }],
  },
];
