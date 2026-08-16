import Categoria from './Categoria';
import styles from './Vagas.module.scss';
import vagas from 'data/vagas.json';

export default function Vagas() {
  return (
    <div className={styles.vagas}>
      {vagas.map((item, index) => (
        <Categoria key={index} categoria={item.categoria} vagas={item.vagas} />
      ))}
    </div>
  );
}