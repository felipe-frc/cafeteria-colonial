type SectionTitleProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
  tone?: "light" | "dark";
};

export function SectionTitle({
  eyebrow,
  title,
  centered = true,
  tone = "light",
}: SectionTitleProps) {
  const titleClass =
    tone === "dark" ? "text-[rgb(var(--cream-rgb))]" : "text-[rgb(var(--green-rgb))]";
  const eyebrowClass =
    tone === "dark" ? "text-[rgb(var(--gold-rgb))]" : "text-[rgb(var(--terracotta-rgb))]";
  const dividerClass =
    tone === "dark" ? "bg-[rgb(var(--gold-rgb))]" : "bg-[rgb(var(--terracotta-rgb))]";

  return (
    <div className={centered ? "text-center" : undefined}>
      <span
        className={`mb-4 block text-xs font-bold uppercase tracking-[0.3em] ${eyebrowClass}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`whitespace-pre-line text-4xl font-semibold leading-[1.08] md:text-5xl ${titleClass}`}
      >
        {title}
      </h2>
      <div className={`mt-6 h-0.5 w-16 ${dividerClass} ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
