import type { ComponentType } from "react";

export type ServiceInfo = {
  icon: ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  points: string[];
  price: string;
  sections?: { title: string; body: string }[];
  pricing?: { label: string; price: string; highlight?: boolean; productId?: string }[];
};

export type BlogSection = {
  type: string;
  heading?: string;
  body?: string;
  items?: (string | { title: string; body: string })[];
  /** For type "image": photo URL, alt text and an optional caption. */
  src?: string;
  alt?: string;
  caption?: string;
};

export type BlogPost = {
  title: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  /** Last updated, as YYYY-MM-DD. */
  updated?: string;
  /** Cover photo shown at the top of the article and on the featured/homepage cards. */
  cover?: { src: string; alt?: string; credit?: string };
  sections?: BlogSection[];
};

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2026-11-01" → "1 November 2026" */
export function formatDate(iso?: string) {
  const m = iso?.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return iso ?? "";
  return `${Number(m[3])} ${MONTH_NAMES[Number(m[2]) - 1]} ${m[1]}`;
}

/** "From AED 499" → { label: "Starting from", amount: "AED 499" } */
export function splitPrice(price: string) {
  const from = /^from\s+/i.test(price);
  return { label: from ? "Starting from" : "Package price", amount: price.replace(/^from\s+/i, "") };
}
