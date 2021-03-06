import { ApplicationCard } from './components';
import { Application } from '../../types';
import styles from './ApplicationList.module.css';

const ApplicationList = ({
  applications,
  isShowingDetails,
}: {
  applications: Application[];
  isShowingDetails: boolean;
}) => {
  const applicationCards = applications
    .sort((a, b) => b.spend - a.spend)
    .map((application) => (
      <ApplicationCard
        key={application.id}
        application={application}
        isShowingDetails={isShowingDetails}
      />
    ));
  return <div className={styles.applicationList}>{applicationCards}</div>;
};

export default ApplicationList;
