import styles from "./Metadate.module.scss";
import Icon from "../Icon/Icon";
import type { MetadateProps } from "./Metadate.types";
import type { IconProps } from "../Icon/Icon.types";

export default function Metadate({ label, icon }: MetadateProps) {
  const iconProps: IconProps = {
    size: 12,
    color: "text-secondary",
    ...icon?.props,
  };

  return (
    <span className={styles.metadate}>
      {icon && <Icon name={icon.name} {...iconProps} />}
      {label}
    </span>
  );
}
