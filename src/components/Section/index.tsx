import React from 'react';
import styles from './Section.module.scss';
import classNames from 'classnames';

interface SectionProps {
  highlight?: string;
  title: string;
  text?: string;
  type?: string;
  image?: string | null;
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
}

export default function Section({
  highlight,
  title,
  text,
  type,
  image = null,
  children,
  tag,
}: SectionProps) {
  const Tag = tag || 'section';
  const Title = type === 'main' ? 'h1' : 'h2';

  return (
    <Tag
      className={classNames(styles.section, {
        [styles[`section--${type}`]]: type,
      })}
    >
      {highlight && (
        <span
          className={classNames(styles.section__intro, {
            [styles[`section__intro--${type}`]]: type,
          })}
        >
          {highlight}
        </span>
      )}

      <Title>{title}</Title>

      <p>{text}</p>
      {image && (
        <img
          className={styles.section__image}
          src={image}
          width={'1216'}
          height={'400'}
          alt="#"
        />
      )}
      {children}
    </Tag>
  );
}
