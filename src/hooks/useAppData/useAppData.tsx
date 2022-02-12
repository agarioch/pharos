import { useEffect, useState } from 'react';
import { getData } from './dataAccess';
import { Application } from '../../types';

const useAppData = () => {
  const [appData, setAppData] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData()
      .then((data) => {
        setAppData(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);
  return { appData, isLoading, isError };
};
export default useAppData;
