import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return <aside className={styles.sidebar}>{children}</aside>;
};

export default Sidebar;
