import { NavigationTree, SpendFilter } from '..';
import { Application } from '../../types';
import styles from './Sidebar.module.css';

type SidebarProps = {
  applications: Application[];
  setSelectedBCAP: React.Dispatch<React.SetStateAction<string | null>>;
  minSpend: number;
  setMinSpend: React.Dispatch<React.SetStateAction<number>>;
};

const Sidebar = ({
  applications,
  setSelectedBCAP,
  minSpend,
  setMinSpend,
}: SidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      <NavigationTree
        applications={applications}
        setSelectedBCAP={setSelectedBCAP}
      />
      <br />
      <SpendFilter
        min={0}
        max={100000}
        minSpend={minSpend}
        setMinSpend={setMinSpend}
      />
      <br />
      <button className="button secondary" onClick={() => setMinSpend(0)}>
        Clear Filters
      </button>
    </aside>
  );
};

export default Sidebar;
