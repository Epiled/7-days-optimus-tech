import type { ReactNode } from "react";

export type IconSize = 12 | 16 | 20 | 24 | 32;

export type IconColor =
  | "inherit"
  | "brand"
  | "neutral-white"
  | "text-primary"
  | "text-secondary"
  | "success"
  | "info"
  | "warning"
  | "neutral";

export interface IconProps {
  size?: IconSize;
  color?: IconColor;
  label?: string;
  className?: string;
  strokeWidth?: number;
}

export interface IconBaseProps extends IconProps {
  children: ReactNode;
}
