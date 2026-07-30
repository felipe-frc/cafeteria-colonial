import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems, type MenuCategory, type MenuItem } from "@/data/menu";
import { SectionTitle } from "./SectionTitle";

const categories: Array<{ value: MenuCategory; label: string }> = [
  { value: "bebidas", label: "Todos" },
  { value: "quitandas", label: "Classicos" },
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
    <section
      id="menu"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf6ee_0%,#f7eee1_100%)] py-28 text-[#2d1810]"
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute left-0 top-24 h-64 w-64 bg-[url('/images/background-home.webp')] bg-contain bg-no-repeat opacity-[0.10]" />
        <div className="absolute right-0 top-16 h-64 w-64 scale-x-[-1] bg-[url('/images/background-home.webp')] bg-contain bg-no-repeat opacity-[0.10]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <SectionTitle eyebrow="Selecao Especial" title="Nosso Menu" tone="light" />
        </div>

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              aria-pressed={activeCategory === category.value}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-amber-700 text-white shadow-lg shadow-amber-700/15"
                  : "text-[#7c624d] hover:text-[#2d1810]"
              }`}
            >
              {category.label}
            </button>
          ))}
          <button type="button" className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7c624d] hover:text-[#2d1810]">
            Especiais
          </button>
          <button type="button" className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7c624d] hover:text-[#2d1810]">
            Gelados
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {menuItems[activeCategory].map((item) => (
            <article
              key={item.id}
              className="group flex min-h-[25rem] flex-col overflow-hidden rounded-[1.75rem] border border-[#e3d5c6] bg-[#fffdf9] p-4 shadow-[0_24px_60px_rgba(77,46,25,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(77,46,25,0.12)]"
            >
              <div className="relative h-48 overflow-hidden rounded-[1.25rem]">
                <img
                  src={item.image}
                  alt={item.title}
                  width="480"
                  height="320"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                <h3 className="text-2xl font-black text-[#2d1810]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#7a604e]">{item.desc}</p>

                <div className="mt-auto flex items-center justify-between pt-7">
                  <div>
                    <p className="text-3xl font-black leading-none text-amber-600">{item.price}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddItem(item)}
                    aria-label={`Adicionar ${item.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-white shadow-lg shadow-amber-600/20 transition-all duration-300 hover:bg-amber-700"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-amber-700/30 px-8 text-xs font-semibold uppercase tracking-[0.18em] !text-[#6a4a33] hover:bg-[#f4e3d1] hover:!text-[#2d1810]"
          >
            <a href="#contato">
              Ver cardapio completo
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
