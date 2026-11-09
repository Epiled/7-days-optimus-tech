import { render, screen } from "@testing-library/react";
import Step from ".";

describe("Step", () => {
  it("should render the Step", () => {
    render(<Step variant="inactive" stage={1} label="Step" />);

    const step = screen.getByText("Step");

    expect(step).toBeInTheDocument();
  });

  it("should render the Step with custom number and text", () => {
    render(<Step variant="inactive" stage={10} label="Step Custom" />);

    const label = screen.getByText("Step Custom");
    const stage = screen.getByText("10");

    expect(label).toHaveTextContent("Step Custom");
    expect(stage).toHaveTextContent("10");
  });

  it("should render the Step with line", () => {
    render(<Step variant="active" stage={2} label="Step 2" line />);

    const label = screen.getByText("Step 2");
    const step = label.closest("[data-line]");

    expect(step).toHaveAttribute("data-line", "true");
  });

  it("should render the Step without line by default", () => {
    render(<Step variant="inactive" stage={3} label="Step 3" />);

    const label = screen.getByText("Step 3");
    const step = label.closest("[data-line]");

    expect(step).toHaveAttribute("data-line", "false");
  });

  it("should render the Step with active variant", () => {
    render(<Step variant="active" stage={4} label="Step 4" />);

    const stage = screen.getByText("4");
    const label = screen.getByText("Step 4");

    expect(stage).toHaveAttribute("data-variant", "active");
    expect(label).toHaveAttribute("data-variant", "active");
  });

  it("should render the Step with inactive variant", () => {
    render(<Step variant="inactive" stage={5} label="Step 5" />);

    const stage = screen.getByText("5");
    const label = screen.getByText("Step 5");

    expect(stage).toHaveAttribute("data-variant", "inactive");
    expect(label).toHaveAttribute("data-variant", "inactive");
  });
});
