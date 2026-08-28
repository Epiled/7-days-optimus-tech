import type JobProps from "@/interfaces/Job";
import styles from "./Item.module.scss";

export default function Item({ title, journey, salary }: JobProps) {
  return (
    <li className={styles.item}>
      <article>
        <h4 className={styles.item__title}>{title}</h4>
        <div className={styles.item__information}>
          <span>{journey}</span>
          <span>Faixa salarial: R${salary}</span>
        </div>
      </article>
    </li>
  );
}
