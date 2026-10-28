// Server-only helpers for the Razorpay REST API. Never import this from a client component.
import crypto from "node:crypto";

const API_BASE = "https://api.razorpay.com/v1";

export class RazorpayConfigError extends Error {}

export class RazorpayApiError extends Error {
  status: number;
  details: unknown;
  constructor(message: string, status: number, details: unknown) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

export function getRazorpayKeys() {
  const keyId = process.env.RAZORPAY_KEY_ID?.trim();
  const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();
  if (!keyId || !keySecret) {
    throw new RazorpayConfigError("RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET are not set");
  }
  return { keyId, keySecret };
}

async function razorpayRequest<T>(method: "GET" | "POST" | "PATCH", path: string, body?: unknown): Promise<T> {
  const { keyId, keySecret } = getRazorpayKeys();
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
      "Content-Type": "application/json",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: "no-store",
  });
  const text = await res.text();
  let data: any = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!res.ok) {
    const description = data?.error?.description || `Razorpay API error ${res.status}`;
    throw new RazorpayApiError(description, res.status, data);
  }
  return data as T;
}

export type RazorpayNotes = Record<string, string>;

export type RazorpayOrder = {
  id: string;
  amount: number;
  amount_paid: number;
  currency: string;
  receipt: string | null;
  status: "created" | "attempted" | "paid";
  notes: RazorpayNotes | [];
  created_at: number;
};

export type RazorpayPayment = {
  id: string;
  amount: number;
  currency: string;
  status: "created" | "authorized" | "captured" | "refunded" | "failed";
  order_id: string | null;
  method: string;
  email?: string;
  contact?: string;
  notes: RazorpayNotes | [];
  created_at: number;
  card?: { network?: string; last4?: string; type?: string; issuer?: string; international?: boolean } | null;
};

export function createOrder(input: { amount: number; currency: string; receipt: string; notes: RazorpayNotes }) {
  return razorpayRequest<RazorpayOrder>("POST", "/orders", input);
}

export function fetchOrder(orderId: string) {
  return razorpayRequest<RazorpayOrder>("GET", `/orders/${encodeURIComponent(orderId)}`);
}

export function fetchPayment(paymentId: string) {
  return razorpayRequest<RazorpayPayment>("GET", `/payments/${encodeURIComponent(paymentId)}?expand[]=card`);
}

export function updatePaymentNotes(paymentId: string, notes: RazorpayNotes) {
  return razorpayRequest<RazorpayPayment>("PATCH", `/payments/${encodeURIComponent(paymentId)}`, { notes });
}

export function notesOf(entity: { notes: RazorpayNotes | [] } | null | undefined): RazorpayNotes {
  const n = entity?.notes;
  return n && !Array.isArray(n) ? n : {};
}

function safeEqualHex(a: string, b: string) {
  const ab = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

/** Checkout success signature: hmac_sha256(order_id + "|" + payment_id, key_secret) */
export function verifyPaymentSignature(orderId: string, paymentId: string, signature: string) {
  const { keySecret } = getRazorpayKeys();
  const expected = crypto.createHmac("sha256", keySecret).update(`${orderId}|${paymentId}`).digest("hex");
  return safeEqualHex(expected, String(signature || ""));
}

/** Webhook signature: hmac_sha256(raw_body, webhook_secret) */
export function verifyWebhookSignature(rawBody: string, signature: string, secret: string) {
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  return safeEqualHex(expected, String(signature || ""));
}

export const isValidOrderId = (id: unknown): id is string => typeof id === "string" && /^order_[A-Za-z0-9]{6,40}$/.test(id);
export const isValidPaymentId = (id: unknown): id is string => typeof id === "string" && /^pay_[A-Za-z0-9]{6,40}$/.test(id);
