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
        <nav aria-label="Navegação principal" className="flex h-[74px] items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center"
            aria-label={`${contactInfo.businessName}, início`}
          >
            <img
              src="/images/logo-cafeteria.png"
              alt=""
              className="size-24 scale-[1.12] object-contain"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigationItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="nav-label text-[rgb(var(--green-rgb)/0.88)] transition hover:text-[rgb(var(--terracotta-rgb))]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onCartOpen}
              className="relative flex h-11 items-center gap-2 rounded-full bg-[rgb(var(--terracotta-rgb))] px-4 text-xs font-bold uppercase tracking-[.12em] text-white shadow-[0_10px_26px_rgb(var(--terracotta-rgb)/0.24)] transition hover:bg-[rgb(var(--terracotta-rgb)/0.92)]"
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
              className="flex size-11 items-center justify-center rounded-full border border-[rgb(var(--brown-rgb)/0.2)] text-[rgb(var(--green-rgb))] lg:hidden"
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
                className="rounded-2xl px-3 py-3 text-sm font-semibold text-[rgb(var(--green-rgb)/0.72)] hover:bg-[rgb(var(--cream-rgb)/0.88)] hover:text-[rgb(var(--green-rgb))]"
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
