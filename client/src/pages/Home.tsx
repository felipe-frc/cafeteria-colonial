import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Coffee, Leaf } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("bebidas");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-accent shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <img
              src="/logo-cafeteria.png"
              alt="Cafeteria Raízes"
              className="h-14 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-12">
            <a href="#sobre" className="text-foreground hover:text-accent transition-colors duration-300 font-playfair font-semibold text-sm">
              Sobre
            </a>
            <a href="#menu" className="text-foreground hover:text-accent transition-colors duration-300 font-playfair font-semibold text-sm">
              Menu
            </a>
            <a href="#avaliacoes" className="text-foreground hover:text-accent transition-colors duration-300 font-playfair font-semibold text-sm">
              Avaliações
            </a>
            <a href="#localizacao" className="text-foreground hover:text-accent transition-colors duration-300 font-playfair font-semibold text-sm">
              Localização
            </a>
          </div>

          <Button
            className="bg-accent text-accent-foreground hover:bg-primary transition-all duration-300 font-playfair font-bold"
            size="sm"
          >
            Reservar
          </Button>
        </nav>
      </header>

      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video-fundo.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo em HTML5.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <Leaf className="w-12 h-12 text-white/70" />
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-black text-white mb-4 leading-tight drop-shadow-lg">
            Sabor e
            <br />
            <span className="text-accent">Tradição</span>
          </h1>

          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-white/90 font-lato font-light mb-12 max-w-2xl mx-auto drop-shadow-md">
            Desde 1985, cultivando a essência do café colonial em cada xícara
          </p>

          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-primary transition-all duration-300 px-12 py-8 text-lg font-playfair font-bold shadow-lg"
          >
            Conheça Nossa História
          </Button>
        </div>

      </section>

      <section id="sobre" className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Coffee className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
              A Essência do <span className="text-accent">Café Colonial</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-accent hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-accent">☕</div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Tradição Mineira</h3>
              <p className="text-foreground/70 font-lato font-light leading-relaxed">
                Cada xícara é preparada com grãos selecionados, respeitando métodos tradicionais que remontam aos tempos de ouro das fazendas de café.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-accent hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-accent">🏛️</div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Ambiente Colonial</h3>
              <p className="text-foreground/70 font-lato font-light leading-relaxed">
                Decorado com elementos que remetem à arquitetura colonial, convidando você a desacelerar e saborear cada momento.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-accent hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-accent">🌿</div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Qualidade Premium</h3>
              <p className="text-foreground/70 font-lato font-light leading-relaxed">
                Aqui, o café não é apenas uma bebida, é uma experiência que conecta passado e presente com sofisticação.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-accent">
            <img
              src="/cafeteria-identidade.png"
              alt="Identidade da Cafeteria Raízes"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Leaf className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
              Nosso <span className="text-accent">Menu</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="flex justify-center gap-4 mb-16">
            {["bebidas", "alimentos"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 font-playfair font-bold transition-all duration-300 rounded-lg border-2 ${
                  activeTab === tab
                    ? "bg-accent text-accent-foreground border-accent shadow-lg"
                    : "bg-white text-foreground border-accent hover:border-primary hover:shadow-md"
                }`}
              >
                {tab === "bebidas" ? "☕ Bebidas" : "🥐 Alimentos"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "bebidas" ? (
              <>
                <MenuItemCard title="Espresso Colonial" description="Café expresso puro, intenso e encorpado" price="R$ 8,00" />
                <MenuItemCard title="Cappuccino Tradicional" description="Leite vaporizado com espuma artesanal" price="R$ 12,00" />
                <MenuItemCard title="Café com Leite" description="A combinação perfeita de café e leite quente" price="R$ 10,00" />
                <MenuItemCard title="Macchiato Clássico" description="Espresso com toque de espuma de leite" price="R$ 11,00" />
                <MenuItemCard title="Café Coado" description="Café coado na hora, método tradicional" price="R$ 7,00" />
                <MenuItemCard title="Café Gelado" description="Refrescante e sofisticado para dias quentes" price="R$ 10,00" />
              </>
            ) : (
              <>
                <MenuItemCard title="Pão de Queijo" description="Quentinho, feito diariamente com queijo artesanal" price="R$ 6,00" />
                <MenuItemCard title="Bolo de Milho" description="Receita tradicional, macio e saboroso" price="R$ 8,00" />
                <MenuItemCard title="Broa de Milho" description="Crocante por fora, macia por dentro" price="R$ 7,00" />
                <MenuItemCard title="Bolo de Chocolate" description="Chocolate belga derretido em cada fatia" price="R$ 10,00" />
                <MenuItemCard title="Biscoito de Polvilho" description="Crocante e leve, perfeito para acompanhar café" price="R$ 5,00" />
                <MenuItemCard title="Croissant de Chocolate" description="Folhado e recheado com chocolate premium" price="R$ 9,00" />
              </>
            )}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Coffee className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
              O Que Dizem Sobre <span className="text-accent">Nós</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard
              name="Maria Silva"
              text="Um lugar acolhedor onde o tempo para. O café é excelente e a atmosfera transporta você para outro tempo."
              rating={5}
            />
            <ReviewCard
              name="João Santos"
              text="Melhor café que já provei! A qualidade dos grãos e o preparo são impecáveis. Recomendo para todos."
              rating={5}
            />
            <ReviewCard
              name="Ana Costa"
              text="Ambiente perfeito para trabalhar ou conversar. Os funcionários são atenciosos e o café é sempre quentinho."
              rating={5}
            />
            <ReviewCard
              name="Carlos Oliveira"
              text="A tradição em cada detalhe. Desde a decoração até o sabor do café, tudo respira história e qualidade."
              rating={5}
            />
            <ReviewCard
              name="Beatriz Ferreira"
              text="Voltei várias vezes e sempre me sinto em casa. O pão de queijo é viciante!"
              rating={5}
            />
            <ReviewCard
              name="Roberto Alves"
              text="Uma verdadeira joia escondida. Qualidade, tradição e acolhimento em um só lugar."
              rating={5}
            />
          </div>
        </div>
      </section>

      <section id="localizacao" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <MapPin className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
              Nos <span className="text-accent">Visite</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent">
                <MapPin className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Endereço</h3>
                  <p className="text-lg text-foreground/70 font-lato">Rua das Flores, 123 - Centro, Patrocínio - MG</p>
                </div>
              </div>

              <div className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent">
                <Phone className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Telefone</h3>
                  <p className="text-lg text-foreground/70 font-lato">(34) 3821-2000</p>
                </div>
              </div>

              <div className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent">
                <Mail className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Email</h3>
                  <p className="text-lg text-foreground/70 font-lato">contato@cafeteriaraizes.com.br</p>
                </div>
              </div>

              <div className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent">
                <Clock className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Horário</h3>
                  <p className="text-lg text-foreground/70 font-lato">Segunda a Sexta: 7h - 19h</p>
                  <p className="text-lg text-foreground/70 font-lato">Sábado: 8h - 18h</p>
                  <p className="text-lg text-foreground/70 font-lato">Domingo: 9h - 17h</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-accent">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965838.4645930333!2d-47.729877706635776!3d-18.98415111523955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94afba88e5ce6e53%3A0x6131553223c88567!2sPatroc%C3%ADnio%20-%20MG%2C%2038740-000!5e0!3m2!1spt-BR!2sbr!4v1776348975229!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-secondary py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/logo-cafeteria.png"
                alt="Cafeteria Raízes"
                className="h-12 w-auto mb-4"
              />
              <p className="text-secondary/70 font-lato">Sabor e Tradição desde 1985</p>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-secondary/70 font-lato">
                <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
                <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
                <li><a href="#avaliacoes" className="hover:text-accent transition-colors">Avaliações</a></li>
                <li><a href="#localizacao" className="hover:text-accent transition-colors">Localização</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg mb-4">Contato</h4>
              <p className="text-secondary/70 font-lato mb-2">(34) 3821-2000</p>
              <p className="text-secondary/70 font-lato">contato@cafeteriaraizes.com.br</p>
            </div>
          </div>

          <div className="border-t border-secondary/10 pt-8 text-center text-secondary/50 font-lato">
            <p>&copy; 2025 Cafeteria Raízes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuItemCard({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border-b-4 border-accent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 font-lato font-light mb-4 leading-relaxed">{description}</p>
      <p className="text-accent font-playfair font-bold text-xl">{price}</p>
    </div>
  );
}

function ReviewCard({
  name,
  text,
  rating,
}: {
  name: string;
  text: string;
  rating: number;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent hover:shadow-xl transition-shadow duration-300">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-accent text-xl">
            ★
          </span>
        ))}
      </div>
      <p className="text-foreground/70 font-lato font-light mb-4 italic">"{text}"</p>
      <p className="font-playfair font-bold text-foreground">{name}</p>
    </div>
  );
}