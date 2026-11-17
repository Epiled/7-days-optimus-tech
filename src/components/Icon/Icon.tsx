import icons, { type IconName } from "./iconRegistry";
import type { IconProps } from "./Icon.types";

export interface IconOptions extends IconProps {
  name: IconName;
}

export interface IconConfig {
  name: IconName;
  props?: IconProps;
}

export default function Icon({ name, ...props }: IconOptions) {
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
}
