import styles from "./Badge.module.scss";
import type { BadgeProps } from "./Badge.types";

export default function Badge({ label, type }: BadgeProps) {
  return (
    <span className={styles.badge} data-type={type}>
      {label}
    </span>
  );
}
