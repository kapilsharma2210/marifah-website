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
  // ── NEW UAE TAX PENALTIES 2026 (2026-11-05) ────────────────────────────
  {
    title: "UAE Tax Penalties 2026: Every FTA Fine Explained and What Changed on 14 April",
    excerpt: "A plain-English guide to every FTA penalty for VAT, Corporate Tax, Excise Tax and e-invoicing, with worked examples, the 14 April 2026 changes, and practical ways to keep penalties down.",
    category: "Tax Procedures",
    readTime: "10 min read",
    updated: "2026-11-05",
    cover: {
      src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1400&q=80&auto=format&fit=crop",
      alt: "Calculator and financial paperwork on a desk",
      credit: "Photo: Unsplash",
    },
    sections: [
      {
        type: "text",
        heading: "Why UAE Tax Penalties Matter More in 2026",
        body: "The Federal Tax Authority (FTA) charges administrative penalties when a business registers late, files or pays late, makes an error, or doesn't keep proper records. On 14 April 2026, the penalties for VAT and Excise Tax changed under Cabinet Decision No. 129 of 2025. Some became smaller, and the way late payment is charged changed completely.\n\nThis guide explains every penalty in simple language, shows what being late actually costs, and covers the practical ways to keep penalties down. To work out your own figure, down to a single day late, use our free UAE Tax Penalty Calculator at marifahtax.com/uae-tax-penalty-calculator.",
      },
      {
        type: "checklist",
        heading: "The Most Common Penalties at a Glance",
        items: [
          "Late VAT registration: AED 10,000",
          "Late Corporate Tax registration: AED 10,000",
          "Late VAT return: AED 1,000 (AED 2,000 if repeated within 24 months)",
          "Late Corporate Tax return: AED 500 a month for 12 months, then AED 1,000 a month",
          "Late payment of tax: 14% a year on the unpaid tax, charged monthly",
          "Voluntary disclosure of an error: 1% of the error per month",
          "Error found after an audit notice: 15% of the error plus 1% per month",
          "Incorrect tax return: AED 500",
          "Late deregistration: AED 1,000, then AED 1,000 a month (maximum AED 10,000)",
        ],
      },
      {
        type: "image",
        src: "/blog/uae-tax-penalties-2026/what-changed-april-2026.png",
        alt: "Table comparing VAT and Excise penalties before and after 14 April 2026: late payment, voluntary disclosure, error found after audit notice, incorrect return, tax record not updated, records not in Arabic",
        caption: "The main VAT and Excise Tax penalties before and after Cabinet Decision No. 129 of 2025 took effect.",
      },
      {
        type: "text",
        heading: "What Changed on 14 April 2026",
        body: "Late payment used to be expensive and fast-growing: 2% the day after the due date, another 4% on the seventh day, then 1% a day from one month after the due date, up to 300% of the tax. It is now 14% a year, charged as roughly 1.17% of the unpaid tax for each month or part of a month.\n\nVoluntary disclosures used to cost a fixed 5% to 40% of the error, depending on how old it was. They now cost 1% of the error for each month from the original deadline until you disclose it. If the FTA finds the error after notifying you of an audit, the penalty is 15% plus 1% a month, down from 50%.\n\nSeveral fixed penalties were also reduced: an incorrect return is now AED 500, failing to update your tax record is AED 1,000 (AED 5,000 if repeated), and not providing records in Arabic is AED 5,000.\n\nThese changes apply to VAT and Excise Tax. Corporate Tax penalties are set by a separate decision, Cabinet Decision No. 75 of 2023, which this reform did not change.",
      },
      {
        type: "alert",
        heading: "\"Each month or part of a month\" means one day late counts as a full month",
        body: "Most monthly penalties are charged from the day after the deadline and again on the same date every month. So a Corporate Tax return filed one day late costs AED 500, the same as one filed 30 days late. Filing even a week earlier can save a whole month's penalty.",
      },
      {
        type: "checklist",
        heading: "VAT Penalties",
        items: [
          "Late registration: AED 10,000",
          "Late return: AED 1,000 (AED 2,000 if repeated within 24 months)",
          "Late payment: 14% a year on the unpaid tax, charged monthly",
          "Incorrect return: AED 500, unless corrected before the deadline",
          "Voluntary disclosure: 1% of the tax difference per month",
          "Error found after audit notice: 15% of the tax difference plus 1% per month",
          "Late deregistration: AED 1,000, then AED 1,000 a month (maximum AED 10,000)",
          "Tax record not updated: AED 1,000 (AED 5,000 if repeated within 24 months)",
          "Required records not kept: AED 10,000 (AED 20,000 if repeated within 24 months)",
          "Prices not shown including VAT: AED 5,000",
          "Tax invoice or credit note not issued on time: AED 2,500 for each one",
          "Tax on imported goods not calculated: 50% of the unpaid tax",
          "Not facilitating a tax audit: AED 20,000",
        ],
      },
      {
        type: "text",
        heading: "VAT Deadlines to Remember",
        body: "A VAT return and the VAT due must both reach the FTA by the 28th day after the end of the tax period. For a quarter ending 30 June, that is 28 July. You must apply to register within 30 days of your taxable supplies passing the AED 375,000 mandatory threshold. If you register late, the FTA can also charge VAT from the date you should have been registered, with late-payment penalties on top of the AED 10,000.",
      },
      {
        type: "checklist",
        heading: "Corporate Tax Penalties",
        items: [
          "Late registration: AED 10,000",
          "Late return: AED 500 a month for months 1–12, then AED 1,000 a month",
          "Late payment: 14% a year on the unpaid tax, charged monthly",
          "Incorrect return: AED 500, unless corrected before the deadline",
          "Voluntary disclosure: 1% of the tax difference per month",
          "Error found after audit notice: 15% of the tax difference plus 1% per month",
          "Late deregistration: AED 1,000, then AED 1,000 a month (maximum AED 10,000)",
          "Tax record not updated: AED 1,000 (AED 5,000 if repeated within 24 months)",
          "Required records not kept: AED 10,000 (AED 20,000 if repeated within 24 months)",
          "Late annual declaration (for example, by an exempt person): AED 500 a month for 12 months, then AED 1,000 a month",
          "Not facilitating a tax audit: AED 20,000",
        ],
      },
      {
        type: "text",
        heading: "Corporate Tax Deadlines to Remember",
        body: "Your Corporate Tax return and any tax due must be filed and paid within 9 months of the end of your tax period. For a financial year ending 31 December 2025, the deadline was 30 September 2026. For a year ending 31 March 2026, it is 31 December 2026. A return is due even if you made a loss or elected Small Business Relief, so a missed return is penalised even when no tax is owed.",
      },
      {
        type: "image",
        src: "/blog/uae-tax-penalties-2026/worked-examples.png",
        alt: "Three worked examples: VAT return and payment one day late costs AED 1,233.33; Corporate Tax 107 days late costs AED 3,400; a VAT error of AED 10,000 costs AED 700 if disclosed voluntarily versus AED 2,200 if found after an audit notice",
        caption: "Worked examples calculated with the Marifah UAE Tax Penalty Calculator.",
      },
      {
        type: "numbered",
        heading: "Worked Examples",
        items: [
          { title: "VAT filed and paid one day late", body: "A quarter ends on 30 June 2026, so the deadline is 28 July. The business files and pays AED 20,000 of VAT on 29 July. The late return costs AED 1,000 (first time), and late payment costs one month at 14% ÷ 12 of AED 20,000, which is AED 233.33. Total: AED 1,233.33." },
          { title: "Corporate Tax filed and paid 107 days late", body: "The financial year ended 31 December 2025, so the deadline was 30 September 2026. The return is filed and AED 30,000 of tax paid on 15 January 2027. That counts as 4 months (charged on 1 October, 1 November, 1 December and 1 January). The late return costs 4 × AED 500 = AED 2,000, and late payment costs 4 × AED 350 = AED 1,400. Total: AED 3,400." },
          { title: "A VAT error of AED 10,000", body: "A business under-declared AED 10,000 of VAT in its return for the quarter ending 31 March 2026 (due 28 April). If it makes a voluntary disclosure on 10 November 2026, that is 7 months at 1%: AED 700. If the FTA had found the error after an audit notice instead, the penalty would be 15% (AED 1,500) plus the same AED 700: AED 2,200. In both cases the AED 10,000 of tax is still payable." },
        ],
      },
      {
        type: "checklist",
        heading: "Excise Tax and E-Invoicing Penalties",
        items: [
          "Excise Tax: The same registration, return, payment, disclosure and record penalties as VAT",
          "Excise prices not shown including tax: AED 5,000",
          "Excise price lists not provided: AED 5,000 (AED 10,000 if repeated)",
          "E-invoicing system or service provider not in place by your deadline: AED 5,000, then AED 5,000 a month (maximum AED 50,000 in any 12 months)",
          "E-invoice or e-credit note not issued and sent on time: AED 100 each (maximum AED 5,000 a calendar month)",
          "Service provider not told about changes to your data: AED 250 a day (maximum AED 5,000 a calendar month)",
        ],
      },
      {
        type: "text",
        heading: "About the E-Invoicing Penalties",
        body: "The e-invoicing penalties come from Cabinet Decision No. 173 of 2026, which replaced the earlier Cabinet Decision No. 106 of 2025. They only start to apply once your business's mandatory e-invoicing date has passed. Our guide to e-invoicing in the UAE explains which deadline applies to you.",
      },
      {
        type: "numbered",
        heading: "How to Keep Penalties Down",
        items: [
          { title: "File on time, even if you can't pay yet", body: "Late filing and late payment are separate penalties. Filing on time avoids the filing penalty, even if the tax is paid a little later." },
          { title: "Pay as soon as you can", body: "Late payment is charged for each month or part of a month. Paying before the next monthly date stops another 1.17% being added." },
          { title: "Disclose errors yourself, early", body: "A voluntary disclosure costs 1% of the error per month. Waiting until the FTA notifies you of an audit adds a fixed 15% on top, so it pays to correct mistakes as soon as you find them." },
          { title: "Correct a return before its deadline", body: "If you spot an error before the return is due, correct it then. There is no incorrect-return penalty if it is fixed before the deadline." },
          { title: "Use the Corporate Tax registration waiver if you qualify", body: "Under the FTA's waiver initiative, the AED 10,000 late Corporate Tax registration penalty is waived, or refunded, if you file your first Corporate Tax return or annual declaration within 7 months of the end of your first tax period. Check the FTA's current conditions before relying on it." },
          { title: "Ask the FTA to reconsider a penalty", body: "If you believe a penalty is wrong, you can ask the FTA to reconsider it within the time limit in the Tax Procedures Law. A clear explanation with supporting documents gives the best chance of success." },
          { title: "Keep a compliance calendar", body: "Most penalties come from missed dates. A simple calendar of VAT, Corporate Tax and licence deadlines, with reminders a week ahead, prevents most of them." },
        ],
      },
      {
        type: "numbered",
        heading: "Frequently Asked Questions",
        items: [
          { title: "What is the penalty for filing a VAT return one day late?", body: "AED 1,000 for a first late return, or AED 2,000 if you filed another return late in the previous 24 months. It is the same whether you are one day or several months late." },
          { title: "What is the penalty for filing a Corporate Tax return one day late?", body: "AED 500, because the penalty is charged for each month or part of a month. It rises by AED 500 a month for the first 12 months, then by AED 1,000 a month." },
          { title: "How is the 14% late payment penalty worked out?", body: "Divide 14% by 12 to get about 1.17% a month. Multiply that by the unpaid tax, then by the number of months or part months it stays unpaid, counting from the day after the due date." },
          { title: "Do the new VAT penalties apply to delays before 14 April 2026?", body: "The new amounts apply from 14 April 2026. For any part of a delay before that date, the previous rules may apply, so the FTA's figure can differ from a calculation using only today's rules." },
          { title: "Did Corporate Tax penalties change in 2026?", body: "No. Corporate Tax penalties are set by Cabinet Decision No. 75 of 2023, as amended by Cabinet Decision No. 10 of 2024. The April 2026 reform covered VAT and Excise Tax." },
          { title: "If I make a voluntary disclosure, do I still pay the tax?", body: "Yes. The penalty is added to the tax difference, which you still have to pay. Tax due under a voluntary disclosure must generally be paid within 20 business days of submitting it." },
          { title: "Can I calculate my exact penalty?", body: "Yes. Our free UAE Tax Penalty Calculator works out every FTA penalty for VAT, Corporate Tax, Excise Tax and e-invoicing to the day, using the rules in force today." },
        ],
      },
      {
        type: "cta",
        heading: "Facing an FTA Penalty?",
        body: "We can check whether a penalty is correct, file what's outstanding, prepare voluntary disclosures and, where there are grounds, help you ask the FTA to reconsider. Try our free penalty calculator, or book a free consultation.",
      },
    ],
  },
  // ── NEW IFZA FINANCIAL REPORT FOR LICENCE RENEWAL (2026-11-05) ─────────
  {
    title: "IFZA Financial Report for Licence Renewal: Simplified Form, Audit and E-Signing",
    excerpt: "Every IFZA company must now submit financial statements before its licence can be renewed. Here is who can use the simplified form, who needs an audit, how to fill in every field and how the e-signing works.",
    category: "Free Zone Compliance",
    readTime: "9 min read",
    updated: "2026-11-05",
    cover: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80&auto=format&fit=crop",
      alt: "A business owner reviewing and signing financial documents",
      credit: "Photo: Unsplash",
    },
    sections: [
      {
        type: "text",
        heading: "What the IFZA Financial Report Is",
        body: "Since 30 September 2025, every company licensed by IFZA has to submit its financial statements each time it renews its trade licence. This applies to FZCOs and to branches of other companies. IFZA sends the company an email, often titled \"Action required: Financial Statement still pending\", with a link to an online Financial Report form. The renewal cannot go ahead until that form is completed and signed.\n\nSmall companies can fill in a short online form called the Simplified Financial Statement. Larger companies upload a full set of audited financial statements instead. Either way, the figures cover your most recently completed financial year.",
      },
      {
        type: "checklist",
        heading: "The IFZA Financial Report at a Glance",
        items: [
          "Who must submit: Every IFZA licensee, whether an FZCO or a branch",
          "When: At every licence renewal from 30 September 2025",
          "Which year: Your most recently completed financial year, as set in your Articles of Association",
          "Simplified form: Turnover of AED 3 million or less and fewer than 9 employees",
          "Everyone else: Audited financial statements from a UAE-registered auditor",
          "Format: IFZA's own online form only; no other format is accepted",
          "Who signs: The authorised signatory (Manager, Director or Shareholder), electronically",
          "If you don't submit: The renewal stays on hold, and IFZA warns that monthly fines may apply",
        ],
      },
      {
        type: "image",
        src: "/blog/ifza-financial-report/simplified-or-audited.png",
        alt: "Flowchart: if turnover is AED 3 million or less and there are fewer than 9 employees, use the Simplified Financial Statement; otherwise upload audited financial statements",
        caption: "Both tests must be met to use the simplified form. Failing either one means audited accounts.",
      },
      {
        type: "text",
        heading: "Simplified Form or Audited Accounts: Which One Applies to You",
        body: "Look at your most recently completed financial year and ask two questions. Was your turnover AED 3 million or less? Did you have fewer than 9 employees? If the answer to both is yes, you can use the Simplified Financial Statement. If either answer is no, you must upload audited financial statements instead.\n\nTurnover means the gross income from all your business activities in the year, not your profit. VAT you charged your customers is not your income, so leave it out.\n\nAn employee is anyone who works for the company under a signed employment contract, under the company's supervision, whether or not the company sponsors their visa.\n\nIf you had exactly 9 employees, check with IFZA before you choose. The current form says \"fewer than 9\", while IFZA's earlier FAQ said \"nine or fewer\". You can ask at renewals@ifza.com.",
      },
      {
        type: "alert",
        heading: "Claiming the 0% Corporate Tax rate? You need an audit anyway",
        body: "A free zone company that is a Qualifying Free Zone Person, and pays 0% Corporate Tax on its qualifying income, must keep audited financial statements under Ministerial Decision No. 84 of 2025, whatever its size. So does any business with revenue above AED 50 million. If your company is in either group, you will already have audited accounts, and IFZA accepts the same audit report you prepared for the FTA.",
      },
      {
        type: "checklist",
        heading: "Which Accounting Basis to Use",
        items: [
          "Turnover of AED 3 million or less: Cash basis allowed",
          "Above AED 3 million and below AED 50 million: IFRS for SMEs",
          "AED 50 million or more: Full IFRS",
        ],
      },
      {
        type: "text",
        heading: "Why the Accounting Basis Matters",
        body: "These are the same thresholds used for UAE Corporate Tax. On a cash basis, you record income when the money arrives and expenses when you pay them. That keeps the simplified form straightforward: most of your figures come straight from your bank statements. Whatever basis you use, your figures should match the accounts behind your Corporate Tax return.",
      },
      {
        type: "checklist",
        heading: "Documents to Keep Ready Before You Start",
        items: [
          "Bank statements for every company account, covering the current and previous financial year",
          "Your sales invoices or a revenue report for the year",
          "Receipts and invoices for your expenses (rent, salaries, licence and visa costs, software and so on)",
          "Last year's financial statements or figures, for the Previous Year column",
          "Your employee list, employment contracts or WPS payroll records, to count staff",
          "Invoices for equipment, furniture or vehicles the company owns",
          "Loan agreements, including any money lent to the company by its owners",
          "Your Articles of Association, to confirm your financial year dates",
          "Your Corporate Tax return or audit report, if you already have one for the year",
        ],
      },
      {
        type: "image",
        src: "/blog/ifza-financial-report/example-figures.png",
        alt: "Worked example of the simplified form for an imaginary consultancy: total assets AED 350,000 equal liabilities AED 25,000 plus equity AED 325,000; turnover AED 850,000 minus expenses AED 610,000 equals net profit AED 240,000",
        caption: "Example figures for an imaginary consultancy. Equity rose from AED 145,000 to AED 325,000: the year's AED 240,000 profit, less AED 60,000 the owner withdrew.",
      },
      {
        type: "numbered",
        heading: "How to Fill In the Simplified Form, Field by Field",
        items: [
          { title: "GM email", body: "The email address of the company's General Manager, which IFZA usually fills in for you. Check it is correct and in use, because the signing email goes there." },
          { title: "Company name and trade licence number", body: "These are filled in from IFZA's records. Make sure they match your licence." },
          { title: "Financial year start and end dates", body: "The year you are reporting on, as set in your Articles of Association. A first financial year can be longer than 12 months, so it often starts on the date the company was set up." },
          { title: "Current assets", body: "What the company owns that will turn into cash within a year: mainly your bank balances at the year-end date, plus any money customers still owe you and any stock you hold." },
          { title: "Non-current assets", body: "Things the company owns and uses for more than a year, such as laptops, furniture, vehicles or long-term deposits." },
          { title: "Total assets", body: "Current assets plus non-current assets." },
          { title: "Current liabilities", body: "What the company owes and must pay within a year: unpaid supplier bills, salaries due, VAT payable or a short-term loan." },
          { title: "Non-current liabilities", body: "What the company owes over more than a year, such as a long-term loan or a loan from the owners that won't be repaid within 12 months. Enter 0 if there are none." },
          { title: "Total liabilities", body: "Current liabilities plus non-current liabilities." },
          { title: "Total equity", body: "The owners' share of the company: share capital plus profits kept in the business. It must equal total assets minus total liabilities. If it doesn't, one of the figures above is wrong." },
          { title: "Turnover", body: "Your total income from business activities for the year, without the VAT you charged." },
          { title: "Total expenses", body: "Everything the company spent running the business in the year: rent, salaries, licence and visa fees, software, marketing and so on. Money the owners take out of the company is not an expense." },
          { title: "Net profit or loss", body: "Turnover minus total expenses. A loss is entered as a negative figure." },
          { title: "Previous year column", body: "Every figure is also asked for the year before. Copy these from last year's statements so they match what you reported then. If the company did not exist in the previous year, there are no previous-year figures." },
          { title: "Number of employees", body: "The average number of people the company employed during the year. Remember that the simplified form is only for companies with fewer than 9 employees." },
          { title: "The three declarations", body: "Tick \"I Declare\" to confirm the figures are accurate and match your records, \"I Accept\" to acknowledge that false information can have legal consequences, and \"I Agree\" to accept that IFZA can ask for audited accounts at any time." },
        ],
      },
      {
        type: "image",
        src: "/blog/ifza-financial-report/submit-and-sign.png",
        alt: "Four steps: open the link from IFZA's email, fill in and submit the form, e-sign from the separate email, renewal continues",
        caption: "Submitting the form is not the last step. The statement also has to be signed from a separate email.",
      },
      {
        type: "numbered",
        heading: "Submitting and Signing",
        items: [
          { title: "Open the link in IFZA's email", body: "Use the Financial Report link IFZA sent to the company. If you don't meet the simplified criteria, click \"Upload Audited Financial Statement\" on the same page and upload your audit report instead." },
          { title: "Fill in the form and submit it", body: "Enter every figure for both years, tick the three declarations and submit." },
          { title: "Sign from the separate email", body: "After you submit, IFZA sends an email so the Simplified Financial Statement can be signed electronically. It must be signed by the authorised signatory, normally the General Manager, as IFZA's reminder email makes clear. Check the inbox, including spam, of the GM email entered on the form." },
          { title: "Let the renewal continue", body: "Once the statement is signed, IFZA can continue with the licence renewal. Keep a copy of the signed statement and the records behind your figures." },
        ],
      },
      {
        type: "checklist",
        heading: "Common Mistakes to Avoid",
        items: [
          "Figures that don't balance: total assets must equal total liabilities plus total equity",
          "Including the VAT you charged customers in your turnover",
          "Reporting the wrong financial year",
          "Submitting the form but never signing the follow-up email, so the renewal stays on hold",
          "The form being signed by someone who isn't the company's authorised signatory",
          "Uploading a report exported from accounting software instead of using IFZA's form",
          "Previous-year figures that don't match what you reported last year",
          "Numbers that don't match your Corporate Tax return or bank statements",
        ],
      },
      {
        type: "numbered",
        heading: "Frequently Asked Questions",
        items: [
          { title: "Does a company with no activity still have to submit?", body: "Yes. Every IFZA licensee must submit at renewal. A company that did not trade completes the simplified form with its actual figures, which may be zero turnover and only the year's running costs." },
          { title: "Can I use the audit report I prepared for Corporate Tax?", body: "Yes. If you already have audited financial statements for the FTA covering the most recent financial year, IFZA accepts the same report." },
          { title: "Does the audit have to be done by an IFZA-approved auditor?", body: "No. IFZA's guidance says any auditor registered in the UAE can prepare the audited financial statements." },
          { title: "Who is allowed to sign?", body: "The authorised signatory: a Manager, Director or Shareholder recorded with IFZA. IFZA's emails ask that the Authorised Signatory or General Manager signs." },
          { title: "What happens if I don't submit?", body: "IFZA cannot process the licence renewal until the financial statement is submitted and signed, and its reminder emails warn that monthly fines may apply." },
          { title: "Can IFZA ask for an audit even if I used the simplified form?", body: "Yes. One of the declarations on the form confirms that IFZA can ask for audited financial statements at any time, and that the company must provide them." },
          { title: "Is this the same as my Corporate Tax return?", body: "No. The Financial Report is an IFZA licensing requirement. Your Corporate Tax return is filed separately with the FTA. The figures should match, because they come from the same accounts." },
        ],
      },
      {
        type: "cta",
        heading: "Need Help With Your IFZA Financial Report?",
        body: "We prepare the figures from your bank statements and records, check that everything balances, fill in the form with you and make sure it is signed on time, so your renewal goes through. If you need audited accounts, we prepare them for the auditor too.",
      },
    ],
  },
  // ── NEW UAE TAX RESIDENCY CERTIFICATE (TRC) (2026-11-01) ───────────────
  {
    title: "UAE Tax Residency Certificate (TRC): Rules, Documents and Fees",
    excerpt: "A UAE Tax Residency Certificate proves you are UAE tax resident for a treaty claim or a foreign bank. Here are the residency tests, documents, FTA fees, EmaraTax steps and the reasons applications fail.",
    category: "Tax Residency",
    readTime: "9 min read",
    updated: "2026-11-01",
    cover: {
      src: "https://images.unsplash.com/photo-1745750434535-5943ef2fd31a?w=1400&q=80&auto=format&fit=crop",
      alt: "Dubai skyline with the Burj Khalifa and the waterfront on a clear day",
      credit: "Photo: Sirav Talwar on Unsplash",
    },
    sections: [
      {
        type: "text",
        heading: "What a Tax Residency Certificate Is and Who Needs One",
        body: "A Tax Residency Certificate (TRC) is issued by the Federal Tax Authority (FTA) and confirms that a person or company was UAE tax resident during a stated 12-month period. You need one to claim benefits under a UAE double tax agreement, such as reduced withholding tax abroad, or simply to prove residence to a foreign bank or tax authority. The FTA took over issuing TRCs from the Ministry of Finance on 14 November 2020, and you apply online through EmaraTax. Individuals who pass one of three residency tests can qualify, as can UAE companies that have existed for at least 12 months. Branches of foreign companies and offshore companies cannot.",
      },
      {
        type: "checklist",
        heading: "The TRC at a Glance",
        items: [
          "Issued by: The Federal Tax Authority (the Ministry of Finance until November 2020)",
          "Where to apply: EmaraTax, Tax Residency Certificate service",
          "Certificate types: Domestic Certificate or Treaty Certificate (one named country)",
          "Period covered: One tax period or another 12-month period, current or past, never future",
          "Government fee: AED 550 to AED 1,800 for an electronic certificate",
          "Processing time: 10 business days from a complete application",
        ],
      },
      {
        type: "text",
        heading: "Domestic Certificate or Treaty Certificate",
        body: "The portal offers three requests: Domestic Certificates, Treaty Certificates and Commercial Activities Certificates. A Domestic Certificate covers any purpose other than a treaty claim and is assessed under Cabinet Decision No. 85 of 2022 on the Determination of Tax Residency and, for individuals, Ministerial Decision No. 27 of 2023. A Treaty Certificate is issued for one country whose agreement with the UAE is in force, under Ministerial Decision No. 247 of 2023, and is tested against that treaty's residence conditions. The FTA will also stamp the other country's own residency form without a separate fee, though returning a paper form by courier is at your expense. The Ministry of Finance's International Treaties Dashboard lists the agreements. The Commercial Activities Certificate is different again: it supports refund claims for VAT paid abroad, needs an active VAT TRN and is valid for one year.",
      },
      {
        type: "checklist",
        heading: "Three Ways an Individual Can Be UAE Tax Resident",
        items: [
          "183-day test: Physically present in the UAE for 183 days or more within the relevant 12 consecutive months",
          "90-day test: Present for 90 days or more within the relevant 12 consecutive months, being a UAE national, a GCC national or holder of a valid UAE residence permit, and having either a permanent place of residence in the UAE or employment or business here",
          "Centre of life test: Your usual or primary place of residence and your centre of financial and personal interests are both in the UAE",
        ],
      },
      {
        type: "text",
        heading: "How Days and Homes Are Assessed",
        body: "Passing any one test in Article 4 of Cabinet Decision No. 85 of 2022 is enough. Ministerial Decision No. 27 of 2023 adds the detail. Any day or part of a day in the UAE counts, so landing at 11pm still gives you that day. Days need not be consecutive, and the FTA may ignore days spent here only because of exceptional circumstances. A permanent place of residence is a home continuously available to you, and it can be rented. For the centre of life test, the question is where you normally live and where your ties are strongest: work, family and social relations, business and where your property is managed. The evidence for day counts is the official entry and exit report, which appears in the FTA's document list for every individual route.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1655722725332-9925c96dd627?w=1400&q=80&auto=format&fit=crop",
        alt: "Open passport with travel stamps on its pages",
        caption: "Every day or part of a day in the UAE counts towards the 183-day and 90-day tests.",
      },
      {
        type: "text",
        heading: "Treaty Certificates Follow the Treaty",
        body: "Article 6 of the Cabinet Decision gives a treaty's own residence conditions priority for that treaty. If the agreement refers back to UAE law, the domestic tests apply. If it sets its own conditions, those are what the FTA checks. The India–UAE agreement, for example, as amended by its 2007 protocol, looks for at least 183 days of presence in the UAE in the calendar year concerned. Someone who passes only the 90-day test could hold a Domestic Certificate and still fall short for an Indian treaty claim. Read the treaty's residence article before you choose a period or pay. An individual always needs a passport for a treaty certificate.",
      },
      {
        type: "text",
        heading: "Residency Rules for Companies",
        body: "Under Article 3 of the Cabinet Decision, a company is UAE tax resident if it was incorporated, formed or recognised under UAE law, or if it is resident under UAE tax law, which covers a foreign company effectively managed and controlled in the UAE. Mainland and free zone companies qualify under the first route. The FTA adds its own conditions. The company must have been incorporated or established for at least 12 months. Branches of foreign companies and offshore companies are not eligible. For a period still running, a company can apply once three months have passed, while government entities can apply from day one. A Corporate Tax Group cannot hold a TRC. Each member applies separately, and the group's credentials do not unlock the lower fee.",
      },
      {
        type: "checklist",
        heading: "Documents for Individuals",
        items: [
          "183 days or more: Emirates ID, or passport with an official entry and exit report",
          "90 to 182 days: Emirates ID and passport with an entry and exit report, plus proof of UAE employment or business, or of a permanent home such as a tenancy contract or title deed",
          "Centre of life test: Emirates ID and passport with an entry and exit report, proof of your usual residence and of financial and personal interests in the UAE, and proof of source of income where applicable",
          "Treaty certificate: Passport (always mandatory), Emirates ID where held, an entry and exit report, proof of UAE income or salary where applicable, and anything else the treaty requires",
        ],
      },
      {
        type: "checklist",
        heading: "Documents for Companies",
        items: [
          "Valid trade licence and lease agreement",
          "Certificate of incorporation",
          "Memorandum of Association (certified, for a treaty certificate)",
          "Corporate Tax TRN, if the company has one",
          "Authorised signatory's Emirates ID and passport, with proof of authorisation",
          "Proof of effective management and control in the UAE, where relevant",
        ],
      },
      {
        type: "text",
        heading: "Bank Statements and Audited Accounts",
        body: "Many checklists online still demand six months of bank statements and audited accounts. Neither is on the FTA's core list any more. The form still has upload fields for extra evidence, though, and an officer can return the application asking for more, so keep them ready if your UAE presence or management isn't obvious from the core documents.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1772588627327-1eeddcf73c11?w=1400&q=80&auto=format&fit=crop",
        alt: "Person reviewing documents with a calculator and laptop",
        caption: "Names, licence numbers and dates should match across your documents and your EmaraTax record.",
      },
      {
        type: "checklist",
        heading: "FTA Fees (Cabinet Decision No. 65 of 2020, as Amended)",
        items: [
          "Submission fee, every application: AED 50",
          "Electronic TRC, applicant with a Corporate Tax TRN: AED 500",
          "Electronic TRC, individual without a CT TRN: AED 1,000",
          "Electronic TRC, company without a CT TRN: AED 1,750",
          "Each printed copy: AED 250",
          "Stamping the other country's residency form: Included",
        ],
      },
      {
        type: "text",
        heading: "How Payment Works Now",
        body: "The full fee is paid before you can submit and is not refunded if the application is rejected. Under the old process you paid AED 50 first and the balance only after approval. The AED 500 rate needs a Corporate Tax TRN with a name matching your EmaraTax record exactly; a VAT TRN doesn't count. All in, that is AED 550, AED 1,050 or AED 1,800, plus AED 250 per printed copy.",
      },
      {
        type: "text",
        heading: "Processing Time, Delivery and the Period Covered",
        body: "The FTA's service standard is 10 business days from a complete application. Printed copies follow within 5 business days of payment and go by courier to UAE addresses only. Stamping a foreign form takes up to 10 business days, and if the form or fee is not received within 30 business days the request lapses. The digital certificate is emailed to you and can be checked on the FTA's verification page or through its code. Each certificate covers one 12-month period, current or past, so you need a new one for each period and, for treaty claims, each country. Ask the foreign bank or tax office which period they need before applying.",
      },
      {
        type: "numbered",
        heading: "How to Apply on EmaraTax",
        items: [
          { title: "Log in to EmaraTax", body: "An EmaraTax profile is mandatory, even if you are not registered for any tax. If you used the older TRC platform under another email, you link it with a one-time password." },
          { title: "Open the service", body: "Choose Other Services from the sidebar, then Tax Residency Certificate. Select your Corporate Tax TRN or, if you have none, the last option for applicants without one, then click Login to TRC." },
          { title: "Choose the certificate", body: "Under New Certificate Requests, pick Domestic or Treaty Certificates and confirm the information page. For a treaty certificate, select the other country first." },
          { title: "Enter the basic information", body: "Applicant type, the start date of the 12-month period (no future dates) and language. Companies add trade licence details and confirm whether they are a foreign branch." },
          { title: "Upload documents and delivery details", body: "Attach the documents for your test or treaty, with Emirates ID details exactly as on the card. Request printed copies or stamping of a foreign form here." },
          { title: "Pay and submit", body: "Pay the full fee and submit. An FTA officer is assigned and updates arrive by email." },
          { title: "Track and download", body: "Follow progress under My Requests. If the officer returns the application, answer each comment and resubmit. Once approved, download the certificate there." },
        ],
      },
      {
        type: "checklist",
        heading: "Why Applications Are Returned or Rejected",
        items: [
          "The company has not completed 12 months since incorporation",
          "The applicant is a foreign company's branch or an offshore company",
          "The period is in the future, longer than 12 months or, for a company, less than three months old",
          "The entry and exit report does not support the test claimed",
          "A 90-day application without proof of a UAE home, job or business",
          "Names, Emirates ID details or licence numbers differ from your EmaraTax record",
          "The treaty's own residence condition is not met",
          "The foreign form is incomplete or unsigned (and unstamped, for a company), or its period or country differs from the application",
        ],
      },
      {
        type: "text",
        heading: "Before You Pay",
        body: "The FTA publishes rejection reasons only for foreign forms. The rest of that list comes from its eligibility conditions. The fee is kept on rejection, so tick off each point before you submit.",
      },
      {
        type: "numbered",
        heading: "Frequently Asked Questions",
        items: [
          { title: "Can I get a TRC if I have a UAE visa but spend most of the year abroad?", body: "Possibly, but the visa alone is not enough. You need 90 days or more in the relevant 12 months plus a permanent home, job or business here, or your usual residence and centre of interests must be in the UAE." },
          { title: "Can a newly set up company apply?", body: "Not until it has existed for 12 months. For a period still running, it must also be at least three months into that period." },
          { title: "Do I need a separate certificate for each country?", body: "For treaty claims, yes, as each application names one country. A Domestic Certificate is not tied to a country. Either way, each certificate covers only the period stated on it." },
          { title: "Can a free zone company get a TRC?", body: "Yes, once it has existed for 12 months. A free zone branch of a foreign company cannot." },
        ],
      },
      {
        type: "alert",
        heading: "Check the Current Position Before You Apply",
        body: "This guide reflects UAE legislation and the FTA's published conditions as at 1 November 2026. The FTA revises its TRC requirements from time to time, most recently through an updated service card in August 2026, so confirm the document list on EmaraTax before applying. It is general information, not advice on your own facts or a particular treaty.",
      },
      {
        type: "cta",
        heading: "Need a TRC for a Treaty Claim or a Foreign Bank?",
        body: "We check your residency position and documents before you pay the FTA fee, prepare the application on EmaraTax, and help with any residency form the other country requires. Speak to us for a free consultation.",
      },
    ],
  },

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
          "Ministerial Decision No. 243 of 2025 (as amended by Ministerial Decision No. 197 of 2026, effective 1 October 2026) — scope, exclusions and the obligations of issuers and recipients",
          "Ministerial Decision No. 244 of 2025 (as amended by Ministerial Decision No. 66 of 2026) — phases, thresholds and deadlines",
          "Ministerial Decision No. 168 of 2026 (which replaced Ministerial Decision No. 64 of 2025) — eligibility and accreditation of service providers",
          "Cabinet Decision No. 173 of 2026 — violations and administrative penalties (announced on 30 October 2026, it replaces Cabinet Decision No. 106 of 2025 from the day after its publication in the Official Gazette)",
          "UAE Electronic Invoicing Guidelines (Version 2.0, 26 October 2026) and the Mandatory Fields specification — operational guidance",
        ],
      },
      {
        type: "text",
        heading: "Who Must Comply?",
        body: "Ministerial Decision No. 243 applies to any person conducting business in the UAE for every business transaction, unless the person or the transaction is specifically excluded — so the obligation is not limited to VAT-registered businesses. At present the system covers business-to-business (B2B) and business-to-government (B2G) transactions. Which phase you fall into depends on your Revenue, defined as the gross income earned during your most recent accounting period, based on your financial statements (or other documentation acceptable to the FTA if statements are not available). Transactions between members of the same VAT group are treated as excluded for 24 months starting on 1 January 2027 under Ministerial Decision No. 197 of 2026. The Guidelines describe this as a temporary grace period, after which those transactions come into the system.",
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
          { title: "1 July 2026 — Pilot and voluntary phase", body: "A pilot programme for a Taxpayer Working Group (selected by the Ministry, with the person's written agreement) begins, and any business may voluntarily implement the system from this date, provided it meets all technical requirements. E-invoicing penalties do not apply to e-invoices issued voluntarily before your mandatory date." },
          { title: "30 October 2026 — Phase 1: appoint an ASP", body: "Businesses with Revenue of AED 50 million or more must appoint an Accredited Service Provider (ASP) by this date. It was originally 31 July 2026 and was extended by Ministerial Decision No. 66 of 2026." },
          { title: "1 January 2027 — Phase 1: go live", body: "Businesses with Revenue of AED 50 million or more must have fully implemented the Electronic Invoicing System. This date did not change when the ASP deadline was extended." },
          { title: "31 March 2027 — Phase 2 and Government: appoint an ASP", body: "Businesses with Revenue below AED 50 million, and Government Entities, must appoint an Accredited Service Provider by this date." },
          { title: "1 July 2027 — Phase 2: go live", body: "Businesses with Revenue below AED 50 million must implement the Electronic Invoicing System." },
          { title: "1 October 2027 — Government Entities: go live", body: "Government Entities must implement the Electronic Invoicing System. After these phases, any remaining person or entity subject to the system must also appoint an ASP and implement it, and a separate date for B2C transactions will be set by the Minister." },
        ],
      },
      {
        type: "alert",
        heading: "Phase 1 ASP Deadline Was 30 October 2026",
        body: "If your Revenue is AED 50 million or more, your ASP had to be appointed by 30 October 2026 — and go-live is still 1 January 2027. The Ministry of Finance confirmed that only the appointment date moved, and the FTA restated both dates on 25 October 2026. If you have not appointed an ASP yet, do it now: under Cabinet Decision No. 173 of 2026 the penalty is AED 5,000, plus AED 5,000 for each further month or part of a month of delay, capped at AED 50,000 in any 12 consecutive months. Always check the Ministry of Finance website for any later changes.",
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
          "VAT registrants: issue within the timeline in the VAT Law. Others: within 14 business days of the Date of Business Transaction",
          "Issue an e-credit note when a transaction is cancelled, the consideration is reduced or returned, or an administrative or numerical error occurred",
          "Include every data field prescribed by the Ministry in the Mandatory Fields specification",
          "Keep e-invoices, e-credit notes and associated data for the period required by the Tax Procedures Law, and produce them to the FTA on request (the requirement to store them within the UAE was removed from 1 October 2026)",
          "Tell your ASP in writing about changes to your registered FTA data within 5 business days of the FTA confirming the change",
        ],
      },
      {
        type: "text",
        heading: "Agents, Self-Billing and the Date of Business Transaction",
        body: "An agent acting for a principal may issue and transmit e-invoices and e-credit notes on the principal's behalf. A recipient may issue an e-invoice on behalf of the supplier under a self-billing arrangement, provided both parties are VAT registrants and the conditions in the VAT Executive Regulation are met. The Date of Business Transaction, which starts the clock for the 14-business-day rule, is the earlier of the date the transaction occurred or the date payment was received. The Guidelines (Version 2.0, 26 October 2026) also explain how advance payments and retention amounts are treated.",
      },
      {
        type: "checklist",
        heading: "Penalties Under Cabinet Decision No. 173 of 2026",
        items: [
          "Failing to implement the system or appoint an ASP on time (or, for a recipient, failing to stay compliant) — AED 5,000, plus AED 5,000 for each month or part of a month the failure continues, capped at AED 50,000 in any 12 consecutive months",
          "Failing to issue and transmit an e-invoice on time — AED 100 per invoice, capped at AED 5,000 per calendar month",
          "Failing to issue and transmit an e-credit note on time — AED 100 per credit note, capped at AED 5,000 per calendar month",
          "Failing to notify your ASP of changes to registered data on time — AED 250 for each day of delay or part of a day, capped at AED 5,000 per calendar month",
          "Cabinet Decision No. 173 of 2026 takes effect on the day after it is published in the Official Gazette. Until then, the penalties in Cabinet Decision No. 106 of 2025 continue to apply.",
        ],
      },
      {
        type: "numbered",
        heading: "How to Get Ready — A Practical Plan",
        items: [
          { title: "Confirm your phase", body: "Check your Revenue — gross income in your most recent accounting period, per your financial statements — against the AED 50 million threshold, and confirm whether any of your transactions are excluded." },
          { title: "Review your invoicing process and data", body: "Look at how invoices and credit notes are created today. Clean up customer and supplier master data, tax registration details and item descriptions, and check that your accounting or ERP system can produce every field in the Mandatory Fields specification." },
          { title: "Select an Accredited Service Provider", body: "Choose only from the providers on the Ministry of Finance's published list. Compare how each connects to your accounting software, how it handles receiving invoices from suppliers, and where it stores data." },
          { title: "Onboard and test", body: "The voluntary phase has been open since 1 July 2026, which lets you test invoice exchange before your mandatory date. Voluntary adopters are not subject to e-invoicing penalties during that period." },
          { title: "Plan for storage and system failures", body: "Make sure e-invoice data is kept for the period required by the Tax Procedures Law and can be retrieved for the FTA on request — if your ASP stores it for you, you remain responsible. Agree an internal process for what happens if your system or provider is unavailable." },
          { title: "Train your team and keep records current", body: "Brief your finance and sales teams on e-credit notes, the issuing deadlines and receiving supplier invoices, and tell your ASP promptly when your registered FTA details change." },
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
        body: "This article reflects the legislation and Ministry of Finance and FTA guidance available as of 1 November 2026. The system is being rolled out in phases, and further decisions, guidelines and specifications are expected, so always confirm the current position on the Ministry of Finance and FTA websites before acting. This is general information, not legal advice for your specific situation.",
      },
      {
        type: "cta",
        heading: "Not Sure Which E-Invoicing Phase You Are In?",
        body: "Marifah Tax Advisory is not an Accredited Service Provider, but we help you work out whether you are in scope, which deadline applies, and what needs to change in your invoicing and VAT processes before go-live. Contact us for a free consultation.",
      },
    ],
  },

  // ── NEW VAT REFUNDS IN THE UAE (2026-11-01) ────────────────────────────
  {
    title: "VAT Refunds in the UAE: How to Claim Back Excess Input Tax",
    excerpt: "When your input VAT is higher than your output VAT, you can claim the difference back. How VAT311 works on EmaraTax, what the FTA checks, how long it takes, and the new five-year limit on old credits.",
    category: "VAT",
    readTime: "9 min read",
    updated: "2026-11-01",
    cover: {
      src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1400&q=80&auto=format&fit=crop",
      alt: "High-rise office and residential towers beside the water in Dubai during the day",
      credit: "Photo: Wael Hneini on Unsplash",
    },
    sections: [
      {
        type: "text",
        heading: "What a VAT Refund Is and Who Can Claim One",
        body: "If the input tax you can recover in a VAT return is more than the output tax you charged, the difference is excess recoverable tax. Under Article 74 of Federal Decree-Law No. 8 of 2017 on VAT, it sits as a credit in your Federal Tax Authority (FTA) account and is used against VAT or administrative penalties you owe in later periods. Whatever is left can be paid out, but only if you ask for it with a refund request, form VAT311, on EmaraTax. Nothing is refunded automatically. The businesses that end up in credit are typically exporters and others with mostly zero-rated sales, companies in a start-up or fit-out phase, and anyone who bought a large asset in a single quarter. Since 1 January 2026 a credit that is not refunded or used within five years from the end of the tax period in which it arose is lost.",
      },
      {
        type: "text",
        heading: "Carry It Forward or Claim It Back",
        body: "Leaving the credit in your account costs nothing, and it is used up as soon as your returns show VAT payable. That is usually the sensible choice when the credit comes from a one-off purchase and you expect normal output tax in the next quarter or two. A refund makes more sense when you are structurally in credit, such as an exporter that will never generate enough output tax to absorb its input tax, or when the amount matters for cash flow. Bear in mind that the FTA can allocate a credit balance to other tax or amounts you owe it under Article 9 of the Tax Procedures Law. And a refund request is reviewed, and can be referred to audit, so only claim what your records support.",
      },
      {
        type: "text",
        heading: "What Changed on 1 January 2026",
        body: "Until the end of 2025, a VAT credit had no statutory expiry. Federal Decree-Law No. 16 of 2025 amended Article 74 so that excess recoverable tax can be carried forward for no more than five years from the end of the tax period in which it arose. If no refund is requested and the credit is not used within that period, the right to it lapses. Federal Decree-Law No. 17 of 2025 set the matching rule for refund requests in Article 38 of the Tax Procedures Law, with two narrower windows for credits that arise late. A credit resulting from an FTA decision issued in the last 90 days of the five years, or after they end, can be claimed within one year of arising. Other late credits get 90 days. The FTA also has two years from the request date to audit a refund claimed in the fifth year or under those late windows.",
      },
      {
        type: "alert",
        heading: "Older Credits: Claim by 31 December 2026",
        body: "A transitional rule in Federal Decree-Law No. 17 of 2025 protects older balances. If the five-year period for a credit expired before 1 January 2026, or expires within one year of that date, you can still request a refund provided you do so within one year from 1 January 2026, which means by 31 December 2026. The Ministry of Finance has not listed the tax periods this covers and advisers' commentaries differ, so if your balance includes credits from the early years of VAT, claim them before that date rather than rely on your own cut-off calculation. Credits outside the rule expire on the normal five-year basis.",
      },
      {
        type: "checklist",
        heading: "Refund Time Limits at a Glance",
        items: [
          "Normal limit: five years from the end of the tax period in which the credit arose",
          "Credits whose five years ended before 2026 or end during 2026: request by 31 December 2026",
          "Credit created by an FTA decision issued late in, or after, the five years: one year from the date it arises",
          "Other credits that arise late: 90 days from the date they arise",
          "FTA decision under the law: 20 business days from submission, or longer if the FTA notifies you",
          "FTA published service time: 25 business days for a complete application, 55 working days if referred to audit",
          "Payment after approval: the FTA starts the refund within 5 business days of notifying you",
          "Service fee: none",
        ],
      },
      {
        type: "numbered",
        heading: "How to Apply on EmaraTax",
        items: [
          {
            title: "Bring your filings up to date",
            body: "File every VAT return that is due. Under Article 26 of the Tax Procedures Executive Regulation, the FTA can hold back a refund until overdue returns are in. Reconcile the credit shown in EmaraTax with your VAT control account and correct any return errors first.",
          },
          {
            title: "Open form VAT311",
            body: "Log in to EmaraTax with UAE Pass, go to the VAT tab on your dashboard and select VAT311. One request can cover eligible credit balances from several tax periods.",
          },
          {
            title: "Enter the amount and your bank details",
            body: "EmaraTax validates UAE beneficiary account details automatically before it pays, so use an account in the business's own name and enter the IBAN exactly as it appears on your bank's IBAN letter.",
          },
          {
            title: "Upload the supporting documents",
            body: "The FTA lists an output and input tax report, plus the tax invoices and supporting documents behind the claim. Attach them with the request. If the application is incomplete, the FTA asks for more and may take a further 25 business days after you resubmit.",
          },
          {
            title: "Track the request and answer queries",
            body: "Status updates and FTA questions appear in your EmaraTax account. Reply fully and quickly. If the claim goes to audit, the FTA's 55-working-day estimate only starts once you have provided everything requested.",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Documents to Have Ready",
        items: [
          "Output and input tax report for the periods covered by the claim",
          "Tax invoices for the input tax claimed, starting with the largest purchases",
          "Customs declarations and import documents for imported goods",
          "Export evidence for zero-rated exports, such as the customs declaration plus a bill of lading or air waybill (Article 30 of the VAT Executive Regulation)",
          "Proof that suppliers have been paid",
          "A recent IBAN letter from your bank",
          "Your apportionment calculation if you also make exempt supplies",
          "Records of supplier and transaction checks for input tax claimed from 1 October 2026",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1771758249853-415175dc29b9?w=1400&q=80&auto=format&fit=crop",
        alt: "Close-up of a pile of invoices, receipts and other paperwork",
        caption: "A refund is only as strong as the invoices, customs papers and payment records behind it. Photo: Camilo Rueda López on Unsplash",
      },
      {
        type: "text",
        heading: "How Long the FTA Takes",
        body: "The legal timetable is in Article 26 of Cabinet Decision No. 74 of 2023, the Tax Procedures Executive Regulation, and the April 2026 amendments left it unchanged. The FTA must decide within 20 business days of submission, or within a longer period if it notifies you, and must start paying within five business days of notifying you of approval. The FTA's own service page, updated in August 2026, quotes 25 business days for a complete application and 55 working days where audit needs to investigate, counted from when you provide everything requested. While a request is pending, you must also keep the records for the periods it covers for two years beyond the normal retention period.",
      },
      {
        type: "checklist",
        heading: "Why Refunds Get Rejected or Delayed",
        items: [
          "No valid tax invoice, or an invoice missing required details. Article 55 of the VAT Law allows recovery only once you hold the invoice, or the import documents for imports.",
          "Suppliers not paid. The Executive Regulation treats the consideration as paid only if you intend to pay within six months of the agreed date.",
          "Blocked input tax. Article 53 of the Executive Regulation blocks VAT on entertainment for anyone other than employees (customers, officials, shareholders) and on motor vehicles available for anyone's personal use.",
          "Staff benefits that no longer qualify. From 1 October 2026, Cabinet Decision No. 149 of 2026 limits recovery on benefits given under a contract or policy to the cases in FTA Decision No. 17 of 2026.",
          "Input tax relating to exempt supplies or non-business activity, or a weak apportionment calculation.",
          "Purchases linked to tax evasion. New Article 54 bis lets the FTA refuse input tax where you knew, or should have known, of the link. Skipping the supplier and transaction checks set by FTA Decision No. 13 of 2026 from 1 October 2026 counts as 'should have known'.",
          "Cash payments. Cabinet Decision No. 149 of 2026 blocks input tax on cash-paid supplies above a value to be set by the Minister of Finance, so check whether that decision has been issued and covers your periods.",
          "Figures that do not reconcile across the claim, the returns, the tax report, your ledger and customs import data.",
          "Overdue returns or bank details that fail validation, which hold up payment even when the claim is sound.",
        ],
      },
      {
        type: "text",
        heading: "Other VAT Refund Schemes",
        body: "Separate refund routes exist under Article 75 of the VAT Law and related Cabinet decisions: UAE nationals building a new home, tourists, unregistered foreign businesses, foreign governments, diplomatic missions and international organisations, the construction and operation of mosques, and licensed suppliers of exhibition and conference services to overseas participants. Each has its own conditions and process.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1711097383282-28097ae16b1d?w=1400&q=80&auto=format&fit=crop",
        alt: "A person holding a printed document over an open laptop",
        caption: "Check the claim against your returns and ledger before you submit VAT311. Photo: Jakub Żerdzicki on Unsplash",
      },
      {
        type: "checklist",
        heading: "Common Mistakes",
        items: [
          "Leaving old credits untouched until they lapse.",
          "Assuming the FTA will pay out a credit on its own. You have to file VAT311.",
          "Applying on top of a return you know is wrong. Correct it first, normally through a voluntary disclosure.",
          "Ignoring an error in a refund claim. Under the Tax Procedures Executive Regulation, as amended from 1 April 2026, an error that leads to an excess refund generally needs a voluntary disclosure within 20 business days of discovery. Where it stems from a return and is AED 10,000 or less, it can usually be corrected in the next return.",
          "Including VAT on client entertainment or on cars staff can use privately.",
          "Submitting with no documents and waiting for the FTA to ask.",
        ],
      },
      {
        type: "numbered",
        heading: "Frequently Asked Questions",
        items: [
          {
            title: "Do I have to claim a refund, or can I leave the credit in my account?",
            body: "You can leave it, and it will be offset against VAT you owe later. Any part not refunded or used within five years from the end of the period in which it arose lapses.",
          },
          {
            title: "How do I work out when my credit expires?",
            body: "Count five years from the end of the tax period that created it. For a credit from the quarter ending 31 March 2022, the five years run to 31 March 2027. If they ended before 2026 or end during 2026, you have until 31 December 2026.",
          },
          {
            title: "Can the FTA use my VAT credit to settle other amounts?",
            body: "Yes. Article 74 offsets it against VAT payable and administrative penalties, and Article 9 of the Tax Procedures Law lets the FTA allocate a credit balance to other tax or amounts you owe.",
          },
          {
            title: "Does a refund request lead to an audit?",
            body: "Not automatically, but the FTA can refer it to audit, and a request filed in the fifth year of the limit gives the FTA two years from the request date to audit it.",
          },
          {
            title: "Is there a fee for a VAT refund request?",
            body: "No. The FTA lists its refund service for registered taxpayers as free of charge.",
          },
        ],
      },
      {
        type: "alert",
        heading: "Before You Rely on This Guide",
        body: "This guide reflects UAE VAT and Tax Procedures legislation and FTA guidance in force on 1 November 2026. Several of these rules changed during 2026 and more decisions are expected, so confirm the current position on the FTA website before you claim. It is general information, not advice on your particular circumstances.",
      },
      {
        type: "cta",
        heading: "Sitting on a VAT Credit?",
        body: "Marifah Tax Advisory can reconcile your credit balance, flag amounts close to the five-year cut-off, review the input tax behind the claim and prepare the VAT311 request and supporting file. Book a free consultation to go through your position.",
      },
    ],
  },

  // ── NEW VOLUNTARY DISCLOSURE UAE (2026-11-01) ──────────────────────────
  {
    title: "Voluntary Disclosure UAE: Correcting VAT and Corporate Tax Errors",
    excerpt: "When an error in a VAT or Corporate Tax return needs a voluntary disclosure, when the next return will do, the time limits after the 2026 amendments, and what it costs under the penalty rules in force since 14 April 2026.",
    category: "Tax Procedures",
    readTime: "9 min read",
    updated: "2026-11-01",
    cover: {
      src: "https://images.unsplash.com/photo-1610809760161-efa84d5e3722?w=1400&q=80&auto=format&fit=crop",
      alt: "Dubai Marina skyline and waterfront in daylight",
      credit: "Photo: Vitaliy Barakovskiy on Unsplash",
    },
    sections: [
      {
        type: "text",
        heading: "Voluntary Disclosure in Plain Terms",
        body: "A voluntary disclosure is the form you submit on EmaraTax to correct a tax return or refund application you have already sent to the Federal Tax Authority (FTA), or a tax assessment the FTA has issued. The rules sit in Article 10 of Federal Decree-Law No. 28 of 2022 on Tax Procedures and Article 10 of its Executive Regulation (Cabinet Decision No. 74 of 2023, as amended by Cabinet Decision No. 17 of 2026), and they apply to VAT and Corporate Tax alike. The short version: if an error means you paid less tax than you owed and the difference is more than AED 10,000, you must disclose within 20 business days of becoming aware of it. If the difference is AED 10,000 or less, you can usually fix it in a later return. If you overpaid, a disclosure is optional. Two 2026 changes matter most: the Tax Procedures Law time limits were rewritten from 1 January, and VAT penalties moved to a monthly model on 14 April.",
      },
      {
        type: "checklist",
        heading: "Disclosure or Next Return: The Rules at a Glance",
        items: [
          "Tax underpaid by more than AED 10,000: voluntary disclosure within 20 business days of becoming aware of the error",
          "Tax underpaid by AED 10,000 or less: correct it in a later return; disclose within 20 business days only if no return is available, for example after deregistration",
          "Refund application overstated: voluntary disclosure within 20 business days, unless the error came from a return or assessment, in which case the same AED 10,000 test applies",
          "Tax overpaid or refund understated: disclosure is optional, within the five-year limit",
          "Error with no effect on the tax due: corrected through a tax return, except in cases where the FTA requires a disclosure",
          "More than five years since the end of the tax period: no disclosure possible, except one linked to a refund application the FTA has not yet decided",
        ],
      },
      {
        type: "text",
        heading: "How the 20 Business Days and the AED 10,000 Test Work",
        body: "The 20 business days run from the date you become aware of the error, not from the date of the return, and the disclosure form asks you for that date. The AED 10,000 test looks at the tax difference in the return that was wrong. Where it is AED 10,000 or less, you correct it in the return for the period in which you found the error, or in an earlier period's return whose deadline has not yet passed, whichever comes first. If you spot a problem before the original return's due date and correct it by then, no penalty applies, because the monthly penalty only starts the day after the return was due.",
      },
      {
        type: "text",
        heading: "How It Works for Corporate Tax",
        body: "Corporate Tax uses the same Executive Regulation, applied to an annual return. The FTA's Corporate Tax Returns guide allows an understatement of AED 10,000 or less from a previous period to be corrected in a later return, and several errors can be combined if their total stays within AED 10,000. The return has a question for reporting such an adjustment. Anything larger needs a voluntary disclosure within 20 business days. Corporate Tax penalties come from Cabinet Decision No. 75 of 2023, which has used the 1% monthly model since 1 August 2023, so nothing changed for Corporate Tax on 14 April 2026. For calendar-year companies, the first returns (for 2024) were due by 30 September 2025, so an error in one of those disclosed today is already more than a year into the monthly penalty.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?w=1400&q=80&auto=format&fit=crop",
        alt: "A calculator on a table next to a laptop",
        caption: "Most disclosures start with a reconciliation: the ledger, the invoices and what was actually reported in each box.",
      },
      {
        type: "checklist",
        heading: "Error Penalties in Force Since 14 April 2026",
        items: [
          "Incorrect return: AED 500, not charged if the return is corrected by its filing deadline (and, for VAT, not where the disclosure leaves the tax due unchanged)",
          "Disclosure before any audit notice: 1% of the tax difference for each month or part month, from the day after the return was due until you submit the disclosure",
          "No disclosure before an audit notice: fixed 15% of the tax difference, plus 1% a month until you disclose or, if you never do, until the FTA issues its assessment",
          "Late payment: 14% a year, charged monthly on unpaid tax; tax shown in a disclosure is due 20 business days after you submit it",
          "Legal basis: Cabinet Decision No. 40 of 2017 as amended by Cabinet Decision No. 129 of 2025 for VAT; Cabinet Decision No. 75 of 2023 for Corporate Tax",
        ],
      },
      {
        type: "text",
        heading: "What the Penalties Look Like in Practice",
        body: "A disclosure made after the deadline that changes the tax can attract both the AED 500 and the 1% a month. Take a VAT quarter ending 31 March 2026, return due 28 April 2026, with an AED 40,000 underpayment disclosed on 15 October 2026. That is six months or part months, so roughly AED 2,400 plus AED 500, and no late payment penalty if the tax is paid within 20 business days. Had an audit notice arrived first, the fixed 15% would add AED 6,000. EmaraTax calculates the exact figure. The pre-April 2026 position for VAT was different: a disclosure cost 5% to 40% of the tax difference depending on how long the error had stood, an error not disclosed before an audit notice cost 50% plus 4% a month, and late payment ran at 2% plus 4% a month up to 300%. The new model is far cheaper once an audit starts, but for an error four or five years old, 1% a month now exceeds the old 40% ceiling. No separate transitional rule appears in the published consolidated penalty decision or in the FTA's announcements, so for errors in returns due before 14 April 2026, check how the penalty was calculated before you pay.",
      },
      {
        type: "text",
        heading: "Time Limits After the 2026 Tax Procedures Amendments",
        body: "Federal Decree-Law No. 17 of 2025 rewrote the time limits in the Tax Procedures Law from 1 January 2026. Under the new Article 46, the FTA generally cannot audit or issue an assessment more than five years after the end of the relevant tax period, and you cannot submit a voluntary disclosure after that point either. There are exceptions, and advisers do not all read the amended extension rules the same way, so check the dates for the specific period. Where a refund is claimed towards the end of the five-year period, the FTA has two years from the claim to audit it. A disclosure can still be made after five years if it relates to a refund application the FTA has not yet decided. Tax evasion carries a 15-year limit. Refunds are capped too: a credit balance must generally be claimed within five years of the end of the tax period in which it arose, or the right is lost.",
      },
      {
        type: "alert",
        heading: "Older Credit Balances: Window Closes 31 December 2026",
        body: "Article 3 of Federal Decree-Law No. 17 of 2025 gives a one-off window. If your five-year period to reclaim a credit balance had expired by 1 January 2026, or expires during 2026, you can still apply for a refund or use the balance against liabilities until 31 December 2026. A disclosure linked to that application can follow within two years, as long as the FTA has not decided it, and the FTA has two years from the application to audit it.",
      },
      {
        type: "numbered",
        heading: "Submitting a Disclosure on EmaraTax",
        items: [
          { title: "Quantify the error first", body: "Work out the tax period, the affected return boxes, the corrected figure for each and the tax difference. Note the date you first identified the error; if there are several, use the earliest." },
          { title: "Start from the filed return", body: "In EmaraTax, open the VAT or Corporate Tax section for the taxable person, find the filed return for the affected period and start the voluntary disclosure from that return." },
          { title: "Enter corrected totals, not differences", body: "The form shows the figures as originally reported. Enter the corrected total for each affected box and leave the rest unchanged. The system works out the difference." },
          { title: "Attach a supporting letter and evidence", body: "The letter sets out the background, describes each error, explains why you are disclosing and shows which boxes change. Back it with invoices, credit notes, import declarations or reconciliations." },
          { title: "Submit and pay within 20 business days", body: "Confirm the declaration and submit. Any additional tax is due 20 business days after submission, after which the late payment penalty applies." },
          { title: "Deal with what follows", body: "The FTA reviews the disclosure and may ask for more information, and penalties appear in your EmaraTax account. Update your ledgers, and issue any tax credit note or replacement invoice the fix requires." },
        ],
      },
      {
        type: "checklist",
        heading: "Situations That Usually Need a Disclosure",
        items: [
          "A sale wrongly zero-rated, such as an export that did not meet the conditions: issue a tax credit note and a new 5% invoice, and disclose for the original period if the VAT exceeds AED 10,000",
          "Input tax over-claimed, including VAT recovered without a valid tax invoice or on purchases that do not qualify",
          "A sale reported in a later period than the one it belonged to, which leaves the earlier return understated",
          "Standard-rated sales reported under the wrong emirate, or zero-rated or exempt supplies misreported. FTA Decision No. 8 of 2024 requires a disclosure here even though the tax does not change",
          "Reverse charge on imported services left out. With full input tax recovery there is no tax difference and, since 1 January 2026, this can generally go through a return; where recovery is restricted, the AED 10,000 test applies",
          "A Corporate Tax return that omitted income, deducted a non-deductible expense or claimed a relief without meeting its conditions, with a tax effect above AED 10,000",
        ],
      },
      {
        type: "checklist",
        heading: "Common Mistakes",
        items: [
          "Putting a correction of more than AED 10,000 into the next return instead of disclosing it. The wrong method can still lead to penalties at audit",
          "Entering only the difference on the EmaraTax form instead of the corrected box totals",
          "Disclosing on time but paying after the 20 business days",
          "Waiting for the FTA to raise it, which adds the fixed 15%",
          "Correcting the return but not the paperwork, so the ledgers no longer reconcile to what was filed",
        ],
      },
      {
        type: "numbered",
        heading: "Frequently Asked Questions",
        items: [
          { title: "Do I have to disclose an error that means I overpaid?", body: "No, it is optional. If you want the money back, act within five years of the end of the tax period, because disclosures and refund claims both stop there." },
          { title: "Can I still disclose after the FTA has notified a tax audit?", body: "Yes, and it usually makes sense, because the 1% monthly penalty stops when you submit. The fixed 15% of the tax difference still applies once the audit notice has been issued." },
          { title: "Can the FTA waive the penalties?", body: "There is no automatic waiver. You can apply through the FTA's service for instalment, waiver and refund of administrative penalties, and each request is decided on its own facts." },
          { title: "My error is from 2021. Can I still disclose it?", body: "Only within the five-year limit. A VAT quarter ending 31 December 2021, for example, can no longer be disclosed after 31 December 2026, unless the disclosure relates to a refund application the FTA has not yet decided." },
        ],
      },
      {
        type: "alert",
        heading: "Check the Position Before You Act",
        body: "This guide reflects the Tax Procedures Law, its Executive Regulation, the penalty decisions and FTA guidance as they stood on 1 November 2026. The FTA can specify further cases that need a disclosure, and these rules have changed more than once in the past year. It is general information rather than advice on your particular facts, so confirm the current position before you file.",
      },
      {
        type: "cta",
        heading: "Talk Through an Error Before You Disclose",
        body: "Marifah Tax Advisory can review the error with you, work out if it needs a voluntary disclosure or can go in a later return, estimate the tax difference and the likely penalty, and prepare the disclosure and supporting letter for EmaraTax. Contact us for a free consultation.",
      },
    ],
  },

  // ── NEW TRANSFER PRICING IN THE UAE FOR SMES (2026-11-01) ──────────────
  {
    title: "Transfer Pricing in the UAE for SMEs: Related Parties and Disclosure",
    excerpt: "If you own several companies, pay yourself or relatives a salary, or lend between your businesses, UAE transfer pricing rules apply to you. Here is what arm's length means, who is related or connected, and what to file.",
    category: "Corporate Tax",
    readTime: "9 min read",
    updated: "2026-11-01",
    cover: {
      src: "https://images.unsplash.com/photo-1721804222969-e15023a77eef?w=1400&q=80&auto=format&fit=crop",
      alt: "Aerial view of office towers in Business Bay, Dubai",
      credit: "Photo: Nelemson Guevarra on Unsplash",
    },
    sections: [
      {
        type: "text",
        heading: "The Short Answer for SME Owners",
        body: "Transfer pricing is not only for multinationals. Under the UAE Corporate Tax Law (Federal Decree-Law No. 47 of 2022), dealings with related parties must be priced as if between strangers, and payments to owners, directors, officers or their relatives are deductible only up to market value. That covers your own salary, loans between your companies, rent paid to a relative and a free zone company selling to its mainland sister. Size does not switch the rules off. It changes the paperwork. For most SMEs the job is to set prices you can justify, keep the evidence, and file the transfer pricing disclosure with the Corporate Tax return if you cross the thresholds.",
      },
      {
        type: "text",
        heading: "The Arm's Length Principle in Plain Words",
        body: "Article 34 sets one test: the terms must match what two independent businesses would agree in similar circumstances. If they do not, the Federal Tax Authority (FTA) can adjust your taxable income. The law lists five methods: comparable uncontrolled price, resale price, cost plus, transactional net margin and profit split. For a small business, the best evidence is often what you charge or pay unrelated parties for the same thing. The FTA's Transfer Pricing Guide adds two points owners miss. The lack of a written agreement does not mean there is no transaction, and anything provided free or below market value is still tested. The rule also covers dealings inside the UAE, including free zone to mainland.",
      },
      {
        type: "checklist",
        heading: "Who Counts as a Related Party (Article 35)",
        items: [
          "Relatives: individuals related up to the fourth degree of kinship or affiliation, which reaches first cousins and includes relatives by marriage",
          "You and a company: you own 50% or more, alone or with your relatives, or you control it",
          "Two companies: one owns 50% or more of the other or controls it, or the same person and their related parties own 50% or more of both or control both. Family sister companies usually fall here",
          "Control: 50% or more of the votes, board seats or profits, or the ability to determine or significantly influence how the business is run",
          "Other links: a business and its branch, partners in the same unincorporated partnership, and parties to a trust or foundation",
        ],
      },
      {
        type: "text",
        heading: "Who Counts as a Connected Person (Article 36)",
        body: "Connected persons are the people behind a company: any individual who owns an interest in it, directly or indirectly, or controls it; any director or officer; and any related party of those people. There is no 50% test here, so a 10% individual shareholder is connected, and so is a director's brother. Public Clarification CTP010 (April 2026) says a director sits on the board or an equivalent body, and a job title alone is not enough. An officer has authority to plan, direct and control the business or bind it to agreements. A general manager usually qualifies; someone who only carries out others' decisions usually does not. A person who is both related and connected, such as a 60% owner, is treated as a related party.",
      },
      {
        type: "text",
        heading: "The Market Value Rule and Its Exceptions",
        body: "A payment or benefit to a connected person is deductible only to the extent it matches market value and is incurred wholly and exclusively for the business (Article 36(1)). The excess is added back to taxable income. Article 36(6) disapplies this for listed companies, businesses under the regulatory oversight of a competent UAE authority, and anyone named in a Cabinet decision. If the person is also a related party, Article 34 still applies.",
      },
      {
        type: "text",
        heading: "Filing the Transfer Pricing Disclosure Form",
        body: "Article 55(1) lets the FTA require a disclosure of related party and connected person transactions with the Corporate Tax return, due nine months after the tax period ends. The thresholds come from the FTA's Corporate Tax Returns guide of November 2024, not the law.",
      },
      {
        type: "checklist",
        heading: "Disclosure Thresholds and What You Report",
        items: [
          "Related party trigger: related party transactions in the period exceed AED 40 million, at market value or financial statement value",
          "Category trigger: once over AED 40 million, report each category above AED 4 million (goods, services, intellectual property, interest, assets, liabilities, other)",
          "Connected person trigger: payments or benefits to one connected person, counted with that person's related parties, exceed AED 500,000",
          "Dividends: excluded from the thresholds and not reported",
          "What you enter: transaction value, arm's length or market value, method and any adjustment, with no netting",
          "Downward adjustments: under Public Clarification CTP011 (15 July 2026), self-assessed without prior FTA approval, but every adjusted transaction must be disclosed whatever its value",
        ],
      },
      {
        type: "alert",
        heading: "Loan Balances Count Towards the Thresholds",
        body: "Assets and liabilities are reporting categories, so cash moved between your companies counts, not just the interest. A company that keeps moving money to and from its sister companies can pass AED 40 million while trading very little.",
      },
      {
        type: "text",
        heading: "Master File and Local File: Who Needs Them",
        body: "Ministerial Decision No. 97 of 2023 requires both files only if your revenue is AED 200 million or more, or you belong to a multinational group with consolidated revenue of AED 3.15 billion or more. Per the FTA's guide, a UAE group with no business outside the country needs no Master File, though a member over AED 200 million still needs a Local File. That file must cover dealings with non-residents, exempt persons, Small Business Relief companies and UAE companies taxed at a different rate, such as a Qualifying Free Zone Person, but not other UAE companies taxed at the same rate. Files are due within 30 days of an FTA request (Article 55(3)). Any business asked for evidence supporting its related party pricing also has 30 days (Article 55(4)). Corporate Tax records must be kept for seven years (Article 56).",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1681505504714-4ded1bc247e7?w=1400&q=80&auto=format&fit=crop",
        alt: "Two businessmen at a desk going through papers before signing an agreement",
        caption: "Written terms agreed before money moves between your companies make the arm's length case much easier to show.",
      },
      {
        type: "numbered",
        heading: "Common SME Situations",
        items: [
          { title: "Paying yourself a salary", body: "Deductible to the extent it matches what the company would pay an unrelated person for the same role. Keep a job description and market evidence such as salary surveys. At 50% ownership or more you are also a related party, and CTP010 applies the related party rules." },
          { title: "Family members on the payroll", body: "Your children, parents and siblings, and your spouse's parents and siblings, are connected persons of your company. Paying them is fine if they do real work at a fair rate. A salary with no duties behind it is unlikely to pass the wholly and exclusively test." },
          { title: "Interest-free loans between sister companies", body: "The FTA's guide follows the OECD approach, pricing a loan by what comparable borrowers pay independent lenders, so the FTA can add interest to the lender's income. Invoices left unpaid well past normal terms can be treated as a loan. If the lender includes arm's length interest in its own return, the borrower may self-assess a matching deduction under CTP011, with benchmarking and evidence of the lender's adjustment." },
          { title: "Lending to your company personally", body: "The FTA's July 2026 summary of private clarifications indicates interest paid to an individual can be deductible on arm's length terms, subject to the interest limitation rules. Private clarifications bind only the applicant." },
          { title: "Shared office and staff", body: "Recharge on a basis you can explain, such as floor area or time spent, and keep the workings. For routine low value-adding support services, the FTA's guide accepts cost plus 5% without a detailed benchmarking study." },
          { title: "Management fees", body: "Deductible only if your company receives a service it would pay an independent provider for, or would otherwise do itself (the benefit test). Keep reports, minutes and time records." },
          { title: "Free zone company and mainland sister", body: "Overpricing what a free zone company taxed at 0% charges a mainland sister taxed at 9% shifts profit to the lower rate, the pattern these rules exist to catch. Mainland income is qualifying for a Qualifying Free Zone Person only in limited cases." },
        ],
      },
      {
        type: "text",
        heading: "Small Business Relief and Qualifying Free Zone Persons",
        body: "Small Business Relief disapplies Article 55, so no disclosure form and no Master File or Local File (Article 21(2)). It does not disapply Article 34: the FTA's guide says related party dealings must still be at arm's length. Ministerial Decision No. 131 of 2026 extended the relief to tax periods ending on or before 31 December 2029, with the AED 3 million limit unchanged. Splitting one business across companies to stay under that limit can be treated as tax avoidance under Article 50 (Ministerial Decision No. 73 of 2023, Article 6). Qualifying Free Zone Persons cannot elect the relief, and Article 18(1)(d) makes compliance with Articles 34 and 55 a condition of the 0% rate. Failing it costs the status for that tax period and the next four. The FTA's July 2026 summary of private clarifications indicates that non-arm's length prices in the accounts do not automatically cost the status if corrected through adjustments in the return.",
      },
      {
        type: "text",
        heading: "Advance Pricing Agreements Are Now Available",
        body: "An Advance Pricing Agreement fixes with the FTA how future related party transactions will be priced. Article 59 always allowed them, and the FTA opened domestic unilateral applications in December 2025 under its APA guide, with cross-border agreements announced to follow later. The indicative threshold is AED 100 million of covered transactions per tax period, the fee is AED 30,000, and an agreement covers three to five future periods. Few SMEs qualify, but the guide names free zone and mainland transactions as suitable cases, which shows where the FTA is looking.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?w=1400&q=80&auto=format&fit=crop",
        alt: "Stacks of paper documents and file folders on shelves",
        caption: "For most small groups, the transfer pricing file is ordinary paperwork: agreements, invoices, payroll records and a note on how each price was set.",
      },
      {
        type: "checklist",
        heading: "What to Keep on File",
        items: [
          "A list of related parties and connected persons, with ownership percentages and family links",
          "A written agreement for each intercompany loan, recharge, service or lease, signed before it starts",
          "A note on how each price was set and the market evidence behind it",
          "Salary evidence for owners, directors and relatives",
          "Workings for shared cost allocations",
          "A reconciliation between your ledgers and the disclosure form",
        ],
      },
      {
        type: "checklist",
        heading: "Common Mistakes",
        items: [
          "Assuming transfer pricing only matters for cross-border groups",
          "Forgetting relatives, minority owners and directors",
          "Leaving interest-free loan balances out of the threshold count",
          "Booking recharges or management fees at year end with no agreement",
          "Believing Small Business Relief removes the arm's length rule",
        ],
      },
      {
        type: "numbered",
        heading: "Frequently Asked Questions",
        items: [
          { title: "Does transfer pricing apply if all my companies are in the UAE?", body: "Yes. Article 34 covers domestic transactions, including free zone to mainland. Documentation can be lighter, since a Local File need not cover UAE companies taxed at the same rate." },
          { title: "My revenue is below AED 3 million. What do I need to do?", body: "If you qualify for and elect Small Business Relief, you skip the disclosure form and the files, but related party prices should still be at arm's length, with evidence to show it." },
          { title: "Can I pay my son or daughter a salary from my company?", body: "Yes, for real work. As your relative they are a connected person, so the salary is deductible up to market value; any excess is added back." },
          { title: "Do I have to charge interest when one of my companies lends to another?", body: "The arm's length principle points that way. In a Tax Group, transactions between the parent and its subsidiaries are eliminated (Article 42), but a group needs a resident parent company holding at least 95% of each member, and Qualifying Free Zone Persons cannot join." },
          { title: "How quickly must I produce documents if the FTA asks?", body: "Within 30 days unless the FTA allows longer, for the Master File and Local File and for any other evidence supporting your pricing." },
        ],
      },
      {
        type: "alert",
        heading: "Position as of 1 November 2026",
        body: "This article reflects the Corporate Tax Law, Ministerial Decisions and FTA guidance available on 1 November 2026. The FTA is still adding to its transfer pricing guidance and thresholds can change, so check the FTA website before you file. It is general information, not advice on your own group structure.",
      },
      {
        type: "cta",
        heading: "Not Sure How Your Companies Should Price Their Dealings?",
        body: "Marifah Tax Advisory can map your related parties and connected persons, review salaries, loans and recharges between your companies, and help you prepare the disclosure and supporting file for your Corporate Tax return. Book a free consultation to talk it through.",
      },
    ],
  },

  // ── NEW CORPORATE TAX DEREGISTRATION IN THE UAE (2026-11-01) ───────────
  {
    title: "Corporate Tax Deregistration in the UAE: Deadline, Steps and Penalty",
    excerpt: "Closing a company or stopping business for good means applying to deregister from Corporate Tax within 3 months. Here is what counts as cessation, what the FTA needs before it approves, the late penalty and the EmaraTax steps.",
    category: "Corporate Tax",
    readTime: "9 min read",
    updated: "2026-11-01",
    cover: {
      src: "https://images.unsplash.com/photo-1498811008858-d95a730b2ffc?w=1400&q=80&auto=format&fit=crop",
      alt: "A \"Sorry, we're closed\" sign hanging on a glass shop door",
      credit: "Photo: Tim Mossholder on Unsplash",
    },
    sections: [
      {
        type: "text",
        heading: "What Corporate Tax Deregistration Is and Who Must Apply",
        body: "Corporate Tax deregistration is the application that closes your Corporate Tax registration with the Federal Tax Authority (FTA). It does not happen automatically when you cancel a trade licence or stop trading. Under Article 52 of Federal Decree-Law No. 47 of 2022, anyone holding a Corporate Tax registration number must apply to deregister when the business ceases, whether by dissolution, liquidation or otherwise, and FTA Decision No. 6 of 2023 gives you 3 months to do it. If you are closing a mainland or free zone company, winding up a sole establishment or giving up freelance work for good, this applies to you. If the business is just quiet or dormant, it usually does not. You stay registered and keep filing returns.",
      },
      {
        type: "checklist",
        heading: "The Rules at a Glance",
        items: [
          "Legal basis: Article 52 of Federal Decree-Law No. 47 of 2022 and FTA Decision No. 6 of 2023",
          "Deadline for a company: 3 months from the date the entity ceases to exist, the business ceases, or it is dissolved or liquidated",
          "Deadline for an individual: 3 months from the date the business activity ceased",
          "Condition for approval: every return filed, including the final period, and all tax and penalties paid",
          "FTA fee: none",
          "FTA processing time: 40 working days from receipt of a complete application",
          "Late application penalty: AED 1,000, then AED 1,000 each month, capped at AED 10,000",
        ],
      },
      {
        type: "text",
        heading: "What Counts as the Date of Cessation",
        body: "Everything hangs on this date. It ends your final tax period, starts the 3-month clock and, under Article 52(3), becomes the date your registration ends unless the FTA sets another date. For a company, FTA Decision No. 6 of 2023 lists several events: the date the entity ceases to exist, cessation of the business, dissolution, liquidation or otherwise. In an FTA worked example, a company with a calendar financial year that stopped trading on 2 July 2024 had a tax period from 1 January to 2 July 2024 and until 2 October 2024 to apply. For a closure or liquidation, the FTA asks for financial statements up to and including the licence cancellation date, so that is usually the date the paperwork is built around. One trap: Public Clarification CTP003 says an expired licence, on its own, is not cessation. If trading stopped long before the licence was cancelled, agree which date applies before the closing accounts are prepared, because the accounts, the final return and the application must all use the same one.",
      },
      {
        type: "text",
        heading: "The Final Tax Period and the Final Return",
        body: "Your last tax period runs from the start of the financial year to the date of cessation. Article 52(2) says you will not be deregistered until you have filed every return due, including the return for the period up to and including the date of cessation, and paid all Corporate Tax and administrative penalties. Here the two timelines pull against each other. A return is normally due 9 months after the period ends (Article 53), but the deregistration application is due within 3 months. So you apply on time and file the final return as soon as the closing accounts are ready. The FTA's EmaraTax manual says it may ask for the final return before approving. In an FTA example, a company that ceased on 31 December 2025 and applied on 3 January 2026 had filed returns only up to 2024, so its 2025 return had to be filed and any tax paid before the FTA would approve. A company with no income still files.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1625225233840-695456021cde?w=1400&q=80&auto=format&fit=crop",
        alt: "A calculator and a black pen lying beside a blank sheet of paper on a desk",
        caption: "Closing accounts up to the cessation date support both the final return and the deregistration application. Photo: Mediamodifier on Unsplash",
      },
      {
        type: "alert",
        heading: "The Late Deregistration Penalty Did Not Change in 2026",
        body: "Missing the 3-month deadline costs AED 1,000, then a further AED 1,000 on the same date each month the application is still outstanding, up to AED 10,000. This comes from Cabinet Decision No. 75 of 2023, the Corporate Tax penalty schedule. Cabinet Decision No. 129 of 2025, in force since 14 April 2026, reworked the penalties in Cabinet Decision No. 40 of 2017, which covers the Tax Procedures Law, VAT and Excise Tax. It did not amend the Corporate Tax schedule, so this penalty is unchanged. It applies even when no tax is due, and the FTA's waiver initiative for late registration penalties does not cover it.",
      },
      {
        type: "text",
        heading: "When the FTA Acts on Its Own, and When It Will Not Approve",
        body: "Article 52(4) lets the FTA deregister a person that has not complied with the deregistration rules, at its discretion and based on the information it holds. The effective date is the later of the last day of the tax period in which it became apparent to the FTA that all returns were filed and all tax and penalties paid, or the date the person ceases to exist. That is not a shortcut. The returns and payments are still required, and the application was still not made on time. If you apply while returns or payments are outstanding, the FTA will not approve until they are cleared, and its user manual notes that another pending application, such as a change of tax period, will also hold things up. If the FTA asks for more information, you have 60 calendar days to resubmit or the application may be rejected.",
      },
      {
        type: "checklist",
        heading: "Documents the FTA Asks For",
        items: [
          "Liquidation, bankruptcy or closure: licence cancellation document, plus financial statements up to and including the licence cancellation date",
          "Sale of the business: sale agreement, licence cancellation or amended licence in the new owner's name, plus financial statements up to that date",
          "Merger: merger agreement, licence cancellation or amendment, plus financial statements up to the merger date",
          "Other reasons: re-domiciliation, change of place of effective management and closure of a permanent establishment each have their own list on the FTA's service page",
        ],
      },
      {
        type: "numbered",
        heading: "How to Apply on EmaraTax",
        items: [
          { title: "Clear the backlog first", body: "File any outstanding returns and pay what is due, and have the licence cancellation document (or other evidence for your reason) and the closing financial statements ready." },
          { title: "Open your Corporate Tax registration", body: "Log in to EmaraTax, open the taxable person's dashboard and choose Deregister from the actions menu next to the active Corporate Tax registration." },
          { title: "Enter the reason and date of cessation", body: "Entity details are pre-filled and cannot be edited here. If something is wrong, it must be corrected through a separate amendment application." },
          { title: "Upload, declare and submit", body: "Attach the documents for your reason, tick the declaration and submit. Keep the reference number. There is no FTA fee." },
          { title: "Follow up until the certificate is issued", body: "The FTA aims to process a complete application within 40 working days, and may take up to a further 40 working days after you answer a request for information. Once approved, the registration shows as deregistered and the certificate can be downloaded from EmaraTax." },
        ],
      },
      {
        type: "checklist",
        heading: "Special Cases",
        items: [
          "Freelancers and sole establishments: deregister only when all business activity has stopped. Turnover falling below AED 1 million is not a reason; you stay registered and file a nil return",
          "Companies that never traded: a company stays a taxable person while it exists, so returns are due until it ceases. One that never registered but closed after its first tax period began must still register, file and then deregister",
          "Free zone companies: the same 3-month rule applies. A Qualifying Free Zone Person must prepare audited financial statements, so plan for an audit of the final period",
          "Tax group members: the parent company files the group's return, and a member leaves the group either on an application by the parent company and the member or when it stops meeting the group conditions, so talk to the parent company before closing a member",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1708361089093-beef4c4584e7?w=1400&q=80&auto=format&fit=crop",
        alt: "The Dubai skyline at twilight with the Burj Khalifa and surrounding towers",
        caption: "Mainland or free zone, the Corporate Tax deregistration deadline is the same 3 months. Photo: Fabien Bellanger on Unsplash",
      },
      {
        type: "numbered",
        heading: "The Order to Do Things in When Closing a Company",
        items: [
          { title: "Keep filing while the closure runs", body: "The company is a taxable person until it ceases, so keep Corporate Tax and VAT returns current throughout." },
          { title: "Start VAT deregistration early", body: "It is a separate application with its own deadline counted in business days, much shorter than the Corporate Tax window. Closing one registration does not close the other." },
          { title: "Complete the licence cancellation", body: "Ask your licensing authority early what it needs from the tax side, since the FTA in turn asks for the licence cancellation document." },
          { title: "Prepare closing financial statements", body: "Draw them up to the licence cancellation date or other cessation date, audited if the company is a Qualifying Free Zone Person or its revenue for the period exceeds AED 50 million." },
          { title: "Apply, then file the final return", body: "Apply within 3 months of cessation, then file the final return and settle any tax and penalties so the FTA can approve." },
          { title: "Keep the records", body: "Article 56 requires records to be kept for 7 years after the end of the tax period they relate to, even once the company is closed." },
        ],
      },
      {
        type: "checklist",
        heading: "Common Mistakes",
        items: [
          "Assuming licence cancellation closes the Corporate Tax registration",
          "Waiting for the 9-month return deadline before applying to deregister",
          "Treating an expired licence or a quiet year as cessation",
          "Financial statements that stop short of the licence cancellation date",
          "Overlooking an older return or unpaid penalty, which blocks approval",
          "Missing the 60-day window to answer an FTA request for information",
        ],
      },
      {
        type: "numbered",
        heading: "Frequently Asked Questions",
        items: [
          { title: "Does cancelling my trade licence cancel my Corporate Tax registration?", body: "No. The registration stays active until the FTA deregisters you, either on your application or at its own discretion under Article 52(4). That discretion does not remove your duty to apply within 3 months." },
          { title: "My company is dormant. Can I deregister it?", body: "Generally not while it still exists. A company set up under UAE law, including in a free zone, is a taxable person whether or not it trades, so it keeps filing returns until it is closed and then applies within 3 months." },
          { title: "Is there an FTA fee?", body: "No, the FTA lists the service as free of charge. Any unpaid tax and penalties must still be settled before approval." },
          { title: "I missed the 3-month deadline. What now?", body: "Apply as soon as you can. The penalty starts at AED 1,000 and grows by AED 1,000 a month up to AED 10,000, so waiting only adds to it. File any outstanding returns at the same time." },
          { title: "My freelance turnover fell below AED 1 million. Should I deregister?", body: "No. FTA guidance says a natural person deregisters only after ceasing all business activities. Until then you stay registered and file a nil return while turnover is below the threshold." },
        ],
      },
      {
        type: "alert",
        heading: "Check the Position Before You Act",
        body: "This guide reflects the Corporate Tax Law, the relevant Cabinet and FTA decisions and FTA guidance as they stood on 1 November 2026. The FTA updates its guides, manuals and service pages regularly, so confirm the current requirements on EmaraTax before you file. It is general information, not advice on your particular closure.",
      },
      {
        type: "cta",
        heading: "Closing a Company or Winding Down a Business?",
        body: "Marifah Tax Advisory can work through the cessation date with you, check that every return and penalty is cleared, prepare the final Corporate Tax return and handle the deregistration application on EmaraTax. Book a free consultation to talk through your closure.",
      },
    ],
  },

  // ── NEW VAT DEREGISTRATION IN THE UAE (2026-11-01) ─────────────────────
  {
    title: "VAT Deregistration in the UAE: Deadlines, Penalties and Steps",
    excerpt: "Stopped trading, or taxable supplies under AED 187,500 for the last 12 months? You must apply to cancel your VAT registration. When it is mandatory or optional, the deadline, the penalty and the EmaraTax steps.",
    category: "VAT",
    readTime: "9 min read",
    updated: "2026-11-01",
    cover: {
      src: "https://images.unsplash.com/photo-1768069794826-a31af289449f?w=1400&q=80&auto=format&fit=crop",
      alt: "Dubai Marina skyline at sunset with high-rise towers",
      credit: "Photo: Nejc Soklič on Unsplash",
    },
    sections: [
      {
        type: "text",
        heading: "What VAT Deregistration Means and Who Must Do It",
        body: "VAT deregistration cancels your Tax Registration Number (TRN) with the Federal Tax Authority (FTA). It is mandatory if you stop making taxable supplies, or if your taxable supplies over the last 12 months fall below AED 187,500, the voluntary registration threshold. Between AED 187,500 and AED 375,000, the mandatory threshold, it is your choice. You apply on EmaraTax and there is no fee. Where it is mandatory, the Executive Regulation gives you 20 business days from the triggering event, and a late application costs AED 1,000 plus AED 1,000 a month, capped at AED 10,000. Approval is only half the job. The FTA issues the deregistration certificate once your final return is approved and all tax and penalties are paid, and that return can include output VAT on stock and assets you still hold.",
      },
      {
        type: "checklist",
        heading: "When Deregistration Is Mandatory",
        items: [
          "You have stopped making taxable supplies and do not expect to make any in the next 12 months, for example because the company has ceased trading, is being liquidated or has sold its business (Article 21(1)(a) of Federal Decree-Law No. 8 of 2017 and Article 14(2)(a) of the Executive Regulation)",
          "Your supplies are now only exempt or outside the scope of UAE VAT. Neither counts as a taxable supply, and the FTA has a specific deregistration reason for this case",
          "Your taxable supplies (and taxable expenses) over the previous 12 months were below AED 187,500, and neither is expected to exceed AED 187,500 in the next 30 days (Article 21(1)(b) of the Decree-Law and Article 14(2)(b) of the Executive Regulation)",
        ],
      },
      {
        type: "text",
        heading: "When Deregistration Is Optional",
        body: "If your taxable supplies over the last 12 months were below AED 375,000 but at least AED 187,500, you may apply (Article 22 of the Decree-Law). The FTA wants its turnover template and a signed, stamped declaration that you will not exceed the threshold in the next 30 days. Deregistration then takes effect from the date you request, or your application date if you leave it blank, unless the FTA sets another date (Article 14(5) of the Executive Regulation). If you registered voluntarily, you cannot apply within 12 months of your registration date (Article 23). Do the sums first. You stop charging VAT, which helps if you sell to consumers, but you lose input VAT recovery, may owe output VAT on assets you keep, and must register again if you cross the mandatory threshold later.",
      },
      {
        type: "alert",
        heading: "20 or 30 Business Days?",
        body: "Article 14(1) of the Executive Regulation (Cabinet Decision No. 52 of 2017, as amended) sets the deadline at 20 business days. The FTA's service page, updated in September 2026, says 30. We have found no amendment making that change. Federal Decree-Law No. 16 of 2025 left the deregistration articles alone, and neither Cabinet Decision No. 100 of 2025 (tax invoices and credit notes) nor Cabinet Decision No. 149 of 2026, most of which applies from 1 October 2026, amended Article 14. Work to 20 business days, counted from when taxable supplies stop or the threshold test is met, not from the licence cancellation.",
      },
      {
        type: "checklist",
        heading: "Penalties for Applying Late",
        items: [
          "Late deregistration application: AED 1,000 once the deadline is missed, then a further AED 1,000 on the same date each month, up to AED 10,000",
          "Change on 14 April 2026: None for this penalty. Cabinet Decision No. 129 of 2025 kept the amounts set by Cabinet Decision No. 49 of 2021",
          "Before 28 June 2021: A flat AED 10,000 under the original Cabinet Decision No. 40 of 2017, which is why older guides still quote that figure",
          "Final return filed late: AED 1,000 the first time, AED 2,000 for a repeat within 24 months",
          "Tax paid late: 14% a year, charged monthly on the unpaid amount from the day after the due date",
        ],
      },
      {
        type: "text",
        heading: "What Happens After Approval",
        body: "The FTA deregisters you from the last day of the tax period in which you met the conditions, or another date it decides (Article 14(3)), and notifies you of that date within 10 business days of its decision (Article 14(6)). Say you stopped trading in May and file quarterly for April to June. The effective date would normally be 30 June, and the final return and payment are due within 28 days of the end of that final tax period, so by 28 July. The certificate appears in EmaraTax only once that return is approved and all outstanding tax and penalties are settled. Until the FTA approves your application, keep filing every return that falls due. If the final return shows a refund, claim it: since 1 January 2026 the Tax Procedures Law sets a five-year limit for credit balance refund requests.",
      },
      {
        type: "text",
        heading: "Output VAT on Stock and Assets You Keep",
        body: "This is easy to overlook. Goods and services forming part of your business assets are treated as supplied by you immediately before deregistration, and the VAT goes into the final return (Article 11 of the Decree-Law and Article 14(8) of the Executive Regulation). Think unsold stock, equipment, furniture and IT hardware still on the books. The value is the cost you incurred, not a selling price (Article 37). There is no deemed supply where you never recovered input VAT on the item (Article 12), and the rule does not apply where a legal representative carries on the business. Before applying, list what the business owns and which purchases you claimed input VAT on.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1750277120336-ca98ec2e2f90?w=1400&q=80&auto=format&fit=crop",
        alt: "Person signing a document with a pen",
        caption: "The final return, not the approval, is what closes your VAT file. Photo: Haim Charbit on Unsplash",
      },
      {
        type: "numbered",
        heading: "How to Apply on EmaraTax",
        items: [
          { title: "Confirm the reason and the trigger date", body: "That date drives both the 20-business-day deadline and the effective date of deregistration." },
          { title: "Prepare the turnover template", body: "The FTA asks for its financial turnover template covering taxable income and expenses from the date of actual registration. Reconcile it to the returns you have filed before uploading it." },
          { title: "Open the deregistration form", body: "Log in to EmaraTax with UAE Pass, click View on your taxable person account, then under VAT choose Actions and De-Register." },
          { title: "Select the reason and upload documents", body: "Attach the documents for your reason, each up to 5 MB (PDF, Excel, Word or image files). The FTA estimates about 45 minutes for the form." },
          { title: "Answer FTA queries quickly", body: "The FTA aims to decide a complete application within 30 business days, and may take another 30 business days after you resubmit with any extra information it requests." },
          { title: "File the final return and pay", body: "Include any output VAT on assets, and pay all tax and penalties within 28 days of the end of the final tax period. The certificate then appears in your EmaraTax dashboard." },
        ],
      },
      {
        type: "checklist",
        heading: "Documents the FTA Usually Asks For",
        items: [
          "Licence cancelled or business closed: Trade licence cancellation certificate, liquidation letter and board resolution, plus the turnover template",
          "Sole establishment licence sold: Sale contract, amended trade licence and the turnover template",
          "Individual who has stopped trading: Proof the activity has ended, the turnover template and an official letter undertaking not to make taxable supplies in the next 30 days",
          "Supplies below AED 187,500: Turnover template and a stamped declaration that you will not exceed the threshold in the next 30 days",
          "Supplies from AED 187,500 to below AED 375,000: Turnover template and a signed, stamped declaration that you will not exceed the threshold in the next 30 days",
          "Sole establishments: A declaration by the natural person, in addition to the above",
        ],
      },
      {
        type: "text",
        heading: "When the FTA Deregisters You Itself",
        body: "If the FTA is satisfied that you meet the mandatory conditions and you have not applied, or did not complete an application, it can deregister you from the date it became satisfied or another date it sets (Article 14(4) of the Executive Regulation). Since 1 January 2023 it can also cancel a registration where keeping it could prejudice the integrity of the tax system (Article 21(2) of the Decree-Law, as amended by Federal Decree-Law No. 18 of 2022). Deregistration never removes the FTA's right to collect tax or penalties already due (Article 21(3)).",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1727767579106-c30a4c1c74c5?w=1400&q=80&auto=format&fit=crop",
        alt: "Closed sign hanging on a glass shop door at night",
        caption: "The VAT clock starts when trading stops, often long before the licence is cancelled. Photo: Tim Mossholder on Unsplash",
      },
      {
        type: "text",
        heading: "Closing the Company: Sort VAT Before or Alongside the Licence",
        body: "When a company is closing, the order matters. The 20-business-day clock starts when it stops making taxable supplies, often well before the licensing authority cancels the licence, so waiting for the cancellation certificate can make the VAT application late. The UAE government portal's guide to closing a free zone company lists deregistering with the FTA, where applicable, as a step before the cancellation application, and each authority sets its own clearance list, so ask yours what tax evidence it wants. If a liquidator or bankruptcy trustee is appointed to represent the company, the Tax Procedures Law requires them to notify the FTA within 20 business days and to file returns on the company's behalf (Article 7 of Federal Decree-Law No. 28 of 2022).",
      },
      {
        type: "text",
        heading: "Corporate Tax Deregistration Is a Separate Application",
        body: "Cancelling your VAT registration does not cancel your Corporate Tax registration. Corporate Tax deregistration is its own EmaraTax application, generally due within 3 months of the business ceasing (FTA Decision No. 6 of 2023), with its own documents and a 40-working-day FTA processing time. We cover it in a separate article.",
      },
      {
        type: "text",
        heading: "VAT Group Members",
        body: "Leaving a VAT tax group runs through the group's registration and its representative member, not a standalone deregistration. A member that stops making taxable supplies or no longer qualifies is removed, and the representative member must notify the FTA within 20 business days (Article 15 of the Executive Regulation). Under FTA Directive No. 2 of 2026, a member that leaves but stays registered reports later adjustments linked to transactions the group declared.",
      },
      {
        type: "checklist",
        heading: "Common Mistakes",
        items: [
          "Waiting for the licence to be cancelled before applying",
          "Leaving out output VAT on stock and assets held at deregistration",
          "Uploading a turnover template that does not match the returns already filed",
          "Treating approval as the finish line and missing the final return or payment",
          "Assuming the VAT application also cancels the Corporate Tax registration",
          "Relying on the 30 business days on the FTA's service page rather than the 20 in the regulation",
        ],
      },
      {
        type: "numbered",
        heading: "Frequently Asked Questions",
        items: [
          { title: "Do I have to deregister if my company is dormant?", body: "If it has stopped making taxable supplies and you do not expect any in the next 12 months, yes. Until the TRN is cancelled, keep filing returns, nil returns included." },
          { title: "How long does the FTA take?", body: "Its published service time is 30 business days from a complete application, plus up to 30 more if it asks for information. The certificate follows only after the final return is approved and everything is paid." },
          { title: "What if I find an error after deregistration?", body: "There is no later return to correct it in, so it generally needs a voluntary disclosure within 20 working days of becoming aware of it (Article 10 of Cabinet Decision No. 74 of 2023)." },
          { title: "Do I still need to keep my VAT records?", body: "Yes, for 5 years after the end of the relevant tax period, longer in some cases. The FTA can generally audit up to 5 years after a tax period ends (Article 46 of the Tax Procedures Law, as amended from 1 January 2026)." },
          { title: "Can I register again later?", body: "Yes, and you must if you cross the mandatory threshold again (Article 14(9) of the Executive Regulation)." },
        ],
      },
      {
        type: "alert",
        heading: "Rules as at 1 November 2026",
        body: "This guide reflects the VAT Decree-Law, its Executive Regulation, the penalty schedule and published FTA guidance as they stood on 1 November 2026. The FTA updates its service pages and the regulations do change, so check the current position before you file. It is general information, not advice on your particular facts.",
      },
      {
        type: "cta",
        heading: "Closing a Business or Scaling Back?",
        body: "Marifah Tax Advisory can check whether deregistration is mandatory or optional for you, calculate the output VAT on assets you are keeping, prepare the EmaraTax application and final return, and line them up with your Corporate Tax deregistration and licence cancellation. Contact us for a free consultation.",
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
        body: "UAE Corporate Tax was introduced under Federal Decree-Law No. 47 of 2022, effective for financial years starting on or after 1 June 2023. Every UAE company — whether or not it owes any tax — must register with the Federal Tax Authority (FTA) on EmaraTax, and so must individuals whose business turnover exceeds AED 1 million in a calendar year. Missing your deadline triggers a fixed AED 10,000 administrative penalty under Cabinet Decision No. 10 of 2024, regardless of your profit level.",
      },
      {
        type: "text",
        heading: "Deadlines by Entity Type",
        body: "For existing juridical persons (companies) registered before 1 March 2024, the deadline was tied to the month of trade licence issuance — ranging from 31 May 2024 to 31 December 2024. For new companies incorporated on or after 1 March 2024, the deadline is 3 months from the date of incorporation. For natural persons (sole proprietors, freelancers) whose taxable turnover from business exceeded AED 1 million in 2024, the deadline was 31 March 2025, and in later years it is 31 March of the year after the turnover threshold is first exceeded. For non-resident natural persons with a Permanent Establishment in the UAE who exceed AED 1 million turnover, registration must be completed within 3 months of meeting the conditions.",
      },
      {
        type: "checklist",
        heading: "Key Registration Facts",
        items: [
          "All UAE companies must register — even if profit is below AED 375,000 (individuals only once business turnover exceeds AED 1 million)",
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
        body: "The FTA introduced a penalty waiver initiative effective from 14 April 2025. If you missed your registration deadline, you can have the AED 10,000 penalty waived — provided you file your first Corporate Tax return (or annual declaration if exempt) within 7 months from the end of your first tax period. The initiative has no announced end date and applies to a first tax period whether past or future: for example, a business whose first tax period ends on 31 December 2026 would need to file by 31 July 2027. The waiver applies even if you have already received the penalty. After the waiver window closes, the AED 10,000 fine remains and is not automatically reversible.",
      },
      {
        type: "text",
        heading: "2026 Penalty Framework Update",
        body: "Cabinet Decision No. 129 of 2025, effective 14 April 2026, restructured the VAT and Excise Tax penalties, including a new late payment penalty of 14% per annum in place of the previous 2% plus 4% monthly structure. It did not change Corporate Tax penalties, which are set by Cabinet Decision No. 75 of 2023: late payment of Corporate Tax has attracted a monthly penalty at 14% per annum since 1 August 2023, and the AED 10,000 late registration penalty is unchanged. All businesses must also pay any tax due within the same 9-month filing window — there are no instalment options in the standard regime.",
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
    excerpt: "VAT registration is mandatory once your taxable turnover exceeds AED 375,000. Here is every requirement, document, threshold, and deadline — fully updated for 2026.",
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
        body: "From 1 January 2026, the requirement to issue a self-invoice for standard reverse charge imports has been removed under Federal Decree-Law No. 16 of 2025. However, the obligation to declare and pay the VAT on reverse charge transactions remains fully in force. Record-keeping penalties were not reduced by Cabinet Decision No. 129 of 2025: they remain AED 10,000 for each violation and AED 20,000 for a repeat within 24 months.",
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
        heading: "Step 2 — Complete Boxes 1 to 8 (Sales / Output VAT)",
        body: "Box 1: Enter the value of your standard-rated supplies (sales at 5% VAT) and the VAT due, split by emirate. Box 2 shows tax refunds provided to tourists and only applies to retailers in the Tax Refunds for Tourists Scheme. Box 3: Enter supplies subject to the reverse charge, such as imported services. Box 4: Enter zero-rated supplies (exports, international transport and other supplies taxed at 0%) — these are taxable but at 0%. Box 5: Enter any exempt supplies (subsequent supplies of residential property, local passenger transport, bare land) — no VAT charged and no input VAT recovery on related costs. Box 6 covers goods imported into the UAE, Box 7 any adjustments to those imports, and Box 8 totals your outputs.",
      },
      {
        type: "text",
        heading: "Step 3 — Complete Boxes 9 to 11 (Purchases / Input VAT)",
        body: "Box 9: Enter your standard-rated expenses/purchases made during the period and the input VAT you are recovering. Box 10: Enter the recoverable VAT on supplies subject to the reverse charge — the input side of the reverse charge amounts you declared as outputs. Box 11 totals your inputs. Out-of-scope supplies are not reported in any box.",
      },
      {
        type: "text",
        heading: "Step 4 — Review the Net VAT Position",
        body: "EmaraTax will automatically calculate your net VAT due (output VAT minus input VAT). If output exceeds input, you owe that amount to the FTA. If input exceeds output, you have a VAT credit — you may carry it forward to the next period or submit a refund request. Always cross-check the calculated figure against your own accounting records before submitting.",
      },
      {
        type: "text",
        heading: "Step 5 — Submit and Pay",
        body: "Once you are satisfied the return is accurate, click 'Submit'. Payment of VAT due must reach the FTA within 28 days of the tax period end. You can pay through EmaraTax by Visa or Mastercard credit/debit card, or by bank transfer using your GIBAN and the payment reference number (the FTA no longer accepts e-Dirham). The payment deadline is the same as the filing deadline — you can file and pay on different days, but both must be done within the 28 days.",
      },
      {
        type: "checklist",
        heading: "Common Mistakes That Trigger FTA Penalties",
        items: [
          "Claiming input VAT on non-business expenses (e.g., entertainment, personal vehicles)",
          "Missing the 28-day filing deadline — AED 1,000 first offence, AED 2,000 repeat",
          "Failing to report reverse charge on imported services",
          "Issuing non-compliant tax invoices (missing TRN, wrong VAT amount)",
          "Errors in Box 5 (classifying standard-rated supplies as exempt)",
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
        body: "To be treated as a QFZP and access the 0% rate on qualifying income, a free zone entity must satisfy all five of the following conditions every year: (1) Maintain adequate substance in the UAE free zone — real offices, employees, and management decisions made locally. (2) Derive qualifying income as defined in Cabinet Decision No. 100 of 2023 — income from transactions with free zone persons that are the beneficial recipients, income from the Qualifying Activities listed in Ministerial Decision No. 229 of 2025, and qualifying intellectual property income, in each case excluding Excluded Activities. Services to foreign clients do not qualify just because the client is abroad. (3) Pass the De Minimis test — non-qualifying income must not exceed the lower of AED 5 million or 5% of total revenue. (4) No mainland election — the entity must not have elected to be treated as a standard mainland taxable person. (5) Comply with transfer pricing rules under Article 34 (arm's-length transactions with related parties) and Article 55 (transfer pricing documentation) of the CT Law.",
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
          "Headquarter services to related parties",
          "Ownership, management and operation of ships",
        ],
      },
      {
        type: "checklist",
        heading: "Income That Does Not Qualify",
        items: [
          "Income from mainland or foreign (non-free zone) customers for activities that are not Qualifying Activities (counts towards the de minimis limit)",
          "Income from immovable property, except income from commercial property in a free zone earned from transactions with other free zone persons (always taxed at 9%)",
          "Income from Excluded Activities, such as most transactions with natural persons and regulated banking, insurance, and finance and leasing activities (counts towards the de minimis limit)",
          "Income from intellectual property other than qualifying intellectual property income (always taxed at 9%)",
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
        body: "Free zone entities with revenue below AED 3 million may elect Small Business Relief (SBR), which treats the entity as having no taxable income. SBR is available for tax periods ending on or before 31 December 2029 as a transitional measure (extended from 2026 by Ministerial Decision No. 131 of 2026). However, electing SBR means the entity cannot simultaneously claim QFZP benefits for that period. For most free zone entities with predominantly qualifying income, maintaining QFZP status at 0% is more advantageous than electing SBR — but this should be assessed on a case-by-case basis.",
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
        body: "Under Ministerial Decision No. 229 of 2025, qualifying income for DMCC entities typically includes: income from trading Qualifying Commodities (including physical trading, hedging and structured commodity financing), logistics and warehousing services within the free zone, headquarter services to Related Parties, holding company income (dividends and capital gains from qualifying shareholdings), and fund management services subject to the regulatory oversight of the competent authority.",
      },
      {
        type: "checklist",
        heading: "DMCC QFZP Compliance Checklist",
        items: [
          "Physical office space in DMCC (not a virtual/flexi-desk arrangement)",
          "Employed staff in the UAE with sufficient expertise for the business activities",
          "Board meetings and key management decisions made in the UAE",
          "Non-qualifying revenue no more than the lower of AED 5 million or 5% of total revenue (de minimis)",
          "Audited IFRS financial statements prepared for the tax period",
          "Transfer pricing documentation for all related-party transactions",
          "Corporate Tax return filed within 9 months of financial year-end",
        ],
      },
      {
        type: "text",
        heading: "DMCC Commodities Trading — The Designated Zone Issue",
        body: "Many DMCC members trade commodities. Trading of Qualifying Commodities (metals, minerals, energy, agricultural commodities and industrial chemicals with a quoted price, and environmental commodities such as carbon credits, but not products packaged for retail sale) is a Qualifying Activity in its own right under Ministerial Decision No. 229 of 2025, and it does not depend on a Designated Zone (DZ). The DZ test matters for distribution of other goods, which qualifies only when it is carried on in or from a Designated Zone and the other conditions are met, for example that the customer resells or processes the goods. Check the FTA's current list of Designated Zones before treating distribution income as qualifying. Income from mainland or foreign customers that does not come from a Qualifying Activity counts towards the de minimis limit, and breaching that limit means losing QFZP status.",
      },
      {
        type: "text",
        heading: "2026 Filing Deadline",
        body: "For DMCC entities with a financial year running 1 January to 31 December 2025, the Corporate Tax return deadline is 30 September 2026. The return must be filed on EmaraTax. Any Corporate Tax due must be paid by the same date — there are no instalments. Late payment of Corporate Tax carries a monthly penalty at 14% per annum under Cabinet Decision No. 75 of 2023.",
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
    excerpt: "Small Business Relief allows eligible UAE businesses to pay 0% Corporate Tax. Here is who qualifies, how to elect it, and what changes after 31 December 2029.",
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
        body: "Beyond the standard 0%/9% threshold structure, the UAE CT Law provides Small Business Relief for eligible businesses. Under SBR, a qualifying business is treated as having no taxable income for the relevant tax period — it pays zero Corporate Tax and has simplified compliance obligations. SBR is available for tax periods ending on or before 31 December 2029, after Ministerial Decision No. 131 of 2026 extended it from 2026. It is a transitional measure and is not permanent.",
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
        body: "Electing Small Business Relief does not exempt a business from registering with the FTA. All UAE companies must register for Corporate Tax, and so must individuals whose business turnover exceeds AED 1 million. The penalty for non-registration is AED 10,000, regardless of whether you ultimately owe any tax. Register on EmaraTax, then elect SBR in your return if eligible.",
      },
      {
        type: "text",
        heading: "After 2029 — What Small Businesses Should Prepare For",
        body: "SBR is a transitional relief. Ministerial Decision No. 131 of 2026 extended it to tax periods ending on or before 31 December 2029, without changing the AED 3 million revenue test or the other conditions. There is currently no legislation extending it beyond 2029. Once it ends, businesses with taxable income up to AED 375,000 will still pay 0% under the standard rates — but businesses with taxable income above AED 375,000 will need to file full Corporate Tax returns and pay 9% on the income above the threshold.",
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
        body: "Under the UAE VAT law (Federal Decree-Law No. 8 of 2017) and the administrative penalties framework (Cabinet Decision No. 40 of 2017 as amended, including by Cabinet Decision No. 129 of 2025 from 14 April 2026), any business that fails to register for VAT within 30 days of crossing the AED 375,000 mandatory threshold is subject to a fixed administrative penalty of AED 10,000. This penalty is imposed by the FTA and appears directly in your EmaraTax account.",
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
          "Failure to maintain required VAT records (first offence): AED 10,000",
          "Failure to maintain records (repeat within 24 months): AED 20,000",
          "Failure to issue a tax invoice or alternative document: AED 2,500 for each detected case",
          "Failure to issue a tax credit note: AED 2,500 for each detected case",
        ],
      },
      {
        type: "text",
        heading: "Is There a Waiver for Late VAT Registration?",
        body: "Unlike Corporate Tax (which has a formal waiver initiative for late registration penalties), there is no automatic waiver for late VAT registration penalties. Businesses that have received a penalty may submit a formal reconsideration request (Ta'arrud) to the FTA, but these are assessed on a case-by-case basis and are not guaranteed. The strongest grounds for reconsideration are genuine force majeure circumstances — not administrative oversight. Prevention is the only reliable strategy.",
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
          "Certain means of transport (such as aircraft, ships, trains and trams) and related goods and services",
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
          "Life insurance and reinsurance of life insurance",
        ],
      },
      {
        type: "text",
        heading: "The Partial Exemption Problem",
        body: "If your business makes both taxable supplies and exempt supplies, you face a partial exemption calculation. You cannot recover input VAT on overhead costs in full — you must apportion it. Under the standard method currently in force, the recoverable share is worked out from input VAT figures (broadly, the proportion of your input VAT that is directly attributable to taxable supplies), not from the value of your supplies. Cabinet Decision No. 149 of 2026 changes the standard method to a ratio of taxable supplies to total supplies from the first tax year starting after 1 October 2027. The calculation is done in your VAT returns and must be reviewed annually. Businesses in real estate, financial services, and healthcare are most commonly affected.",
      },
      {
        type: "text",
        heading: "Out-of-Scope Supplies — A Third Category",
        body: "There is a third category that is neither zero-rated nor exempt: out-of-scope supplies. These are supplies that fall entirely outside the UAE VAT framework — for example, salaries, grants, or supplies made outside the UAE. Out-of-scope supplies are not reported in your VAT return. Input VAT on costs related to out-of-scope activities is generally not recoverable.",
      },
      {
        type: "alert",
        heading: "Common Error — Treating Zero-Rated as Exempt",
        body: "The most costly misclassification is treating a zero-rated supply (such as an export) as VAT-exempt. This means you report the supply in the wrong box (as exempt instead of zero-rated) AND fail to claim back the input VAT on related costs. For exporters with significant input VAT, this can mean losing tens of thousands of dirhams in recoverable tax unnecessarily.",
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
        body: "Once registered, your EmaraTax dashboard becomes your compliance hub. You can view your upcoming return deadlines, file VAT returns, file Corporate Tax returns, make tax payments (by card through EmaraTax or by bank transfer using your GIBAN), submit voluntary disclosures, view penalty notices, and track correspondence from the FTA. Set up email notifications to ensure you never miss a deadline.",
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
        heading: "Getting Professional Help With EmaraTax",
        body: "You do not have to manage EmaraTax alone. The tax professionals at Marifah Tax Advisory can prepare your registrations and returns, check them before submission, help you respond to FTA queries and keep track of every deadline, so your compliance stays on schedule without you having to work through each step yourself.",
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
          "Later years: register by 31 March of the year after the calendar year in which your turnover first exceeds AED 1 million (non-resident individuals: within 3 months)",
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
        body: "Freelancers subject to Corporate Tax can deduct business expenses that are wholly and exclusively incurred for the purposes of the business. Allowable deductions include office rent, equipment costs, software subscriptions, business travel, professional fees, and staff costs. Personal expenses, entertainment above specified limits, and expenses without documentary evidence cannot be deducted. Maintaining clean accounting records is essential — the FTA can audit your claimed deductions, and you must keep the supporting records for 7 years.",
      },
      {
        type: "text",
        heading: "Small Business Relief for Freelancers",
        body: "Freelancers whose gross revenue exceeds AED 1 million (making them subject to CT) but does not exceed AED 3 million may be eligible to elect Small Business Relief, effectively treating their taxable income as nil. SBR must be actively elected in the CT return and is available only for tax periods ending on or before 31 December 2029 (extended from 2026 by Ministerial Decision No. 131 of 2026). Once revenue exceeds AED 3 million in any period, SBR eligibility is permanently lost.",
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
        body: "You must file your Corporate Tax return and pay any tax due within 9 months from the end of your financial year. For example: if your financial year ends 31 December 2025, your return is due by 30 September 2026. If your year ends 31 March 2026, your return is due by 31 December 2026. There is no general extension (the FTA can direct a different date, but has only done so in specific cases it has announced) — late filing triggers a fixed AED 500 penalty per month for the first 12 months, and AED 1,000 per month thereafter.",
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
        body: "At this stage you elect any available reliefs. Small Business Relief (SBR) is available if your revenue does not exceed AED 3 million and the tax period ends on or before 31 December 2029 — electing SBR treats your taxable income as nil. Free Zone Persons must confirm their Qualifying Free Zone Person (QFZP) status and separately declare qualifying vs non-qualifying income. Participation Exemption applies to dividends and capital gains from qualifying shareholdings.",
      },
      {
        type: "text",
        heading: "Step 4 — Calculate and Pay",
        body: "Once all data is entered, EmaraTax calculates your tax liability. 0% applies on taxable income up to AED 375,000. 9% applies on income above AED 375,000. Any tax due must be paid within the same 9-month window as the return. Payment is made by bank transfer using your GIBAN or by credit/debit card through EmaraTax. There is no instalment option under the standard regime.",
      },
      {
        type: "checklist",
        heading: "Most Common Filing Mistakes",
        items: [
          "Filing late — the 9-month deadline is fixed unless the FTA directs otherwise in specific cases",
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
        body: "Filing your Corporate Tax return even one day late triggers an automatic AED 500 per month penalty for the first 12 months, then AED 1,000 per month. Separately, late payment of any tax due attracts a monthly penalty at 14% per annum under Cabinet Decision No. 75 of 2023, which has applied to Corporate Tax since 1 August 2023. Both penalties run simultaneously — there is no grace period.",
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
        body: "Small Business Relief (SBR) is a UAE Corporate Tax relief under Ministerial Decision No. 73 of 2023 (as amended by Ministerial Decision No. 131 of 2026) that allows eligible businesses to treat their taxable income as nil — effectively paying 0% Corporate Tax. It is designed to reduce the compliance burden on small businesses and startups that are still in their early growth phases. SBR must be actively elected in your Corporate Tax return — it is NOT applied automatically.",
      },
      {
        type: "checklist",
        heading: "Who Qualifies for Small Business Relief?",
        items: [
          "Your revenue must not exceed AED 3 million in the relevant tax period",
          "Your revenue must not have exceeded AED 3 million in any previous tax period from June 2023 onwards",
          "You must be a UAE resident taxable person (juridical or natural)",
          "The tax period must end on or before 31 December 2029 (extended from 2026 by Ministerial Decision No. 131 of 2026)",
          "You must not be a member of a Multinational Enterprise group (global revenue above AED 3.15 billion)",
          "You must not be a Qualifying Free Zone Person — QFZPs have their own 0% regime",
        ],
      },
      {
        type: "text",
        heading: "The AED 3 Million Trap — Read Carefully",
        body: "The AED 3 million test applies to every tax period, and failing it once is permanent. If your revenue exceeds AED 3 million in ANY tax period from 2023 onwards, you permanently lose SBR eligibility — even if your revenue drops back below AED 3 million in a future year. This means a business that had AED 3.2 million revenue in 2024 cannot elect SBR for 2025 even if its 2025 revenue was AED 1.5 million. Plan carefully if you are approaching this threshold.",
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
          "Confirm your tax period ends on or before 31 December 2029",
          "Prepare financial statements to evidence the revenue figure",
          "File the Corporate Tax return within 9 months of your financial year-end",
        ],
      },
      {
        type: "alert",
        heading: "SBR Now Runs to 31 December 2029 — What Happens Next?",
        body: "Small Business Relief is a transitional measure. Ministerial Decision No. 131 of 2026 extended it to tax periods ending on or before 31 December 2029, with the AED 3 million revenue test and the other conditions unchanged. For tax periods ending after 31 December 2029, SBR will no longer be available unless the UAE government extends it again. If it is not extended, businesses that were relying on SBR will need to calculate and pay 9% on taxable income above AED 375,000. We recommend starting proper bookkeeping now so you are ready for full Corporate Tax compliance when SBR ends.",
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
