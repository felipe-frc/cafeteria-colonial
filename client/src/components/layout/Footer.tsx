import { Instagram, MapPin } from "lucide-react";
import { contactInfo } from "@/data/contact";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--brown-rgb)/0.14)] bg-[rgb(var(--cream-rgb)/0.94)] text-[rgb(var(--brown-rgb))]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo-cafeteria.png"
              alt=""
              className="size-14 object-contain"
            />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[rgb(var(--terracotta-rgb))]">
                Cafeteria Raízes
              </p>
              <p className="mt-1 text-sm text-[rgb(var(--brown-rgb)/0.78)]">
                Patrocínio, MG
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              aria-label="Localização"
              className="flex size-10 items-center justify-center rounded-full border border-[rgb(var(--brown-rgb)/0.14)] bg-white/55 text-[rgb(var(--green-rgb))] transition hover:border-[rgb(var(--terracotta-rgb)/0.3)] hover:text-[rgb(var(--terracotta-rgb))]"
            >
              <MapPin className="size-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full border border-[rgb(var(--brown-rgb)/0.14)] bg-white/55 text-[rgb(var(--green-rgb))] transition hover:border-[rgb(var(--terracotta-rgb)/0.3)] hover:text-[rgb(var(--terracotta-rgb))]"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[rgb(var(--brown-rgb)/0.1)] pt-4 text-center text-xs text-[rgb(var(--brown-rgb)/0.64)] sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} {contactInfo.businessName}. Todos os direitos reservados.</p>
          <p>Sabor e tradição desde 1989</p>
        </div>
      </div>
    </footer>
  );
}
