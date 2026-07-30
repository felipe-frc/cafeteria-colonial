import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-32"
    >
      <div className="absolute inset-0">
        <img
          src="/images/cafeteria-identidade.png"
          alt="Identidade visual da Cafeteria Raízes"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-stone-900/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            Cafeteria Raízes
          </p>
          <h1 className="text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Café especial, quitandas artesanais e um lugar para desacelerar.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
            Uma experiência acolhedora para quem valoriza sabor, cuidado nos detalhes e um
            ambiente memorável do primeiro gole ao último pedido.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-52 rounded-2xl px-8">
              <a href="#menu">Explorar menu</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-52 rounded-2xl px-8">
              <a href="#contato">Ver localização</a>
            </Button>
          </div>
        </div>

        <a
          href="#sobre"
          aria-label="Ir para a próxima seção"
          className="absolute left-1/2 top-[calc(100%+2rem)] flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-amber-700 text-white shadow-2xl transition-all duration-300 animate-bounce hover:bg-amber-800"
        >
          <ArrowRight className="h-6 w-6 rotate-90 text-white" />
        </a>
      </div>
    </section>
  );
}
