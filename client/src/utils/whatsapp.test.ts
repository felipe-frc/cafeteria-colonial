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
});
