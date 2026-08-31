import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Category from ".";

import jobsMock from "@/data/jobs.json";

describe("Category", () => {
  it("should render category", () => {
    const { category, jobs } = jobsMock[0];

    render(<Category category={category} jobs={jobs} />);

    const categoryTitle = screen.getByRole("heading", {
      name: category,
    });

    expect(categoryTitle).toBeInTheDocument();
  });

  it("should render the jobs", () => {
    const { category, jobs } = jobsMock[0];

    render(<Category category={category} jobs={jobs} />);

    jobs.forEach((job) => {
      expect(
        screen.getByRole("heading", {
          name: job.title,
        }),
      ).toBeInTheDocument();
    });
  });
});
