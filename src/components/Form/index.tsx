import styles from "./Form.module.scss";
import Button from "@/components/Button";

export default function Form() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.form}>
      <form aria-label="newsletter" className={styles.form__fields}>
        <input
          aria-label="Seu e-mail"
          id="email"
          className={styles.form__field}
          type="email"
          name="email"
          placeholder="Seu e-mail"
        />
        <Button>Cadastrar</Button>
      </form>
      <span className={styles.form__copyright}>
        © {year} OptimusTech. Todos os direitos reservados.
      </span>
    </div>
  );
}
