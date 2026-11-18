export type BadgeType = "brand" | "success" | "info" | "warning" | "neutral";

export interface BadgeProps {
  label: string;
  type: BadgeType;
}
