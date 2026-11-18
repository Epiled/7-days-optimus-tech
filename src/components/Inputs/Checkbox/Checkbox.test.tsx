import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Checkbox from ".";

describe("Checkbox", () => {
  it("should render the Checkbox", () => {
    render(<Checkbox label="Checkbox" />);

    const checkbox = screen.getByRole("checkbox", { name: "Checkbox" });

    expect(checkbox).toBeInTheDocument();
  });

  it("should be unchecked by default", () => {
    render(<Checkbox label="Checkbox" />);

    const checkbox = screen.getByRole("checkbox", { name: "Checkbox" });

    expect(checkbox).not.toBeChecked();
  });

  it("should render the Checkbox as checked", () => {
    render(<Checkbox defaultChecked={true} label="Checkbox" />);

    const checkbox = screen.getByRole("checkbox", { name: "Checkbox" });

    expect(checkbox).toBeChecked();
  });

  it("should call onChange when selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Checkbox label="Checkbox" onChange={onChange} />);

    const checkbox = screen.getByRole("checkbox", { name: "Checkbox" });

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("should not charge when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Checkbox label="Checkbox" disabled onChange={onChange} />);

    const checkbox = screen.getByRole("checkbox", { name: "Checkbox" });

    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(onChange).not.toHaveBeenCalled();
  });
});
