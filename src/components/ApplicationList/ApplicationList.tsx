import { ApplicationCard } from './components';
import { Application } from '../../types';
import styles from './ApplicationList.module.css';

const ApplicationList = ({ applications }: { applications: Application[] }) => {
  const applicationCards = applications
    .sort((a, b) => b.spend - a.spend)
    .map((application) => (
      <ApplicationCard key={application.id} application={application} />
    ));
  //TODO: show how many cards displayed vs. total cards & allow pagination
  return <div className={styles.applicationList}>{applicationCards}</div>;
};

export default ApplicationList;
