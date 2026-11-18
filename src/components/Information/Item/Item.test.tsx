import { act, render, screen } from "@testing-library/react";
import {
  useInView,
  type InViewHookResponse,
} from "react-intersection-observer";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import InformationItem from ".";

vi.mock("react-intersection-observer", () => ({
  useInView: vi.fn(),
}));

const mockUseInView = vi.mocked(useInView);

const mockRef = vi.fn<(node?: Element | null) => void>();

const createInViewResponse = (inView: boolean): InViewHookResponse => {
  const response: [typeof mockRef, boolean, undefined] = [
    mockRef,
    inView,
    undefined,
  ];

  return Object.assign(response, {
    ref: mockRef,
    inView,
    entry: undefined,
  });
};

describe("InformationItem", () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue(createInViewResponse(false));
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("should render the Item", () => {
    render(
      <InformationItem
        number={100}
        title="Companies"
        text="Companies that trust us"
        thousand={false}
      />,
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "Companies" }),
    ).toBeInTheDocument();

    expect(screen.getByText("Companies that trust us")).toBeInTheDocument();

    expect(screen.getByText("0+")).toBeInTheDocument();
  });

  it.each([
    { thousand: true, expected: "0k" },
    { thousand: false, expected: "0+" },
  ])("should render the correct suffix", ({ thousand, expected }) => {
    render(
      <InformationItem
        number={100}
        title="Companies"
        text="Companies that trust us"
        thousand={thousand}
      />,
    );

    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it("should not start animation when Item is not visible", () => {
    vi.useFakeTimers();

    render(
      <InformationItem
        number={100}
        thousand={false}
        title="Companies"
        text="Companies that trust us"
      />,
    );

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText("0+")).toBeInTheDocument();
  });

  it("should animate the counter when Item becomes visible", () => {
    vi.useFakeTimers();

    mockUseInView.mockReturnValue(createInViewResponse(true));

    render(
      <InformationItem
        number={100}
        thousand={false}
        title="Companies"
        text="Companies that trust us"
      />,
    );

    expect(screen.getByText("0+")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText("100+")).toBeInTheDocument();
  });

  it("should not start animation when number is zero", () => {
    vi.useFakeTimers();

    mockUseInView.mockReturnValue(createInViewResponse(true));

    const setIntervalSpy = vi.spyOn(window, "setInterval");

    render(
      <InformationItem
        number={0}
        thousand={false}
        title="Companies"
        text="Companies that trust us"
      />,
    );

    expect(setIntervalSpy).not.toHaveBeenCalled();
    expect(screen.getByText("0+")).toBeInTheDocument();
  });
});
