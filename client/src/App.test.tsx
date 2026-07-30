import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renderiza a página principal da cafeteria", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /nosso menu/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /nos encontre/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /bebidas/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /quitandas/i })).toBeInTheDocument();
  });
});
