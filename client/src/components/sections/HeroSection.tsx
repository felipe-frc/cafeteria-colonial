import { ArrowDown, ArrowRight, Clock3, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section relative isolate min-h-[108svh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/cafeteria-hero-logo-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-full w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(39,24,14,.18)_0%,rgba(39,24,14,.24)_54%,rgba(28,18,12,.42)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(27,17,11,.74)_0%,rgba(27,17,11,.62)_22%,rgba(27,17,11,.28)_42%,rgba(27,17,11,0)_64%)]" />
      <div className="relative mx-auto flex min-h-[108svh] max-w-7xl items-center px-6 pb-28 pt-34 lg:px-10">
        <div className="max-w-3xl translate-y-12 lg:translate-y-16">
          <div className="mt-52 flex flex-col gap-4 sm:flex-row lg:mt-60">
            <a
              href="#menu"
              className="hero-primary-button inline-flex h-14 items-center justify-center gap-3 rounded-full px-8 text-sm font-bold uppercase tracking-[0.16em] [text-shadow:0_2px_10px_rgba(18,11,7,.22),0_0_1px_rgba(46,26,16,.52)]"
            >
              Ver o cardápio <ArrowRight className="size-4" />
            </a>
            <a
              href="#sobre"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/28 bg-white/[.08] px-8 text-sm font-bold uppercase tracking-[0.16em] !text-white [text-shadow:0_2px_10px_rgba(18,11,7,.22),0_0_1px_rgba(46,26,16,.52)] backdrop-blur-md transition hover:border-white/50 hover:bg-white/[.12]"
            >
              <MapPin className="size-4" /> Nossa história
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/18 pt-6 text-sm text-[#f3eadf]/82 [text-shadow:0_4px_12px_rgba(18,11,7,.14),0_0_1px_rgba(46,26,16,.7)] [-webkit-text-stroke:0.15px_rgba(46,26,16,.34)] lg:mt-12">
            <span className="flex items-center gap-2">
              <Clock3 className="size-4 text-[#d79b4c]" /> Seg-Sex, 7h às 19h
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-[#d79b4c]" /> Centro, Patrocínio - MG
            </span>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Conhecer nossa essência"
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[.24em] !text-white/72 [text-shadow:0_4px_12px_rgba(18,11,7,.2),0_0_1px_rgba(46,26,16,.72)] transition hover:!text-white"
      >
        Descubra <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
