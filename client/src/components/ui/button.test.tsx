import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renderiza o texto recebido", () => {
    render(<Button>Adicionar</Button>);

    expect(
      screen.getByRole("button", { name: /adicionar/i })
    ).toBeInTheDocument();
  });

  it("permite aplicar classes customizadas", () => {
    render(<Button className="custom-class">Reservar</Button>);

    expect(screen.getByRole("button", { name: /reservar/i })).toHaveClass(
      "custom-class"
    );
  });
});
