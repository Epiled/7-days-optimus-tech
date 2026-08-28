import styles from "./Category.module.scss";
import Item from "./Item";
import type JobProps from "@/interfaces/Job";

interface CategoryProps {
  category: string;
  jobs: JobProps[];
}

export default function Category({ category, jobs }: CategoryProps) {
  return (
    <section>
      <h3 className={styles.category__title}>{category}</h3>
      <ul className={styles.category__jobs}>
        {jobs.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </section>
  );
}
