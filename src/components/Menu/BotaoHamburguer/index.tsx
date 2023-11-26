import styles from './BotaoHamburguer.module.scss';
import classNames from 'classnames';

interface Props {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BotaoHamburguer({ isOpen, setIsOpen}: Props) {

  return (
    <div
      className={
        classNames({
          [styles.botaoHamburguer]: true,
          [styles.open]: isOpen
        })}
      onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div >
  );
}