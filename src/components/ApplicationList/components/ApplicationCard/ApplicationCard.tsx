import { Application } from '../../../../types';
import { formatSpend } from '../../../../utils';
import styles from './ApplicationCard.module.css';

const ApplicationCard = ({
  application: { name, spend },
}: {
  application: Application;
}) => (
  <article className={styles.wrapper}>
    <h2 className={styles.name}>{name}</h2>
    <p>
      {formatSpend(spend)}
      <span className={styles.label}> total spend</span>
    </p>
  </article>
);

export default ApplicationCard;
