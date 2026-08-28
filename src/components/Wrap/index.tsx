import styles from "./Wrap.module.scss";

interface WrapProps {
  children: React.ReactNode;
}

export default function Wrap({ children }: WrapProps) {
  return <div className={styles.wrap}>{children}</div>;
}
