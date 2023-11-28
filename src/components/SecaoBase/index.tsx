import React from 'react';
import styles from './SecaoBase.module.scss';
import classNames from 'classnames';

interface Props {
  destaque?: string,
  titulo: string,
  texto?: string,
  tipoSecao?: string,
  imagem?: string,
  children?: React.ReactNode,
  tag?: keyof JSX.IntrinsicElements
}

export default function SecaoBase({ destaque, titulo, texto, tipoSecao, imagem, children, tag }: Props) {

  const imagemRecebida = new Image;
  imagemRecebida.src = String(imagem);

  const Tag = tag || 'section';
  const Titulo = tipoSecao === 'principal' ? 'h1' : 'h2';

  return (
    <Tag className={classNames(
      styles.secaoBase,
      { [styles[`secaoBase--${tipoSecao}`]]: tipoSecao })
    }>
      {destaque && <span
        className={classNames(
          styles.secaoBase__intro,
          { [styles[`secaoBase__intro--${tipoSecao}`]]: tipoSecao })
        }>{destaque}</span>}

      <Titulo>
        {titulo}
      </Titulo>

      <p>
        {texto}
      </p>
      {imagem && <img
        className={styles.secaoBase__imagem}
        src={imagem}
        width={imagemRecebida.width}
        height={imagemRecebida.height}
        alt='#'
      />}
      {children}
    </Tag>
  );
}