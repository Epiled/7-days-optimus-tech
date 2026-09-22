import { render, screen } from "@testing-library/react";

import Item from ".";

describe("Item", () => {
  it("should render the job information", () => {
    render(
      <Item title="Product Designer" journey="Full-time" salary="7.000" />,
    );

    const item = screen.getByRole("listitem");
    const title = screen.getByRole("heading", {
      name: "Product Designer",
    });
    const journey = screen.getByText("Full-time");
    const salary = screen.getByText("Faixa salarial: R$7.000");

    expect(item).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(journey).toBeInTheDocument();
    expect(salary).toBeInTheDocument();
  });
});
