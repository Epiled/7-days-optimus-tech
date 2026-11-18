import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextArea from ".";

describe("TextArea", () => {
  it("should render the TextArea", () => {
    render(<TextArea />);

    const textArea = screen.getByRole("textbox");

    expect(textArea).toBeInTheDocument();
  });

  it("should render label, placeholder and optional text", () => {
    render(
      <TextArea
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
    render(<TextArea name="email" label="Email" required />);

    expect(screen.getByRole("textbox", { name: "Email" })).toBeRequired();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("should render icons before and after the input", () => {
    render(
      <TextArea
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
      <TextArea
        defaultValue="João"
        maxLength={50}
        count
        feedback="Text area feedback"
      />,
    );

    expect(screen.getByText("4/50")).toBeInTheDocument();
    expect(screen.getByText("Text area feedback")).toBeInTheDocument();
  });

  it("should update character count when typing", async () => {
    const user = userEvent.setup();

    render(<TextArea count maxLength={50} />);

    const textArea = screen.getByRole("textbox");

    await user.type(textArea, "Hello");

    expect(screen.getByText("5/50")).toBeInTheDocument();
  });

  it("should call onChange when typing", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<TextArea onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "Hello");

    expect(onChange).toHaveBeenCalled();
  });
});
