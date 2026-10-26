import { useState } from "react";
import styles from "./Form.module.scss";
import Button from "@/components/Button";

export default function Form() {
  const year = new Date().getFullYear();

  const [feedback, setFeedback] = useState("");
  const [pending, setPending] = useState(false);

  const registerEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    if (!email) {
      setFeedback("Digite seu e-mail.");
      return;
    }

    setPending(true);
    setFeedback("");

    setTimeout(() => {
      setFeedback("E-mail cadastrado com sucesso!");
      setPending(false);
    }, 1000);
  };

  return (
    <div className={styles.form}>
      <form
        noValidate
        aria-label="newsletter"
        className={styles.form__fields}
        onSubmit={registerEmail}
      >
        <div className={styles.form__wrapper}>
          <input
            aria-label="Seu e-mail"
            id="email"
            className={styles.form__field}
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
          />
          <span className={styles.form__feedback}>{feedback}</span>
        </div>
        <Button type="submit" disabled={pending}>
          {pending ? "Enviando..." : "Cadastrar"}
        </Button>
      </form>
      <span className={styles.form__copyright}>
        © {year} OptimusTech. Todos os direitos reservados.
      </span>
    </div>
  );
}
