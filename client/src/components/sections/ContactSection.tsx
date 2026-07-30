import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";

const mapLocationUrl = "https://maps.google.com/?q=Patrocínio%20MG";
const embeddedMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552737.0817473176!2d-47.094663697587215!3d-19.00589641062706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94afba88e5ce6e53%3A0x6131553223c88567!2sPatroc%C3%ADnio%20-%20MG%2C%2038740-000!5e0!3m2!1spt-BR!2sbr!4v1776968163894!5m2!1spt-BR!2sbr";

const contactItems = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua das Flores, 123 - Centro, Patrocínio - MG",
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
    label: "Email",
    value: "contato@cafeteriaraizes.com.br",
    href: "mailto:contato@cafeteriaraizes.com.br",
  },
  {
    icon: Clock,
    label: "Horários",
    value: "Seg-Sex: 7h-19h | Sab: 8h-18h | Dom: 9h-17h",
  },
];

const whatsappHref = `https://wa.me/${contactInfo.whatsappNumber}`;

export function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <SectionTitle eyebrow="Visite-nos" title="Nos Encontre" />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
                Atendimento
              </p>
              <h3 className="mt-4 text-3xl font-bold text-white">
                Faça seu pedido e fale com a cafeteria sem sair da página.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Entre em contato para tirar dúvidas, combinar retirada e conhecer melhor o menu
                artesanal da Cafeteria Raízes.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-2xl px-6">
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" />
                    Chamar no WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl px-6">
                  <a href={mapLocationUrl} target="_blank" rel="noreferrer">
                    <MapPin className="size-4" />
                    Abrir no mapa
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-5">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="group flex gap-6 rounded-2xl border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-600/20 transition-all group-hover:bg-amber-600/40">
                    <item.icon className="h-6 w-6 text-amber-600" />
                  </div>

                  <div>
                    <p className="mb-1 text-sm font-light uppercase tracking-wider text-white/60">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-lg font-light text-white transition-colors hover:text-amber-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-light text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-96 overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              src={embeddedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Patrocínio MG"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
