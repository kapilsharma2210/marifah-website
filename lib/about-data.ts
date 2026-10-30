// ─── ABOUT US PAGE CONTENT ───────────────────────────────────────
// Edit the text here; the layout lives in components/content/about-page.tsx.
// Any list left empty ([]) is hidden on the page automatically.

export type AboutValue = { title: string; body: string };
export type AboutAudience = { title: string; body: string };
export type AboutStep = { title: string; body: string };
export type AboutFaq = { title: string; body: string };
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string; // e.g. "/images/team/your-name.jpg" (square photo, at least 400×400)
  credentials?: string[]; // e.g. ["ACCA", "FTA-registered Tax Agent"]
};

export const about = {
  title: "About Marifah Tax Advisory",
  tagline: "UAE Corporate Tax · VAT · Accounting",
  intro:
    "We help businesses across the UAE register, file and stay compliant with Corporate Tax and VAT, and keep their books in order — with clear advice, flat fees and one dedicated advisor who knows your business.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=90",
    alt: "Dubai skyline",
  },

  // 1. Who we are
  whoWeAre: [
    "Marifah Tax Advisory is a tax advisory firm serving businesses in the United Arab Emirates. We focus on three areas — Corporate Tax, VAT and accounting — and work with startups, SMEs, free zone companies and freelancers who want their tax obligations handled correctly and on time.",
    "Since Corporate Tax was introduced in the UAE in 2023, compliance has become more demanding for every business. Our role is to make it simple: we explain what applies to you in plain language, prepare and file everything with the Federal Tax Authority (FTA), and keep you ahead of deadlines and regulation changes.",
    "Everything can be handled online. You share documents securely, we keep you updated on WhatsApp and email, and you always know what has been filed and what comes next.",
  ],

  // Optional photo strip under "Who we are". Files go in the /public folder.
  // The first photo is shown large. Leave the list empty ([]) to hide it.
  // To add a reception photo, upload a real, unbranded one as /public/office-reception.jpg
  // and add: { src: "/office-reception.jpg", alt: "Office reception area" },
  photos: [
    { src: "/office-workspace.jpg", alt: "Small office workspace with desk and chairs" },
    { src: "/client-meeting.jpg", alt: "Advisor discussing a business matter with clients at a meeting table" },
    { src: "/document-review.jpg", alt: "Two professionals reviewing documents at a table" },
    { src: "/office-desk.jpg", alt: "Office desk with computer and plants" },
    { src: "/team-discussion.jpg", alt: "Business professionals talking in an office lobby" },
  ],

  // 2. Mission & values
  mission:
    "To make UAE tax compliance clear, affordable and stress-free for every business — so that no company pays a penalty simply because it did not get the right guidance in time.",
  values: [
    { title: "Accuracy", body: "Every registration and return is prepared carefully and reviewed before it reaches the FTA." },
    { title: "Transparency", body: "Flat, published fees. You know the price before we start — no hidden charges." },
    { title: "Responsiveness", body: "A dedicated advisor who replies quickly on WhatsApp, phone or email." },
    { title: "Confidentiality", body: "Your financial and personal documents are handled securely and used only for your engagement." },
  ] as AboutValue[],

  // 3. How we work
  process: [
    { title: "Free consultation", body: "Tell us about your business. In a free 30-minute call we identify which Corporate Tax and VAT obligations apply and what needs to be done." },
    { title: "Clear quote and document checklist", body: "You receive a flat-fee quote and a simple checklist of the documents we need — usually your trade licence, passport, Emirates ID and MOA." },
    { title: "Preparation and review", body: "We prepare your registration or return, reconcile the figures and go through everything with you before anything is submitted." },
    { title: "Submission to the FTA", body: "We file through the FTA's EmaraTax portal and share the confirmation with you for your records." },
    { title: "Ongoing support", body: "We track your deadlines, remind you ahead of each filing and answer your questions as your business grows." },
  ] as AboutStep[],

  // 4. Who we work with
  audiences: [
    { title: "Startups & new companies", body: "Get registered correctly from day one and avoid late-registration penalties." },
    { title: "SMEs & growing businesses", body: "VAT, Corporate Tax and bookkeeping handled together by one team." },
    { title: "Free zone companies", body: "Qualifying Free Zone Person (QFZP) assessments and compliant filings." },
    { title: "Freelancers & sole establishments", body: "Find out whether — and how — Corporate Tax applies to you." },
  ] as AboutAudience[],

  // 5. Why businesses trust us
  trust: [
    "Experienced & certified tax professionals",
    "100% FTA-compliant processes",
    "Transparent pricing — no hidden charges",
    "Fast turnaround — registrations done in days",
    "Dedicated support — we answer your calls and emails",
    "Serving 2000+ businesses across the UAE",
  ],

  // 6. Our team — add real people here and the section appears automatically.
  // Example:
  // { name: "Your Name", role: "Founder & Tax Partner", bio: "Two or three sentences about experience.", photo: "/images/team/your-name.jpg", credentials: ["ACCA"] },
  team: [] as TeamMember[],

  // 7. Questions about working with us
  faq: [
    { title: "Do you work with businesses in every Emirate?", body: "Yes. We serve mainland and free zone businesses across all seven Emirates, and the whole process can be completed online." },
    { title: "How much do your services cost?", body: "Our fees are flat and published on our Packages page — for example, Corporate Tax registration from AED 499 and VAT registration from AED 799. There are no hidden charges." },
    { title: "How quickly can you start?", body: "Right after your free consultation we send your quote and document checklist. VAT registration (TRN) is typically completed within 3–5 working days once all documents are submitted." },
    { title: "Will I have one point of contact?", body: "Yes. Every client is assigned a dedicated advisor who knows your business and handles your filings from start to finish." },
  ] as AboutFaq[],

  // 8. Closing promise
  promise:
    "When you choose Marifah Tax Advisory, you gain a committed partner, not just a filing service. We advise, we plan and we help protect your business from avoidable tax costs and FTA penalties.",

  // Sidebar "At a glance"
  glance: [
    ["Services", "Corporate Tax · VAT · Accounting"],
    ["Coverage", "All seven Emirates"],
    ["Business hours", "Mon–Fri, 9 AM – 6 PM (UAE time)"],
    ["Response time", "Within 1 hour on WhatsApp"],
    ["Pricing", "Flat fees, no hidden charges"],
  ] as [string, string][],
};
