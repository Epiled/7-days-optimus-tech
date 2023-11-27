import styles from './Item.module.scss';

interface Props {
  titulo: string,
  modelo: string,
  salario: string
}


export default function Item({ titulo, modelo, salario }: Props) {
  return (
    <li className={styles.item}>
      <article>
        <h4 className={styles.item__titulo}>
          {titulo}
        </h4>
        <div className={styles.item__infos}>
          <span>{modelo}</span>
          <span>Faixa salarial: R${salario}</span>
        </div>
      </article>
    </li>
  );
}