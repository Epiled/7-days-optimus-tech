import { render, screen } from "@testing-library/react";

import Card from ".";

describe("Card", () => {
  it("should render the Card", () => {
    render(
      <Card
        imagicon={{ shape: "circle", type: "brand" }}
        value={0}
        title={"Candidaturas"}
        text={"Total de candidaturas"}
      />,
    );

    const value = screen.getByText("0");
    const title = screen.getByRole("heading", { name: "Candidaturas" });
    const text = screen.getByText("Total de candidaturas");

    expect(value).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("should render custom title and text", () => {
    render(
      <Card
        imagicon={{ shape: "circle", type: "brand" }}
        value={5}
        title="Vagas disponíveis"
        text="Total de vagas abertas"
      />,
    );

    const value = screen.getByText("5");
    const title = screen.getByRole("heading", { name: "Vagas disponíveis" });
    const text = screen.getByText("Total de vagas abertas");

    expect(value).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("should pass shape and type to Imagicon", () => {
    const { container } = render(
      <Card
        imagicon={{
          shape: "square",
          type: "success",
        }}
        value={5}
        title="Candidaturas"
        text="Total de candidaturas"
      />,
    );

    const imagicon = container.querySelector('[data-shape="square"]');

    expect(imagicon).toHaveAttribute("data-shape", "square");
    expect(imagicon).toHaveAttribute("data-type", "success");
  });

  it("should render the configured icon", () => {
    render(
      <Card
        imagicon={{
          shape: "circle",
          type: "brand",
          icon: {
            name: "arrowRight",
            props: {
              label: "Ícone de avançar",
            },
          },
        }}
        value={5}
        title="Candidaturas"
        text="Total de candidaturas"
      />,
    );

    expect(screen.getByLabelText("Ícone de avançar")).toBeInTheDocument();
  });
});
