import { render, screen } from "@testing-library/react";
import ListItem from ".";

describe("ListItem", () => {
  it("should render the ListItem", () => {
    render(
      <ListItem
        imagicon
        title={"Desenvolvedor(a) Front-end"}
        supportText={"Optimus Tech"}
        text="Candidatura em 01/01/2001"
      />,
    );

    const listItem = screen.getByRole("heading", {
      name: "Desenvolvedor(a) Front-end",
    });

    const supportText = screen.getByText("Candidatura em 01/01/2001");

    expect(listItem).toBeInTheDocument();
    expect(supportText).toBeInTheDocument();
  });

  it("should render the Imagicon with custom properties", () => {
    const { container } = render(
      <ListItem
        imagicon={{
          shape: "square",
          type: "success",
        }}
        title={"Developer"}
      />,
    );

    const imagicon = container.querySelector('[data-shape="square"]');

    expect(imagicon).toHaveAttribute("data-type", "success");
  });

  it("should render metadata and tags", () => {
    render(
      <ListItem
        title={"Developer"}
        metadate={[{ label: "Remote" }, { label: "Full-time" }]}
        tag={[{ text: "React" }, { text: "TypeScript" }]}
      />,
    );

    expect(screen.getByText("Remote")).toBeInTheDocument();
    expect(screen.getByText("Full-time")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("should render badge and feedback", () => {
    render(
      <ListItem
        title="Developer"
        badge={{ label: "Success", type: "success" }}
        feedback="Entrevista agendada"
      />,
    );

    const badge = screen.getByText("Success");
    const feedback = screen.getByText("Entrevista agendada");

    expect(badge).toBeInTheDocument();
    expect(feedback).toBeInTheDocument();
  });

  it("should render the action buttons", () => {
    render(
      <ListItem
        title="Developer"
        favorite={{ "aria-label": "Adicionar aos favoritos" }}
        next={{ "aria-label": "Ver detalhes" }}
        button={{ text: "Ver candidatura" }}
      />,
    );

    const favoriteButton = screen.getByRole("button", {
      name: "Adicionar aos favoritos",
    });
    const nextButton = screen.getByRole("button", {
      name: "Ver detalhes",
    });
    const button = screen.getByRole("button", { name: "Ver candidatura" });
    const allButtons = screen.getAllByRole("button");

    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toHaveAttribute(
      "aria-label",
      "Adicionar aos favoritos",
    );

    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveAttribute("aria-label", "Ver detalhes");

    expect(button).toBeInTheDocument();
    expect(allButtons).toHaveLength(3);
  });
});
