import type { Metadata } from "next";
import { PenLine } from "lucide-react";
import { SiteShell } from "@/components/site-app";
import { ReviewCard, Stars } from "@/components/reviews/review-card";
import { ReviewForm } from "@/components/reviews/review-form";
import { ratingSummary } from "@/lib/reviews/data";
import { allPublicReviews } from "@/lib/reviews/server";

// Re-checked every 5 minutes; approving a review refreshes the page straight away.
export const revalidate = 300;

const title = "Client Reviews | Marifah Tax Advisory";
const description =
  "Read what UAE businesses say about Marifah Tax Advisory's Corporate Tax, VAT and accounting services, and share your own experience.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/reviews" },
  openGraph: { url: "/reviews", title, description },
};

export default async function ReviewsPage() {
  const reviews = await allPublicReviews();
  const { count, average, breakdown } = ratingSummary(reviews);

  return (
    <SiteShell>
      <section className="bg-card border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Home</a><span className="mx-1.5">/</span><span className="text-foreground">Reviews</span>
            </nav>
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Client Reviews</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Feedback from businesses we have helped with Corporate Tax, VAT and accounting across the UAE. Worked with us? We&apos;d value your review.
            </p>
            <a href="#write" className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              <PenLine className="w-4 h-4" /> Write a review
            </a>
          </div>

          {count > 0 && (
            <div className="bg-background border border-border rounded-2xl p-6 w-full md:w-80">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-5xl font-bold text-foreground leading-none tabular-nums">{average.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground pb-1">out of 5</span>
              </div>
              <Stars rating={average} size="md" />
              <p className="text-sm text-muted-foreground mt-2">Based on {count} client review{count === 1 ? "" : "s"}</p>
              <div className="mt-5 space-y-1.5">
                {breakdown.map((b) => (
                  <div key={b.stars} className="flex items-center gap-2 text-xs">
                    <span className="w-8 text-muted-foreground tabular-nums">{b.stars} ★</span>
                    <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: `${count ? (b.count / count) * 100 : 0}%` }} />
                    </div>
                    <span className="w-6 text-right text-muted-foreground tabular-nums">{b.count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <h2 className="sr-only">All reviews</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => <ReviewCard key={r.id} review={r} />)}
        </div>
      </section>

      <section id="write" className="scroll-mt-24 max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-card border border-primary/20 rounded-3xl p-6 sm:p-10">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Share your experience</p>
          <h2 className="text-2xl font-bold text-foreground mb-2">Write a review</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Tell other business owners what it was like to work with us. Every review is checked before it is published.
          </p>
          <ReviewForm />
        </div>
      </section>
    </SiteShell>
  );
}
