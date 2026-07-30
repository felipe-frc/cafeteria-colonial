import { Coffee } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const stats = [
  { value: "40+", label: "Anos de Tradição" },
  { value: "1000+", label: "Clientes Felizes" },
  { value: "100%", label: "Qualidade Premium" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-96 w-full rounded-2xl object-cover shadow-2xl"
            >
              <source src="/video/video-fundo.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>

            <div className="floating-cup absolute -bottom-6 -right-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-amber-600 bg-amber-700 shadow-2xl">
                <Coffee className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionTitle eyebrow="Nossa Essência" title="Tradição Reimaginada" centered={false} />

            <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-white/85">
              <p>
                A Cafeteria Raízes não é apenas um lugar. É um espaço pensado para acolher,
                inspirar e transformar cada pausa em uma experiência especial.
              </p>
              <p>
                Desde 1989, cultivamos excelência em cada grão, em cada receita e em cada
                momento compartilhado. Nossa missão é servir sabor, tradição e aconchego.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="mb-2 text-4xl font-bold text-amber-600">{stat.value}</p>
                  <p className="font-light text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
