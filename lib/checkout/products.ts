// ─── ONLINE SERVICES & PRICES ───────────────────────────────────
// These are the services clients can buy online.
// The price here is the price charged by Razorpay — change it here only.
// (The server reads this file, so a client cannot change the price in the browser.)

export const CURRENCY = "AED";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // in AED, inclusive of all charges
};

export const PRODUCTS: Record<string, Product> = {
  "ct-registration": {
    id: "ct-registration",
    name: "Corporate Tax Registration",
    description:
      "FTA Corporate Tax registration on EmaraTax — document review, submission and follow-up until your TRN is issued. Turnaround 3–5 working days.",
    price: 499,
  },
};

export const CT_REGISTRATION_ID = "ct-registration";

// Maximum quantity of one service per order (e.g. registering several companies).
export const MAX_QTY = 10;

export function formatPrice(amount: number) {
  return `${CURRENCY} ${amount.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

export const EMIRATES = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
] as const;
