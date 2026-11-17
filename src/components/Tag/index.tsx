import styles from "./Tag.module.scss";
import type { TagProps } from "./Tag.types";

export default function Tag({ text }: TagProps) {
  return <span className={styles.tag}>{text}</span>;
}
