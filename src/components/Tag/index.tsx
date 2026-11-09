import styles from "./Tag.module.scss";

interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return <span className={styles.tag}>{text}</span>;
}
