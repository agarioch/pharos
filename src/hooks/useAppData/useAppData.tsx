import { useEffect, useState, useMemo } from 'react';
import { getData } from './dataAccess';
import { Application } from '../../types';
import addCalculatedProperties from './addCalculatedProperties';

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
      // calculating % total spend & a random % variance to budget or prior year et.
      //! NOTE: in a real application I would calc and add these properties in server response
      .then((data) => addCalculatedProperties(data))
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
