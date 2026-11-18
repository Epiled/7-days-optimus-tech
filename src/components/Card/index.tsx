import Imagicon from "../Imagicon";
import styles from "./Card.module.scss";

import type { CardProps } from "./Card.types";

export default function Card({ imagicon, value, title, text }: CardProps) {
  return (
    <div className={styles.card}>
      <Imagicon {...imagicon} />

      <div className={styles.card__content}>
        <span className={styles.card__value}>{value}</span>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__text}>{text}</p>
      </div>
    </div>
  );
}
