import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Tax Consultants UAE | Registration & Filing — Marifah Tax Advisory',
  description: 'Top UAE corporate tax consultants. Expert corporate tax registration, filing, and advisory for UAE businesses. FTA compliant. From AED 399. Free consultation.',
  keywords: [
    'corporate tax consultants UAE', 'corporate tax registration Dubai',
    'corporate tax filing UAE', 'top tax consultant UAE', 'FTA corporate tax',
    'UAE 9% corporate tax', 'corporate tax advisory Dubai'
  ],
  alternates: {
    canonical: 'https://www.marifahtax.com/corporate-tax-consultants-uae',
  },
  openGraph: {
    title: 'Corporate Tax Consultants UAE | Marifah Tax Advisory',
    description: 'Expert UAE corporate tax registration, filing, and FTA compliance. From AED 399. 5,000+ businesses served.',
    url: 'https://www.marifahtax.com/corporate-tax-consultants-uae',
    type: 'website',
  },
}

export default function CorporateTaxConsultantsUAE() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Corporate Tax Consultants UAE",
            "description": "End-to-end UAE corporate tax consultancy — registration, annual return filing, FTA compliance, and strategic tax advisory for mainland and free zone businesses.",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Marifah Tax Advisory",
              "url": "https://www.marifahtax.com",
              "telephone": "+971505815245",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              }
            },
            "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
            "offers": [
              {
                "@type": "Offer",
                "name": "Corporate Tax Registration",
                "price": "399",
                "priceCurrency": "AED",
                "description": "FTA corporate tax registration via EmaraTax portal."
              },
              {
                "@type": "Offer",
                "name": "Corporate Tax Return Filing",
                "price": "1499",
                "priceCurrency": "AED",
                "description": "Annual corporate tax return preparation and FTA submission."
              },
              {
                "@type": "Offer",
                "name": "Corporate Tax Registration + Filing Combo",
                "price": "1699",
                "priceCurrency": "AED",
                "description": "Best value — registration plus annual return filing."
              }
            ]
          }),
        }}
      />

      <main>
        {/* HERO */}
        <section>
          <h1>Corporate Tax Consultants UAE — End-to-End FTA Compliance</h1>
          <p>UAE&apos;s 9% Corporate Tax is live. Registration is mandatory. We handle everything — so you don&apos;t face an AED 10,000 penalty.</p>
          <a href="https://wa.me/971505815245" target="_blank" rel="noopener noreferrer">
            Book Free Consultation — WhatsApp +971505815245
          </a>
        </section>

        {/* WHAT IS CORPORATE TAX */}
        <section>
          <h2>UAE Corporate Tax — What Every Business Must Know</h2>
          <p>
            The UAE introduced a federal Corporate Tax of 9% under Federal Decree-Law No. 47 of 2022,
            effective for financial years starting on or after 1 June 2023.
          </p>
          <ul>
            <li>0% rate applies to taxable income up to AED 375,000 (Small Business Relief)</li>
            <li>9% rate applies to taxable income above AED 375,000</li>
            <li>ALL UAE businesses must register — even if they owe 0% tax</li>
            <li>Registration deadline varies by licence issuance date</li>
            <li>Failure to register: AED 10,000 mandatory FTA penalty</li>
          </ul>
        </section>

        {/* SERVICES */}
        <section>
          <h2>Our Corporate Tax Services</h2>

          <h3>Corporate Tax Registration — AED 399</h3>
          <p>
            We register your business with the FTA for Corporate Tax via the EmaraTax portal. We handle
            document preparation, submission, and follow-up. Turnaround: 3–5 working days.
          </p>

          <h3>Corporate Tax Return Filing — AED 1,499</h3>
          <p>
            We prepare your annual Corporate Tax return based on your audited or management accounts,
            calculate your taxable income correctly, and file before the FTA deadline — within 9 months
            of your financial year-end.
          </p>

          <h3>Registration + Filing Combo — AED 1,699</h3>
          <p>
            Our best value corporate tax package. Registration plus your annual return filing — everything
            covered under one flat fee. No hourly billing, no surprises.
          </p>

          <h3>Tax Impact Assessment</h3>
          <p>
            Not sure how Corporate Tax affects your business? We analyse your current financials and
            project your tax liability — so there are no surprises at year-end.
          </p>

          <h3>Free Zone Eligibility Review</h3>
          <p>
            Qualifying Free Zone Persons can benefit from a 0% rate on qualifying income. We assess
            your eligibility and structure your filing accordingly.
          </p>

          <h3>Small Business Relief Election</h3>
          <p>
            If your revenue is under AED 3 million, you may qualify to elect Small Business Relief and
            pay 0% tax. We assess your eligibility and file the election correctly with FTA.
          </p>

          <h3>Corporate Tax Deregistration</h3>
          <p>
            If your business ceases, merges, or no longer meets registration criteria, we manage the
            full deregistration process with FTA.
          </p>
        </section>

        {/* WHO MUST REGISTER */}
        <section>
          <h2>Who Must Register for UAE Corporate Tax?</h2>
          <table>
            <thead>
              <tr>
                <th>Business Type</th>
                <th>Registration Required?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>UAE Mainland LLC</td><td>Yes — mandatory</td></tr>
              <tr><td>Free Zone Company</td><td>Yes — mandatory</td></tr>
              <tr><td>Branch of Foreign Company</td><td>Yes — mandatory</td></tr>
              <tr><td>Sole Proprietorship</td><td>Yes — if commercial</td></tr>
              <tr><td>Natural Person (individual)</td><td>If business income &gt; AED 1M</td></tr>
              <tr><td>Government Entity</td><td>No (unless specified)</td></tr>
            </tbody>
          </table>
          <p>Important: Registration is mandatory for ALL entities — even if you owe zero tax.</p>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h2>Why UAE Businesses Choose Marifah for Corporate Tax</h2>
          <ul>
            <li>Dedicated corporate tax advisor for your business</li>
            <li>We know FTA&apos;s EmaraTax portal inside out</li>
            <li>Full compliance: registration → filing → ongoing advisory</li>
            <li>Transparent flat fees — no hourly billing surprises</li>
            <li>Serving all Emirates and free zones: DMCC, JAFZA, ADGM, SPC, and more</li>
            <li>5,000+ businesses served across UAE</li>
          </ul>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <h2>Client Success — Penalties Avoided</h2>
          <blockquote>
            <p>&ldquo;We were unaware our DMCC company had a registration deadline. Marifah flagged it,
            registered us within 4 days, and saved us from an AED 10,000 penalty.&rdquo;</p>
            <cite>— Operations Manager, DMCC Trading Company</cite>
          </blockquote>
          <blockquote>
            <p>&ldquo;Best tax consultancy in UAE. Their full package is great value — covers everything
            our business needs at a very fair price.&rdquo;</p>
            <cite>— Omar Khalid, Owner, Al Noor Retail</cite>
          </blockquote>
        </section>

        {/* FAQ */}
        <section>
          <h2>Frequently Asked Questions — UAE Corporate Tax</h2>

          <h3>Is corporate tax mandatory for free zone companies?</h3>
          <p>Yes. All free zone companies must register for Corporate Tax. They may qualify for a 0% Qualifying Free Zone Person (QFZP) rate if they meet 5 specific FTA conditions — but registration is still mandatory even for exempt entities.</p>

          <h3>What is the corporate tax rate in UAE?</h3>
          <p>0% on taxable income up to AED 375,000. 9% on taxable income above AED 375,000. A 15% rate applies to large multinationals under the OECD Pillar Two rules (revenue above AED 3.15 billion).</p>

          <h3>When do I need to file my corporate tax return?</h3>
          <p>Within 9 months of your financial year-end. For example, if your year ends 31 December 2024, your return is due by 30 September 2025.</p>

          <h3>Are dividends and capital gains taxable?</h3>
          <p>Dividends from UAE subsidiaries and qualifying capital gains on shares are generally exempt from Corporate Tax under the Participation Exemption — subject to specific conditions.</p>

          <h3>What expenses can I deduct from taxable income?</h3>
          <p>Business expenses wholly and exclusively incurred for the business are generally deductible. Entertainment (50% cap), interest (30% EBITDA cap), and personal expenses are restricted. We calculate your exact deductions correctly.</p>

          <h3>What documents are needed for Corporate Tax registration?</h3>
          <p>Trade Licence copy, Emirates ID of owner/manager, Memorandum of Association, financial statements, and EmaraTax portal access. We provide a full checklist after your free consultation.</p>
        </section>

        {/* CTA */}
        <section>
          <h2>Register Your Business for Corporate Tax — Today</h2>
          <p>
            The FTA is actively issuing penalties for late registration.
            Don&apos;t risk AED 10,000. Our team registers your business in 3–5 working days.
          </p>
          <a href="https://wa.me/971505815245" target="_blank" rel="noopener noreferrer">
            Book Free Consultation — WhatsApp +971505815245
          </a>
          <a href="mailto:info@marifahtax.com">
            Email: info@marifahtax.com
          </a>
        </section>
      </main>
    </>
  )
}
