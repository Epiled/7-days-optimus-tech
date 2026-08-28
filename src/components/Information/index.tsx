import styles from "./Information.module.scss";
import Item from "./Item";
import metrics from "@/data/metrics.json";

export default function Infos() {
  return (
    <section className={styles.information}>
      {metrics.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </section>
  );
}
