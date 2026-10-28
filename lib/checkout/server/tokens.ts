// Signed tokens so only a client who actually paid can upload documents for their order,
// and so the download links in your notification emails can't be guessed.
import crypto from "node:crypto";
import { getRazorpayKeys } from "./razorpay";

function key(purpose: string) {
  const base = process.env.CHECKOUT_SIGNING_SECRET?.trim() || getRazorpayKeys().keySecret;
  return crypto.createHash("sha256").update(`marifah:${purpose}:${base}`).digest();
}

function sign(purpose: string, value: string) {
  return crypto.createHmac("sha256", key(purpose)).update(value).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

/** Token given to the client after a verified payment — allows uploading documents for that order. */
export function signOrderToken(orderId: string) {
  return sign("order", orderId);
}

export function verifyOrderToken(orderId: string, token: unknown) {
  if (typeof token !== "string" || !token) return false;
  return safeEqual(signOrderToken(orderId), token);
}

/** Signature for owner-only document download links. */
export function signFilePath(pathname: string) {
  return sign("file", pathname);
}

export function verifyFilePath(pathname: string, signature: unknown) {
  if (typeof signature !== "string" || !signature) return false;
  return safeEqual(signFilePath(pathname), signature);
}
