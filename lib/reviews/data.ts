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
    id: "featured-ahmed-al-mansoori",
    name: "Ahmed Al Mansoori",
    rating: 5,
    service: "VAT Registration",
    text: "I contacted Marifah Tax Advisory for VAT registration of my company. Kapil was very helpful throughout the process and explained the requirements clearly. The registration was handled smoothly, and I was kept updated at every stage. Good experience overall.",
  },
  {
    id: "featured-mohammed-al-nuaimi",
    name: "Mohammed Al Nuaimi",
    rating: 5,
    service: "VAT Return Filing",
    text: "We have been using Marifah Tax Advisory for our VAT return filings. They are responsive, organised and take the time to explain the figures before submission. It is reassuring to have someone who follows up and makes sure things are completed on time.",
  },
  {
    id: "featured-omar-khalid",
    name: "Omar Khalid",
    rating: 5,
    service: "Corporate Tax Return Filing",
    text: "Marifah Tax Advisory assisted us with our Corporate Tax return filing. They reviewed our financial information carefully and explained the tax calculation in a way that was easy to understand. The team was approachable and professional throughout. Happy with their service.",
  },
  {
    id: "featured-sergey-volkov",
    name: "Sergey Volkov",
    rating: 5,
    service: "Corporate Tax Return Filing",
    text: "I was looking for someone to handle Corporate Tax compliance for my UAE business and came across Marifah Tax Advisory. The experience was positive from the beginning. They were clear about the documents required, responded to my questions and handled the filing professionally.",
  },
  {
    id: "featured-elena-petrova",
    name: "Elena Petrova",
    rating: 5,
    service: "VAT Return Filing",
    text: "I had a good experience with Marifah Tax Advisory for our quarterly VAT filing. They reviewed our documents, clarified a few transactions and completed the filing without any complications. Communication was pleasant and professional. Would definitely recommend their services.",
  },
  {
    id: "featured-alexander-petrov",
    name: "Alexander Petrov",
    rating: 5,
    service: "Accounting & Bookkeeping",
    text: "I was looking for accounting support for my business and Marifah Tax Advisory has been helpful. They manage our monthly bookkeeping and keep track of our expenses and income. I also appreciate that they explain things instead of just sending reports without any clarification.",
  },
  {
    id: "featured-mohammed-al-hammadi",
    name: "Mohammed Al Hammadi",
    rating: 5,
    service: "Accounting & Bookkeeping",
    text: "Good experience with Marifah Tax Advisory. They handle our monthly accounts and bank reconciliations. The team is responsive and follows up whenever any documents or clarification are required. It has made managing our business accounts much easier.",
  },
  {
    id: "featured-omar-abdullah",
    name: "Omar Abdullah",
    rating: 5,
    service: "Accounting & Bookkeeping",
    text: "Marifah Tax Advisory has been handling our accounting requirements, including monthly bookkeeping and financial reports. They are careful with the details and respond promptly whenever we need something. Good professional service and a reliable team to work with.",
  },
  {
    id: "featured-viktor-kuznetsov",
    name: "Viktor Kuznetsov",
    rating: 5,
    service: "Full Compliance Package",
    text: "We signed a one-year package with Marifah Tax Advisory covering our accounting, VAT and Corporate Tax requirements. The pricing was reasonable, and everything was clearly explained before we started. There were no unexpected or hidden charges, which I really appreciated.",
  },
  {
    id: "featured-ivan-petrov",
    name: "Ivan Petrov",
    rating: 5,
    service: "Corporate Tax Deregistration",
    text: "Good experience with Marifah Tax Advisory. They explained the requirements clearly and helped us complete the Corporate Tax deregistration without unnecessary complications. Thank you for the support.",
  },
  {
    id: "featured-sergey-ivanov",
    name: "Sergey Ivanov",
    rating: 5,
    service: "VAT Deregistration",
    text: "I had a good experience with Marifah Tax Advisory. They helped us understand the VAT deregistration requirements and took care of the process. Professional service at a reasonable price.",
  },
  {
    id: "featured-arjun-mehta",
    name: "Arjun Mehta",
    rating: 5,
    service: "Tax Deregistration",
    text: "Good service and reasonable pricing. They explained the deregistration requirements clearly and kept us informed about the application. Happy with the overall experience.",
  },
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
