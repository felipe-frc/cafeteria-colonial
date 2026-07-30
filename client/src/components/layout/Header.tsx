import { ShoppingBag } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Menu", href: "#menu" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

type HeaderProps = {
  cartItemsCount: number;
  onCartOpen: () => void;
};

export function Header({ cartItemsCount, onCartOpen }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#20120d]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <nav
          aria-label="Navegação principal"
          className="flex items-center justify-between gap-4 py-4"
        >
          <a href="#inicio" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img
              src="/images/logo-cafeteria.png"
              alt={contactInfo.businessName}
              className="h-12 object-contain"
            />
          </a>

          <div className="hidden items-center gap-12 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-[0.14em] text-white/72 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onCartOpen}
              className="relative rounded-2xl px-4 py-3 !text-white hover:!text-white"
              aria-label={`Abrir carrinho com ${cartItemsCount} item(ns)`}
            >
              <ShoppingBag className="size-4" />
              <span className="hidden sm:inline">Pedido</span>
              {cartItemsCount > 0 && (
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white shadow-lg">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            <Button
              asChild
              size="sm"
              className="hidden rounded-2xl px-6 py-3 font-semibold uppercase tracking-widest !text-white shadow-lg shadow-amber-950/20 hover:bg-amber-800 hover:!text-white hover:shadow-amber-700/30 sm:inline-flex"
            >
              <a href="#menu" aria-label="Ver menu para fazer pedido">PEDIR</a>
            </Button>
          </div>
        </nav>

        <nav aria-label="Navegação rápida" className="flex gap-3 overflow-x-auto pb-4 md:hidden">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/82 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
