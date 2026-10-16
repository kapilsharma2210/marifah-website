// Blog articles shown in the Insights section and at /blog/<slug>.
// To add an article, copy one block below and edit it.

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const blogs = [
  // ── ARTICLE 13 — E-INVOICING (NEW) ─────────────────────────────
  {
    title: "E-Invoicing in the UAE: Deadlines, Requirements and Penalties",
    excerpt: "Mandatory e-invoicing starts on 1 January 2027 for UAE businesses with revenue of AED 50 million or more. Here is who is covered, the exact deadlines, how the Peppol-based system works, and the penalties for getting it wrong.",
    category: "E-Invoicing",
    readTime: "9 min read",
    sections: [
      {
        type: "text",
        heading: "What Is E-Invoicing in the UAE?",
        body: "The UAE Electronic Invoicing System is a national system for issuing, transmitting, exchanging and reporting invoices and credit notes in a structured electronic format that can be processed automatically. It was established by the Ministry of Finance under Ministerial Decision No. 243 of 2025 (the Electronic Invoicing System) and Ministerial Decision No. 244 of 2025 (its phased implementation). Because an e-invoice must be in a structured, machine-readable format, a PDF, scanned copy, Word file or email attachment does not qualify. E-invoicing changes how invoices are issued and shared — it does not replace VAT registration, VAT return filing or Corporate Tax obligations.",
      },
      {
        type: "checklist",
        heading: "The Legal Framework at a Glance",
        items: [
          "Ministerial Decision No. 243 of 2025 — scope, exclusions and the obligations of issuers and recipients",
          "Ministerial Decision No. 244 of 2025 (as amended by Ministerial Decision No. 66 of 2026) — phases, thresholds and deadlines",
          "Ministerial Decision No. 64 of 2025 — eligibility and accreditation of service providers",
          "Cabinet Decision No. 106 of 2025 — violations and administrative penalties",
          "UAE Electronic Invoicing Guidelines (Version 1.1, 1 June 2026) and the Mandatory Fields specification — operational guidance",
        ],
      },
      {
        type: "text",
        heading: "Who Must Comply?",
        body: "Ministerial Decision No. 243 applies to any person conducting business in the UAE for every business transaction, unless the person or the transaction is specifically excluded — so the obligation is not limited to VAT-registered businesses. At present the system covers business-to-business (B2B) and business-to-government (B2G) transactions. Which phase you fall into depends on your Revenue, defined as the gross income earned during your most recent accounting period, based on your financial statements (or other documentation acceptable to the FTA if statements are not available). The Guidelines also confirm that transactions between members of the same VAT group are within scope, although a 24-month relief period applies to them, commencing on 1 January 2027.",
      },
      {
        type: "checklist",
        heading: "What Is Excluded?",
        items: [
          "Government entity transactions carried out in a sovereign capacity and not in competition with the private sector",
          "International passenger transport by airlines where an electronic ticket is issued, and ancillary passenger services documented by an Electronic Miscellaneous Document",
          "International air transport of goods under an airway bill — excluded for 24 months from the date the system becomes effective",
          "Financial services that are VAT-exempt or zero-rated under Article 42 of the VAT Executive Regulation",
          "Business-to-consumer (B2C) transactions, and persons dealing exclusively with consumers, until the Minister of Finance issues a decision",
          "Any other transaction or category of person the Minister of Finance may determine",
        ],
      },
      {
        type: "numbered",
        heading: "Implementation Timeline",
        items: [
          { title: "1 July 2026 — Pilot and voluntary phase", body: "A pilot programme for a Taxpayer Working Group (selected by the Ministry, with the person's written agreement) begins, and any business may voluntarily implement the system from this date, provided it meets all technical requirements. Penalties under Cabinet Decision No. 106 of 2025 do not apply to voluntary adopters." },
          { title: "30 October 2026 — Phase 1: appoint an ASP", body: "Businesses with Revenue of AED 50 million or more must appoint an Accredited Service Provider (ASP) by this date. It was originally 31 July 2026 and was extended by Ministerial Decision No. 66 of 2026." },
          { title: "1 January 2027 — Phase 1: go live", body: "Businesses with Revenue of AED 50 million or more must have fully implemented the Electronic Invoicing System. This date did not change when the ASP deadline was extended." },
          { title: "31 March 2027 — Phase 2 and Government: appoint an ASP", body: "Businesses with Revenue below AED 50 million, and Government Entities, must appoint an Accredited Service Provider by this date." },
          { title: "1 July 2027 — Phase 2: go live", body: "Businesses with Revenue below AED 50 million must implement the Electronic Invoicing System." },
          { title: "1 October 2027 — Government Entities: go live", body: "Government Entities must implement the Electronic Invoicing System. After these phases, any remaining person or entity subject to the system must also appoint an ASP and implement it, and a separate date for B2C transactions will be set by the Minister." },
        ],
      },
      {
        type: "alert",
        heading: "Phase 1 Deadline: 30 October 2026",
        body: "If your Revenue is AED 50 million or more, your ASP must be appointed by 30 October 2026 — and go-live is still 1 January 2027. The Ministry of Finance confirmed that only the appointment date moved. Missing the appointment deadline attracts a penalty of AED 5,000 for each month of delay, or part of a month. Always check the Ministry of Finance website for any later changes.",
      },
      {
        type: "numbered",
        heading: "How the UAE E-Invoicing Model Works",
        items: [
          { title: "Corner 1 — The seller", body: "Your accounting or ERP system creates the invoice data. The UAE uses a decentralised, Peppol-based five-corner model, so invoices are not sent to a government portal for approval before they reach your customer." },
          { title: "Corner 2 — The seller's Accredited Service Provider", body: "Your ASP validates the invoice data against the required specification and converts it into the structured XML format used in the UAE (PINT AE, the UAE adaptation of the Peppol international invoice standard)." },
          { title: "Corner 3 — The buyer's Accredited Service Provider", body: "The invoice travels over the Peppol network from the seller's ASP to the buyer's ASP. Both parties to a transaction must appoint an ASP." },
          { title: "Corner 4 — The buyer", body: "The buyer receives the invoice as structured data that can flow directly into their accounts payable system. Recipients are required to process e-invoices and e-credit notes through the system." },
          { title: "Corner 5 — The Federal Tax Authority", body: "Invoice tax data is reported to the FTA through the ASPs. Under Ministerial Decision No. 243, both issuer and recipient must report within the timeline prescribed by the Minister of Finance." },
        ],
      },
      {
        type: "checklist",
        heading: "Key Obligations Under Ministerial Decision No. 243",
        items: [
          "Appoint an Accredited Service Provider from the list published by the Ministry of Finance",
          "Issue and transmit an e-invoice for every in-scope business transaction through the system",
          "VAT registrants: issue within the timeline in the VAT Law. Others: within 14 days of the Date of Business Transaction",
          "Issue an e-credit note when a transaction is cancelled, the consideration is reduced or returned, or an administrative or numerical error occurred",
          "Include every data field prescribed by the Ministry in the Mandatory Fields specification",
          "Store e-invoices, e-credit notes and associated data within the UAE for the period required by the Tax Procedures Law",
          "Notify the FTA of a system failure within 2 business days of it occurring",
          "Tell your ASP in writing about changes to your registered FTA data within 5 business days of the FTA confirming the change",
        ],
      },
      {
        type: "text",
        heading: "Agents, Self-Billing and the Date of Business Transaction",
        body: "An agent acting for a principal may issue and transmit e-invoices and e-credit notes on the principal's behalf. A recipient may issue an e-invoice on behalf of the supplier under a self-billing arrangement, provided both parties are VAT registrants and the conditions in the VAT Executive Regulation are met. The Date of Business Transaction, which starts the clock for the 14-day rule, is the earlier of the date the transaction occurred or the date payment was received. Version 1.1 of the Guidelines (1 June 2026) also added an appendix clarifying how advance payments and retention amounts are treated.",
      },
      {
        type: "checklist",
        heading: "Penalties Under Cabinet Decision No. 106 of 2025",
        items: [
          "Failing to implement the system or appoint an ASP on time — AED 5,000 for each month of delay or part of a month",
          "Failing to issue and transmit an e-invoice on time — AED 100 per invoice, capped at AED 5,000 per month",
          "Failing to issue and transmit an e-credit note on time — AED 100 per credit note, capped at AED 5,000 per month",
          "Failing to notify the FTA of a system failure on time — AED 1,000 for each day of delay or part of a day",
          "Failing to notify your ASP of changes to registered data on time — AED 1,000 for each day of delay or part of a day",
        ],
      },
      {
        type: "numbered",
        heading: "How to Get Ready — A Practical Plan",
        items: [
          { title: "Confirm your phase", body: "Check your Revenue — gross income in your most recent accounting period, per your financial statements — against the AED 50 million threshold, and confirm whether any of your transactions are excluded." },
          { title: "Review your invoicing process and data", body: "Look at how invoices and credit notes are created today. Clean up customer and supplier master data, tax registration details and item descriptions, and check that your accounting or ERP system can produce every field in the Mandatory Fields specification." },
          { title: "Select an Accredited Service Provider", body: "Choose only from the providers on the Ministry of Finance's published list. Compare how each connects to your accounting software, how it handles receiving invoices from suppliers, and where it stores data." },
          { title: "Onboard and test", body: "The voluntary phase has been open since 1 July 2026, which lets you test invoice exchange before your mandatory date. Voluntary adopters are not subject to the Cabinet Decision No. 106 penalties during that period." },
          { title: "Plan for storage and system failures", body: "Make sure e-invoice data is stored within the UAE and can be retrieved for the FTA. Agree an internal process so that a system failure is notified to the FTA within 2 business days." },
          { title: "Train your team and keep records current", body: "Brief your finance and sales teams on e-credit notes, the 14-day rule and receiving supplier invoices, and tell your ASP promptly when your registered FTA details change." },
        ],
      },
      {
        type: "numbered",
        heading: "Frequently Asked Questions",
        items: [
          { title: "Is e-invoicing mandatory for small businesses?", body: "Yes, but later. Businesses with Revenue below AED 50 million must appoint an ASP by 31 March 2027 and implement the system by 1 July 2027." },
          { title: "Do I need to be VAT registered to be in scope?", body: "No. The decision applies to any person conducting business in the UAE for in-scope transactions, unless excluded. VAT registration status does not by itself take you outside the system." },
          { title: "Does e-invoicing apply to sales to consumers?", body: "Not yet. B2C transactions, and persons dealing exclusively with consumers, are outside the system until the Minister of Finance issues a decision setting a date." },
          { title: "Can I keep sending PDF invoices?", body: "For in-scope transactions once your mandatory date applies, no. The invoice must be issued as a structured electronic invoice and transmitted through an Accredited Service Provider. A PDF can still be shared as a copy, but it is not the e-invoice." },
        ],
      },
      {
        type: "alert",
        heading: "Rules Are Still Evolving",
        body: "This article reflects the legislation and Ministry of Finance and FTA guidance available as of 15 October 2026. The system is being rolled out in phases, and further decisions, guidelines and specifications are expected, so always confirm the current position on the Ministry of Finance and FTA websites before acting. This is general information, not legal advice for your specific situation.",
      },
      {
        type: "cta",
        heading: "Not Sure Which E-Invoicing Phase You Are In?",
        body: "Marifah Tax Advisory is not an Accredited Service Provider, but we help you work out whether you are in scope, which deadline applies, and what needs to change in your invoicing and VAT processes before go-live. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 1 ──────────────────────────────────────────────────
  {
    title: "Corporate Tax Registration Deadline UAE",
    excerpt: "Miss the FTA registration deadline and face an automatic AED 10,000 penalty. Here are the exact deadlines for every entity type — and the current penalty waiver you can still use.",
    category: "Corporate Tax",
    readTime: "6 min read",
    sections: [
      {
        type: "text",
        heading: "Why the Registration Deadline Matters",
        body: "UAE Corporate Tax was introduced under Federal Decree-Law No. 47 of 2022, effective for financial years starting on or after 1 June 2023. Every UAE business — whether or not it owes any tax — must register with the Federal Tax Authority (FTA) on EmaraTax. Missing your deadline triggers a fixed AED 10,000 administrative penalty under Cabinet Decision No. 10 of 2024, regardless of your profit level.",
      },
      {
        type: "text",
        heading: "Deadlines by Entity Type",
        body: "For existing juridical persons (companies) registered before 1 March 2024, the deadline was tied to the month of trade licence issuance — ranging from 31 May 2024 to 31 December 2024. For new companies incorporated on or after 1 March 2024, the deadline is 3 months from the date of incorporation. For natural persons (sole proprietors, freelancers) whose taxable turnover from business exceeded AED 1 million in 2024, the deadline was 31 March 2025. For non-resident persons with a Permanent Establishment in the UAE who exceed AED 1 million turnover, registration must be completed within 3 months of meeting the conditions.",
      },
      {
        type: "checklist",
        heading: "Key Registration Facts",
        items: [
          "All UAE businesses must register — even if turnover is below AED 375,000",
          "Registration is done on the FTA's EmaraTax portal (tax.gov.ae)",
          "Penalty for late registration: AED 10,000 (fixed, automatic)",
          "New companies incorporated from 1 March 2024: register within 3 months",
          "Natural persons: deadline was 31 March 2025 for FY 2024",
          "Tax return must be filed within 9 months of the financial year-end",
        ],
      },
      {
        type: "text",
        heading: "2025–2026 Penalty Waiver — Act Now",
        body: "The FTA introduced a penalty waiver initiative effective from 14 April 2025. If you missed your registration deadline, you can have the AED 10,000 penalty waived — provided you file your first Corporate Tax return (or annual declaration if exempt) within 7 months from the end of your first tax period. For most businesses with a 31 December 2024 financial year-end, this means filing by 31 July 2025. The waiver applies even if you have already received the penalty. After the waiver window closes, the AED 10,000 fine remains and is not automatically reversible.",
      },
      {
        type: "text",
        heading: "2026 Penalty Framework Update",
        body: "Under Cabinet Decision No. 129 of 2025, effective 14 April 2026, the late payment penalty framework was restructured. The late payment penalty is now 14% per annum, replacing the previous 2% day-1 plus 4% monthly structure. The AED 10,000 late registration penalty itself was not changed. All businesses must also pay any tax due within the same 9-month filing window — there are no instalment options in the standard regime.",
      },
      {
        type: "alert",
        heading: "Critical: Do Not Confuse Registration with Filing",
        body: "Registration (getting your Corporate Tax number) and filing your return are two separate FTA obligations with two separate deadlines. Both carry penalties. Register first on EmaraTax, then file your return within 9 months of your financial year-end.",
      },
      {
        type: "cta",
        heading: "Need Help Registering Before the Deadline?",
        body: "Marifah Tax Advisory completes FTA Corporate Tax Registration within days. We also check your penalty waiver eligibility and file your first return accurately. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 2 ──────────────────────────────────────────────────
  {
    title: "VAT Registration Requirements UAE",
    excerpt: "VAT registration is mandatory once your taxable turnover exceeds AED 375,000. Here is every requirement, document, threshold, and deadline — fully updated for 2025.",
    category: "VAT",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "UAE VAT — The Basics",
        body: "Value Added Tax (VAT) was introduced in the UAE on 1 January 2018 under Federal Decree-Law No. 8 of 2017, at a standard rate of 5%. Businesses collect VAT on taxable supplies on behalf of the government and remit the net amount to the Federal Tax Authority (FTA) through periodic returns filed on EmaraTax.",
      },
      {
        type: "text",
        heading: "Registration Thresholds",
        body: "Mandatory VAT registration applies when your taxable supplies and imports in the previous 12 months exceed AED 375,000 — or when you expect to exceed AED 375,000 in the next 30 days. You must register within 30 days of crossing the threshold. Voluntary VAT registration is available if your taxable supplies, imports, or eligible expenses exceed AED 187,500 annually. Non-resident businesses making taxable supplies in the UAE must register regardless of turnover, unless the supply falls under the reverse charge mechanism.",
      },
      {
        type: "checklist",
        heading: "Documents Required for VAT Registration",
        items: [
          "Valid Trade Licence",
          "Emirates ID of owner / authorised manager",
          "Memorandum and Articles of Association (MOA & AOA)",
          "Bank account details (IBAN)",
          "Mobile number and email address linked to EmaraTax",
          "Financial statements or sales evidence showing turnover threshold met",
          "Customs registration number (if applicable)",
        ],
      },
      {
        type: "checklist",
        heading: "Ongoing VAT Compliance Requirements",
        items: [
          "Charge 5% VAT on all standard-rated taxable supplies",
          "Issue tax invoices compliant with FTA requirements",
          "File VAT returns every quarter (28 days after end of tax period)",
          "Maintain all VAT records for a minimum of 5 years",
          "Apply reverse charge on imported services from unregistered foreign suppliers",
          "Report zero-rated and exempt supplies separately in each return",
        ],
      },
      {
        type: "text",
        heading: "Penalties for Non-Registration and Late Filing",
        body: "Failing to register within 30 days of exceeding the AED 375,000 threshold results in a fixed AED 10,000 penalty. Late registration also triggers retroactive VAT liability on all taxable supplies from the date registration was due. The penalty for late VAT return filing is AED 1,000 for the first offence and AED 2,000 for repeat offences within 24 months. Under the updated framework effective 14 April 2026 (Cabinet Decision No. 129 of 2025), the late payment penalty is now 14% per annum.",
      },
      {
        type: "text",
        heading: "2026 VAT Law Update — Federal Decree-Law No. 16 of 2025",
        body: "From 1 January 2026, the requirement to issue a self-invoice for standard reverse charge imports has been removed under Federal Decree-Law No. 16 of 2025. However, the obligation to declare and pay the VAT on reverse charge transactions remains fully in force. Record-keeping penalty amounts were also updated under Cabinet Decision No. 129 of 2025: AED 5,000 for first offence (reduced from AED 10,000) and AED 10,000 for repeat offences.",
      },
      {
        type: "alert",
        heading: "Common Mistake — Waiting Until You Have Already Exceeded the Threshold",
        body: "You are required to monitor your rolling 12-month taxable turnover continuously. The 30-day window to register starts from the day you cross AED 375,000 — not from the end of the financial year. Late registration carries both a penalty and a retroactive VAT liability, making it one of the most expensive compliance mistakes UAE businesses make.",
      },
      {
        type: "cta",
        heading: "Get Your TRN in 3–5 Working Days",
        body: "Marifah Tax Advisory handles your complete VAT registration with the FTA — from document preparation to TRN issuance. We ensure your application is accurate, complete, and approved without delays. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 3 ──────────────────────────────────────────────────
  {
    title: "How to File VAT Return UAE — Step by Step",
    excerpt: "A complete step-by-step guide to filing your UAE VAT return on EmaraTax — deadlines, boxes explained, common errors, and penalties to avoid.",
    category: "VAT",
    readTime: "7 min read",
    sections: [
      {
        type: "text",
        heading: "VAT Return Filing — Overview",
        body: "Every VAT-registered business in the UAE must file a VAT return with the Federal Tax Authority (FTA) at the end of each tax period. For most businesses, the tax period is quarterly. The return must be filed and any tax due must be paid within 28 days of the end of the tax period. VAT returns are filed exclusively through the EmaraTax portal at tax.gov.ae.",
      },
      {
        type: "checklist",
        heading: "Before You File — Prepare These",
        items: [
          "All sales invoices issued during the period (output VAT)",
          "All purchase invoices with valid VAT numbers (input VAT)",
          "Import declarations / customs documents",
          "Credit notes issued or received",
          "Reverse charge records for imported services",
          "Bank statements for reconciliation",
        ],
      },
      {
        type: "text",
        heading: "Step 1 — Log In to EmaraTax",
        body: "Go to tax.gov.ae and log in to your EmaraTax account using your registered UAE Pass or username and password. Select your VAT registration (TRN) from the dashboard and click 'File Return' for the relevant tax period.",
      },
      {
        type: "text",
        heading: "Step 2 — Complete Box 1 to Box 3 (Sales / Output VAT)",
        body: "Box 1: Enter the total value of your standard-rated supplies (sales at 5% VAT) and the VAT collected. Box 2: Enter zero-rated supplies (exports, international transport, certain food items, etc.) — these are taxable but at 0%. Box 3: Enter any exempt supplies (residential property sales, local passenger transport, bare land) — no VAT charged and no input VAT recovery on related costs.",
      },
      {
        type: "text",
        heading: "Step 3 — Complete Box 4 to Box 7 (Purchases / Input VAT)",
        body: "Box 4: Total standard-rated expenses/purchases made during the period and the input VAT you are recovering. Box 5: Enter imports subject to VAT paid at customs. Box 6: Enter imports of services subject to reverse charge mechanism — declare both output and input VAT here. Box 7: Report any out-of-scope supplies not subject to UAE VAT.",
      },
      {
        type: "text",
        heading: "Step 4 — Review the Net VAT Position",
        body: "EmaraTax will automatically calculate your net VAT due (output VAT minus input VAT). If output exceeds input, you owe that amount to the FTA. If input exceeds output, you have a VAT credit — you may carry it forward to the next period or submit a refund request. Always cross-check the calculated figure against your own accounting records before submitting.",
      },
      {
        type: "text",
        heading: "Step 5 — Submit and Pay",
        body: "Once you are satisfied the return is accurate, click 'Submit'. Payment of VAT due must reach the FTA within 28 days of the tax period end. Payment methods accepted on EmaraTax include credit/debit card, local bank transfer via GIBAN, eDebit, and e-Dirham card. The payment deadline is the same as the filing deadline — you cannot file and pay separately on different dates.",
      },
      {
        type: "checklist",
        heading: "Common Mistakes That Trigger FTA Penalties",
        items: [
          "Claiming input VAT on non-business expenses (e.g., entertainment, personal vehicles)",
          "Missing the 28-day filing deadline — AED 1,000 first offence, AED 2,000 repeat",
          "Failing to report reverse charge on imported services",
          "Issuing non-compliant tax invoices (missing TRN, wrong VAT amount)",
          "Errors in Box 3 (classifying standard-rated supplies as exempt)",
          "Late payment penalty: 14% per annum from 14 April 2026 (Cabinet Decision No. 129 of 2025)",
        ],
      },
      {
        type: "alert",
        heading: "Nil Returns — Do Not Skip",
        body: "Even if you made no sales and no purchases in a quarter, you must still file a nil VAT return before the deadline. Failing to file a nil return carries the same AED 1,000 penalty as missing any other return.",
      },
      {
        type: "cta",
        heading: "Let Marifah Handle Your VAT Filing",
        body: "Our team prepares and submits accurate VAT returns on your behalf — every quarter, on time, with full reconciliation. Never miss an FTA deadline again. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 4 ──────────────────────────────────────────────────
  {
    title: "Free Zone Corporate Tax UAE — Complete Guide",
    excerpt: "Free zone companies are NOT automatically exempt from UAE Corporate Tax. Here is the complete guide to Qualifying Free Zone Person (QFZP) status, the 5 conditions, and what happens if you fail.",
    category: "Corporate Tax",
    readTime: "8 min read",
    sections: [
      {
        type: "text",
        heading: "The Core Misconception",
        body: "Many free zone business owners assume their free zone licence automatically exempts them from UAE Corporate Tax. It does not. Under Federal Decree-Law No. 47 of 2022, free zone entities are subject to UAE Corporate Tax. However, entities that qualify as a Qualifying Free Zone Person (QFZP) can access a 0% Corporate Tax rate on their qualifying income. The 0% rate is earned through compliance with five specific conditions — it is not automatic.",
      },
      {
        type: "text",
        heading: "The 5 QFZP Conditions (All Must Be Met)",
        body: "To be treated as a QFZP and access the 0% rate on qualifying income, a free zone entity must satisfy all five of the following conditions every year: (1) Maintain adequate substance in the UAE free zone — real offices, employees, and management decisions made locally. (2) Derive qualifying income as defined under Ministerial Decision No. 229 of 2025 — including services to foreign clients, intra-group services meeting conditions, certain IP income, and income from regulated financial services. (3) Pass the De Minimis test — non-qualifying income must not exceed the lower of AED 5 million or 5% of total revenue. (4) No mainland election — the entity must not have elected to be treated as a standard mainland taxable person. (5) Comply with transfer pricing rules under Article 34 (arm's-length transactions with related parties) and Article 55 (general anti-abuse rule) of the CT Law.",
      },
      {
        type: "text",
        heading: "What Happens if You Fail Even One Condition",
        body: "QFZP status is all-or-nothing. If a free zone entity fails any single QFZP condition, it loses QFZP status for the entire tax year — not just for the income that caused the failure. The entity then becomes subject to 9% Corporate Tax on all taxable income above AED 375,000 for that year and the four subsequent tax years. This is one of the most severe consequence structures in the UAE CT Law and is the primary reason why free zone entities must actively manage their QFZP position year-round.",
      },
      {
        type: "checklist",
        heading: "Activities That Qualify for the 0% Rate (Ministerial Decision No. 229 of 2025)",
        items: [
          "Manufacturing and processing of goods within the free zone",
          "Holding shares and other securities for investment purposes",
          "Treasury and financing services to related parties (meeting conditions)",
          "Distribution of goods and materials in a Designated Zone",
          "Logistics services within the free zone",
          "Fund management services regulated by UAE authorities",
          "Reinsurance services regulated in the UAE",
          "Back-office and headquarters services to related parties",
          "Ship registration and management services",
        ],
      },
      {
        type: "checklist",
        heading: "Activities That Do NOT Qualify (Non-Qualifying Income at 9%)",
        items: [
          "Transactions with UAE mainland customers (above de minimis limits)",
          "Immovable property income in the UAE (outside Designated Zones)",
          "Income from excluded activities (e.g., banking, insurance without FTA approval)",
          "Revenue from intellectual property created under a tax planning structure",
        ],
      },
      {
        type: "text",
        heading: "Audited Financial Statements — Mandatory for QFZPs",
        body: "Under Ministerial Decision No. 84 of 2025, all free zone entities claiming QFZP status must prepare audited financial statements in accordance with IFRS or IFRS for SMEs — regardless of company size or revenue. This is the single most common compliance gap: many free zone companies with lower revenues had not previously commissioned an audit. Without audited statements, QFZP status cannot be claimed.",
      },
      {
        type: "text",
        heading: "Small Business Relief and Free Zones",
        body: "Free zone entities with revenue below AED 3 million may elect Small Business Relief (SBR), which treats the entity as having no taxable income. SBR is available for tax periods ending on or before 31 December 2026 as a transitional measure. However, electing SBR means the entity cannot simultaneously claim QFZP benefits for that period. For most free zone entities with predominantly qualifying income, maintaining QFZP status at 0% is more advantageous than electing SBR — but this should be assessed on a case-by-case basis.",
      },
      {
        type: "text",
        heading: "Corporate Tax Return Deadlines for Free Zone Companies",
        body: "Free zone entities must file their Corporate Tax return within 9 months of the end of their tax period. For a company with a financial year ending 31 December 2025, the return deadline is 30 September 2026. The return must accurately declare QFZP status, distinguish qualifying and non-qualifying income, and be supported by audited financials. Records must be retained for at least 7 years.",
      },
      {
        type: "alert",
        heading: "DMCC, JAFZA, IFZA, DIFC, ADGM — All Subject to the Same Rules",
        body: "QFZP conditions apply uniformly across all UAE free zones, including DMCC, JAFZA, IFZA, DIFC, and ADGM. Your free zone authority does not administer Corporate Tax — the FTA does. Compliance must be demonstrated to the FTA, not your free zone authority.",
      },
      {
        type: "cta",
        heading: "Assess Your Free Zone QFZP Eligibility",
        body: "Marifah Tax Advisory conducts full QFZP eligibility assessments for free zone businesses. We review your income sources, substance levels, and related-party transactions to confirm whether you qualify for the 0% rate — and manage your CT return filing accurately. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 5 ──────────────────────────────────────────────────
  {
    title: "DMCC Corporate Tax — What Every Member Needs to Know",
    excerpt: "DMCC companies are not automatically exempt from UAE Corporate Tax. Here is a clear, accurate guide to QFZP eligibility, DMCC-specific activities, and your 2026 filing deadline.",
    category: "Corporate Tax",
    readTime: "6 min read",
    sections: [
      {
        type: "text",
        heading: "DMCC and UAE Corporate Tax",
        body: "The Dubai Multi Commodities Centre (DMCC) is one of the UAE's largest and most prestigious free zones. However, DMCC membership does not exempt a company from UAE Corporate Tax under Federal Decree-Law No. 47 of 2022. DMCC entities are subject to the same Corporate Tax framework as all other UAE businesses. The 0% rate on qualifying income is available — but only if the entity qualifies as a Qualifying Free Zone Person (QFZP) under the five-condition test administered by the Federal Tax Authority.",
      },
      {
        type: "text",
        heading: "Which DMCC Activities Qualify for 0%?",
        body: "Under Ministerial Decision No. 229 of 2025, qualifying income for DMCC entities typically includes: income from commodities trading between free zone/foreign parties in a Designated Zone, logistics and warehousing services within the free zone, back-office and headquarters services to foreign or related group entities, holding company income (dividends and capital gains from qualifying shareholdings), and fund management services regulated by the SCA or DFSA.",
      },
      {
        type: "checklist",
        heading: "DMCC QFZP Compliance Checklist",
        items: [
          "Physical office space in DMCC (not a virtual/flexi-desk arrangement)",
          "Employed staff in the UAE with sufficient expertise for the business activities",
          "Board meetings and key management decisions made in the UAE",
          "Non-qualifying income below AED 5 million or 5% of total revenue (de minimis)",
          "Audited IFRS financial statements prepared for the tax period",
          "Transfer pricing documentation for all related-party transactions",
          "Corporate Tax return filed within 9 months of financial year-end",
        ],
      },
      {
        type: "text",
        heading: "DMCC Commodities Trading — The Designated Zone Issue",
        body: "Many DMCC members trade commodities. For trading income to qualify for the 0% rate, goods must be traded within or through a Designated Zone (DZ) as defined by the FTA. DMCC's Almas Tower and related physical trading facilities are part of a Designated Zone, but the classification is activity-specific. Commodities trading with UAE mainland buyers can push the entity beyond the de minimis non-qualifying income limit, risking full loss of QFZP status.",
      },
      {
        type: "text",
        heading: "2026 Filing Deadline",
        body: "For DMCC entities with a financial year running 1 January to 31 December 2025, the Corporate Tax return deadline is 30 September 2026. The return must be filed on EmaraTax. Any Corporate Tax due must be paid by the same date — there are no instalments. Late payment from 14 April 2026 carries a penalty of 14% per annum under Cabinet Decision No. 129 of 2025.",
      },
      {
        type: "alert",
        heading: "DMCC Does Not File Tax Returns on Your Behalf",
        body: "DMCC as a free zone authority manages your trade licence and membership. It has no role in your UAE Corporate Tax registration or return filing. Your CT registration and annual returns must be submitted directly to the FTA on EmaraTax. Many DMCC companies discovered this only after receiving AED 10,000 late registration penalties.",
      },
      {
        type: "cta",
        heading: "DMCC Corporate Tax — Get It Right",
        body: "Marifah Tax Advisory specialises in Corporate Tax compliance for DMCC and other UAE free zone entities. We assess your QFZP eligibility, prepare audited-aligned documentation, and file your return accurately before the September deadline. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 6 ──────────────────────────────────────────────────
  {
    title: "UAE Corporate Tax for Small Business — Complete Guide 2025",
    excerpt: "Small Business Relief allows eligible UAE businesses to pay 0% Corporate Tax. Here is who qualifies, how to elect it, and what changes after 31 December 2026.",
    category: "Corporate Tax",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "UAE Corporate Tax Rates for Small Businesses",
        body: "Under Federal Decree-Law No. 47 of 2022, UAE Corporate Tax is charged at 0% on taxable income up to AED 375,000 and 9% on taxable income above AED 375,000. This means a business with AED 374,999 in net profit pays zero Corporate Tax. A business with AED 500,000 in net profit pays 9% only on AED 125,000 (the amount above the threshold) — which equals AED 11,250.",
      },
      {
        type: "text",
        heading: "Small Business Relief (SBR) — The Additional Protection",
        body: "Beyond the standard 0%/9% threshold structure, the UAE CT Law provides Small Business Relief for eligible businesses. Under SBR, a qualifying business is treated as having no taxable income for the relevant tax period — it pays zero Corporate Tax and has simplified compliance obligations. SBR is available for tax periods ending on or before 31 December 2026. It is a transitional measure and is not permanent.",
      },
      {
        type: "checklist",
        heading: "SBR Eligibility Conditions",
        items: [
          "Must be a UAE tax resident person (not a non-resident or exempt person)",
          "Revenue for the current tax period must not exceed AED 3 million",
          "Revenue in each previous tax period since 1 June 2023 must also not have exceeded AED 3 million",
          "Must actively elect SBR in the Corporate Tax return — it is not applied automatically",
          "Large multinationals subject to Pillar Two rules (Qualifying MNE Groups) are not eligible for SBR",
        ],
      },
      {
        type: "text",
        heading: "What 'Revenue' Means for SBR",
        body: "Revenue for SBR purposes means the gross income of the business in the tax period — not net profit. A business with AED 2.9 million in gross revenue but AED 2.8 million in expenses still qualifies for SBR (as long as previous periods also met the AED 3 million test). Once revenue exceeds AED 3 million in any period, SBR is lost and cannot be elected again.",
      },
      {
        type: "text",
        heading: "SBR Does Not Eliminate Registration",
        body: "Electing Small Business Relief does not exempt a business from registering with the FTA. All UAE businesses must register for Corporate Tax. The penalty for non-registration is AED 10,000, regardless of whether you ultimately owe any tax. Register on EmaraTax, then elect SBR in your return if eligible.",
      },
      {
        type: "text",
        heading: "After 2026 — What Small Businesses Should Prepare For",
        body: "SBR is a transitional relief available only for tax periods ending on or before 31 December 2026. From the 2027 tax year, there is currently no legislative extension of SBR. Small businesses with revenue below AED 375,000 in net profit will still pay 0% under the standard rates — but businesses between AED 375,000 and AED 3 million in taxable income will need to file full Corporate Tax returns and may owe tax at 9% on the income above the threshold.",
      },
      {
        type: "alert",
        heading: "SBR Cannot Be Combined with QFZP Status",
        body: "Free zone entities cannot elect Small Business Relief and claim QFZP (0% qualifying income) status in the same tax period. Electing SBR means the entity is treated as not having qualifying income — so QFZP benefits do not apply. For most free zone entities with qualifying income, maintaining QFZP status is more advantageous.",
      },
      {
        type: "cta",
        heading: "Is Your Business Eligible for Small Business Relief?",
        body: "Marifah Tax Advisory reviews your revenue, structure, and tax period to determine whether SBR applies — and files your return correctly. We ensure you do not over-pay Corporate Tax or miss an election that could save you thousands. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 7 ──────────────────────────────────────────────────
  {
    title: "Penalty for Late VAT Registration UAE",
    excerpt: "Late VAT registration in the UAE carries an automatic AED 10,000 penalty — plus retroactive VAT liability. Here is exactly what the FTA charges, and how to avoid it.",
    category: "VAT",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "The AED 10,000 Late Registration Penalty",
        body: "Under the UAE VAT law (Federal Decree-Law No. 8 of 2017) and the administrative penalties framework (Cabinet Decision No. 49 of 2021, updated by Cabinet Decision No. 129 of 2025 from 14 April 2026), any business that fails to register for VAT within 30 days of crossing the AED 375,000 mandatory threshold is subject to a fixed administrative penalty of AED 10,000. This penalty is imposed by the FTA and appears directly in your EmaraTax account.",
      },
      {
        type: "text",
        heading: "The Hidden Cost — Retroactive VAT Liability",
        body: "The AED 10,000 penalty is only part of the cost. When a business registers late, the FTA calculates VAT liability from the date the business should have registered — not from the date of actual registration. This means you may owe 5% VAT on all taxable supplies made during the gap period, plus late payment penalties on that amount. For a business that was already generating AED 500,000 in annual revenue, the retroactive VAT exposure alone can be significantly higher than the initial registration penalty.",
      },
      {
        type: "checklist",
        heading: "Full Penalty Schedule — VAT Non-Compliance",
        items: [
          "Late VAT registration: AED 10,000 (fixed, one-time)",
          "Late VAT return filing (first offence): AED 1,000",
          "Late VAT return filing (repeat within 24 months): AED 2,000",
          "Late VAT payment (from 14 April 2026): 14% per annum under Cabinet Decision No. 129 of 2025",
          "Failure to maintain required VAT records (first offence): AED 5,000",
          "Failure to maintain records (repeat within 24 months): AED 10,000",
          "Non-compliant tax invoice issued (first offence): AED 2,500",
          "Non-compliant tax invoice (repeat within 24 months): AED 5,000",
        ],
      },
      {
        type: "text",
        heading: "Is There a Waiver for Late VAT Registration?",
        body: "Unlike Corporate Tax (which has a formal penalty waiver initiative for 2025), there is no automatic waiver for late VAT registration penalties. Businesses that have received a penalty may submit a formal reconsideration request (Ta'arrud) to the FTA, but these are assessed on a case-by-case basis and are not guaranteed. The strongest grounds for reconsideration are genuine force majeure circumstances — not administrative oversight. Prevention is the only reliable strategy.",
      },
      {
        type: "text",
        heading: "When Must You Register — The 30-Day Rule",
        body: "The registration clock starts on the day your taxable supplies and imports exceed AED 375,000 in the previous 12 months — or the day you have a reasonable basis to expect they will exceed AED 375,000 in the next 30 days. You must submit your VAT registration application within 30 days of either trigger. The FTA monitors business data and issues registration requirements proactively — do not assume you will receive a formal notice before the penalty is applied.",
      },
      {
        type: "alert",
        heading: "Voluntary Registration Can Protect You Earlier",
        body: "If your taxable supplies or expenses exceed AED 187,500 annually, you may register for VAT voluntarily. Voluntary registration allows you to recover input VAT on business expenses, improves your business credibility, and — most importantly — means you are already registered and compliant before you cross the AED 375,000 mandatory threshold. Many fast-growing UAE businesses benefit significantly from early voluntary registration.",
      },
      {
        type: "cta",
        heading: "Avoid the Penalty — Register Today",
        body: "Marifah Tax Advisory completes VAT registration with the FTA in as little as 3–5 working days. We review your turnover position, confirm your threshold status, and file a complete, accurate application. Contact us before the FTA contacts you.",
      },
    ],
  },

  // ── ARTICLE 8 ──────────────────────────────────────────────────
  {
    title: "Difference Between VAT Exempt and Zero Rated in UAE",
    excerpt: "Zero-rated and VAT-exempt supplies are both charged at 0% — but they are completely different in law. Getting this wrong can cost you thousands in disallowed input VAT.",
    category: "VAT",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "Why the Difference Matters",
        body: "Both zero-rated and VAT-exempt supplies result in 0% VAT being charged to the customer. However, they are treated very differently under UAE VAT law, and misclassifying a supply can result in disallowed input VAT deductions, incorrect VAT returns, and FTA penalties. Understanding the distinction is fundamental to accurate VAT compliance.",
      },
      {
        type: "text",
        heading: "Zero-Rated Supplies — 0% VAT, Full Input VAT Recovery",
        body: "A zero-rated supply is a taxable supply — it is within the scope of UAE VAT, but the rate applied is 0% instead of 5%. The critical point: because the supply is technically 'taxable', the business making the supply can recover all input VAT on costs directly related to making that supply. Zero-rated supplies must be reported in your VAT return. Failing to report zero-rated supplies is a VAT error, not an exemption from reporting.",
      },
      {
        type: "checklist",
        heading: "Examples of Zero-Rated Supplies in UAE",
        items: [
          "Exports of goods outside the UAE",
          "International transport of goods and passengers",
          "Supply of certain food items (basic food staples as defined by Cabinet Decision)",
          "Supply of certain medicines and medical equipment (as listed by the Ministry of Health)",
          "Investment-grade precious metals (gold, silver, platinum of 99%+ purity)",
          "First supply of residential buildings (within 3 years of completion)",
          "Educational services and related goods/services (qualifying institutions)",
          "Healthcare services and preventive healthcare services",
        ],
      },
      {
        type: "text",
        heading: "VAT Exempt Supplies — No VAT, No Input VAT Recovery",
        body: "A VAT-exempt supply is outside the standard VAT mechanism. No VAT is charged to the customer, but — critically — the supplier also cannot recover any input VAT on costs related to making that exempt supply. This makes exempt supplies more restrictive than zero-rated supplies. Businesses that make a mixture of taxable and exempt supplies must apply a partial input VAT recovery calculation.",
      },
      {
        type: "checklist",
        heading: "Examples of VAT Exempt Supplies in UAE",
        items: [
          "Supply of bare land",
          "Supply of residential buildings (subsequent supply, not first supply)",
          "Local passenger transport (metro, taxis, buses)",
          "Financial services where the fee is implicit (e.g., margin in currency exchange, interest)",
          "Life insurance and reinsurance",
        ],
      },
      {
        type: "text",
        heading: "The Partial Exemption Problem",
        body: "If your business makes both taxable supplies and exempt supplies, you face a partial exemption calculation. You cannot recover input VAT on overhead costs in full — you must apportion the input VAT based on the ratio of taxable to total supplies. This calculation is done in your VAT return and must be reviewed annually. Businesses in real estate, financial services, and healthcare are most commonly affected.",
      },
      {
        type: "text",
        heading: "Out-of-Scope Supplies — A Third Category",
        body: "There is a third category that is neither zero-rated nor exempt: out-of-scope supplies. These are supplies that fall entirely outside the UAE VAT framework — for example, salaries, grants, or supplies made outside the UAE. Out-of-scope supplies are not reported in your VAT return. Input VAT on costs related to out-of-scope activities is generally not recoverable.",
      },
      {
        type: "alert",
        heading: "Common Error — Treating Zero-Rated as Exempt",
        body: "The most costly misclassification is treating a zero-rated supply (such as an export) as VAT-exempt. This means you fail to report the supply in your return AND fail to claim back the input VAT on related costs. For exporters with significant input VAT, this can mean losing tens of thousands of dirhams in recoverable tax unnecessarily.",
      },
      {
        type: "cta",
        heading: "Is Your VAT Classification Correct?",
        body: "Marifah Tax Advisory reviews your supply classification, VAT return accuracy, and input VAT recovery position. Correct classification from the start avoids costly FTA assessments. Contact us for a free VAT review.",
      },
    ],
  },

  // ── ARTICLE 9 ──────────────────────────────────────────────────
  {
    title: "How to Open EmaraTax Account UAE — Step by Step",
    excerpt: "EmaraTax is the FTA's official portal for all UAE tax registrations and filings. Here is a complete, current guide to creating your account and navigating it correctly.",
    category: "VAT",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "What is EmaraTax?",
        body: "EmaraTax (tax.gov.ae) is the Federal Tax Authority's official digital platform for all UAE tax compliance activities. It replaced the previous FTA e-Services portal in 2022. All VAT registrations, Corporate Tax registrations, tax return filings, refund applications, and penalty payments are processed through EmaraTax. You cannot file UAE taxes without an EmaraTax account.",
      },
      {
        type: "text",
        heading: "Step 1 — Go to the EmaraTax Portal",
        body: "Open a browser and go to tax.gov.ae. Click 'Sign Up' to create a new account. Do not use any third-party website or app — the FTA's official portal is the only legitimate way to register and file. If you already have an existing FTA e-Services account from before 2022, you can log in using your old credentials and your data will have been migrated.",
      },
      {
        type: "text",
        heading: "Step 2 — Create Your UAE Pass or EmaraTax Account",
        body: "EmaraTax supports login via UAE Pass (the UAE government's digital identity platform). If you have a UAE Pass, you can link it directly. If not, register on EmaraTax using your email address and a secure password. You will receive a verification email — verify your account before proceeding.",
      },
      {
        type: "text",
        heading: "Step 3 — Add Your Entity",
        body: "After logging in, click 'Add Taxable Person' or 'Register a New Taxable Person'. You will need to enter your trade licence details, Emirates ID or passport number (for the authorised signatory), and business contact information. If you are registering a company with multiple shareholders, you will need the Emirates ID or passport details of each shareholder above the threshold set by the FTA.",
      },
      {
        type: "checklist",
        heading: "Information Required to Set Up EmaraTax",
        items: [
          "Trade licence number and issuing authority",
          "Emirates ID of owner / authorised manager (with expiry date)",
          "Passport copy for non-UAE-national owners",
          "Business mobile number and email address",
          "Bank account IBAN (required for VAT refund processing)",
          "Business activity description matching trade licence",
          "Memorandum and Articles of Association (MOA & AOA) for companies",
        ],
      },
      {
        type: "text",
        heading: "Step 4 — Register for VAT or Corporate Tax",
        body: "Once your entity profile is set up in EmaraTax, you can apply for VAT registration, Corporate Tax registration, or both. Click on the relevant registration type from your dashboard. Complete the application form accurately — errors in the form can delay approval or result in the FTA requesting additional documents. The FTA aims to process complete VAT registration applications within 20 working days.",
      },
      {
        type: "text",
        heading: "Step 5 — Manage Your Tax Obligations on EmaraTax",
        body: "Once registered, your EmaraTax dashboard becomes your compliance hub. You can view your upcoming return deadlines, file VAT returns, file Corporate Tax returns, make tax payments (via credit card, GIBAN, eDebit, or e-Dirham), submit voluntary disclosures, view penalty notices, and track correspondence from the FTA. Set up email notifications to ensure you never miss a deadline.",
      },
      {
        type: "checklist",
        heading: "Common EmaraTax Issues and How to Avoid Them",
        items: [
          "Mismatched Emirates ID details — ensure name matches exactly as on FTA records",
          "Using an expired trade licence — renew before starting registration",
          "Wrong authorised signatory — only an authorised manager or owner can sign",
          "Not linking your UAE Pass — causes login issues for future filings",
          "Failing to update contact details — you miss FTA notifications and deadline reminders",
        ],
      },
      {
        type: "alert",
        heading: "Third Party Access — Tax Agents",
        body: "If you appoint a registered UAE Tax Agent (like Marifah Tax Advisory) to manage your account, they can be granted access to your EmaraTax profile. This allows the agent to file returns, respond to FTA queries, and manage your compliance — without you needing to log in for every action. Tax agent access is set up from within your EmaraTax dashboard under 'Linkage to Tax Agent'.",
      },
      {
        type: "cta",
        heading: "Let Us Set Up and Manage Your EmaraTax Account",
        body: "Marifah Tax Advisory handles your full EmaraTax setup, VAT registration, Corporate Tax registration, and ongoing filing — all in one place. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 10 ──────────────────────────────────────────────────
  {
    title: "Corporate Tax for Freelancers UAE — Complete Guide",
    excerpt: "UAE freelancers with annual business income above AED 1 million must register for Corporate Tax. Here is exactly what applies, what doesn't, and how to stay compliant.",
    category: "Corporate Tax",
    readTime: "6 min read",
    sections: [
      {
        type: "text",
        heading: "Do UAE Freelancers Pay Corporate Tax?",
        body: "Yes — but with an important threshold. Under Federal Decree-Law No. 47 of 2022, UAE Corporate Tax applies to natural persons (individuals) who conduct a business or business activity in the UAE. A freelancer, sole proprietor, or self-employed individual is a natural person for Corporate Tax purposes. However, Corporate Tax for natural persons only applies if the individual's annual business turnover (gross revenue from the business activity) exceeds AED 1 million in a Gregorian calendar year.",
      },
      {
        type: "text",
        heading: "The AED 1 Million Threshold — What It Means",
        body: "Unlike companies (juridical persons), individuals are not subject to Corporate Tax if their business revenue is AED 1 million or below in a calendar year. This is a gross revenue test — not a profit test. A freelancer earning AED 900,000 with AED 800,000 in expenses is below the threshold and pays no Corporate Tax. A freelancer earning AED 1,100,000 in gross revenue exceeds the threshold, must register, and pays 9% on net profit above AED 375,000.",
      },
      {
        type: "checklist",
        heading: "Freelancer Corporate Tax — Key Facts",
        items: [
          "Threshold: AED 1 million in annual gross business turnover",
          "Tax rate: 9% on net profit above AED 375,000 (after allowable deductions)",
          "First tax period for natural persons: Gregorian calendar year 2024",
          "Registration deadline (if above AED 1 million in 2024): 31 March 2025",
          "For new freelancers exceeding AED 1 million: register within 3 months",
          "Tax return due: 9 months after the end of the calendar year (i.e., 30 September 2026 for FY 2025)",
          "Personal employment income, dividends as an employee, and investment income are NOT business income",
        ],
      },
      {
        type: "text",
        heading: "What Income Counts for the AED 1 Million Test?",
        body: "Business income that counts toward the AED 1 million threshold includes income from freelance services, consulting, contracting, rental income from real estate held as a business activity, and any other income from carrying on a business. Income that does NOT count includes salary from employment, investment returns on personal assets (dividends, interest on personal savings), and income from one-time personal asset sales. If you are unsure whether your income constitutes 'business income', the FTA's guidance recommends considering whether the activity is conducted with regularity, continuity, and for profit.",
      },
      {
        type: "text",
        heading: "Freelancers on Freelance Visas vs. Company Owners",
        body: "UAE freelancers working under a freelance permit (issued by free zones like Dubai Media City, twofour54, IFZA, etc.) are natural persons for Corporate Tax purposes and are subject to the AED 1 million threshold. Freelancers who have incorporated a company (LLC or free zone entity) are NOT natural persons for this threshold — the company is a juridical person subject to standard CT rules from AED 375,000 net profit, regardless of the business scale.",
      },
      {
        type: "text",
        heading: "Allowable Deductions for Freelancers",
        body: "Freelancers subject to Corporate Tax can deduct business expenses that are wholly and exclusively incurred for the purposes of the business. Allowable deductions include office rent, equipment costs, software subscriptions, business travel, professional fees, and staff costs. Personal expenses, entertainment above specified limits, and expenses without documentary evidence cannot be deducted. Maintaining clean accounting records is essential — the FTA can audit your claimed deductions for up to 7 years.",
      },
      {
        type: "text",
        heading: "Small Business Relief for Freelancers",
        body: "Freelancers whose gross revenue exceeds AED 1 million (making them subject to CT) but does not exceed AED 3 million may be eligible to elect Small Business Relief, effectively treating their taxable income as nil. SBR must be actively elected in the CT return and is available only for tax periods ending on or before 31 December 2026. Once revenue exceeds AED 3 million in any period, SBR eligibility is permanently lost.",
      },
      {
        type: "alert",
        heading: "Registration Penalty Still Applies Even If No Tax Is Owed",
        body: "If your gross business revenue exceeded AED 1 million in 2024, you were required to register for Corporate Tax by 31 March 2025. If you did not, the AED 10,000 late registration penalty applies — even if your net profit is below AED 375,000 and you ultimately owe zero Corporate Tax. The penalty is for missing the registration deadline, not for owing tax.",
      },
      {
        type: "cta",
        heading: "Freelancer? Let Us Handle Your Corporate Tax",
        body: "Marifah Tax Advisory helps UAE freelancers determine their Corporate Tax obligations, assess SBR eligibility, and manage FTA registration and return filing — at a price designed for individual professionals. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 11 ──────────────────────────────────────────────────
  {
    title: "UAE Corporate Tax Return Filing — Step by Step",
    excerpt: "Your Corporate Tax return must be filed within 9 months of your financial year-end. Here is exactly how to file on EmaraTax — boxes explained, deadlines, and common mistakes to avoid.",
    category: "Corporate Tax",
    readTime: "7 min read",
    sections: [
      {
        type: "text",
        heading: "What is a Corporate Tax Return?",
        body: "A Corporate Tax return is the annual declaration you file with the Federal Tax Authority (FTA) declaring your taxable income, allowable deductions, and the Corporate Tax amount due for a financial year. Every UAE business that has registered for Corporate Tax must file a return — even if the tax owed is zero. The return is filed exclusively through the EmaraTax portal at tax.gov.ae.",
      },
      {
        type: "text",
        heading: "Filing Deadline — 9 Months from Year-End",
        body: "You must file your Corporate Tax return and pay any tax due within 9 months from the end of your financial year. For example: if your financial year ends 31 December 2025, your return is due by 30 September 2026. If your year ends 31 March 2026, your return is due by 31 December 2026. There are no extensions available — late filing triggers a fixed AED 500 penalty per month for the first 12 months, and AED 1,000 per month thereafter.",
      },
      {
        type: "checklist",
        heading: "What You Need Before Filing",
        items: [
          "Audited or management financial statements for the full tax year",
          "Trial balance and general ledger",
          "List of related party transactions (transfer pricing disclosure)",
          "Details of exempt income (dividends, capital gains under Participation Exemption)",
          "Depreciation schedule and fixed asset register",
          "Loan agreements (for interest deduction capping under 30% EBITDA rule)",
          "Free zone income breakdown (qualifying vs non-qualifying) if applicable",
        ],
      },
      {
        type: "text",
        heading: "Step 1 — Log in to EmaraTax",
        body: "Go to tax.gov.ae and log in using your registered credentials. From the dashboard, select your business entity and click 'Corporate Tax' from the left-hand menu. You will see your registered tax periods listed. Click on the relevant period to begin your return.",
      },
      {
        type: "text",
        heading: "Step 2 — Enter Your Financial Data",
        body: "The return has several sections. You will enter your accounting profit or loss as per your financial statements, then make adjustments for: non-deductible expenses (entertainment above 50%, personal expenses, fines), exempt income (qualifying dividends, capital gains), and prior-year tax losses if you are carrying them forward. The system calculates your taxable income automatically.",
      },
      {
        type: "text",
        heading: "Step 3 — Apply Reliefs and Exemptions",
        body: "At this stage you elect any available reliefs. Small Business Relief (SBR) is available if your revenue does not exceed AED 3 million and the tax period ends on or before 31 December 2026 — electing SBR treats your taxable income as nil. Free Zone Persons must confirm their Qualifying Free Zone Person (QFZP) status and separately declare qualifying vs non-qualifying income. Participation Exemption applies to dividends and capital gains from qualifying shareholdings.",
      },
      {
        type: "text",
        heading: "Step 4 — Calculate and Pay",
        body: "Once all data is entered, EmaraTax calculates your tax liability. 0% applies on taxable income up to AED 375,000. 9% applies on income above AED 375,000. Any tax due must be paid within the same 9-month window as the return. Payment is made via EmaraTax using bank transfer (GIBAN), e-Dirham, or credit/debit card. There is no instalment option under the standard regime.",
      },
      {
        type: "checklist",
        heading: "Most Common Filing Mistakes",
        items: [
          "Filing late — the 9-month deadline is fixed, no extensions exist",
          "Not electing Small Business Relief when eligible",
          "Claiming 100% of entertainment expenses (only 50% is deductible)",
          "Not applying the 30% EBITDA cap on net interest expenses",
          "Missing related party disclosures — FTA can impose penalties for incomplete transfer pricing documentation",
          "Free zone companies filing as mainland — losing QFZP status unnecessarily",
          "Forgetting to carry forward prior-year losses in the return",
        ],
      },
      {
        type: "alert",
        heading: "Penalty for Late Filing",
        body: "Filing your Corporate Tax return even one day late triggers an automatic AED 500 per month penalty for the first 12 months, then AED 1,000 per month. Separately, late payment of any tax due attracts a 14% per annum penalty effective from 14 April 2026 under Cabinet Decision No. 129 of 2025. Both penalties run simultaneously — there is no grace period.",
      },
      {
        type: "cta",
        heading: "Need Help Filing Your Corporate Tax Return?",
        body: "Marifah Tax Advisory prepares and files UAE Corporate Tax returns accurately and on time. We handle the full return — from financial data extraction to EmaraTax submission. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 12 ──────────────────────────────────────────────────
  {
    title: "Small Business Relief UAE — Who Qualifies and How to Elect It",
    excerpt: "Small Business Relief lets eligible UAE businesses pay 0% Corporate Tax regardless of profit. Here is exactly who qualifies, how to elect it, and the AED 3 million revenue trap to avoid.",
    category: "Corporate Tax",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "What is Small Business Relief?",
        body: "Small Business Relief (SBR) is a UAE Corporate Tax relief under Ministerial Decision No. 73 of 2023 that allows eligible businesses to treat their taxable income as nil — effectively paying 0% Corporate Tax. It is designed to reduce the compliance burden on small businesses and startups that are still in their early growth phases. SBR must be actively elected in your Corporate Tax return — it is NOT applied automatically.",
      },
      {
        type: "checklist",
        heading: "Who Qualifies for Small Business Relief?",
        items: [
          "Your revenue must not exceed AED 3 million in the relevant tax period",
          "Your revenue must not have exceeded AED 3 million in any previous tax period from June 2023 onwards",
          "You must be a UAE resident taxable person (juridical or natural)",
          "The tax period must end on or before 31 December 2026",
          "You must not be a member of a Multinational Enterprise group (global revenue above AED 3.15 billion)",
          "You must not be a Qualifying Free Zone Person — QFZPs have their own 0% regime",
        ],
      },
      {
        type: "text",
        heading: "The AED 3 Million Trap — Read Carefully",
        body: "The AED 3 million threshold is cumulative and permanent. If your revenue exceeds AED 3 million in ANY tax period from 2023 onwards, you permanently lose SBR eligibility — even if your revenue drops back below AED 3 million in a future year. This means a business that had AED 3.2 million revenue in 2024 cannot elect SBR for 2025 even if its 2025 revenue was AED 1.5 million. Plan carefully if you are approaching this threshold.",
      },
      {
        type: "text",
        heading: "What Does SBR Actually Give You?",
        body: "When you elect Small Business Relief, your taxable income is treated as nil for that tax period. This means you pay zero Corporate Tax regardless of your actual profit. However, you still have ALL other Corporate Tax obligations: you must remain registered with the FTA, you must still file your Corporate Tax return by the 9-month deadline, and you must still maintain financial records for 7 years. SBR reduces your tax to zero — it does NOT remove your compliance obligations.",
      },
      {
        type: "text",
        heading: "How to Elect Small Business Relief — Step by Step",
        body: "Log in to EmaraTax at tax.gov.ae. Select your entity and open your Corporate Tax return for the relevant period. In the return, there is a section for Reliefs and Exemptions. Tick the Small Business Relief election checkbox. Confirm your revenue figure is below AED 3 million. The system will set your taxable income to nil automatically. Complete the rest of the return and file before your 9-month deadline.",
      },
      {
        type: "checklist",
        heading: "SBR Checklist Before You Elect",
        items: [
          "Confirm revenue (NOT profit) is below AED 3 million for this period",
          "Confirm revenue was below AED 3 million in all previous periods from June 2023",
          "Confirm you are not a QFZP (free zone entities use the QFZP regime instead)",
          "Confirm you are not part of an MNE group",
          "Confirm your tax period ends on or before 31 December 2026",
          "Prepare financial statements to evidence the revenue figure",
          "File the Corporate Tax return within 9 months of your financial year-end",
        ],
      },
      {
        type: "alert",
        heading: "SBR Ends After 31 December 2026 — What Happens Next?",
        body: "Small Business Relief is a transitional measure. For tax periods ending after 31 December 2026, SBR will no longer be available unless the UAE government extends it. If the relief is not extended, businesses that were relying on SBR will need to calculate and pay 9% on profits above AED 375,000 from their first eligible period. We recommend starting proper bookkeeping now so you are ready for full Corporate Tax compliance when SBR ends.",
      },
      {
        type: "cta",
        heading: "Are You Eligible for Small Business Relief?",
        body: "Marifah Tax Advisory assesses your SBR eligibility, reviews your revenue figures, and files the election correctly on your behalf. Contact us for a free consultation — we will tell you in 15 minutes whether you qualify.",
      },
    ],
  },
];

export type BlogArticle = (typeof blogs)[number];

export const blogSlug = (b: { title: string }) => slugify(b.title);

export function findBlog(slug: string) {
  return blogs.find((b) => blogSlug(b) === slug) ?? null;
}
