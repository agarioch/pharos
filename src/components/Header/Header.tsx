import { ReactNode } from 'react';
import styles from './Header.module.css';

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Pharos</h1>
      <h1 className={styles.title}>{children}</h1>
      <div className={styles.filler} />
    </header>
  );
};

export default Header;
