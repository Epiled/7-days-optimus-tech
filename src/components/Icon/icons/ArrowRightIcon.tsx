import IconBase from "../IconBase";
import type { IconProps } from "../Icon.types";

export default function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12H19M12 19L19 12L12 5" />
    </IconBase>
  );
}
