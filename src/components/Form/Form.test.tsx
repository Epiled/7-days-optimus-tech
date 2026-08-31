import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Form from ".";

describe("Form", () => {
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
});
