import { Sidebar, SpendSummary } from '..';
import styles from '../../pages/Dashboard/Dashboard.module.css';
import loadingStyles from './DashboardLoading.module.css';
import Spinner from './Spinner.svg';

const DashboardLoading = () => {
  return (
    <main className={styles.dashboard}>
      <Sidebar>
        <div></div>
      </Sidebar>
      <div className={styles.mainContent}>
        <SpendSummary
          selectedSpend={0}
          totalSpend={0}
          selection=""
        ></SpendSummary>
        <div className={loadingStyles.placeholder}>
          <img
            className={loadingStyles.spinner}
            src={Spinner}
            alt="data loading"
            style={{ height: 50, width: 50 }}
          />
          <p className={loadingStyles.loadingText}>Data Loading ...</p>
        </div>
      </div>
    </main>
  );
};

export default DashboardLoading;
