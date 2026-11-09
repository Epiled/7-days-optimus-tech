import type { IconBaseProps } from "./Icon.types";
import styles from "./Icon.module.scss";

export default function IconBase({
  children,
  size = 24,
  color,
  label,
  className,
  strokeWidth = 2,
}: IconBaseProps) {
  return (
    <svg
      data-color={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${styles.icon} ${className ?? ""}`}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      focusable="false"
    >
      {children}
    </svg>
  );
}
