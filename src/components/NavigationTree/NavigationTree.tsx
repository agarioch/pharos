import { NavigationNode } from './components';
import { Application } from '../../types';

type Props = {
  applications: Application[];
  selectedBCAP: string;
  setSelectedBCAP: React.Dispatch<React.SetStateAction<string>>;
};

const NavigationTree = ({
  applications,
  selectedBCAP,
  setSelectedBCAP,
}: Props) => {
  //! NOTE: In a real app I would import the master data from the relevant database vs. derive from data on each render
  const BCAP1: string[] = [
    ...new Set(applications.map((app) => app.BCAP1)),
  ].sort();

  return (
    <section>
      <h2>Navigation</h2>
      <nav>
        <ul>
          {BCAP1.map((bcap) => (
            <NavigationNode
              key={bcap}
              name={bcap}
              level={1}
              nodes={applications.filter((app) => app.BCAP2.startsWith(bcap))}
              selectedBCAP={selectedBCAP}
              setSelectedBCAP={setSelectedBCAP}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default NavigationTree;
