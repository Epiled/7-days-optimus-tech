import { useState } from "react";
import styles from "./Checkbox.module.scss";
import Icon from "../../Icon/Icon";
import type { CheckboxProps } from "./Checkbox.types";

export default function Checkbox({
  defaultChecked = false,
  label,
  onChange,
  className,
  ...inputProps
}: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;

    setChecked(isChecked);
    onChange?.(isChecked);
  };

  return (
    <label className={styles.checkbox}>
      <input
        {...inputProps}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={`${styles.checkbox__input} ${className ?? ""}`}
      />

      <span
        className={styles.checkbox__box}
        data-state={checked ? "active" : "inactive"}
        aria-hidden="true"
      >
        {checked && (
          <Icon
            color="neutral-white"
            size={12}
            name="check"
            className={styles.checkbox__icon}
          />
        )}
      </span>

      {label && <span className={styles.checkbox__label}>{label}</span>}
    </label>
  );
}
