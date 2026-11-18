import Badge from "../Badge";
import Button from "../Button";
import type { ButtonProps } from "../Button/Button.types";
import Imagicon from "../Imagicon";
import type { ImagiconProps } from "../Imagicon/Imagicon.types";
import Metadate from "../Metadate";
import Tag from "../Tag";
import styles from "./ListItem.module.scss";
import type { ListItemProps } from "./ListItem.type";

export default function ListItem({
  imagicon,
  value,
  title,
  supportText,
  metadate,
  tag,
  text,
  badge,
  feedback,
  favorite,
  next,
  button,
}: ListItemProps) {
  const imageiconProps: ImagiconProps = {
    shape: "circle",
    type: "brand",
    icon: {
      name: "search",
    },
    ...(typeof imagicon === "object" && imagicon !== null ? imagicon : {}),
  };

  const favoriteProps: ButtonProps = {
    iconOnly: true,
    iconBefore: {
      name: "heart",
      props: {
        color: "text-secondary",
      },
    },
    variant: "secondary",
    spacing: "small",
    ...(typeof favorite === "object" && favorite !== null ? favorite : {}),
  };

  const nextProps: ButtonProps = {
    iconOnly: true,
    iconBefore: {
      name: "chevronRight",
      props: {
        color: "text-secondary",
      },
    },
    variant: "secondary",
    spacing: "small",
    ...(typeof next === "object" && next !== null ? next : {}),
  };

  const buttonProps: ButtonProps = {
    ...(typeof button === "object" && button !== null ? button : {}),
  };

  return (
    <div className={styles.listItem}>
      {imagicon && <Imagicon {...imageiconProps} />}

      <div className={styles.listItem__main}>
        <div className={styles.listItem__content}>
          <span className={styles.listItem__value}>{value}</span>
          <h3 className={styles.listItem__title}>{title}</h3>
          <p className={styles.listItem__supportText}>{supportText}</p>

          {metadate && (
            <div className={styles.listItem__metadates}>
              {metadate?.map((item, index) => {
                return <Metadate key={`${item.label}-${index}`} {...item} />;
              })}
            </div>
          )}

          {tag && (
            <div className={styles.listItem__tags}>
              {tag?.map((item, index) => {
                return <Tag key={`${item.text}-${index}`} {...item} />;
              })}
            </div>
          )}

          {text && <p className={styles.listItem__text}>{text}</p>}
        </div>

        {(badge || feedback) && (
          <div className={styles.listItem__aside}>
            {badge && <Badge {...badge} />}
            {feedback && (
              <p className={styles.listItem__feedback}>{feedback}</p>
            )}
          </div>
        )}
      </div>

      {(favorite || next || button) && (
        <div className={styles.listItem__trailing}>
          {favorite && (
            <Button className={styles.listItem__favorite} {...favoriteProps} />
          )}
          {next && <Button className={styles.listItem__next} {...nextProps} />}
          {button && (
            <Button className={styles.listItem__button} {...buttonProps} />
          )}
        </div>
      )}
    </div>
  );
}
