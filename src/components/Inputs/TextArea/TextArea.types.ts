import type { IconConfig } from "@/components/Icon/Icon";
import type { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  optional?: string;
  iconBefore?: IconConfig;
  iconAfter?: IconConfig;
  count?: boolean;
  feedback?: string;
}
