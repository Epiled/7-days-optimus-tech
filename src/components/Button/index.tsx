import styles from "./Button.module.scss";

interface ButtonProps {
  children?: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button}>{children ? children : "Botão"}</button>
  );
}
