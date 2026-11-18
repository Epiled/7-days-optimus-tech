import IconBase from "../IconBase";
import type { IconProps } from "../Icon.types";

export default function CircleCheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
      <path d="M16 9L10.5 14.5L8 12" />
    </IconBase>
  );
}
