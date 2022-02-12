import { Application } from '../../types';
import { formatSpend } from '../../utils';
import styles from './ApplicationCard.module.css';

const ApplicationCard = ({ application }: { application: Application }) => {
  return (
    <article className={styles.wrapper}>
      <h2 className={styles.name}>{application.name}</h2>
      <p>
        {formatSpend(application.spend)}
        <span className={styles.label}> total spend</span>
      </p>
    </article>
  );
};

export default ApplicationCard;
