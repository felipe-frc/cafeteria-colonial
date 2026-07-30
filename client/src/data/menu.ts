export type MenuCategory = "bebidas" | "quitandas";

export type MenuItem = {
  id: string;
  title: string;
  desc: string;
  price: string;
  priceCents: number;
  image: string;
  category: MenuCategory;
};

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  bebidas: [
    {
      id: "espresso-da-casa",
      title: "Espresso da Casa",
      desc: "Intenso e encorpado",
      price: "R$ 8,00",
      priceCents: 800,
      image: "/images/menu/espresso-da-casa.png",
      category: "bebidas",
    },
    {
      id: "cappuccino-tradicional",
      title: "Cappuccino Tradicional",
      desc: "Leite vaporizado artesanal",
      price: "R$ 12,00",
      priceCents: 1200,
      image: "/images/menu/cappuccino-tradicional.png",
      category: "bebidas",
    },
    {
      id: "cafe-com-leite",
      title: "Café com Leite",
      desc: "Combinação perfeita",
      price: "R$ 10,00",
      priceCents: 1000,
      image: "/images/menu/cafe-com-leite.png",
      category: "bebidas",
    },
    {
      id: "macchiato-classico",
      title: "Macchiato Clássico",
      desc: "Espresso com espuma",
      price: "R$ 11,00",
      priceCents: 1100,
      image: "/images/menu/macchiato-classico.png",
      category: "bebidas",
    },
    {
      id: "cafe-coado",
      title: "Café Coado",
      desc: "Método tradicional",
      price: "R$ 7,00",
      priceCents: 700,
      image: "/images/menu/cafe-coado.png",
      category: "bebidas",
    },
    {
      id: "cafe-gelado",
      title: "Café Gelado",
      desc: "Refrescante e sofisticado",
      price: "R$ 10,00",
      priceCents: 1000,
      image: "/images/menu/cafe-gelado.png",
      category: "bebidas",
    },
  ],
  quitandas: [
    {
      id: "pao-de-queijo",
      title: "Pão de Queijo",
      desc: "Quentinho artesanal",
      price: "R$ 6,00",
      priceCents: 600,
      image: "/images/menu/pao-de-queijo.png",
      category: "quitandas",
    },
    {
      id: "bolo-de-milho",
      title: "Bolo de Milho",
      desc: "Receita tradicional",
      price: "R$ 8,00",
      priceCents: 800,
      image: "/images/menu/bolo-de-milho.png",
      category: "quitandas",
    },
    {
      id: "broa-de-milho",
      title: "Broa de Milho",
      desc: "Crocante e macia",
      price: "R$ 7,00",
      priceCents: 700,
      image: "/images/menu/broa-de-milho.png",
      category: "quitandas",
    },
    {
      id: "bolo-de-chocolate",
      title: "Bolo de Chocolate",
      desc: "Chocolate belga",
      price: "R$ 10,00",
      priceCents: 1000,
      image: "/images/menu/bolo-de-chocolate.png",
      category: "quitandas",
    },
    {
      id: "biscoito-de-polvilho",
      title: "Biscoito de Polvilho",
      desc: "Crocante e leve",
      price: "R$ 5,00",
      priceCents: 500,
      image: "/images/menu/biscoito-de-polvilho.png",
      category: "quitandas",
    },
    {
      id: "croissant-artesanal",
      title: "Croissant Artesanal",
      desc: "Amanteigado especial",
      price: "R$ 9,00",
      priceCents: 900,
      image: "/images/menu/croissant.png",
      category: "quitandas",
    },
  ],
};
