import { render, screen } from "@testing-library/react";
import Menu from ".";

describe("Menu", () => {
  it("should render the menu", () => {
    render(<Menu />);

    const menu = screen.getByRole("navigation");

    expect(menu).toBeInTheDocument();
  });
});
