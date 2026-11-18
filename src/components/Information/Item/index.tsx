import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Item.module.scss";
import type { Metric } from "@/types/Metric";

const DURATION = 2000;
const INTERVAL = 16;

export default function InformationItem({ number, thousand, title, text }: Metric) {
  const [count, setCount] = useState<number>(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView || number <= 0) return;

    const startTime = Date.now();

    const intervalId = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / DURATION, 1);

      const nextCount = progress >= 1 ? number : Math.floor(number * progress);

      setCount(nextCount);

      if (progress >= 1) {
        window.clearInterval(intervalId);
      }
    }, INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [inView, number]);

  return (
    <div ref={ref} className={styles.item}>
      <span
        className={styles.item__count}
      >{`${count}${thousand ? "k" : "+"}`}</span>
      <h2 className={styles.item__title}>{title}</h2>
      <p className={styles.item__text}>{text}</p>
    </div>
  );
}
