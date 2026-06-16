import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UAE Corporate Tax & VAT Consultants | Marifah Tax Advisory — Dubai",
  description:
    "Certified UAE Corporate Tax & VAT consultants in Dubai. FTA-compliant registration, return filing, and accounting for UAE businesses. Free consultation. Call +971505815245.",
  keywords: [
    "corporate tax consultant UAE",
    "VAT consultant Dubai",
    "VAT registration UAE",
    "corporate tax registration UAE",
    "FTA tax agent UAE",
    "tax consultant Dubai",
    "VAT filing UAE",
    "accounting services Dubai",
    "bookkeeping UAE",
    "corporate tax advisory UAE",
  ],
  authors: [{ name: "Marifah Tax Advisory" }],
  creator: "Marifah Tax Advisory",
  metadataBase: new URL("https://www.marifahtax.com"),
  alternates: {
    canonical: "https://www.marifahtax.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.marifahtax.com",
    title: "UAE Corporate Tax & VAT Consultants | Marifah Tax Advisory — Dubai",
    description:
      "Certified UAE Corporate Tax & VAT consultants. FTA-compliant registration, VAT filing, and accounting for UAE businesses. Book a free consultation today.",
    siteName: "Marifah Tax Advisory",
    images: [
      {
        url: "https://www.marifahtax.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marifah Tax Advisory — UAE Corporate Tax & VAT Consultants Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Corporate Tax & VAT Consultants | Marifah Tax Advisory",
    description:
      "FTA-compliant Corporate Tax & VAT services for UAE businesses. Free consultation available.",
    images: ["https://www.marifahtax.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-existing-google-verification-code-here",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.marifahtax.com/#organization",
      name: "Marifah Tax Advisory",
      url: "https://www.marifahtax.com",
      logo: "https://www.marifahtax.com/logo.png",
      description:
        "UAE-based certified tax consultancy providing Corporate Tax registration & filing, VAT registration & return filing, accounting, and FTA compliance services to businesses across Dubai and all Emirates.",
      telephone: "+971505815245",
      email: "info@marifahtax.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AE",
        addressRegion: "Dubai",
        addressLocality: "Dubai",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2048,
        longitude: 55.2708,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      priceRange: "AED 399 – AED 4,999",
      currenciesAccepted: "AED",
      areaServed: [
        "Dubai",
        "Abu Dhabi",
        "Sharjah",
        "Ajman",
        "Ras Al Khaimah",
        "Fujairah",
        "Umm Al Quwain",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "UAE Tax & Accounting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Tax Registration UAE",
              description:
                "FTA Corporate Tax registration for UAE businesses. Completed within days. From AED 399.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VAT Registration UAE",
              description:
                "VAT (TRN) registration with the Federal Tax Authority. Completed in 3–5 working days. From AED 499.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VAT Return Filing UAE",
              description:
                "Quarterly VAT return preparation and filing with FTA. From AED 1,199 per year.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Tax Return Filing UAE",
              description:
                "Annual Corporate Tax return preparation and submission to FTA. From AED 1,499.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accounting & Bookkeeping UAE",
              description:
                "Monthly bookkeeping, financial statements, and MIS reporting for UAE businesses. From AED 2,499.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Compliance Package UAE",
              description:
                "All-inclusive VAT, Corporate Tax, and Accounting package for UAE businesses. AED 4,999 per year.",
            },
          },
        ],
      },
      sameAs: [
        "https://www.linkedin.com/company/marifahtax",
        "https://www.instagram.com/marifahtax",
        "https://www.facebook.com/marifahtax",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.marifahtax.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Corporate Tax mandatory for all UAE businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All UAE businesses with net profit exceeding AED 375,000 must register and file Corporate Tax with FTA. Even exempt businesses must register. Penalties for non-registration start at AED 10,000.",
          },
        },
        {
          "@type": "Question",
          name: "How long does VAT registration take in UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With Marifah Tax Advisory, VAT registration (TRN) is typically completed within 3–5 working days once all documents are submitted.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are needed for Corporate Tax registration in UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trade License, Emirates ID of owner/manager, Memorandum of Association, financial statements, and EmaraTax portal access. We provide a full checklist after your free consultation.",
          },
        },
        {
          "@type": "Question",
          name: "Can free zone companies avoid Corporate Tax in UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Qualifying Free Zone Persons (QFZPs) can enjoy 0% on qualifying income — but strict FTA conditions apply. Non-qualifying income is taxed at 9%. Our experts assess your eligibility.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if I file VAT returns late in UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Late VAT filing attracts penalties starting at AED 1,000 for the first offence, increasing to AED 2,000 for subsequent offences. Interest also applies on unpaid VAT amounts.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.marifahtax.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.marifahtax.com",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://www.marifahtax.com" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
      </head>
      <body>{children}</body>
    </html>
  );
}
