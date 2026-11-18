import { render, screen } from "@testing-library/react";
import Tag from ".";

describe("Tag", () => {
  it("should render the Tag", () => {
    render(<Tag text="Tag" />);

    const tag = screen.getByText("Tag");

    expect(tag).toBeInTheDocument();
  });
});
