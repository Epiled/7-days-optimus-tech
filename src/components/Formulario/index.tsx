import styles from './Formulario.module.scss';
import Botao from 'components/Botao';

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <form className={styles.formulario__campos}>
        <input className={styles.formulario__campo} type='email' placeholder='Seu e-mail' />
        <Botao>Cadastrar</Botao>
      </form>
      <span className={styles.formulario__copy}>
        © 2022 OptimusTech. Todos os direitos reservados.
      </span>
    </div>
  );
}