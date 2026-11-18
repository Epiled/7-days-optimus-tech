import type { BadgeProps } from "../Badge/Badge.types";
import type { ButtonProps } from "../Button/Button.types";
import type { ImagiconProps } from "../Imagicon/Imagicon.types";
import type { MetadateProps } from "../Metadate/Metadate.types";
import type { TagProps } from "../Tag/Tag.types";

export interface ListItemProps {
  imagicon?: boolean | Partial<ImagiconProps>;
  value?: number;
  title: string;
  supportText?: string;
  metadate?: MetadateProps[];
  tag?: TagProps[];
  text?: string;
  badge?: BadgeProps;
  feedback?: string;
  favorite?: boolean | Partial<ButtonProps>;
  next?: boolean | Partial<ButtonProps>;
  button?: boolean | Partial<ButtonProps>;
}
