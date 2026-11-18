import styles from "./Imagicon.module.scss";
import Icon from "../Icon/Icon";
import type { ImagiconProps } from "./Imagicon.types";

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
