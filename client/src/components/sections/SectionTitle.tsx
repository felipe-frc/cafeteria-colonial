type SectionTitleProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : undefined}>
      <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-[rgb(var(--terracotta-rgb))]">
        {eyebrow}
      </span>
      <h2 className="whitespace-pre-line text-4xl font-semibold leading-[1.08] text-[rgb(var(--green-rgb))] md:text-5xl">
        {title}
      </h2>
      <div className={`mt-6 h-0.5 w-16 bg-[rgb(var(--terracotta-rgb))] ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
