type SectionTitleProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
};

export function SectionTitle({ eyebrow, title, centered = true }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : undefined}>
      <span className="mb-4 block text-sm font-light uppercase tracking-[0.3em] text-amber-600">
        {eyebrow}
      </span>
      <h2 className="mb-8 whitespace-pre-line text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div className={centered ? "mx-auto h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-900" : "h-1 w-16 bg-amber-600"} />
    </div>
  );
}
