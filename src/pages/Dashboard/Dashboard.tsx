import { useEffect, useState } from 'react';
import { Header, ApplicationList } from '../../components';
import { getData } from './dataAccess';
import { Application } from './types';

type AppData = {
  status: 'pending' | 'success' | 'rejected';
  data: Application[];
};

const Dashboard = () => {
  const [appData, setAppData] = useState<AppData>({
    status: 'pending',
    data: [],
  });

  useEffect(() => {
    getData()
      .then((data) => {
        setAppData({ status: 'success', data });
      })
      .catch(() => setAppData({ status: 'rejected', data: [] }));
  }, []);

  if (appData.status === 'pending') {
    return <h1>Todo: render loading component</h1>;
  }
  if (appData.status === 'success') {
    return <ApplicationList applications={appData.data} />;
  } else {
    return <h1>Todo: render error message</h1>;
  }
};

export default Dashboard;
