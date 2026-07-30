import { contactInfo } from "@/data/contact";
import type { CartItem } from "@/hooks/useCart";
import { formatCurrency } from "./currency";

export function createWhatsappOrderUrl(items: CartItem[], totalPrice: number) {
  const orderItems = items
    .map((item) => {
      const subtotal = formatCurrency(item.priceCents * item.quantity);
      return `• ${item.quantity}x ${item.title} — ${subtotal}`;
    })
    .join("\n");

  const message = [
    `Ola! Gostaria de fazer um pedido na ${contactInfo.businessName}.`,
    "",
    "Itens do pedido:",
    orderItems,
    "",
    `Total: ${formatCurrency(totalPrice)}`,
    `Tipo de pedido: ${contactInfo.orderType}`,
    "",
    "Nome:",
    "Horario de retirada:",
    "Observacoes:",
  ].join("\n");

  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
