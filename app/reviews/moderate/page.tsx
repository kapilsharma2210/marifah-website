// Owner-only page opened from the "New review" email. Opening the link only shows the
// review; the change happens when you press the button (so email link scanners can't
// approve or reject anything by themselves).
import type { Metadata } from "next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { emailLayout, sendEmail } from "@/lib/checkout/server/email";
import { signReviewAction, verifyReviewAction, type ReviewAction } from "@/lib/checkout/server/tokens";
import { reviewerName } from "@/lib/reviews/data";
import {
  approveReview, getApprovedReview, getPendingReview, isValidReviewId, rejectReview, removeApprovedReview,
} from "@/lib/reviews/server";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Review moderation | Marifah Tax Advisory", robots: { index: false, follow: false } };

const ACTIONS: Record<ReviewAction, { button: string; done: string }> = {
  approve: { button: "Approve & publish", done: "Published. The review now appears on the website." },
  reject: { button: "Reject & delete", done: "Rejected. The review has been deleted." },
  remove: { button: "Remove from website", done: "Removed. The review no longer appears on the website." },
};

async function act(formData: FormData) {
  "use server";
  const id = String(formData.get("id") || "");
  const a = String(formData.get("a") || "") as ReviewAction;
  const s = String(formData.get("s") || "");
  if (!(a in ACTIONS) || !isValidReviewId(id) || !verifyReviewAction(id, a, s)) redirect("/reviews/moderate?error=link");
  try {
    if (a === "approve") {
      const review = await getPendingReview(id);
      await approveReview(id);
      // Confirmation email with a link to take the review down again later.
      const removeLink = `https://www.marifahtax.com/reviews/moderate?id=${id}&a=remove&s=${signReviewAction(id, "remove")}`;
      const { html, text } = emailLayout({
        heading: "Review published",
        intro: "This review is now live on marifahtax.com/reviews. Keep this email: the button below removes it from the website at any time.",
        rows: [
          ["Name", review ? reviewerName(review) : ""],
          ["Rating", review ? `${review.rating} / 5` : ""],
          ["Review", review?.text ?? ""],
        ],
        extraHtml: `<div style="margin-top:20px"><a href="${removeLink}" style="display:inline-block;border:1px solid #1B2B5B;color:#1B2B5B;text-decoration:none;padding:9px 18px;border-radius:999px;font-size:13px;font-weight:bold">Remove from website</a></div>`,
      });
      await sendEmail({ subject: `Review published${review ? ` — ${reviewerName(review)}` : ""}`, html, text: `${text}

Remove: ${removeLink}` });
    }
    if (a === "reject") await rejectReview(id);
    if (a === "remove") await removeApprovedReview(id);
  } catch (err) {
    console.error("[reviews] moderation failed", err);
    redirect(`/reviews/moderate?error=failed`);
  }
  revalidatePath("/");
  revalidatePath("/reviews");
  redirect(`/reviews/moderate?done=${a}`);
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-sm">
        <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Review moderation</p>
        {children}
      </div>
    </main>
  );
}

export default async function ModeratePage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const { id = "", a = "", s = "", done, error } = await searchParams;

  if (done && done in ACTIONS) {
    return (
      <Shell>
        <p className="text-foreground font-semibold mb-4">{ACTIONS[done as ReviewAction].done}</p>
        <a href="/reviews" className="text-sm font-semibold text-primary hover:underline">View reviews page →</a>
      </Shell>
    );
  }
  if (error) {
    return (
      <Shell>
        <p className="text-foreground">
          {error === "link" ? "This link is not valid." : "Something went wrong. Please try the link again in a minute."}
        </p>
      </Shell>
    );
  }

  const action = a as ReviewAction;
  if (!(action in ACTIONS) || !isValidReviewId(id) || !verifyReviewAction(id, action, s)) {
    return <Shell><p className="text-foreground">This link is not valid.</p></Shell>;
  }

  const review = action === "remove" ? await getApprovedReview(id) : await getPendingReview(id);
  if (!review) {
    return (
      <Shell>
        <p className="text-foreground">This review has already been handled, or it no longer exists.</p>
      </Shell>
    );
  }

  return (
    <Shell>
      <p className="text-amber-500 text-lg mb-1" aria-label={`${review.rating} out of 5 stars`}>
        {"★".repeat(review.rating)}<span className="text-muted-foreground/40">{"★".repeat(5 - review.rating)}</span>
      </p>
      <p className="text-foreground leading-relaxed whitespace-pre-wrap mb-4">{review.text}</p>
      <p className="text-sm text-muted-foreground mb-6">
        {reviewerName(review)} · {review.email}
        {review.service ? ` · ${review.service}` : ""}
      </p>
      <form action={act} className="flex flex-col sm:flex-row gap-3">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="a" value={action} />
        <input type="hidden" name="s" value={s} />
        <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90">
          {ACTIONS[action].button}
        </button>
      </form>
      {action === "approve" && (
        <p className="text-xs text-muted-foreground mt-4">
          Changed your mind later? Every published review can be removed from the link in the confirmation email.
        </p>
      )}
    </Shell>
  );
}
