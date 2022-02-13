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

//! NOTE: these should be derived based on the data in a real app, using constants for simplicity here
const MIN_SPEND = 0;
const MAX_SPEND = 100000;

const Dashboard = () => {
  const [selectedBCAP, setSelectedBCAP] = useState<string>('');
  const [minSpend, setMinSpend] = useState(MIN_SPEND);
  const [maxSpend, setMaxSpend] = useState(MAX_SPEND);

  const { applications, appData, isLoading, isError } = useAppData({
    selectedBCAP,
    minSpend,
    maxSpend,
  });

  if (isLoading) return <h1>Todo: render loading component</h1>;
  if (isError || appData.length === 0)
    return <h1>Todo: handle error, no server response</h1>;

  const handleResetFilters = () => {
    setMinSpend(MIN_SPEND);
    setSelectedBCAP('');
    setMaxSpend(MAX_SPEND);
  };
  const handleSavefilters = () => {
    window.localStorage.setItem('selectedBCAP', selectedBCAP);
    window.localStorage.setItem('minSpend', String(minSpend));
    window.localStorage.setItem('maxSpend', String(maxSpend));
  };
  const handleLoadSavedFilters = () => {
    setSelectedBCAP(window.localStorage.getItem('selectedBCAP') ?? '');
    setMinSpend(Number(window.localStorage.getItem('minSpend')));
    setMaxSpend(Number(window.localStorage.getItem('maxSpend')));
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
              min={MIN_SPEND}
              max={MAX_SPEND}
              step={10000}
              value={minSpend}
              setValue={setMinSpend}
            />
            <SpendFilter
              label="Maximum spend"
              min={MIN_SPEND}
              max={MAX_SPEND}
              step={10000}
              value={maxSpend}
              setValue={setMaxSpend}
            />
          </section>
          <div className={styles.controls}>
            <button className="button" onClick={handleResetFilters}>
              Clear Filters
            </button>
            <button className="button secondary" onClick={handleSavefilters}>
              Save Filters
            </button>
            <button
              className="button secondary"
              onClick={handleLoadSavedFilters}
            >
              Load Saved Filters
            </button>
          </div>
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
