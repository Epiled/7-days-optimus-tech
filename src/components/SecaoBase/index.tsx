import React from 'react';
import styles from './SecaoBase.module.scss';
import classNames from 'classnames';

interface Props {
  destaque?: string,
  titulo: string,
  texto: string,
  principal?: boolean
  imagem?: string
}

export default function SecaoBase({ destaque, titulo, texto, principal = false, imagem }: Props) {

  return (
    <section className={classNames(
      styles.secaoBase,
      { [styles['secaoBase--principal']]: principal })
    }>
      <span
        className={classNames(
          styles.secaoBase__intro,
          { [styles['secaoBase__intro--principal']]: principal })
        }>{destaque}</span>
      <h1>
        {titulo}
      </h1>
      <p>
        {texto}
      </p>
      {imagem && <img className={styles.secaoBase__imagem} src={imagem} />}
    </section>
  );
}