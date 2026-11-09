import styles from "./Metadate.module.scss";

import Icon from "../Icon/Icon";
import type { MetadateProps } from "./Metadate.types";
import type { IconOptions } from "../Icon/Icon.types";

export default function Metadate({ label, icon }: MetadateProps) {
  const iconProps: IconOptions = {
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
