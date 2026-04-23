import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Coffee,
  ArrowRight,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"bebidas" | "quitandas">("bebidas");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const menuItems = {
    bebidas: [
      {
        title: "Espresso Colonial",
        desc: "Intenso e encorpado",
        price: "R$ 8,00",
        image: "/images/menu/espresso-colonial.png",
      },
      {
        title: "Cappuccino Tradicional",
        desc: "Leite vaporizado artesanal",
        price: "R$ 12,00",
        image: "/images/menu/cappuccino-tradicional.png",
      },
      {
        title: "Café com Leite",
        desc: "Combinação perfeita",
        price: "R$ 10,00",
        image: "/images/menu/cafe-com-leite.png",
      },
      {
        title: "Macchiato Clássico",
        desc: "Espresso com espuma",
        price: "R$ 11,00",
        image: "/images/menu/macchiato-classico.png",
      },
      {
        title: "Café Coado",
        desc: "Método tradicional",
        price: "R$ 7,00",
        image: "/images/menu/cafe-coado.png",
      },
      {
        title: "Café Gelado",
        desc: "Refrescante sofisticado",
        price: "R$ 10,00",
        image: "/images/menu/cafe-gelado.png",
      },
    ],
    quitandas: [
      {
        title: "Pão de Queijo",
        desc: "Quentinho artesanal",
        price: "R$ 6,00",
        image: "/images/menu/pao-de-queijo.png",
      },
      {
        title: "Bolo de Milho",
        desc: "Receita tradicional",
        price: "R$ 8,00",
        image: "/images/menu/bolo-de-milho.png",
      },
      {
        title: "Broa de Milho",
        desc: "Crocante e macia",
        price: "R$ 7,00",
        image: "/images/menu/broa-de-milho.png",
      },
      {
        title: "Bolo de Chocolate",
        desc: "Chocolate belga",
        price: "R$ 10,00",
        image: "/images/menu/bolo-de-chocolate.png",
      },
      {
        title: "Biscoito de Polvilho",
        desc: "Crocante leve",
        price: "R$ 5,00",
        image: "/images/menu/biscoito-de-polvilho.png",
      },
      {
        title: "Croissant Artesanal",
        desc: "Amanteigado especial",
        price: "R$ 9,00",
        image: "/images/menu/croissant.png",
      },
    ],
  };

  const reviews = [
    {
      name: "Maria Silva",
      text: "Um lugar aconchegante onde o tempo para. O café é excelente e a atmosfera é perfeita!",
      rating: 5,
    },
    {
      name: "Pedro Santos",
      text: "Melhor café que já provei. A qualidade dos grãos e preparação são incomparáveis. Recomendo muito!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Ambiente perfeito para trabalhar ou conversar. Os funcionários são atenciosos e o café sempre quentinho.",
      rating: 5,
    },
    {
      name: "Rodrigo Oliveira",
      text: "Desde a primeira visita me apaixonei. Cada detalhe reflete o cuidado e a tradição da casa.",
      rating: 5,
    },
    {
      name: "Juliana Ferreira",
      text: "O melhor café da região! Voltei várias vezes e sempre fico impressionada com a qualidade.",
      rating: 5,
    },
    {
      name: "Felipe Alves",
      text: "Que lugar especial! A Cafeteria Raízes é um refúgio de paz e bom gosto. Perfeito!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentReviewIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <div
      className="relative min-h-screen text-white overflow-x-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/background-home.webp')" }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }

          .floating-cup {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>

        <header
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"
          style={{ backgroundColor: "rgba(61, 31, 16, 0.88)" }}
        >
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/images/logo-cafeteria.png"
                alt="Cafeteria Raízes"
                className="h-12 object-contain"
              />
            </a>

            <div className="hidden md:flex items-center gap-12">
              <a
                href="#sobre"
                className="text-white/70 hover:text-white transition-colors text-sm font-light tracking-wider"
              >
                SOBRE
              </a>
              <a
                href="#menu"
                className="text-white/70 hover:text-white transition-colors text-sm font-light tracking-wider"
              >
                MENU
              </a>
              <a
                href="#avaliacoes"
                className="text-white/70 hover:text-white transition-colors text-sm font-light tracking-wider"
              >
                AVALIAÇÕES
              </a>
              <a
                href="#contato"
                className="text-white/70 hover:text-white transition-colors text-sm font-light tracking-wider"
              >
                CONTATO
              </a>
            </div>

            <Button
              className="bg-amber-700 text-white hover:bg-amber-800 transition-all duration-300 font-light tracking-wider"
              size="sm"
            >
              RESERVAR
            </Button>
          </nav>
        </header>

        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0">
            <img
              src="/images/cafeteria-identidade.png"
              alt="Identidade visual da Cafeteria Raízes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-stone-900/80" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <a
              href="#sobre"
              aria-label="Ir para a próxima seção"
              className="absolute left-1/2 top-60 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-amber-700 text-white shadow-2xl hover:bg-amber-800 transition-all duration-300 animate-bounce"
            >
              <ArrowRight className="w-6 h-6 rotate-90 text-white" />
            </a>
          </div>
        </section>

        <section id="sobre" className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-950/70" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                >
                  <source src="/video/video-fundo.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>

                <div className="absolute -bottom-6 -right-6 floating-cup">
                  <div className="w-24 h-24 bg-amber-700 rounded-full shadow-2xl flex items-center justify-center border-4 border-amber-600">
                    <Coffee className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-amber-600 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
                  Nossa Essência
                </span>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                  Tradição
                  <br />
                  Reimaginada
                </h2>

                <div className="w-16 h-1 bg-amber-600 mb-8" />

                <div className="space-y-6 text-white/85 font-light leading-relaxed text-lg">
                  <p>
                    A Cafeteria Raízes não é apenas um lugar. É um espaço pensado para
                    acolher, inspirar e transformar cada pausa em uma experiência
                    especial.
                  </p>
                  <p>
                    Desde 1989, cultivamos a excelência em cada grão, em cada receita
                    e em cada momento compartilhado. Nossa missão é servir sabor,
                    tradição e aconchego.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-8">
                  <div>
                    <p className="text-4xl font-bold text-amber-600 mb-2">40+</p>
                    <p className="text-white/70 font-light">Anos de Tradição</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-amber-600 mb-2">1000+</p>
                    <p className="text-white/70 font-light">Clientes Felizes</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-amber-600 mb-2">100%</p>
                    <p className="text-white/70 font-light">Qualidade Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-950/72" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-amber-600 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
                Seleção Especial
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
                Nosso Menu
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-900 mx-auto" />
            </div>

            <div className="flex justify-center gap-8 mb-20 flex-wrap">
              {(["bebidas", "quitandas"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pb-4 font-light tracking-wider uppercase text-sm transition-all duration-300 border-b-2 ${
                    activeCategory === cat
                      ? "text-amber-600 border-amber-600"
                      : "text-white/50 border-transparent hover:text-white/80"
                  }`}
                >
                  {cat === "bebidas" ? "☕ Bebidas" : "🥐 Quitandas"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems[activeCategory].map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredItem(idx)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6 h-48 shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredItem === idx ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                        hoveredItem === idx ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredItem === idx ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="text-white font-light tracking-wider">
                        VER DETALHES
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 font-light mb-4">{item.desc}</p>
                  <p className="text-lg font-bold text-amber-600">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-950/72" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-amber-600 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
                Depoimentos
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
                O Que Dizem Sobre Nós
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-900 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getVisibleReviews().map((review, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl border border-white/10 bg-white/5 hover:border-amber-600/50 hover:bg-amber-600/5 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-600 text-amber-600" />
                    ))}
                  </div>

                  <p className="text-white/85 font-light leading-relaxed mb-6 text-lg">
                    "{review.text}"
                  </p>
                  <p className="text-amber-600 font-bold">{review.name}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-12 flex-wrap">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReviewIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentReviewIndex
                      ? "bg-amber-600 w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir para avaliação ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-950/72" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-amber-600 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
                Visite-nos
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
                Nos Encontre
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    label: "Endereço",
                    value: "Rua das Flores, 123 - Centro, Patrocínio - MG",
                  },
                  {
                    icon: Phone,
                    label: "Telefone",
                    value: "(34) 3821-2000",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contato@cafeteriaraizes.com.br",
                  },
                  {
                    icon: Clock,
                    label: "Horários",
                    value: "Seg-Sex: 7h-19h | Sab: 8h-18h | Dom: 9h-17h",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/40 transition-all">
                      <item.icon className="w-6 h-6 text-amber-600" />
                    </div>

                    <div>
                      <p className="text-white/60 font-light text-sm tracking-wider uppercase mb-1">
                        {item.label}
                      </p>
                      <p className="text-white font-light text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552737.0817473176!2d-47.094663697587215!3d-19.00589641062706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94afba88e5ce6e53%3A0x6131553223c88567!2sPatroc%C3%ADnio%20-%20MG%2C%2038740-000!5e0!3m2!1spt-BR!2sbr!4v1776968163894!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Patrocínio MG"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <footer
          className="border-t border-white/10 py-12"
          style={{ backgroundColor: "rgba(61, 31, 16, 0.95)" }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-white/60 font-light text-sm tracking-wider">
              © 2026 CAFETERIA RAÍZES — Sabor e Tradição desde 1989
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}