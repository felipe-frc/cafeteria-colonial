import { useState } from "react";
import { Check, Plus, ShoppingBag } from "lucide-react";
import { menuItems, type MenuCategory, type MenuItem } from "@/data/menu";
import { SectionTitle } from "./SectionTitle";

const categories: Array<{ value: MenuCategory; label: string }> = [
  { value: "bebidas", label: "Cafés & bebidas" },
  { value: "quitandas", label: "Quitandas" },
];

type MenuSectionProps = {
  onAddToCart: (item: MenuItem) => void;
  onCartOpen: () => void;
};

export function MenuSection({ onAddToCart, onCartOpen }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("bebidas");
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  function handleAddItem(item: MenuItem) {
    onAddToCart(item);
    setAddedItemId(item.id);
    window.setTimeout(() => setAddedItemId(id => (id === item.id ? null : id)), 1400);
    onCartOpen();
  }

  return (
    <section id="menu" className="botanical-section section-space scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="menu-botanical-panel overflow-hidden rounded-[2.4rem] border border-[rgb(var(--brown-rgb)/0.2)] bg-[rgb(var(--cream-rgb)/0.84)] px-6 py-8 text-[rgb(var(--brown-rgb))] shadow-[0_35px_90px_rgb(var(--brown-rgb)/0.12)] backdrop-blur-[2px] sm:px-8 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionTitle eyebrow="Cardápio artesanal" title="Nosso Menu" centered={false} />
              <p className="mt-5 max-w-xl text-base leading-7 text-[rgb(var(--brown-rgb))]">
                Aroma fresco, preparos feitos na hora e quitandas que transformam o
                pedido em pausa boa. Escolha seu favorito e monte a sua combinação.
              </p>
            </div>

            <div className="flex rounded-full border border-[rgb(var(--brown-rgb)/0.18)] bg-[rgb(var(--cream-rgb)/0.65)] p-1.5 backdrop-blur-sm">
              {categories.map(category => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  aria-pressed={activeCategory === category.value}
                  className={`nav-label rounded-full px-5 py-3 transition sm:px-7 ${
                    activeCategory === category.value
                      ? "bg-[rgb(var(--cream-rgb)/0.92)] text-[rgb(var(--terracotta-rgb))] shadow-lg"
                      : "text-[rgb(var(--brown-rgb)/0.82)] hover:text-[rgb(var(--green-rgb))]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems[activeCategory].map(item => {
              const wasAdded = addedItemId === item.id;

              return (
                <article
                  key={item.id}
                  className="menu-card group overflow-hidden rounded-[1.7rem] border border-[rgb(var(--brown-rgb)/0.14)] bg-[rgb(var(--cream-rgb)/0.96)] text-[rgb(var(--brown-rgb))]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="520"
                      height="360"
                      loading="lazy"
                      className={`aspect-[1.45/1] w-full object-cover transition duration-700 group-hover:scale-105 ${item.imageClassName ?? ""}`}
                    />
                    <span className="nav-label absolute left-4 top-4 rounded-full bg-[rgb(var(--green-rgb)/0.86)] px-3 py-1.5 text-[rgb(var(--cream-rgb))] backdrop-blur">
                      Feito na hora
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[rgb(var(--green-rgb))]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[rgb(var(--brown-rgb))]">{item.desc}</p>
                      </div>
                      <strong className="shrink-0 text-lg text-[rgb(var(--terracotta-rgb))]">{item.price}</strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddItem(item)}
                      className={`nav-label mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full shadow-[0_10px_22px_rgb(var(--green-rgb)/0.14)] transition active:scale-[0.985] ${
                        wasAdded
                          ? "bg-[rgb(var(--green-rgb))] text-white"
                          : "bg-[rgb(var(--green-rgb))] text-white hover:-translate-y-0.5 hover:bg-[rgb(var(--terracotta-rgb))] hover:shadow-[0_14px_26px_rgb(var(--terracotta-rgb)/0.2)]"
                      }`}
                      aria-label={`Adicionar ${item.title} ao pedido`}
                    >
                      {wasAdded ? (
                        <>
                          <Check className="size-4" /> Adicionado
                        </>
                      ) : (
                        <>
                          <Plus className="size-4" /> Adicionar ao pedido
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={onCartOpen}
              className="nav-label inline-flex items-center gap-3 rounded-full border border-[rgb(var(--brown-rgb)/0.18)] bg-[rgb(var(--cream-rgb)/0.62)] px-7 py-3.5 text-[rgb(var(--green-rgb))] transition hover:bg-[rgb(var(--cream-rgb)/0.84)]"
            >
              <ShoppingBag className="size-4" /> Revisar meu pedido
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
