import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactInfo } from "@/data/contact";

const navigationItems = [
  { label: "Nossa história", href: "#sobre" },
  { label: "Cardápio", href: "#menu" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Visite-nos", href: "#contato" },
];

type HeaderProps = { cartItemsCount: number; onCartOpen: () => void };

export function Header({ cartItemsCount, onCartOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-[rgb(var(--brown-rgb)/0.14)] bg-[rgb(var(--cream-rgb)/0.9)] px-5 shadow-[0_18px_42px_rgb(var(--brown-rgb)/0.12)] backdrop-blur-xl lg:px-8">
        <nav aria-label="Navegação principal" className="flex h-[82px] items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center rounded-full px-1 py-1"
            aria-label={`${contactInfo.businessName}, início`}
          >
            <img
              src="/images/branding/logo-raizes.webp"
              alt=""
              className="size-[6.5rem] scale-[1.08] object-contain sm:size-[7rem]"
            />
          </a>

          <div className="hidden items-center gap-10 lg:flex xl:gap-12">
            {navigationItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="nav-label rounded-full px-2.5 py-3 text-[rgb(var(--green-rgb)/0.92)] transition hover:text-[rgb(var(--terracotta-rgb))]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onCartOpen}
              className="relative flex h-12 items-center gap-2.5 rounded-full bg-[rgb(var(--terracotta-rgb))] px-5 text-[0.78rem] font-bold uppercase tracking-[.14em] text-white shadow-[0_12px_28px_rgb(var(--terracotta-rgb)/0.24)] transition hover:bg-[rgb(var(--terracotta-rgb)/0.92)] active:scale-[0.99]"
              aria-label={`Abrir pedido com ${cartItemsCount} item(ns)`}
            >
              <ShoppingBag className="size-4" />
              <span className="hidden sm:inline">Meu pedido</span>
              {cartItemsCount > 0 && (
                <span className="flex size-5 items-center justify-center rounded-full bg-[rgb(var(--green-rgb))] text-[10px] text-white">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex size-12 items-center justify-center rounded-full border border-[rgb(var(--brown-rgb)/0.2)] text-[rgb(var(--green-rgb))] lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <nav aria-label="Menu móvel" className="grid border-t border-[rgb(var(--brown-rgb)/0.12)] py-3 lg:hidden">
            {navigationItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-[0.95rem] font-semibold text-[rgb(var(--green-rgb)/0.78)] hover:bg-[rgb(var(--cream-rgb)/0.88)] hover:text-[rgb(var(--green-rgb))]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
