import { Coffee, Heart, Leaf } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const values = [
  {
    icon: Coffee,
    title: "Qualidade",
    text: "Café bem escolhido e preparo cuidadoso.",
  },
  {
    icon: Leaf,
    title: "Artesanal",
    text: "Receitas frescas feitas com atenção diária.",
  },
  {
    icon: Heart,
    title: "Acolhimento",
    text: "Um lugar leve para ficar e voltar.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="botanical-section section-space scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-24">
          <div className="relative">
            <div className="overflow-hidden rounded-[2.25rem] border border-[rgb(var(--gold-rgb)/0.55)] bg-[rgb(var(--cream-rgb)/0.55)] p-3 shadow-[0_28px_70px_rgb(var(--brown-rgb)/0.1)] backdrop-blur-sm">
              <video
                src="/video/video-sessão.mp4"
                className="aspect-[4/4.45] w-full rounded-[1.8rem] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                Seu navegador não suporta reprodução de vídeo.
              </video>
            </div>

            <div className="about-floating-badge absolute -bottom-5 left-6 z-10 max-w-[15.5rem] rounded-full border border-[rgb(var(--gold-rgb)/0.3)] bg-[rgb(var(--cream-rgb)/0.96)] px-4 py-3 shadow-[0_18px_36px_rgb(var(--brown-rgb)/0.12)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--terracotta-rgb)/0.12)] text-[rgb(var(--terracotta-rgb))]">
                  <Coffee className="size-4" />
                </span>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[rgb(var(--terracotta-rgb))]">
                    Raízes da casa
                  </span>
                  <strong className="mt-1 block font-serif text-[1.1rem] leading-tight text-[rgb(var(--green-rgb))]">
                    Sabor e tradição desde 1989
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Nossa essência"
              title="Tradição mineira com beleza, aconchego e sabor"
              centered={false}
            />

            <p className="mt-7 text-lg leading-8 text-[rgb(var(--brown-rgb))]">
              A Cafeteria Raízes nasceu do desejo de transformar o café em encontro.
              Desde 1989, reunimos receitas afetivas, preparo cuidadoso e uma atmosfera
              que convida a ficar mais um pouco.
            </p>

            <p className="mt-4 text-lg leading-8 text-[rgb(var(--brown-rgb))]">
              Aqui, o terracota aquece, o verde acalma e cada detalhe faz o espaço
              parecer vivo, acolhedor e cheio de sabor.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {values.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.35rem] border border-[rgb(var(--brown-rgb)/0.12)] bg-[rgb(var(--cream-rgb)/0.62)] p-4 shadow-[0_12px_28px_rgb(var(--brown-rgb)/0.06)] backdrop-blur-sm transition hover:-translate-y-1 hover:bg-[rgb(var(--cream-rgb)/0.76)]"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-[rgb(var(--terracotta-rgb)/0.1)] text-[rgb(var(--terracotta-rgb))]">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="mt-3 text-[15px] font-semibold text-[rgb(var(--green-rgb))]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-5 text-[rgb(var(--brown-rgb))]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
