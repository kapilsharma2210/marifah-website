// Client reviews shown on the website.
//
// FEATURED_REVIEWS are reviews you received directly from clients. To show a client's
// name, replace `name: null` with their real name, e.g. name: "Ahmed K." (only with the
// client's permission). While `name` is null the review shows as "Marifah client".
//
// Reviews submitted through the form on /reviews are stored separately and only appear
// after you approve them from the notification email.

export type Review = {
  id: string;
  name: string | null;
  rating: number; // 1–5
  text: string;
  service?: string;
  /** ISO date (YYYY-MM-DD). */
  date?: string;
};

export const REVIEW_SERVICES = [
  "Corporate Tax Registration",
  "Corporate Tax Return Filing",
  "VAT Registration",
  "VAT Return Filing",
  "Accounting & Bookkeeping",
  "Full Compliance Package",
  "Tax Advisory",
  "Other",
] as const;

export const FEATURED_REVIEWS: Review[] = [
  {
    id: "featured-1",
    name: null,
    rating: 5,
    service: "VAT Registration & Filing",
    text: "Marifah handled our VAT registration and filing seamlessly. We never had to worry about FTA deadlines again. Highly recommended!",
  },
  {
    id: "featured-2",
    name: null,
    rating: 5,
    service: "Tax Advisory",
    text: "Professional, responsive, and very knowledgeable. They saved us from a potential AED 20,000 penalty with their timely advice.",
  },
  {
    id: "featured-3",
    name: null,
    rating: 5,
    service: "Full Compliance Package",
    text: "Best tax consultancy in UAE. Their full package is great value — covers everything our business needs at a very fair price.",
  },
  {
    id: "featured-4",
    name: null,
    rating: 5,
    text: "Switched from another firm to Marifah and the difference is night and day. Fast, accurate, and always available when we need them.",
  },
];

export function reviewerName(r: Review) {
  return r.name?.trim() || "Marifah client";
}

export function ratingSummary(reviews: Review[]) {
  const count = reviews.length;
  const average = count ? reviews.reduce((s, r) => s + r.rating, 0) / count : 0;
  const breakdown = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
  }));
  return { count, average, breakdown };
}
