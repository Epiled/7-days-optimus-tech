import { render, screen } from "@testing-library/react";
import Tab from ".";

describe("Tab", () => {
  it("should render the Tab", () => {
    render(<Tab label="Tab" />);

    const tab = screen.getByRole("tab", { name: "Tab" });

    expect(tab).toBeInTheDocument();
  });

  it("should use active state by default", () => {
    render(<Tab label="Tab" />);

    const tab = screen.getByRole("tab", { name: "Tab" });

    expect(tab).toHaveAttribute("data-state", "active");
    expect(tab).toHaveAttribute("aria-selected", "true");
  });

  it.each(["active", "inactive"] as const)(
    "should render the Tab with state %s",
    (state) => {
      render(<Tab label="Tab" state={state} />);

      const tab = screen.getByRole("tab", { name: "Tab" });

      expect(tab).toHaveAttribute("data-state", state);
      expect(tab).toHaveAttribute("aria-selected", String(state === "active"));
    },
  );
});
