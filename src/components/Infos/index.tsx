import itens from 'data/infos.json';
import styles from './Informacoes.module.scss';
import Item from './Item';

export default function Infos() {
  return (
    <section className={styles.informacoes}>
      {itens.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </section>
  );
}