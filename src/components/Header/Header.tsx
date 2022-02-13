import { ReactNode } from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from './lighthouse-icon.svg';

const Header = ({ children }: { children: ReactNode }) => (
  <header className={styles.header}>
    <div className={styles.logoWrapper}>
      <Logo className={styles.logoIcon} />
      <h1 className={styles.logo}>Pharos</h1>
    </div>
    <h1 className={styles.title}>{children}</h1>
    <div className={styles.filler} />
  </header>
);

export default Header;
