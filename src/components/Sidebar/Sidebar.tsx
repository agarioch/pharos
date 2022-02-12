import { SideNaviation } from '..';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <SideNaviation />
    </aside>
  );
};

export default Sidebar;
