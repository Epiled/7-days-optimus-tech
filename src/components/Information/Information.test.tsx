import { render, screen } from "@testing-library/react";
import Information from ".";
import metrics from "@/data/metrics.json";

describe("Information", () => {
  it("should render the Information", () => {
    render(<Information />);

    const information = screen.getAllByRole("heading", { level: 2 });

    expect(information).toHaveLength(metrics.length);
  });

  it("should render all metrics", () => {
    render(<Information />);

    metrics.forEach(({ title, text }) => {
      expect(
        screen.getByRole("heading", { level: 2, name: title }),
      ).toBeInTheDocument();

      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
