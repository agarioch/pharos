import { useEffect, useState, useMemo } from 'react';
import { getData } from './dataAccess';
import { Application } from '../../types';

const useAppData = ({
  selectedBCAP,
  minSpend,
  maxSpend,
}: {
  selectedBCAP: string;
  minSpend: number;
  maxSpend: number;
}) => {
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

  const applications = useMemo(
    () =>
      appData.filter(
        (app) =>
          app.BCAP3.startsWith(selectedBCAP) &&
          app.spend > minSpend &&
          app.spend < maxSpend
      ),
    [appData, selectedBCAP, minSpend, maxSpend]
  );

  return { appData, isLoading, isError, applications };
};
export default useAppData;
