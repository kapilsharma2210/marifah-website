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
    id: "featured-mohit",
    name: "Mohit",
    rating: 5,
    service: "Corporate Tax Registration",
    text: "Marifah Tax Advisory has been a great support in helping me stay compliant with UAE tax laws and regulations. Their team is knowledgeable, professional, and highly responsive. They completed my Corporate Tax Registration within just 2 days, making the entire process smooth and hassle-free.\n\nI truly appreciate their support and would highly recommend Marifah Tax Advisory to businesses looking for reliable tax and accounting services in the UAE.",
  },
  {
    id: "featured-zamal",
    name: "Zamal",
    rating: 5,
    service: "VAT & Corporate Tax",
    text: "I had a great experience with Marifah Tax Advisory. Their team is professional, knowledgeable, and responsive. They provide clear guidance on UAE VAT and Corporate Tax requirements and make the entire process smooth and hassle-free. Highly recommended for businesses looking for reliable tax and accounting services in the UAE!",
  },
  {
    id: "featured-1",
    name: "Chukwuka Ahmed",
    rating: 5,
    service: "VAT Registration & Filing",
    text: "Marifah handled our VAT registration and filing seamlessly. We never had to worry about FTA deadlines again. Highly recommended!",
  },
  {
    id: "featured-2",
    name: "Khalil",
    rating: 5,
    service: "Tax Advisory",
    text: "Professional, responsive, and very knowledgeable. They saved us from a potential AED 20,000 penalty with their timely advice.",
  },
  {
    id: "featured-3",
    name: "Bilal",
    rating: 5,
    service: "Full Compliance Package",
    text: "Best tax consultancy in UAE. Their full package is great value — covers everything our business needs at a very fair price.",
  },
  {
    id: "featured-4",
    name: "Syed",
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
