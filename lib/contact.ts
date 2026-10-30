// Client-side helpers for the website's enquiry forms (the "Free Consultation"
// pop-up and the homepage contact form). Every enquiry is emailed to
// info@marifahtax.com by /api/contact; WhatsApp is the fallback if email fails.

export const WHATSAPP_NUMBER = "971505815245";

export const SERVICE_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Corporate Tax",
    items: ["Corporate Tax Registration", "Corporate Tax Return Filing", "Corporate Tax De-Registration", "Corporate Tax Advice"],
  },
  { label: "VAT", items: ["VAT Registration", "VAT Return Filing", "VAT De-Registration"] },
  { label: "Accounting & compliance", items: ["Accounting & Bookkeeping", "Full Compliance Package", "WPS Service", "AML Services"] },
  { label: "Other", items: ["Not sure / Other"] },
];

export const CONTACT_METHODS = ["WhatsApp", "Email"] as const;

export type Enquiry = {
  name: string;
  phone: string;
  email: string;
  service: string;
  company?: string;
  contactBy?: string;
  message?: string;
  source: string;
  website?: string; // hidden spam trap; real visitors leave it empty
};

/** Sends the enquiry to /api/contact. Resolves true only when the email was delivered to Marifah. */
export async function submitEnquiry(enquiry: Enquiry): Promise<boolean> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
    });
    if (!res.ok) return false;
    const data = await res.json().catch(() => ({}));
    const ok = data?.ok === true;
    if (ok) remember("enquiry_sent");
    return ok;
  } catch {
    return false;
  }
}

// ---- Automatic pop-up bookkeeping (stored in the visitor's browser) ----
// "welcome" = shown once after arriving, "exit" = shown once when leaving (computers),
// "enquiry_sent" = visitor already sent a form, so never show the pop-up again.
type Flag = "welcome" | "exit" | "enquiry_sent";
const memoryFlags = new Set<Flag>(); // fallback when the browser blocks storage

export function remember(flag: Flag) {
  memoryFlags.add(flag);
  try {
    localStorage.setItem(`marifah_popup_${flag}`, "1");
  } catch {}
}

export function hasFlag(flag: Flag) {
  if (memoryFlags.has(flag)) return true;
  try {
    return localStorage.getItem(`marifah_popup_${flag}`) === "1";
  } catch {
    return false;
  }
}

/** WhatsApp link with the enquiry pre-filled (used as a fallback and as a "chat now" option). */
export function whatsappLink(enquiry?: Partial<Enquiry>) {
  if (!enquiry?.name) return `https://wa.me/${WHATSAPP_NUMBER}`;
  const lines = [
    "Hello Marifah Tax Advisory,",
    "",
    `Name: ${enquiry.name}`,
    enquiry.company ? `Company: ${enquiry.company}` : "",
    enquiry.phone ? `Mobile: ${enquiry.phone}` : "",
    enquiry.email ? `Email: ${enquiry.email}` : "",
    enquiry.service ? `Service: ${enquiry.service}` : "",
    enquiry.message ? `\nMessage: ${enquiry.message}` : "",
  ].filter((l) => l !== "");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isValidPhone(value: string) {
  return value.replace(/\D/g, "").length >= 7;
}
