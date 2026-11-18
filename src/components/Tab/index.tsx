import styles from "./Tab.module.scss";
import type { TabProps } from "./Tab.types";

export default function Tab({ label, state = "active" }: TabProps) {
  return (
    <button
      type="button"
      className={styles.tab}
      data-state={state}
      role="tab"
      aria-selected={state === "active"}
      tabIndex={state === "active" ? 0 : -1}
    >
      {label}
    </button>
  );
}
