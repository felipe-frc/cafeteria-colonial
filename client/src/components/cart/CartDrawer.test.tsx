import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { menuItems } from "@/data/menu";
import { CartDrawer } from "./CartDrawer";

describe("CartDrawer", () => {
  it("não renderiza o drawer quando fechado", () => {
    render(
      <CartDrawer
        isOpen={false}
        items={[{ ...menuItems.bebidas[0], quantity: 1 }]}
        totalPrice={menuItems.bebidas[0].priceCents}
        onClose={vi.fn()}
        onIncrease={vi.fn()}
        onDecrease={vi.fn()}
        onRemove={vi.fn()}
        onClear={vi.fn()}
      />
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /fechar carrinho/i })).not.toBeInTheDocument();
  });

  it("fecha ao pressionar Escape", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <CartDrawer
        isOpen
        items={[{ ...menuItems.bebidas[0], quantity: 1 }]}
        totalPrice={menuItems.bebidas[0].priceCents}
        onClose={onClose}
        onIncrease={vi.fn()}
        onDecrease={vi.fn()}
        onRemove={vi.fn()}
        onClear={vi.fn()}
      />
    );

    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("mantém o foco dentro do drawer ao navegar com Tab", async () => {
    const user = userEvent.setup();

    render(
      <CartDrawer
        isOpen
        items={[{ ...menuItems.bebidas[0], quantity: 1 }]}
        totalPrice={menuItems.bebidas[0].priceCents}
        onClose={vi.fn()}
        onIncrease={vi.fn()}
        onDecrease={vi.fn()}
        onRemove={vi.fn()}
        onClear={vi.fn()}
      />
    );

    const closeButton = screen.getByRole("button", { name: /fechar carrinho/i });
    const clearButton = screen.getByRole("button", { name: /limpar carrinho/i });

    expect(closeButton).toHaveFocus();

    clearButton.focus();
    await user.tab();

    expect(closeButton).toHaveFocus();
  });
});
