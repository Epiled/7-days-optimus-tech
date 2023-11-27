import styles from './Categoria.module.scss';
import Item from './Item';

interface Props {
  categoria: string;
  vagas: {
    titulo: string;
    modelo: string;
    salario: string;
  }[];
}


export default function Categoria({ categoria, vagas }: Props) {

  return (
    <section>
      <h3 className={styles.categoria__titulo}>
        {categoria}
      </h3>
      <ul className={styles.categoria__vagas}>
        {vagas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </section>
  );
}