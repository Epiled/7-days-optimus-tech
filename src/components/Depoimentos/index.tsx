import styles from './Depoimentos.module.scss';
import imagemPerfil from 'assets/img/depoimentos/julia-castro.png';

export default function Depoimentos() {

  const imagemRecebida = new Image;
  imagemRecebida.src = String(imagemPerfil);

  return (
    <div className={styles.depoimentos}>
      <img
        className={styles.depoimentos__imagem}
        src={imagemPerfil}
        alt="Júlia Castro"
        width={imagemRecebida.width}
        height={imagemRecebida.height}
      />
      <h3 className={styles.depoimentos__titulo}>
        Júlia Castro
      </h3>
      <span className={styles.depoimentos__cargo}>
        Desenvolvedora Web
      </span>
    </div>
  );
}