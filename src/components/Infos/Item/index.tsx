import itens from 'data/infos.json';
import styles from './Item.module.scss';

type Item = typeof itens[0];

export default function Infos(props: Item) {

  return (
    <div className={styles.item}>
      <span>
        {`${props.numero}${props.milhar? 'k' : '+'}`}
      </span>
      <h2>
        {props.titulo}
      </h2>
      <p>
        {props.texto}
      </p>
    </div>
  );
}