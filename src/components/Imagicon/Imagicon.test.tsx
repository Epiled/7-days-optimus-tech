import { render, screen } from "@testing-library/react";
import Imagicon from ".";

describe("Imagicon", () => {
  it("should render the Imagicon", () => {
    const { container } = render(<Imagicon shape={"circle"} type={"brand"} />);

    const imagicon = container.querySelector(
      '[data-shape="circle"][data-type="brand"]',
    );

    expect(imagicon).toBeInTheDocument();
  });

  it("should render the Imagicon with letters", () => {
    render(<Imagicon shape={"circle"} type={"brand"} letters="ABC" />);

    const imagicon = screen.getByText("ABC");

    expect(imagicon).toBeInTheDocument();
  });

  it("should render the Imagicon with icon", () => {
    render(
      <Imagicon
        shape="circle"
        type="brand"
        icon={{
          name: "calendar",
          props: {
            label: "Calendar",
          },
        }}
      />,
    );

    const imagicon = screen.getByRole("img", { name: "Calendar" });

    expect(imagicon).toBeInTheDocument();
  });

  it("should render the icon with default size", () => {
    const { container } = render(
      <Imagicon shape={"circle"} type={"brand"} icon={{ name: "calendar" }} />,
    );

    const icon = container.querySelector("svg");

    expect(icon).toHaveAttribute("width", "32");
    expect(icon).toHaveAttribute("height", "32");
  });

  it("should render the Imagicon with square shape", () => {
    const { container } = render(<Imagicon shape={"square"} type="brand" />);

    const imagicon = container.querySelector("[data-shape='square']");

    expect(imagicon).toBeInTheDocument();
    expect(imagicon).toHaveAttribute("data-type", "brand");
  });

  it.each(["brand", "success", "info", "warning", "neutral"] as const)(
    "should render the Imagicon with %s type",
    (type) => {
      const { container } = render(<Imagicon shape={"square"} type={type} />);

      const imagicon = container.querySelector('[data-shape="square"]');

      expect(imagicon).toHaveAttribute("data-type", type);
    },
  );
});
