import { formatSpend } from '../../utils';
import styles from './SpendFilter.module.css';

const SpendFilter = ({
  min,
  max,
  minSpend,
  setMinSpend,
}: {
  min: number;
  max: number;
  minSpend: number;
  setMinSpend: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <section>
      <h2>Filters</h2>
      <p>Minimum Spend</p>
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={minSpend}
          onChange={(event) => setMinSpend(Number(event.target.value))}
        />
        <span className={styles.sliderLabel}>{formatSpend(minSpend)}</span>
      </div>
    </section>
  );
};
export default SpendFilter;
