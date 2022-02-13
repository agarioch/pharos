import { useState } from 'react';
import { Sidebar, ApplicationList, SpendSummary } from '../../components';
import { useAppData } from '../../hooks';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { appData, isLoading, isError } = useAppData();
  const [selectedBCAP, setSelectedBCAP] = useState<string | null>(null);

  if (isLoading) return <h1>Todo: render loading component</h1>;
  if (isError || appData.length === 0)
    return <h1>Todo: handle error, no server response</h1>;

  const filteredApplications = selectedBCAP
    ? appData.filter((app) => app.BCAP3.startsWith(selectedBCAP))
    : appData;

  return (
    <main className={styles.dashboard}>
      <Sidebar applications={appData} setSelectedBCAP={setSelectedBCAP} />
      <div className={styles.mainContent}>
        <SpendSummary
          selection={selectedBCAP ?? 'All'}
          spend={filteredApplications.reduce((acc, app) => acc + app.spend, 0)}
        />
        <ApplicationList applications={filteredApplications} />
      </div>
    </main>
  );
};

export default Dashboard;
