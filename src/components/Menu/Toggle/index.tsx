import classNames from "classnames";
import styles from "./Toggle.module.scss";

interface ToggleProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toggle({ isOpen, setIsOpen }: ToggleProps) {
  return (
    <div
      className={classNames({
        [styles.toggle]: true,
        [styles.open]: isOpen,
      })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  );
}
