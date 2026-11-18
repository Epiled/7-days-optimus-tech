import { render, screen } from "@testing-library/react";
import Toggle from ".";
import userEvent from "@testing-library/user-event";

describe("Toggle", () => {
  it("should render the Toggle", () => {
    render(<Toggle isOpen={false} setIsOpen={vi.fn()} />);

    const toggle = screen.getByRole("button", { name: "Abrir menu" });

    expect(toggle).toBeInTheDocument();
  });

  it("should render with open state", () => {
    render(<Toggle isOpen setIsOpen={vi.fn()} />);

    const toggle = screen.getByRole("button", { name: "Fechar menu" });

    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });

  it.each([
    { isOpen: false, expected: true },
    { isOpen: true, expected: false },
  ])("should toggle the menu when clicked", async ({ isOpen, expected }) => {
    const user = userEvent.setup();
    const setIsOpen = vi.fn();

    render(<Toggle isOpen={isOpen} setIsOpen={setIsOpen} />);

    await user.click(screen.getByRole("button"));

    expect(setIsOpen).toHaveBeenCalledWith(expected);
  });
});
