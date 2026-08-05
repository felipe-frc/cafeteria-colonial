import { ArrowRight, Clock3, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section relative isolate min-h-[108svh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero/hero-cafeteria-raizes.webp"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-full w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,20,13,.16)_0%,rgba(30,20,13,.28)_52%,rgba(21,14,10,.44)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(27,17,11,.28)_0%,rgba(27,17,11,.18)_22%,rgba(27,17,11,.08)_38%,rgba(27,17,11,0)_58%)]" />

      <div className="relative mx-auto flex min-h-[108svh] max-w-7xl items-end px-6 pb-20 pt-32 lg:px-10 lg:pb-24">
        <div className="w-full max-w-2xl text-center sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:items-start sm:flex-row">
            <a
              href="#menu"
              className="hero-primary-button inline-flex h-14 min-w-[220px] items-center justify-center gap-3 rounded-full px-8 text-sm font-bold uppercase tracking-[0.16em] [text-shadow:0_2px_10px_rgba(18,11,7,.22),0_0_1px_rgba(46,26,16,.52)]"
            >
              Ver o cardápio <ArrowRight className="size-4" />
            </a>

            <a
              href="#sobre"
              className="inline-flex h-14 min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/[.08] px-8 text-sm font-bold uppercase tracking-[0.16em] !text-white [text-shadow:0_2px_10px_rgba(18,11,7,.22),0_0_1px_rgba(46,26,16,.52)] backdrop-blur-sm transition hover:border-white/50 hover:bg-white/[.14]"
            >
              <MapPin className="size-4" /> Nossa história
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/20 pt-5 text-sm text-[#f7eddf] [text-shadow:0_4px_12px_rgba(18,11,7,.18),0_0_1px_rgba(46,26,16,.68)] sm:justify-start">
            <span className="flex items-center gap-2">
              <Clock3 className="size-4 text-[#d79b4c]" /> Seg-Sex, 7h às 19h
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-[#d79b4c]" /> Centro, Patrocínio - MG
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
