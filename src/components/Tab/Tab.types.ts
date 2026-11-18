import type { ButtonHTMLAttributes } from "react";

export type TabState = "active" | "inactive";

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  state?: TabState;
}
