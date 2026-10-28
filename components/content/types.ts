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
};

export type BlogPost = {
  title: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  sections?: BlogSection[];
};

/** "From AED 499" → { label: "Starting from", amount: "AED 499" } */
export function splitPrice(price: string) {
  const from = /^from\s+/i.test(price);
  return { label: from ? "Starting from" : "Package price", amount: price.replace(/^from\s+/i, "") };
}
