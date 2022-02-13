import { Application, ApplicationData } from "../../types";

const addCalculatedProperties = (data: ApplicationData[]): Application[] => {
  const spendTotal = data.reduce((total, app) => total + app.spend, 0);
  return data.map<Application>(app => ({
    ...app,
    percentTotal: app.spend / spendTotal,
    //! NOTE: generating a random variance to represent for example % change vs. prior period or budget
    variance: Math.random() - 0.5
  }))
}

export default addCalculatedProperties;