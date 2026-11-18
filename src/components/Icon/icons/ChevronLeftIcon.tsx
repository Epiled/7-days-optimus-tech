import IconBase from "../IconBase";
import type { IconProps } from "../Icon.types";

export default function ChevronLeftIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M15 18L9 12L15 6" />
    </IconBase>
  );
}
