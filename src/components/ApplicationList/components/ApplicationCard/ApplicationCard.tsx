import { Application } from '../../../../types';
import { formatSpend } from '../../../../utils';
import styles from './ApplicationCard.module.css';

const ApplicationCard = ({
  application,
  isShowingDetails,
}: {
  application: Application;
  isShowingDetails: boolean;
}) => (
  <article className={styles.wrapper}>
    <h2 className={styles.name}>{application.name}</h2>
    <p>
      {formatSpend(application.spend)}
      <span className={styles.label}> total spend</span>
    </p>
    {isShowingDetails && (
      <div>
        <p>
          {(application.percentTotal * 100).toFixed(2)} %
          <span className={styles.label}> % total</span>
        </p>
        <p>
          <span
            style={{
              color:
                application.variance > 0
                  ? 'var(--error-dark)'
                  : 'var(--success-dark)',
            }}
          >
            {(application.variance * 100).toFixed(1)} %
          </span>
          <span className={styles.label}> vs budget</span>
        </p>
        <p>
          {application.BCAP1}
          <span className={styles.label}> BCAP</span>
        </p>
      </div>
    )}
  </article>
);

export default ApplicationCard;
