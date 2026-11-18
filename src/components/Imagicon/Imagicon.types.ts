import type { IconConfig } from "../Icon/Icon";

export type ImageiconType =
  | "brand"
  | "success"
  | "info"
  | "warning"
  | "neutral";

export interface ImagiconProps {
  shape: "circle" | "square";
  type: ImageiconType;
  icon?: IconConfig;
  letters?: string;
}
