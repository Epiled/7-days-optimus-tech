import IconBase from "../IconBase";
import type { IconProps } from "../Icon.types";

export default function TrendingUpIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M16 7H22V13" />
      <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
    </IconBase>
  );
}
