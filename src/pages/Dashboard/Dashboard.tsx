import { Sidebar, ApplicationList } from '../../components';
import { useAppData } from '../../hooks';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { appData, isLoading, isError } = useAppData();

  if (isLoading) return <h1>Todo: render loading component</h1>;
  if (isError || appData.length === 0) return <h1>Todo: handle error</h1>;

  return (
    <main className={styles.dashboard}>
      <Sidebar />
      <ApplicationList applications={appData} />
    </main>
  );
};

export default Dashboard;
