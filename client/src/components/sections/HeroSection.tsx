import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#20120d] pt-24">
      <div className="absolute inset-0">
        <img
          src="/images/cafeteria-identidade.png"
          alt="Painel da Cafeteria Raizes"
          className="h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,18,13,0.92)_0%,rgba(32,18,13,0.70)_33%,rgba(32,18,13,0.38)_65%,rgba(32,18,13,0.75)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[48rem] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-xl rounded-[2rem] border border-white/8 bg-[rgba(47,27,18,0.52)] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-amber-500">
            Cafeteria Raizes
          </p>

          <h1 className="mt-5 text-5xl font-black leading-[0.96] text-[#fff3e6] md:text-6xl">
            Tradicao que
            <br />
            acolhe. Cafe que
            <br />
            <span className="text-amber-500">conecta.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-8 text-[#ead7c4]">
            Desde 1989, cultivamos a tradicao de servir cafes especiais com sabor,
            historia e alma.
          </p>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-8 h-12 rounded-full border-amber-700/70 bg-transparent px-7 text-xs font-semibold uppercase tracking-[0.18em] !text-[#f7eadf] hover:bg-amber-700/10 hover:!text-white"
          >
            <a href="#sobre">
              Conheca nossa historia
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="relative z-10 flex justify-center pb-7">
        <a
          href="#sobre"
          aria-label="Ir para a proxima secao"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-600 text-white shadow-[0_12px_25px_rgba(180,108,24,0.35)] transition-all duration-300 hover:bg-amber-500"
        >
          <ArrowRight className="h-6 w-6 rotate-90 text-white" />
        </a>
      </div>
    </section>
  );
}
