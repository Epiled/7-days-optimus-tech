import { render, screen } from "@testing-library/react";
import Jobs from ".";

describe("Jobs", () => {
  it("should render jobs list", () => {
    render(<Jobs />);

    const jobs = screen.getByRole("heading", {
      name: "Desenvolvimento de Software",
    });

    expect(jobs).toBeInTheDocument();
  });
});
