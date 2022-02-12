import { ApplicationCard } from '..';
import { Application } from '../../pages/Dashboard/types';
import styles from './ApplicationList.module.css';

const MAX_CARDS = 10;
const ApplicationList = ({ applications }: { applications: Application[] }) => {
  const applicationCards = applications
    .sort((a, b) => b.spend - a.spend)
    .slice(0, MAX_CARDS)
    .map((application) => (
      <ApplicationCard key={application.id} application={application} />
    ));
  //TODO: show how many cards displayed vs. total cards & allow pagination
  return <div className={styles.applicationList}>{applicationCards}</div>;
};

export default ApplicationList;
