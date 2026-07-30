import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems, type MenuCategory, type MenuItem } from "@/data/menu";
import { SectionTitle } from "./SectionTitle";

const categories: Array<{ value: MenuCategory; label: string }> = [
  { value: "bebidas", label: "Bebidas" },
  { value: "quitandas", label: "Quitandas" },
];

type MenuSectionProps = {
  onAddToCart: (item: MenuItem) => void;
  onCartOpen: () => void;
};

export function MenuSection({ onAddToCart, onCartOpen }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("bebidas");

  function handleAddItem(item: MenuItem) {
    onAddToCart(item);
    onCartOpen();
  }

  return (
    <section id="menu" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <SectionTitle eyebrow="Selecao Especial" title="Nosso Menu" />

          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/65">
            Monte seu pedido com bebidas e quitandas artesanais e envie direto pelo WhatsApp
            para retirada no local.
          </p>
        </div>

        <div className="mb-20 flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              aria-pressed={activeCategory === category.value}
              className={`border-b-2 pb-4 text-sm font-light uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.value
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-white/50 hover:text-white/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems[activeCategory].map((item) => (
            <article
              key={item.id}
              className="group flex min-h-[430px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  width="480"
                  height="320"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-0 flex items-center justify-center px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-light uppercase tracking-[0.25em] text-white">
                    Adicionar ao pedido
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-1 pb-1 pt-8">
                <div>
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-white transition-colors group-hover:text-amber-600">
                    {item.title}
                  </h3>

                  <p className="text-base font-light leading-relaxed text-white/70">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-5 pt-10">
                  <p className="shrink-0 text-2xl font-bold leading-none text-amber-600">
                    {item.price}
                  </p>

                  <Button
                    type="button"
                    size="sm"
                    onClick={() => handleAddItem(item)}
                    className="min-w-[140px] rounded-2xl px-5 py-5 text-sm font-semibold"
                  >
                    <Plus className="size-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
