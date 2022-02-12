export type ApplicationData = {
  id: number,
  name: string,
  spend: number,
  BCAP1: string,
  BCAP2: string,
  BCAP3: string,
};

export type Application = ApplicationData & {
  percentTotal: number,
  variance: number
}