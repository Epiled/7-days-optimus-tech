import { render, screen } from "@testing-library/react";

import Button from ".";

describe("Button", () => {
  it("should render the button", () => {
    render(<Button variant={"primary"} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render the button with default text", () => {
    render(<Button variant={"primary"} />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Button");
  });

  it("should render the button with custom text", () => {
    render(<Button text="Custom Text" variant={"primary"} />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Custom Text");
  });

  it.each(["primary", "secondary", "outline", "outline-primary"] as const)(
    "should render the Button with %s type",
    (type) => {
      render(<Button variant={type} />);

      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("data-variant", type);
    },
  );
});
