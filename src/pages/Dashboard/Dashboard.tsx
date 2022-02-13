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
  const [minSpend, setMinSpend] = useState(0);
  const [maxSpend, setMaxSpend] = useState(100000);

  const { applications, appData, isLoading, isError } = useAppData({
    selectedBCAP,
    minSpend,
    maxSpend,
  });

  if (isLoading) return <h1>Todo: render loading component</h1>;
  if (isError || appData.length === 0)
    return <h1>Todo: handle error, no server response</h1>;

  const handleResetFilters = () => {
    setMinSpend(0);
    setSelectedBCAP('');
    setMaxSpend(100000);
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
          <section>
            <h2>Filters</h2>
            <SpendFilter
              label="Minimum spend"
              min={0}
              max={100000}
              step={10000}
              value={minSpend}
              setValue={setMinSpend}
            />
            <SpendFilter
              label="Maximum spend"
              min={0}
              max={100000}
              step={10000}
              value={maxSpend}
              setValue={setMaxSpend}
            />
          </section>
          <button className="button secondary" onClick={handleResetFilters}>
            Clear Filters
          </button>
        </div>
      </Sidebar>
      <div className={styles.mainContent}>
        <SpendSummary
          selection={selectedBCAP ?? 'All'}
          selectedSpend={applications.reduce((acc, app) => acc + app.spend, 0)}
          totalSpend={appData.reduce((acc, app) => acc + app.spend, 0)}
        />
        <ApplicationList applications={applications} />
      </div>
    </main>
  );
};

export default Dashboard;
