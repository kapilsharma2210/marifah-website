import { Quote, Star } from "lucide-react";
import { reviewerName, type Review } from "@/lib/reviews/data";

export function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const cls = size === "lg" ? "w-6 h-6" : size === "md" ? "w-5 h-5" : "w-4 h-4";
  const full = Math.round(rating);
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`${cls} ${i <= full ? "fill-amber-400 text-amber-400" : "fill-muted text-muted-foreground/30"}`} />
      ))}
    </div>
  );
}

function formatDate(iso?: string) {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? null : d.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
}

export function ReviewCard({ review, clamp = false }: { review: Review; clamp?: boolean }) {
  const name = reviewerName(review);
  const date = formatDate(review.date);
  return (
    <figure className="relative h-full flex flex-col rounded-2xl bg-background border border-border p-6 sm:p-7 hover:border-primary/30 hover:shadow-sm transition-all">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" aria-hidden="true" />
      <Stars rating={review.rating} />
      <blockquote className={`mt-4 text-[15px] text-foreground/85 leading-relaxed flex-grow ${clamp ? "line-clamp-5" : ""}`}>
        {review.text}
      </blockquote>
      <figcaption className="mt-6 pt-4 border-t border-border flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        {(review.service || date) && (
          <span className="text-xs text-muted-foreground">{[review.service, date].filter(Boolean).join(" · ")}</span>
        )}
      </figcaption>
    </figure>
  );
}
