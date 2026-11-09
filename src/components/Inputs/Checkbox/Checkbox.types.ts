import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLElement>,
  "type" | "checked" | "defaultChecked" | "onChange"
> {
  defaultChecked?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}
