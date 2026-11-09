import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon", () => {
  it("should render the Icon", () => {
    const { container } = render(<Icon name="calendar" />);

    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("should render the Icon with default size", () => {
    const { container } = render(<Icon name="calendar" />);

    const icon = container.querySelector("svg");

    expect(icon).toHaveAttribute("width", "24");
    expect(icon).toHaveAttribute("height", "24");
  });

  it.each([12, 16, 24, 32] as const)(
    "should render the Icon with %s size",
    (size) => {
      const { container } = render(<Icon name="calendar" size={size} />);

      const icon = container.querySelector("svg");

      expect(icon).toHaveAttribute("width", `${size}`);
      expect(icon).toHaveAttribute("height", `${size}`);
    },
  );

  it.each([
    "inherit",
    "brand",
    "neutral-white",
    "text-primary",
    "text-secondary",
    "success",
    "info",
    "warning",
    "neutral",
  ] as const)("should render the Icon with %s color", (color) => {
    const { container } = render(<Icon name="calendar" color={color} />);

    const icon = container.querySelector("svg");

    expect(icon).toHaveAttribute("data-color", color);
  });

  it("should render the Icon with accessible label", () => {
    render(<Icon name="calendar" label="Calendar" />);

    expect(screen.getByRole("img", { name: "Calendar" })).toBeInTheDocument();
  });

  it("should hide the icon from assistive technologies when no label is provided", () => {
    const { container } = render(<Icon name="calendar" />);

    const icon = container.querySelector("svg");

    expect(icon).toHaveAttribute("aria-hidden", "true");
  });
});
