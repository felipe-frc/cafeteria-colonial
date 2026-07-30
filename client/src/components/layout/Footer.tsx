import { Instagram, Facebook, MessageCircle, Send } from "lucide-react";
import { contactInfo } from "@/data/contact";

const navigationLinks = ["Sobre", "Menu", "Avaliacoes", "Contato"];
const infoLinks = [
  "Politica de Privacidade",
  "Termos de Uso",
  "Trabalhe Conosco",
  "Perguntas Frequentes",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#2a180f_0%,#1a100c_100%)] text-[#f2dfcf]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.2fr]">
          <div>
            <img
              src="/images/logo-cafeteria.png"
              alt={contactInfo.businessName}
              className="h-20 object-contain"
            />

            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, MessageCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Rede social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300 transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
              Navegacao
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#d9c1ad]">
              {navigationLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase() === "avaliacoes" ? "avaliacoes" : link.toLowerCase()}`} className="!text-[#d9c1ad] hover:!text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
              Informacoes
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#d9c1ad]">
              {infoLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="!text-[#d9c1ad] hover:!text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
              Newsletter
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#d9c1ad]">
              Receba novidades e promocoes exclusivas no seu e-mail.
            </p>

            <div className="mt-6 flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="h-12 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-[#c9af98] focus:outline-none"
              />
              <button
                type="button"
                className="flex h-12 w-14 items-center justify-center bg-amber-600 text-white transition-colors hover:bg-amber-500"
                aria-label="Enviar e-mail"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-[#c9af98] md:flex-row md:items-center md:justify-between">
          <p>{`© ${currentYear} Cafeteria Raizes - Todos os direitos reservados.`}</p>
          <p>Sabor da Tradicao desde 1989</p>
        </div>
      </div>
    </footer>
  );
}
