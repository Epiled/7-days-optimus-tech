import styles from './Jobs.module.scss';
import Category from './Category';
import jobs from 'data/jobs.json';

export default function Jobs() {
  return (
    <div className={styles.jobs}>
      {jobs.map((item, index) => (
        <Category key={index} category={item.category} jobs={item.jobs} />
      ))}
    </div>
  );
}
