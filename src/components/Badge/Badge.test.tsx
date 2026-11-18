import { render, screen } from "@testing-library/react";
import Badge from ".";

describe("Badge", () => {
  it("should render the Badge", () => {
    render(<Badge label={"Badge"} type={"brand"} />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
  });

  it.each(["brand", "success", "info", "warning", "neutral"] as const)(
    "should render the Badge with %s type",
    (type) => {
      render(<Badge label="Badge" type={type} />);

      const badge = screen.getByText("Badge");

      expect(badge).toHaveAttribute("data-type", type);
    },
  );
});
