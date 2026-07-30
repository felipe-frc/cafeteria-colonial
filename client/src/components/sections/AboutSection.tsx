import { Coffee, HeartHandshake, Leaf } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const stats = [
  { value: "40+", label: "Anos de Tradicao", icon: Coffee },
  { value: "1000+", label: "Clientes Felizes", icon: HeartHandshake },
  { value: "100%", label: "Qualidade Premium", icon: Leaf },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf5ec_0%,#f8efe2_100%)] py-28 text-[#2d1810]"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-72 w-72 bg-[url('/images/background-home.webp')] bg-contain bg-no-repeat opacity-[0.10]" />
        <div className="absolute right-0 top-0 h-72 w-72 scale-x-[-1] bg-[url('/images/background-home.webp')] bg-contain bg-no-repeat opacity-[0.10]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-[#e0cfbc] bg-[#fffaf4] p-4 shadow-[0_25px_70px_rgba(77,46,25,0.10)]">
              <img
                src="/images/menu/espresso-da-casa.png"
                alt="Xicara de cafe da Cafeteria Raizes"
                className="h-[30rem] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="absolute bottom-6 right-6 flex h-28 w-28 rotate-[-12deg] items-center justify-center rounded-full border-8 border-[#fff7ee] bg-[#f4eadf] text-center shadow-xl">
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Feito com
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.08em] text-[#6e4930]">
                  Paixao
                </p>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Nossa Essencia" title="Tradicao\nReimaginada" centered={false} tone="light" />

            <div className="mt-8 space-y-5 text-base leading-8 text-[#664b39]">
              <p>
                A Cafeteria Raizes nao e apenas um lugar. E um espaco criado para
                acolher, inspirar e transformar cada pausa em uma experiencia especial.
              </p>
              <p>
                Desde 1989, cultivamos excelencia em cada grao e construimos memorias
                compartilhadas. Nossos metodos artesanais revelam o melhor do cafe,
                com sabor, tradicao e autenticidade.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-r border-[#eadbc9] pr-4 last:border-r-0">
                  <stat.icon className="mb-4 h-7 w-7 text-amber-600" />
                  <p className="text-4xl font-black text-amber-600">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6a5140]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
