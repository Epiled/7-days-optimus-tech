import styles from "./Imagicon.module.scss";

import Icon, { type IconConfig } from "../Icon/Icon";
import type { BadgeType } from "../Badge";

interface ImagiconProps {
  shape: "circle" | "square";
  type: BadgeType;
  icon?: IconConfig;
  letters?: string;
}

export default function Imagicon({
  shape,
  type,
  icon,
  letters,
}: ImagiconProps) {
  const iconProps = {
    size: 32 as const,
    ...icon?.props,
  };
  return (
    <span className={styles.imagicon} data-shape={shape} data-type={type}>
      {icon && <Icon name={icon.name} {...iconProps} />}
      {letters && letters}
    </span>
  );
}
