import React from 'react';
import styles from './SecaoBase.module.scss';
import classNames from 'classnames';

interface Props {
  destaque: string,
  titulo: string,
  texto: string,
  principal?: boolean
}

export default function SecaoBase({ destaque, titulo, texto, principal = false }: Props) {

  return (
    <section className={classNames(
      styles.secaoBase,
      { [styles['secaoBase--principal']]: principal })
    }>
      <span>{destaque}</span>
      <h1>
        {titulo}
      </h1>
      <p>
        {texto}
      </p>
    </section>
  );
}