import { useState } from 'react';
import classNames from 'classnames';
import styles from './Menu.module.scss';
import Button from 'components/Button';
import Toggle from './Toggle';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

export default function menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.menu}>
      <div
        className={classNames(
          styles.menu__container,
          styles['menu__container--logo'],
        )}
      >
        <Logo fontSize={25} />
        <span className={styles.menu__brand}>OptimusTech</span>
      </div>

      <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={classNames(styles.menu__bar, {
          [styles['menu__bar--active']]: isOpen,
        })}
      >
        <div
          className={classNames(
            styles.menu__container,
            styles['menu__container--links'],
          )}
        >
          <a className={styles.menu__link} href="#">
            Home
          </a>
          <a className={styles.menu__link} href="#">
            Produtos
          </a>
          <a className={styles.menu__link} href="#">
            Recursos
          </a>
          <a className={styles.menu__link} href="#">
            Sobre nós
          </a>
        </div>

        <div className={styles.menu__container}>
          <a className={styles.menu__link} href="#">
            Entrar
          </a>
          <Button>Cadastrar</Button>
        </div>
      </div>
    </nav>
  );
}
