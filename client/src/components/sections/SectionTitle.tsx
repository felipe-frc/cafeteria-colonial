import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
  tone?: "dark" | "light";
};

export function SectionTitle({
  eyebrow,
  title,
  centered = true,
  tone = "dark",
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : undefined}>
      <span className="mb-4 block text-sm font-light uppercase tracking-[0.3em] text-amber-600">
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mb-8 whitespace-pre-line text-4xl font-black leading-tight md:text-5xl lg:text-6xl",
          tone === "light" ? "text-[#2d1810]" : "text-white"
        )}
      >
        {title}
      </h2>
      <div
        className={
          centered
            ? "mx-auto h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-900"
            : "h-1 w-16 bg-amber-600"
        }
      />
    </div>
  );
}
