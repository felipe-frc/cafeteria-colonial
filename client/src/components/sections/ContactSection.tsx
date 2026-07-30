import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";

const mapLocationUrl = "https://maps.google.com/?q=Patrocinio%20MG";
const embeddedMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552737.0817473176!2d-47.094663697587215!3d-19.00589641062706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94afba88e5ce6e53%3A0x6131553223c88567!2sPatroc%C3%ADnio%20-%20MG%2C%2038740-000!5e0!3m2!1spt-BR!2sbr!4v1776968163894!5m2!1spt-BR!2sbr";

const contactItems = [
  {
    icon: MapPin,
    label: "Endereco",
    value: "Rua das Flores, 123 - Centro, Patrocinio - MG",
    href: mapLocationUrl,
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
  {
    icon: Clock,
    label: "Horarios",
    value: "Seg-Sex: 7h-19h | Sab: 8h-18h | Dom: 9h-17h",
  },
];

const whatsappHref = `https://wa.me/${contactInfo.whatsappNumber}`;

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf6ee_0%,#f7eee2_100%)] py-28 text-[#2d1810]"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-14 h-64 w-64 bg-[url('/images/background-home.webp')] bg-contain bg-no-repeat opacity-[0.10]" />
        <div className="absolute right-0 bottom-0 h-56 w-56 bg-[url('/images/menu/cafe-coado.png')] bg-contain bg-no-repeat opacity-[0.18]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <SectionTitle eyebrow="Visite-nos" title="Nos Encontre" tone="light" />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#ead8c3] bg-[#fffaf4] p-8 shadow-[0_24px_60px_rgba(77,46,25,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
              Atendimento
            </p>
            <h3 className="mt-4 text-4xl font-black leading-tight text-[#2d1810]">
              Faca seu pedido e fale com a cafeteria sem sair da pagina.
            </h3>
            <p className="mt-5 max-w-lg text-base leading-8 text-[#6d5140]">
              Ficaremos encantados em te ajudar, conferir retiradas, esclarecer duvidas e
              indicar o melhor pedido para o seu momento.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-2xl px-6">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  Chamar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-[#d7b08c] bg-transparent px-6 !text-[#6c4a33] hover:bg-[#f4e3d1] hover:!text-[#2d1810]"
              >
                <a href={mapLocationUrl} target="_blank" rel="noreferrer">
                  <MapPin className="size-4" />
                  Abrir no mapa
                </a>
              </Button>
            </div>

            <div className="mt-10 space-y-5">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-[1.5rem] border border-[#efe1d0] bg-[#fffdf9] p-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-600/15">
                    <item.icon className="h-5 w-5 text-amber-600" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#b0805f]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-base leading-7 !text-[#5f4535] transition-colors hover:!text-[#2d1810]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base leading-7 text-[#5f4535]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#ead8c3] bg-[#fffaf4] p-3 shadow-[0_24px_60px_rgba(77,46,25,0.08)]">
            <div className="h-[36rem] overflow-hidden rounded-[1.4rem]">
              <iframe
                src={embeddedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Patrocinio MG"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
