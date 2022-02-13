import { formatSpend } from '../../utils';
import styles from './SpendFilter.module.css';

type Props = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const SpendFilter = ({ label, min, max, step, value, setValue }: Props) => (
  <>
    <p>{label}</p>
    <div className={styles.sliderWrapper}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <span className={styles.sliderLabel}>{formatSpend(value)}</span>
    </div>
  </>
);

export default SpendFilter;
