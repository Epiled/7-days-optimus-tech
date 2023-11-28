import styles from './Wrap.module.scss';

interface Props {
  children: React.ReactNode
}

export default function Wrap({ children }: Props) {
  return (
    <div className={styles.wrap}>
      {children}
    </div>
  );
}