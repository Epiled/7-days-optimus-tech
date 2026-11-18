import IconBase from "../IconBase";
import type { IconProps } from "../Icon.types";

export default function CalendarIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 2V5M16 2V5" />
      <path d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" />
      <path d="M3 9H21M8 13H8.01M12 13H12.01M16 13H16.01M8 17H8.01M12 17H12.01M16 17H16.01" />
    </IconBase>
  );
}
