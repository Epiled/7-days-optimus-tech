import classNames from "classnames";
import styles from "./Toggle.module.scss";
import type { ToggleProps } from "./Toggle.types";

export default function Toggle({ isOpen, setIsOpen }: ToggleProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      className={classNames({
        [styles.toggle]: true,
        [styles.open]: isOpen,
      })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </button>
  );
}
