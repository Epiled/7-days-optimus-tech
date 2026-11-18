import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import Form from ".";

describe("Form", () => {
  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.resetAllMocks();
  });

  it("should render the form", () => {
    render(<Form />);

    const form = screen.getByRole("form", { name: "newsletter" });

    expect(form).toBeInTheDocument();
  });

  it("should render the email input", () => {
    render(<Form />);

    const input = screen.getByRole("textbox", {
      name: "Seu e-mail",
    });

    expect(input).toBeInTheDocument();
  });

  it("should render the submit button", () => {
    render(<Form />);

    const button = screen.getByRole("button", { name: "Cadastrar" });

    expect(button).toBeInTheDocument();
  });

  it("should show feedback when email is empty", async () => {
    const user = userEvent.setup();

    render(<Form />);

    await user.click(screen.getByRole("button", { name: "Cadastrar" }));

    expect(screen.getByText("Digite seu e-mail.")).toBeInTheDocument();
  });

  it("should register email successfully", async () => {
    const user = userEvent.setup();

    render(<Form />);

    const input = screen.getByRole("textbox", { name: "Seu e-mail" });

    await user.type(input, "teste@gmail.com");

    await user.click(screen.getByRole("button", { name: "Cadastrar" }));

    expect(screen.getByRole("button", { name: "Enviando..." })).toBeDisabled();

    expect(
      await screen.findByText(
        "E-mail cadastrado com sucesso!",
        {},
        { timeout: 2000 },
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Cadastrar" })).toBeEnabled();
  });
});
