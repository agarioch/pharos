import { useState } from 'react';
import {
  Sidebar,
  ApplicationList,
  SpendSummary,
  NavigationTree,
  SpendFilter,
} from '../../components';
import { useAppData } from '../../hooks';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [selectedBCAP, setSelectedBCAP] = useState<string>('');
  const [minSpend, setMinSpend] = useState<number>(0);
  const { applications, appData, isLoading, isError } = useAppData({
    selectedBCAP,
    minSpend,
  });

  if (isLoading) return <h1>Todo: render loading component</h1>;
  if (isError || appData.length === 0)
    return <h1>Todo: handle error, no server response</h1>;

  const handleResetFilters = () => {
    setMinSpend(0);
    setSelectedBCAP('');
  };

  return (
    <main className={styles.dashboard}>
      <Sidebar>
        <div>
          <NavigationTree
            applications={appData}
            selectedBCAP={selectedBCAP}
            setSelectedBCAP={setSelectedBCAP}
          />
          <SpendFilter
            min={0}
            max={100000}
            minSpend={minSpend}
            setMinSpend={setMinSpend}
          />
          <button className="button secondary" onClick={handleResetFilters}>
            Clear Filters
          </button>
        </div>
      </Sidebar>
      <div className={styles.mainContent}>
        <SpendSummary
          selection={selectedBCAP ?? 'All'}
          spend={applications.reduce((acc, app) => acc + app.spend, 0)}
        />
        <ApplicationList applications={applications} />
      </div>
    </main>
  );
};

export default Dashboard;
