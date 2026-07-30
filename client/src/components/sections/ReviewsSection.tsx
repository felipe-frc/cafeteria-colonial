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
    <section id="avaliacoes" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <SectionTitle eyebrow="Depoimentos" title="O Que Dizem Sobre Nós" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {visibleReviews.map((review) => (
            <article
              key={review.name}
              className="rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-amber-600/50 hover:bg-amber-600/5"
            >
              <div className="mb-4 flex gap-1" aria-label={`${review.rating} estrelas`}>
                {Array.from({ length: review.rating }, (_, index) => (
                  <Star key={index} className="h-5 w-5 fill-amber-600 text-amber-600" />
                ))}
              </div>

              <blockquote className="mb-6 text-lg font-light leading-relaxed text-white/85">
                "{review.text}"
              </blockquote>
              <p className="font-bold text-amber-600">{review.name}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setCurrentReviewIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentReviewIndex
                  ? "w-8 bg-amber-600"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para avaliação ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
