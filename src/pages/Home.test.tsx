import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Home } from "./Home";

describe("Home", () => {
  it.only("should render the menu", () => {
    render(<Home />);

    const menu = screen.getByRole("navigation");
    // const information = screen.getByRole("");
    // const testimonials = screen.getByRole("");
    // const opportunities = screen.getByRole("");

    expect(menu).toBeInTheDocument();
    // expect(information);
    // expect(testimonials);
    // expect(opportunities);
  });

  it.only("should render about section", () => {
    render(<Home />);

    const about = screen.getByRole("main");

    expect(about).toBeInTheDocument();
  });

  it.only("should render jobs section", () => {
    render(<Home />);

    const jobs = screen.getByRole("heading", {
      name: "Estamos procurando por talentos",
    });

    expect(jobs).toBeInTheDocument();
  });

  it.only("should render the newsletter form", () => {
    render(<Home />);

    const newsletter = screen.getByRole("complementary");

    const button = within(newsletter).getByRole("button", {
      name: "Cadastrar",
    });

    expect(button).toBeInTheDocument();
  });
});
