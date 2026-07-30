import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { SectionTitle } from "./SectionTitle";

function prefersReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ReviewsSection() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentReviewIndex((previousIndex) => (previousIndex + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const visibleReviews = useMemo(() => {
    return Array.from({ length: 3 }, (_, index) => {
      return reviews[(currentReviewIndex + index) % reviews.length];
    });
  }, [currentReviewIndex]);

  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#9e5227_0%,#7d3d1d_100%)] py-24 text-white"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/background-home.webp')] bg-[length:720px_auto] bg-center opacity-[0.12]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <SectionTitle eyebrow="Depoimentos" title="O Que Dizem Sobre Nos" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {visibleReviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[1.5rem] border border-white/10 bg-white/8 p-8 shadow-[0_15px_35px_rgba(0,0,0,0.15)] backdrop-blur-sm"
            >
              <div className="mb-4 flex gap-1" aria-label={`${review.rating} estrelas`}>
                {Array.from({ length: review.rating }, (_, index) => (
                  <Star key={index} className="h-4 w-4 fill-amber-300 text-amber-300" />
                ))}
              </div>

              <blockquote className="min-h-28 text-base leading-7 text-[#fff4e8]">
                "{review.text}"
              </blockquote>
              <p className="mt-4 font-semibold text-amber-200">{review.name}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setCurrentReviewIndex(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentReviewIndex
                  ? "w-8 bg-amber-300"
                  : "w-2.5 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
