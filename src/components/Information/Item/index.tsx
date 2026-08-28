// typescript-eslint/no-unused-vars
import { useState, useEffect, type FC, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Item.module.scss";
import type { Metric } from "@/types/Metric";

const Infos: FC<Metric> = (props) => {
  const [count, setCount] = useState<number>(0);
  const limitRef = useRef<number>(props.number);
  const duration = 2; // Tempo total em segundos
  const timeout: number = duration / limitRef.current;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let time = 0;

      // Inicializa o timeout quando o componente monta
      const timeoutId = setInterval(() => {
        if (count < limitRef.current && time <= duration) {
          setCount((prevCount) => prevCount + 1);
          time += timeout;
        } else {
          clearInterval(timeoutId);
        }
      }, timeout * 1000);

      // Limpa o timeout quando o componente desmonta
      return () => clearInterval(timeoutId);
    }
  }, [count, limitRef.current, duration, inView]);

  return (
    <div ref={ref} className={styles.item}>
      <span
        className={styles.item__count}
      >{`${count}${props.thousand ? "k" : "+"}`}</span>
      <h2 className={styles.item__title}>{props.title}</h2>
      <p className={styles.item__text}>{props.text}</p>
    </div>
  );
};

export default Infos;
