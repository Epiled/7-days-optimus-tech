import type { IconConfig } from "@/components/Icon/Icon";
import type { InputHTMLAttributes } from "react";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  optional?: string;
  iconBefore?: IconConfig;
  iconAfter?: IconConfig;
  count?: boolean;
  feedback?: string;
}
