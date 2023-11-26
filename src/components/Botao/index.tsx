import styles from './Botao.module.scss';

interface Props {
  children?: string,
}

export default function Botao({ children }: Props) {
  return (
    <button className={styles.botao}>
      {children? children : 'Botão'}
    </button>
  );
}