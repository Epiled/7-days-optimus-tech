import { render, screen } from "@testing-library/react";
import Metadate from ".";

describe("Metadate", () => {
  it("should render the Metadate", () => {
    render(<Metadate label={"metadate"} />);

    const metadate = screen.getByText("metadate");

    expect(metadate).toBeInTheDocument();
  });

  it("should override default icon properties", () => {
    const { container } = render(
      <Metadate
        label="metadate"
        icon={{
          name: "calendar",
          props: {
            size: 24,
            color: "brand",
          },
        }}
      />,
    );

    const icon = container.querySelector("svg");

    expect(icon).toHaveAttribute("width", "24");
    expect(icon).toHaveAttribute("height", "24");
    expect(icon).toHaveAttribute("data-color", "brand");
  });
});
