import Icon, { type IconConfig } from "../Icon/Icon";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./Button.types";

export default function Button({
  variant = "primary",
  iconBefore,
  iconAfter,
  iconOnly,
  text = "Button",
  spacing = "default",
  className,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const renderIcon = (icon?: IconConfig) => {
    if (!icon) return null;

    return <Icon name={icon.name} size={16} color="inherit" {...icon.props} />;
  };

  return (
    <button
      {...buttonProps}
      type={type}
      className={`${styles.button} ${className ?? ""}`}
      data-variant={variant}
      data-spacing={spacing}
      data-icon-only={iconOnly}
    >
      {renderIcon(iconBefore)}

      {!iconOnly && text}

      {renderIcon(iconAfter)}
    </button>
  );
}
