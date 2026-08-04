import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { SectionTitle } from "./SectionTitle";

const ROTATION_INTERVAL_MS = 4200;

export function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setStartIndex(currentIndex => (currentIndex + 1) % reviews.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  const visibleReviews = Array.from({ length: 3 }, (_, offset) => {
    return reviews[(startIndex + offset) % reviews.length];
  });

  return (
    <section id="avaliacoes" className="botanical-section section-space scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle eyebrow="Experiências reais" title="Quem chega, quer voltar" />
          <p className="mt-5 text-base leading-7 text-[rgb(var(--brown-rgb))]">
            Mais do que servir café, queremos fazer parte dos seus bons momentos com
            leveza, sabor e memória afetiva.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {visibleReviews.map((review, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={`${review.name}-${startIndex}-${index}`}
                className={`review-card rounded-[1.8rem] border p-7 transition-all duration-500 sm:p-8 ${
                  isFeatured
                    ? "border-[rgb(var(--green-rgb))] bg-[rgb(var(--green-rgb))] text-white md:-translate-y-4 md:scale-[1.02]"
                    : "border-[rgb(var(--brown-rgb)/0.14)] bg-[rgb(var(--cream-rgb)/0.72)] text-[rgb(var(--brown-rgb))]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1" aria-label={`${review.rating} estrelas`}>
                    {Array.from({ length: review.rating }, (_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`size-4 ${
                          isFeatured
                            ? "fill-[rgb(var(--gold-rgb))] text-[rgb(var(--gold-rgb))]"
                            : "fill-[rgb(var(--terracotta-rgb))] text-[rgb(var(--terracotta-rgb))]"
                        }`}
                      />
                    ))}
                  </div>
                  <span
                    className={`text-[0.7rem] font-bold uppercase tracking-[0.24em] ${
                      isFeatured ? "text-[rgb(var(--gold-rgb)/0.76)]" : "text-[rgb(var(--brown-rgb)/0.68)]"
                    }`}
                  >
                    Avaliação real
                  </span>
                </div>

                <blockquote
                  className={`mt-7 rounded-[1.4rem] border px-5 py-5 text-base leading-7 ${
                    isFeatured
                      ? "border-white/12 bg-white/6 text-[rgb(var(--cream-rgb)/0.9)]"
                      : "border-[rgb(var(--brown-rgb)/0.12)] bg-[rgb(var(--cream-rgb)/0.55)] text-[rgb(var(--brown-rgb))]"
                  }`}
                >
                  <Quote
                    className={`mb-3 size-6 ${
                      isFeatured ? "text-[rgb(var(--gold-rgb))]" : "text-[rgb(var(--terracotta-rgb))]"
                    }`}
                  />
                  <p>
                    &ldquo;{review.text}&rdquo;
                  </p>
                </blockquote>

                <div
                  className={`mt-7 border-t pt-5 ${
                    isFeatured ? "border-white/12" : "border-[rgb(var(--brown-rgb)/0.14)]"
                  }`}
                >
                  <p className={`text-sm font-bold ${isFeatured ? "text-white" : "text-[rgb(var(--green-rgb))]"}`}>
                    {review.name}
                  </p>
                  <span className={`text-xs ${isFeatured ? "text-white/55" : "text-[rgb(var(--brown-rgb)/0.78)]"}`}>
                    Cliente da casa
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-1.5" aria-label="Navegação das avaliações">
          {reviews.map((review, index) => {
            const isActive = index === (startIndex + 1) % reviews.length;

            return (
              <span
                key={review.name}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-2.5 w-8 bg-[rgb(var(--terracotta-rgb))]"
                    : "h-2.5 w-2.5 bg-[rgb(var(--gold-rgb)/0.55)]"
                }`}
                aria-hidden="true"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
