import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { SectionTitle } from "./SectionTitle";

const mapLocationUrl = "https://maps.google.com/?q=Patroc%C3%ADnio%20MG";
const embeddedMapUrl =
  "https://maps.google.com/maps?q=Patroc%C3%ADnio%20MG&z=13&ie=UTF8&iwloc=&output=embed";

const details = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua das Flores, 123 — Centro, Patrocínio — MG",
    href: mapLocationUrl,
  },
  {
    icon: Clock,
    label: "Funcionamento",
    value: "Seg–Sex 7h–19h · Sáb 8h–18h · Dom 9h–17h",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(34) 3821-2000",
    href: "tel:+553438212000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@cafeteriaraizes.com.br",
    href: "mailto:contato@cafeteriaraizes.com.br",
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="botanical-section section-space scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[.92fr_1.08fr]">
          <div className="rounded-[2.2rem] border border-[rgb(var(--brown-rgb)/0.14)] bg-[rgb(var(--cream-rgb)/0.82)] p-8 shadow-[0_28px_70px_rgb(var(--brown-rgb)/0.12)] backdrop-blur sm:p-10 lg:p-12">
            <SectionTitle
              eyebrow="Venha nos visitar"
              title="Nos Encontre"
              centered={false}
            />

            <p className="mt-6 max-w-md text-base leading-7 text-[rgb(var(--brown-rgb))]">
              Entre, sente-se e deixe o café fazer o resto. Passe para um café,
              retire seu pedido ou fale com a nossa equipe com calma e sabor.
            </p>

            <div className="mt-9 grid gap-5">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 rounded-[1.3rem] border border-[rgb(var(--brown-rgb)/0.12)] bg-[rgb(var(--cream-rgb)/0.6)] p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--green-rgb)/0.1)]">
                    <Icon className="size-5 text-[rgb(var(--green-rgb))]" />
                  </span>

                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[.18em] text-[rgb(var(--terracotta-rgb)/0.72)]">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-1 block text-sm leading-6 !text-[rgb(var(--brown-rgb))] hover:!text-[rgb(var(--terracotta-rgb))]"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-6 text-[rgb(var(--brown-rgb))]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex h-13 items-center justify-center gap-3 rounded-full bg-[rgb(var(--green-rgb))] px-7 text-xs font-bold uppercase tracking-[.14em] !text-white transition hover:bg-[rgb(var(--terracotta-rgb))]"
            >
              <MessageCircle className="size-4" /> Falar pelo WhatsApp
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgb(var(--brown-rgb)/0.18)] bg-[rgb(var(--cream-rgb)/0.56)] shadow-[0_28px_70px_rgb(var(--brown-rgb)/0.12)]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(247,239,226,0.04),rgba(39,67,56,0.08))]" />
            <iframe
              src={embeddedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Cafeteria Raízes em Patrocínio, MG"
              className="h-full min-h-[460px] w-full [filter:sepia(16%)_saturate(72%)_hue-rotate(-8deg)_brightness(1.02)_contrast(.92)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
