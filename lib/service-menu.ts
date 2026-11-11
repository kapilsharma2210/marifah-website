// The Services menu: one list used by the desktop dropdown, the mobile menu, the footer and the
// "Related services" links on each service page. Add a service here and it appears everywhere.

export type ServiceLink = { label: string; href: string };
export type ServiceGroup = { heading: string; href: string; items: ServiceLink[] };

export const SERVICE_MENU: ServiceGroup[] = [
  {
    heading: "Corporate Tax",
    href: "/services/corporate-tax",
    items: [
      { label: "Corporate Tax Registration", href: "/services/corporate-tax-registration" },
      { label: "UAE Corporate Tax Filing", href: "/corporate-tax-return-filing-uae" },
      { label: "Corporate Tax Advisory", href: "/corporate-tax-consultants-uae" },
      { label: "Tax Impact Assessment", href: "/services/corporate-tax-impact-assessment" },
      { label: "Corporate Tax Deregistration", href: "/services/corporate-tax-deregistration" },
    ],
  },
  {
    heading: "UAE VAT",
    href: "/services/uae-vat",
    items: [
      { label: "VAT Registration Services", href: "/services/vat-registration" },
      { label: "VAT Consultancy & Advisory", href: "/vat-consultancy-dubai" },
      { label: "VAT Return Filing", href: "/services/vat-return-filing" },
      { label: "VAT Deregistration", href: "/services/vat-deregistration" },
      { label: "VAT Refund Services", href: "/services/vat-refund" },
    ],
  },
  {
    heading: "Accounting",
    href: "/services/accounting",
    items: [
      { label: "Bookkeeping & Accounting", href: "/accounting-bookkeeping-services-dubai" },
      { label: "Financial Statements", href: "/services/financial-statements" },
      { label: "MIS Reporting", href: "/services/mis-reporting" },
      { label: "Accounting Review", href: "/services/accounting-review" },
    ],
  },
];

/** The menu group and item for a page, if it is in the Services menu. */
export function findService(href: string): { group: ServiceGroup; item: ServiceLink } | null {
  for (const group of SERVICE_MENU) {
    const item = group.items.find((i) => i.href === href);
    if (item) return { group, item };
  }
  return null;
}

/** Other services in the same group as `href`, for the "Related services" links. */
export function relatedServices(href: string): ServiceLink[] | null {
  const group = SERVICE_MENU.find((g) => g.items.some((i) => i.href === href));
  if (!group) return null;
  return [...group.items.filter((i) => i.href !== href), { label: `All ${group.heading} services`, href: group.href }];
}

/** The pages written for the Services menu (served under /services/<slug>), for the sitemap. */
export const SERVICE_DETAIL_PAGES = SERVICE_MENU.flatMap((g) => g.items.map((i) => i.href)).filter((h) => h.startsWith("/services/"));
