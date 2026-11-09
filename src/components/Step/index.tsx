import styles from "./Step.module.scss";

interface StepProps {
  variant: "active" | "inactive";
  stage: number;
  label?: string;
  line?: boolean;
}

function Step({ variant, stage, label, line = false }: StepProps) {
  return (
    <div className={styles.step} data-line={line}>
      <span className={styles.step__stage} data-variant={variant}>
        {stage}
      </span>
      <p className={styles.step__label} data-variant={variant}>
        {label}
      </p>
    </div>
  );
}

export default Step;
