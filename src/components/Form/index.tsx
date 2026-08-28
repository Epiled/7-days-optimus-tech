import styles from "./Form.module.scss";
import Button from "@/components/Button";

export default function Form() {
  return (
    <div className={styles.form}>
      <form className={styles.form__fields}>
        <input
          className={styles.form__field}
          type="email"
          placeholder="Seu e-mail"
        />
        <Button>Cadastrar</Button>
      </form>
      <span className={styles.form__copyright}>
        © 2022 OptimusTech. Todos os direitos reservados.
      </span>
    </div>
  );
}
