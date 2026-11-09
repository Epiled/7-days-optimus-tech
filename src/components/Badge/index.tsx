import styles from "./Badge.module.scss";

export type BadgeType = "brand" | "success" | "info" | "warning" | "neutral";

interface BadgeProps {
  label: string;
  type: BadgeType;
}

export default function Badge({ label, type }: BadgeProps) {
  return (
    <span className={styles.badge} data-type={type}>
      {label}
    </span>
  );
}
