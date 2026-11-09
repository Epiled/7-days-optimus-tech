import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Radio from ".";

describe("Radio", () => {
  it("should render the Radio", () => {
    render(<Radio label="Radio" />);

    const radio = screen.getByRole("radio", { name: "Radio" });

    expect(radio).toBeInTheDocument();
  });

  it("should be unchecked by default", () => {
    render(<Radio label="Radio" />);

    const radio = screen.getByRole("radio", { name: "Radio" });

    expect(radio).not.toBeChecked();
  });

  it("should render the Radio as checked", () => {
    render(<Radio defaultChecked={true} label="Radio" />);

    const radio = screen.getByRole("radio", { name: "Radio" });

    expect(radio).toBeChecked();
  });

  it("should call onCharge when selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Radio label="Radio" onChange={onChange} />);

    const radio = screen.getByRole("radio", { name: "Radio" });

    await user.click(radio);

    expect(radio).toBeChecked();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("should not charge when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Radio label="Radio" disabled onChange={onChange} />);

    const radio = screen.getByRole("radio", { name: "Radio" });

    await user.click(radio);

    expect(radio).not.toBeChecked();
    expect(onChange).not.toHaveBeenCalled();
  });
});
