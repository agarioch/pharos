import { NavigationTree } from '..';
import { Application } from '../../types';
import styles from './Sidebar.module.css';

type SidebarProps = {
  applications: Application[];
  setSelectedBCAP: React.Dispatch<React.SetStateAction<string | null>>;
};

const Sidebar = ({ applications, setSelectedBCAP }: SidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      <NavigationTree
        applications={applications}
        setSelectedBCAP={setSelectedBCAP}
      />
    </aside>
  );
};

export default Sidebar;
