import styles from './Menu.module.scss';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Botao from 'components/Botao';
import classNames from 'classnames';
import BotaoHamburguer from './BotaoHamburguer';
import { useState } from 'react';

export default function menu() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.menu}>
      <div className={classNames(styles.menu__container, styles['menu__container--logo'])}>
        <Logo fontSize={25} />
        <span className={styles.menu__marca}>OptimusTech</span>
      </div>

      <BotaoHamburguer isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={classNames(
        styles.menu__barra,
        {[styles['menu__barra--ativo']]: isOpen}
      )}>
        <div className={classNames(
          styles.menu__container,
          styles['menu__container--links']
        )}>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Recursos</a>
          <a href="#">Sobre nós</a>
        </div>

        <div className={styles.menu__container}>
          <a href="">Entrar</a>
          <Botao>Cadastrar</Botao>
        </div>
      </div>
    </nav>
  );
}