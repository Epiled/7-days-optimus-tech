import styles from './Item.module.scss';
import { useState, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { Item } from 'types/Item';


const Infos: FC<Item> = (props) => {

  const [contador, setContador] = useState<number>(0);
  const [limite, setLimite] = useState<number>(props.numero);
  const duracaoTotal = 2; // Tempo total em segundos
  const intervalo: number = duracaoTotal / limite;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let tempoDecorrido = 0;

      // Inicializa o intervalo quando o componente monta
      const intervaloId = setInterval(() => {
        if (contador < limite && tempoDecorrido <= duracaoTotal) {
          setContador((prevContador) => prevContador + 1);
          tempoDecorrido += intervalo;
        } else {
          clearInterval(intervaloId);
        }
      }, intervalo * 1000);

      // Limpa o intervalo quando o componente desmonta
      return () => clearInterval(intervaloId);
    }
  }, [contador, limite, duracaoTotal, inView]);

  return (
    <div ref={ref} className={styles.item}>
      <span>
        {`${contador}${props.milhar ? 'k' : '+'}`}
      </span>
      <h2>
        {props.titulo}
      </h2>
      <p>
        {props.texto}
      </p>
    </div>
  );
};

export default Infos;