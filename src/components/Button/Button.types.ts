import type { ButtonHTMLAttributes } from "react";
import type { IconConfig } from "../Icon/Icon";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-primary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  iconBefore?: IconConfig;
  iconAfter?: IconConfig;
  iconOnly?: boolean;
  text?: string;
  spacing?: "small" | "default" | "alternative";
}
