// Server-only storage for reviews submitted on the website (Vercel Blob, private store).
//   reviews/pending/<id>.json   waiting for your approval (never shown)
//   reviews/approved/<id>.json  shown on the website
// Approve or reject from the links in the notification email.
import { del, get, list, put, rename } from "@vercel/blob";
import { FEATURED_REVIEWS, type Review } from "./data";

export type StoredReview = Review & { email: string; submittedAt: string };

const PENDING = "reviews/pending/";
const APPROVED = "reviews/approved/";

export const isValidReviewId = (id: unknown): id is string => typeof id === "string" && /^[a-z0-9-]{8,64}$/.test(id);

function storageReady() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readJson(pathname: string): Promise<StoredReview | null> {
  const res = await get(pathname, { access: "private", useCache: false }).catch(() => null);
  if (!res || res.statusCode !== 200 || !res.stream) return null;
  try {
    return JSON.parse(await new Response(res.stream).text()) as StoredReview;
  } catch {
    return null;
  }
}

export async function savePendingReview(review: StoredReview) {
  if (!storageReady()) throw new Error("storage_not_configured");
  await put(`${PENDING}${review.id}.json`, JSON.stringify(review), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

export async function getPendingReview(id: string) {
  return isValidReviewId(id) ? readJson(`${PENDING}${id}.json`) : null;
}

export async function getApprovedReview(id: string) {
  return isValidReviewId(id) ? readJson(`${APPROVED}${id}.json`) : null;
}

export async function approveReview(id: string) {
  await rename(`${PENDING}${id}.json`, `${APPROVED}${id}.json`, { access: "private", contentType: "application/json", addRandomSuffix: false });
}

export async function rejectReview(id: string) {
  await del(`${PENDING}${id}.json`);
}

export async function removeApprovedReview(id: string) {
  await del(`${APPROVED}${id}.json`);
}

/** Approved website reviews, newest first, without private fields (email). */
export async function listApprovedReviews(): Promise<Review[]> {
  if (!storageReady()) return [];
  try {
    const paths: string[] = [];
    let cursor: string | undefined;
    do {
      const page = await list({ prefix: APPROVED, cursor, limit: 1000 });
      paths.push(...page.blobs.map((b) => b.pathname));
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
    const items = await Promise.all(paths.map(readJson));
    return items
      .filter((r): r is StoredReview => !!r)
      .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))
      .map(({ id, name, rating, text, service, date }) => ({ id, name, rating, text, service, date }));
  } catch (err) {
    console.error("[reviews] could not load approved reviews", err);
    return [];
  }
}

/** Every review shown on the site: approved website reviews (newest first), then featured ones. */
export async function allPublicReviews(): Promise<Review[]> {
  return [...(await listApprovedReviews()), ...FEATURED_REVIEWS];
}
