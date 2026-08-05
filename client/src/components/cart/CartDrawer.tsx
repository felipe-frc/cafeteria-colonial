import { useEffect, useId, useRef, useState } from "react";
import { Minus, Plus, Send, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CartItem } from "@/hooks/useCart";
import { formatCurrency } from "@/utils/currency";
import { createWhatsappOrderUrl } from "@/utils/whatsapp";

type CartDrawerProps = {
  isOpen: boolean;
  items: CartItem[];
  totalPrice: number;
  onClose: () => void;
  onIncrease: (itemId: string) => void;
  onDecrease: (itemId: string) => void;
  onRemove: (itemId: string) => void;
  onClear: () => void;
};

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function CartDrawer({
  isOpen,
  items,
  totalPrice,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [notes, setNotes] = useState("");
  const hasItems = items.length > 0;
  const whatsappUrl = createWhatsappOrderUrl(items, totalPrice, {
    customerName,
    pickupTime,
    notes,
  });
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      previousFocusedElementRef.current?.focus();
      return;
    }

    previousFocusedElementRef.current =
      document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }

      const focusableElements = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-[rgba(32,20,14,0.42)] opacity-100 backdrop-blur-[5px] transition-opacity duration-300"
        aria-hidden="true"
        onClick={onClose}
      />

      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="fixed bottom-0 right-0 top-0 z-[70] flex w-full max-w-lg translate-x-0 flex-col border-l border-[rgb(var(--brown-rgb)/0.16)] bg-[rgb(var(--cream-rgb)/0.96)] text-[rgb(var(--brown-rgb))] shadow-[0_24px_80px_rgb(var(--brown-rgb)/0.22)] backdrop-blur-xl sm:rounded-l-[2rem]"
      >
        <header className="flex items-center justify-between border-b border-[rgb(var(--brown-rgb)/0.14)] px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--terracotta-rgb))]">
              Pedido para retirada
            </p>
            <h2 id={titleId} className="mt-1 text-2xl font-bold text-[rgb(var(--green-rgb))]">
              Seu carrinho
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-[rgb(var(--brown-rgb)/0.14)] bg-[rgb(var(--cream-rgb)/0.55)] p-2 text-[rgb(var(--brown-rgb)/0.78)] transition-colors hover:bg-[rgb(var(--cream-rgb)/0.82)] hover:text-[rgb(var(--green-rgb))]"
            aria-label="Fechar carrinho"
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {!hasItems ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-[2rem] border border-dashed border-[rgb(var(--brown-rgb)/0.18)] bg-[rgb(var(--cream-rgb)/0.6)] p-8 text-center shadow-[0_18px_40px_rgb(var(--brown-rgb)/0.08)]">
              <ShoppingBag className="mb-5 size-12 text-[rgb(var(--terracotta-rgb))]" />
              <h3 className="text-2xl font-bold text-[rgb(var(--green-rgb))]">Carrinho vazio</h3>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--brown-rgb))]">
                Escolha uma bebida ou quitanda no menu para montar seu pedido de retirada.
              </p>
              <Button
                className="mt-6 rounded-full bg-[rgb(var(--terracotta-rgb))] px-6 text-white hover:bg-[rgb(var(--terracotta-rgb)/0.92)]"
                onClick={onClose}
              >
                Ver menu
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <article
                  key={item.id}
                  className="rounded-[1.6rem] border border-[rgb(var(--brown-rgb)/0.14)] bg-[rgb(var(--cream-rgb)/0.68)] p-4 shadow-[0_16px_34px_rgb(var(--brown-rgb)/0.08)]"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="88"
                      height="88"
                      className="size-20 rounded-2xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-bold text-[rgb(var(--green-rgb))]">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm text-[rgb(var(--brown-rgb)/0.78)]">{item.price}</p>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="rounded-full p-2 text-[rgb(var(--brown-rgb)/0.68)] transition-colors hover:bg-[rgb(var(--terracotta-rgb)/0.12)] hover:text-[rgb(var(--terracotta-rgb))]"
                          aria-label={`Remover ${item.title}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-[rgb(var(--brown-rgb)/0.16)] bg-[rgb(var(--cream-rgb)/0.82)] p-1">
                          <button
                            type="button"
                            onClick={() => onDecrease(item.id)}
                            className="rounded-full p-2 text-[rgb(var(--brown-rgb)/0.86)] transition-colors hover:bg-white hover:text-[rgb(var(--green-rgb))]"
                            aria-label={`Diminuir quantidade de ${item.title}`}
                          >
                            <Minus className="size-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-bold text-[rgb(var(--green-rgb))]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onIncrease(item.id)}
                            className="rounded-full p-2 text-[rgb(var(--brown-rgb)/0.86)] transition-colors hover:bg-white hover:text-[rgb(var(--green-rgb))]"
                            aria-label={`Aumentar quantidade de ${item.title}`}
                          >
                            <Plus className="size-4" />
                          </button>
                        </div>

                        <strong className="text-sm text-[rgb(var(--terracotta-rgb))]">
                          {formatCurrency(item.priceCents * item.quantity)}
                        </strong>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <div className="mt-7 border-t border-[rgb(var(--brown-rgb)/0.14)] pt-7">
                <h3 className="text-lg font-semibold text-[rgb(var(--green-rgb))]">
                  Dados para retirada
                </h3>
                <p className="mt-1 text-sm text-[rgb(var(--brown-rgb)/0.82)]">
                  Esses dados serão incluídos na mensagem do WhatsApp.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-[.12em] text-[rgb(var(--brown-rgb)/0.82)]">
                    Seu nome
                    <input
                      value={customerName}
                      onChange={event => setCustomerName(event.target.value)}
                      placeholder="Como podemos chamar você?"
                      className="h-12 rounded-2xl border border-[rgb(var(--brown-rgb)/0.16)] bg-[rgb(var(--cream-rgb)/0.8)] px-4 text-sm font-normal normal-case tracking-normal text-[rgb(var(--brown-rgb))] placeholder:text-[rgb(var(--brown-rgb)/0.56)] focus:border-[rgb(var(--terracotta-rgb))]"
                    />
                  </label>
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-[.12em] text-[rgb(var(--brown-rgb)/0.82)]">
                    Horário desejado
                    <input
                      value={pickupTime}
                      onChange={event => setPickupTime(event.target.value)}
                      placeholder="Ex.: 16h30"
                      className="h-12 rounded-2xl border border-[rgb(var(--brown-rgb)/0.16)] bg-[rgb(var(--cream-rgb)/0.8)] px-4 text-sm font-normal normal-case tracking-normal text-[rgb(var(--brown-rgb))] placeholder:text-[rgb(var(--brown-rgb)/0.56)] focus:border-[rgb(var(--terracotta-rgb))]"
                    />
                  </label>
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-[.12em] text-[rgb(var(--brown-rgb)/0.82)] sm:col-span-2">
                    Observações
                    <textarea
                      value={notes}
                      onChange={event => setNotes(event.target.value)}
                      placeholder="Ex.: sem açúcar, embalagem separada..."
                      rows={3}
                      className="resize-none rounded-2xl border border-[rgb(var(--brown-rgb)/0.16)] bg-[rgb(var(--cream-rgb)/0.8)] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[rgb(var(--brown-rgb))] placeholder:text-[rgb(var(--brown-rgb)/0.56)] focus:border-[rgb(var(--terracotta-rgb))]"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <footer className="border-t border-[rgb(var(--brown-rgb)/0.14)] bg-[rgb(var(--cream-rgb)/0.95)] px-6 py-5 sm:px-8">
          <div className="mb-4 flex items-center justify-between text-[rgb(var(--brown-rgb))]">
            <span className="text-sm uppercase tracking-[0.25em] text-[rgb(var(--brown-rgb)/0.82)]">
              Total
            </span>
            <strong aria-live="polite" className="text-2xl text-[rgb(var(--terracotta-rgb))]">
              {formatCurrency(totalPrice)}
            </strong>
          </div>

          <div className="grid gap-3">
            {hasItems ? (
              <Button
                asChild
                className="h-[3.25rem] rounded-full bg-[rgb(var(--green-rgb))] text-white shadow-[0_12px_28px_rgb(var(--green-rgb)/0.18)] hover:bg-[rgb(var(--terracotta-rgb))]"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <Send className="size-4" /> Finalizar pelo WhatsApp
                </a>
              </Button>
            ) : (
              <Button disabled className="h-12 rounded-2xl bg-[rgb(var(--green-rgb)/0.58)] text-white">
                Enviar pedido pelo WhatsApp
              </Button>
            )}

            {hasItems && (
              <button
                type="button"
                onClick={onClear}
                className="text-sm font-semibold text-[rgb(var(--brown-rgb)/0.82)] transition-colors hover:text-[rgb(var(--green-rgb))]"
              >
                Limpar carrinho
              </button>
            )}
          </div>
        </footer>
      </aside>
    </>
  );
}
