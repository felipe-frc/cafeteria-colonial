import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { menuItems } from "@/data/menu";
import { useCart } from "./useCart";

describe("useCart", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("persiste o carrinho ao adicionar item", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem(menuItems.bebidas[0]);
    });

    expect(result.current.totalItems).toBe(1);
    expect(
      JSON.parse(window.localStorage.getItem("cafeteria-raizes:cart") ?? "[]")
    ).toHaveLength(1);
  });

  it("hidrata itens existentes do localStorage", () => {
    window.localStorage.setItem(
      "cafeteria-raizes:cart",
      JSON.stringify([{ ...menuItems.quitandas[0], quantity: 2 }])
    );

    const { result } = renderHook(() => useCart());

    expect(result.current.totalItems).toBe(2);
    expect(result.current.totalPrice).toBe(
      menuItems.quitandas[0].priceCents * 2
    );
  });

  it("ignora itens inválidos persistidos no localStorage", () => {
    window.localStorage.setItem(
      "cafeteria-raizes:cart",
      JSON.stringify([
        { ...menuItems.bebidas[0], quantity: 1 },
        { id: "invalido", title: "Sem quantidade", quantity: 0 },
        "valor solto",
      ])
    );

    const { result } = renderHook(() => useCart());

    expect(result.current.items).toEqual([
      { ...menuItems.bebidas[0], quantity: 1 },
    ]);
    expect(result.current.totalItems).toBe(1);
  });
});
