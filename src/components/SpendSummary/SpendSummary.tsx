import { formatSpend } from '../../utils';
import styles from './SpendSummary.module.css';

const SpendSummary = ({
  selection,
  selectedSpend,
  totalSpend,
  children,
}: {
  selection: string;
  selectedSpend: number;
  totalSpend: number;
  children?: React.ReactNode;
}) => (
  <div className={styles.wrapper}>
    <h2 className={styles.header}>
      Spend {selection}
      {': '}
      <span className={styles.total}>
        {formatSpend(selectedSpend, {
          notation: 'compact',
          maximumSignificantDigits: 2,
        })}
      </span>
      <span className={styles.info}>
        ({Math.round((selectedSpend / totalSpend) * 100)}% of Total){' '}
      </span>
    </h2>
    {children}
  </div>
);

export default SpendSummary;
