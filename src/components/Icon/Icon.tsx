import icons, { type IconName } from "./iconRegistry";
import type { IconOptions } from "./Icon.types";

export interface IconProps extends IconOptions {
  name: IconName;
}

export interface IconConfig {
  name: IconName;
  props?: IconOptions;
}

export default function Icon({ name, ...props }: IconProps) {
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
}
