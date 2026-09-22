import { render, screen } from "@testing-library/react";

import Button from ".";

describe("Button", () => {
  it("should render the button", () => {
    render(<Button />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render the button with default text", () => {
    render(<Button />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Botão");
  });

  it("should render the button with custom text", () => {
    render(<Button children="Custom Text" />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Custom Text");
  });
});
