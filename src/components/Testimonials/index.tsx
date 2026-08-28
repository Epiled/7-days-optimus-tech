import styles from "./Testimonials.module.scss";
import profileImage from "@/assets/img/depoimentos/julia-castro.png";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <img
        className={styles.testimonials__image}
        src={profileImage}
        alt="Júlia Castro"
        width={"56"}
        height={"56"}
      />
      <h3 className={styles.testimonials__title}>Júlia Castro</h3>
      <span className={styles.testimonials__position}>Desenvolvedora Web</span>
    </div>
  );
}
