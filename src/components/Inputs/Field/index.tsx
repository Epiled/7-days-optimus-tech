import styles from "./Field.module.scss";
import { useId, useState } from "react";
import Icon, { type IconConfig } from "@/components/Icon/Icon";
import type { FieldProps } from "./Field.types";

export default function Field({
  label,
  optional,
  iconBefore,
  iconAfter,
  count,
  feedback,
  ...inputProps
}: FieldProps) {
  const renderIcon = (icon: IconConfig) => {
    if (!icon) return null;

    return (
      <Icon
        {...(icon.props ?? {})}
        name={icon.name}
        size={icon.props?.size ?? 20}
        color={icon.props?.color ?? "text-secondary"}
      />
    );
  };

  const generatedId = useId();
  const inputId = inputProps.id ?? inputProps.name ?? generatedId;

  const [currentLength, setCurrentLength] = useState(
    String(inputProps.value ?? inputProps.defaultValue ?? "").length,
  );

  return (
    <div className={styles.field}>
      <div className={styles.field__header}>
        {label && (
          <label className={styles.field__label} htmlFor={inputId}>
            {label}
          </label>
        )}
        {inputProps.required && (
          <span className={styles.field__required}>*</span>
        )}
        {!inputProps.required && optional && (
          <span className={styles.field__optional}>({optional})</span>
        )}
      </div>

      <div className={styles.field__main}>
        <div className={styles.field__inputRow}>
          {iconBefore && renderIcon(iconBefore)}

          <input
            {...inputProps}
            id={inputId}
            className={styles.field__input}
            onChange={(event) => {
              setCurrentLength(event.currentTarget.value.length);
              inputProps.onChange?.(event);
            }}
          />

          {iconAfter && renderIcon(iconAfter)}
        </div>

        {count && inputProps.maxLength !== undefined && (
          <span className={styles.field__count}>
            {currentLength}/{inputProps.maxLength}
          </span>
        )}
      </div>

      {feedback && <span className={styles.field__feedback}>{feedback}</span>}
    </div>
  );
}
