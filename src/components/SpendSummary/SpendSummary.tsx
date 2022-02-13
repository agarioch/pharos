import { formatSpend } from '../../utils';
import styles from './SpendSummary.module.css';

const SpendSummary = ({
  selection,
  spend,
}: {
  selection: string;
  spend: number;
}) => {
  return (
    <h2 className={styles.spendSummary}>
      Total Spend: {selection} applications{' '}
      <span>
        {formatSpend(spend, {
          notation: 'compact',
          maximumSignificantDigits: 2,
        })}
      </span>
    </h2>
  );
};

export default SpendSummary;
