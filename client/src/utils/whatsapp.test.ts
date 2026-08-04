import { describe, expect, it } from "vitest";
import { contactInfo } from "@/data/contact";
import { menuItems } from "@/data/menu";
import { createWhatsappOrderUrl } from "./whatsapp";

describe("createWhatsappOrderUrl", () => {
  it("gera link com nome da cafeteria e itens do pedido", () => {
    const url = createWhatsappOrderUrl(
      [{ ...menuItems.bebidas[0], quantity: 2 }],
      menuItems.bebidas[0].priceCents * 2
    );

    const decodedUrl = decodeURIComponent(url);

    expect(decodedUrl).toContain(contactInfo.businessName);
    expect(decodedUrl).toContain("2x Espresso da Casa");
    expect(decodedUrl).toContain("Retirada no local");
    expect(url).toContain("https://wa.me/553438212000?text=");
  });

  it("inclui os dados de retirada informados pelo cliente", () => {
    const url = createWhatsappOrderUrl(
      [{ ...menuItems.quitandas[0], quantity: 1 }],
      menuItems.quitandas[0].priceCents,
      { customerName: "Felipe", pickupTime: "16h30", notes: "Embalar separado" }
    );

    const decodedUrl = decodeURIComponent(url);
    expect(decodedUrl).toContain("Nome: Felipe");
    expect(decodedUrl).toContain("Horário de retirada: 16h30");
    expect(decodedUrl).toContain("Observações: Embalar separado");
  });
});
