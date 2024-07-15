export interface ChartModel {
  id: string;
  title: string;
  type: string;
  data: Data[];
  visible: boolean;
}

export interface Data {
  label: string;
  valuePerMonth: number[];
}
