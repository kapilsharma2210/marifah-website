import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VAT Consultancy Dubai | VAT Registration & Filing UAE — Marifah Tax Advisory',
  description: 'Expert VAT consultancy in Dubai. We handle VAT registration, quarterly return filing, and FTA compliance for UAE businesses. From AED 499. Book a free call today.',
  keywords: [
    'VAT consultancy Dubai', 'VAT registration UAE', 'VAT return filing Dubai',
    'VAT consultant UAE', 'FTA VAT compliance', 'VAT advisory Dubai', 'VAT deregistration UAE'
  ],
  alternates: {
    canonical: 'https://www.marifahtax.com/vat-consultancy-dubai',
  },
  openGraph: {
    title: 'VAT Consultancy Dubai | Marifah Tax Advisory',
    description: 'Expert VAT registration, quarterly filing & FTA compliance for UAE businesses. From AED 499.',
    url: 'https://www.marifahtax.com/vat-consultancy-dubai',
    type: 'website',
  },
}

export default function VATConsultancyDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "VAT Consultancy Dubai",
            "description": "Complete UAE VAT consultancy services — registration, quarterly return filing, FTA compliance, and advisory for Dubai and all Emirates businesses.",
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
            "areaServed": [
              { "@type": "City", "name": "Dubai" },
              { "@type": "City", "name": "Abu Dhabi" },
              { "@type": "Country", "name": "United Arab Emirates" }
            ],
            "offers": [
              {
                "@type": "Offer",
                "name": "VAT Registration",
                "price": "499",
                "priceCurrency": "AED",
                "description": "Full VAT registration with FTA including TRN issuance."
              },
              {
                "@type": "Offer",
                "name": "VAT Return Filing",
                "price": "1199",
                "priceCurrency": "AED",
                "description": "Quarterly VAT return filing on EmaraTax portal."
              },
              {
                "@type": "Offer",
                "name": "VAT Registration + Filing Combo",
                "price": "1599",
                "priceCurrency": "AED",
                "description": "VAT registration plus quarterly filing — best value combo."
              }
            ]
          }),
        }}
      />

      <main>
        {/* HERO */}
        <section>
          <h1>VAT Consultancy Dubai — Expert UAE VAT Services</h1>
          <p>Trusted by 5,000+ UAE businesses for VAT registration, return filing, and FTA compliance. From AED 499.</p>
          <a href="https://wa.me/971505815245" target="_blank" rel="noopener noreferrer">
            Book Free Consultation — WhatsApp +971505815245
          </a>
        </section>

        {/* WHAT IS VAT */}
        <section>
          <h2>What is UAE VAT and Who Needs to Register?</h2>
          <p>
            Value Added Tax (VAT) was introduced in the UAE on 1 January 2018 at a standard rate of 5%.
            VAT registration is mandatory for any UAE business whose taxable turnover exceeds AED 375,000
            in the previous 12 months — or is expected to exceed this in the next 30 days.
          </p>
          <p>
            Voluntary registration is available for businesses with taxable supplies above AED 187,500.
            Failing to register on time attracts an automatic FTA penalty of AED 10,000.
          </p>
        </section>

        {/* SERVICES */}
        <section>
          <h2>Our UAE VAT Services</h2>

          <h3>VAT Registration (TRN) — AED 499</h3>
          <p>
            We handle your full VAT registration with the Federal Tax Authority (FTA) via the EmaraTax
            portal. Typical turnaround: 3–5 working days. Deliverable: your Tax Registration Number (TRN).
          </p>

          <h3>Quarterly VAT Return Filing — AED 1,199</h3>
          <p>
            We prepare and file your quarterly VAT returns accurately before every FTA deadline.
            We reconcile your sales, purchases, and input/output VAT — and you get a summary
            report after every filing.
          </p>

          <h3>VAT Registration + Filing Combo — AED 1,599</h3>
          <p>
            Our most popular VAT package. Get your TRN and all four quarterly returns filed
            under one affordable price. No hidden charges.
          </p>

          <h3>VAT Advisory &amp; Consultancy</h3>
          <p>
            Not sure which supplies are zero-rated vs exempt? Expanding to a new Emirate? We advise
            on VAT treatment for your specific business type — retail, real estate, healthcare, export.
          </p>

          <h3>VAT Deregistration</h3>
          <p>
            If your taxable turnover falls below AED 375,000, you may apply to deregister. We manage
            the full deregistration process and final VAT return with FTA.
          </p>

          <h3>VAT Refund Assistance</h3>
          <p>
            Exporters and eligible businesses can claim VAT refunds from the UAE FTA. We prepare
            and submit your refund application with full documentation.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section>
          <h2>How VAT Registration Works — Step by Step</h2>

          <h3>Step 1 — Free Consultation (Day 1)</h3>
          <p>We review your business turnover and confirm whether mandatory or voluntary registration applies.</p>

          <h3>Step 2 — Document Collection (Day 1–2)</h3>
          <p>We send you a simple checklist: Trade Licence, MOA, bank account details, Emirates ID, and 12-month turnover summary.</p>

          <h3>Step 3 — FTA Application (Day 2–3)</h3>
          <p>We submit your registration on EmaraTax, answer any FTA queries, and track the application.</p>

          <h3>Step 4 — TRN Issued (Day 3–5)</h3>
          <p>Your Tax Registration Number is issued. You are now legally VAT-registered in the UAE.</p>
        </section>

        {/* PENALTIES TABLE */}
        <section>
          <h2>VAT Penalties to Avoid in UAE</h2>
          <table>
            <thead>
              <tr>
                <th>Violation</th>
                <th>FTA Penalty</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Late VAT registration</td><td>AED 10,000</td></tr>
              <tr><td>Late VAT return filing (first offence)</td><td>AED 1,000</td></tr>
              <tr><td>Late VAT return filing (repeat)</td><td>AED 2,000</td></tr>
              <tr><td>Late VAT payment</td><td>14% per annum</td></tr>
              <tr><td>Incorrect VAT return</td><td>AED 3,000 – 5,000</td></tr>
              <tr><td>Failure to display TRN</td><td>AED 10,000</td></tr>
            </tbody>
          </table>
          <p>
            Our clients have never faced an FTA penalty on our watch. We monitor all deadlines and
            file every return before the due date — guaranteed.
          </p>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h2>Why Choose Marifah for VAT Consultancy in Dubai?</h2>
          <ul>
            <li>FTA-compliant process — every submission follows current FTA rules</li>
            <li>Dedicated VAT advisor — one person, not a call centre</li>
            <li>Fast turnaround — registration in 3–5 working days</li>
            <li>Transparent pricing — from AED 499, no hidden charges</li>
            <li>Serving all Emirates — Dubai, Abu Dhabi, Sharjah, and beyond</li>
            <li>5,000+ UAE businesses served</li>
          </ul>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <h2>What Our Clients Say</h2>
          <blockquote>
            <p>&ldquo;Marifah handled our VAT registration and filing seamlessly. We never had to worry about FTA deadlines again. Highly recommended!&rdquo;</p>
            <cite>— Ahmed Al Mansouri, CEO, Dubai Trading Co.</cite>
          </blockquote>
          <blockquote>
            <p>&ldquo;Professional, responsive, and very knowledgeable. They saved us from a potential AED 20,000 penalty with their timely advice.&rdquo;</p>
            <cite>— Priya Sharma, Director, Horizon Consulting</cite>
          </blockquote>
        </section>

        {/* FAQ */}
        <section>
          <h2>Frequently Asked Questions — UAE VAT</h2>

          <h3>What is the VAT registration threshold in UAE?</h3>
          <p>AED 375,000 in taxable turnover in the previous 12 months triggers mandatory VAT registration. Voluntary registration is possible above AED 187,500.</p>

          <h3>How long does VAT registration take?</h3>
          <p>3–5 working days when documents are correctly submitted. We manage the full process.</p>

          <h3>What is a Tax Registration Number (TRN)?</h3>
          <p>A TRN is your unique 15-digit VAT identification number issued by the FTA. You must display it on all tax invoices. Failure to do so attracts an AED 10,000 penalty.</p>

          <h3>Can I claim back VAT paid on business expenses?</h3>
          <p>Yes. Input VAT on business expenses can be offset against output VAT you collect. This is calculated in your VAT return. We ensure you claim every dirham you are entitled to.</p>

          <h3>Do free zone companies pay UAE VAT?</h3>
          <p>Generally yes, unless operating in a Designated Zone. The treatment depends on where your customers are based and the nature of your supply.</p>
        </section>

        {/* CTA */}
        <section>
          <h2>Get Your UAE VAT Sorted — Today</h2>
          <p>
            Don&apos;t wait for an FTA penalty notice. Book a free 30-minute consultation with our VAT experts.
            We&apos;ll review your situation and tell you exactly what needs to be done.
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
