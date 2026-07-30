import { contactInfo } from "@/data/contact";

const foundingYear = 1989;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-stone-950/95 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-light tracking-wider text-white/60">
          {`© ${currentYear} ${contactInfo.businessName.toUpperCase()} — Sabor e Tradicao desde ${foundingYear}`}
        </p>
      </div>
    </footer>
  );
}
