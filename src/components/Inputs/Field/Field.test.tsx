import { render, screen } from "@testing-library/react";
import Field from ".";

describe("Field", () => {
  it("should render the Field", () => {
    render(<Field />);

    const field = screen.getByRole("textbox");

    expect(field).toBeInTheDocument();
  });

  it("should render label, placeholder and optional text", () => {
    render(
      <Field
        name="name"
        label="Name"
        placeholder="Enter your name"
        optional="Opcional"
        iconBefore={{ name: "user" }}
        iconAfter={{ name: "eye" }}
      />,
    );

    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    expect(screen.getByText("(Opcional)")).toBeInTheDocument();
  });

  it("should render required indicator", () => {
    render(<Field name="email" label="Email" required />);

    expect(screen.getByRole("textbox", { name: "Email" })).toBeRequired();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("should render icons before and after the input", () => {
    render(
      <Field
        iconBefore={{
          name: "user",
          props: { label: "User icon" },
        }}
        iconAfter={{
          name: "eye",
          props: { label: "Visibility icon" },
        }}
      />,
    );

    expect(screen.getByLabelText("User icon")).toBeInTheDocument();
    expect(screen.getByLabelText("Visibility icon")).toBeInTheDocument();
  });

  it("should render character count and feedback", () => {
    render(
      <Field
        defaultValue="João"
        maxLength={50}
        count
        feedback="Field feedback"
      />,
    );

    expect(screen.getByText("4/50")).toBeInTheDocument();
    expect(screen.getByText("Field feedback")).toBeInTheDocument();
  });
});
