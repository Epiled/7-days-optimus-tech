import styles from "./Radio.module.scss";
import type { RadioProps } from "./Radio.types";

export default function Radio({
  defaultChecked = false,
  label,
  onChange,
  className,
  ...inputProps
}: RadioProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;

    onChange?.(isChecked);
  };

  return (
    <label className={styles.radio}>
      <input
        {...inputProps}
        type="radio"
        defaultChecked={defaultChecked}
        onChange={handleChange}
        className={`${styles.radio__input} ${className ?? ""}`}
      />

      {label && <span className={styles.radio__label}>{label}</span>}
    </label>
  );
}
