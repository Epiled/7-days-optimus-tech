import styles from "./TextArea.module.scss";
import { useId, useState } from "react";
import type { IconConfig } from "@/components/Icon/Icon";
import Icon from "@/components/Icon/Icon";
import type { TextAreaProps } from "./TextArea.types";

export default function TextArea({
  label,
  optional,
  iconBefore,
  iconAfter,
  count,
  feedback,
  ...textAreaProps
}: TextAreaProps) {
  const renderIcon = (icon: IconConfig) => {
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
  const textAreaId = textAreaProps.id ?? textAreaProps.name ?? generatedId;

  const [currentLength, setCurrentLength] = useState(
    String(textAreaProps.value ?? textAreaProps.defaultValue ?? "").length,
  );

  return (
    <div className={styles.textArea}>
      <div className={styles.textArea__header}>
        {label && (
          <label className={styles.textArea__label} htmlFor={textAreaId}>
            {label}
          </label>
        )}
        {textAreaProps.required && (
          <span className={styles.textArea__required}>*</span>
        )}
        {!textAreaProps.required && optional && (
          <span className={styles.textArea__optional}>({optional})</span>
        )}
      </div>

      <div className={styles.textArea__main}>
        <div className={styles.textArea__inputRow}>
          {iconBefore && renderIcon(iconBefore)}

          <textarea
            {...textAreaProps}
            id={textAreaId}
            className={styles.textArea__input}
            onChange={(event) => {
              setCurrentLength(event.currentTarget.value.length);
              textAreaProps.onChange?.(event);
            }}
          />

          {iconAfter && renderIcon(iconAfter)}
        </div>

        {count && textAreaProps.maxLength !== undefined && (
          <span className={styles.textArea__count}>
            {currentLength}/{textAreaProps.maxLength}
          </span>
        )}
      </div>

      {feedback && (
        <span className={styles.textArea__feedback}>{feedback}</span>
      )}
    </div>
  );
}
