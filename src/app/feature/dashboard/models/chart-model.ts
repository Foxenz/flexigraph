import { ChartType } from 'chart.js/auto';

export interface ChartModel {
  id: string;
  title: string;
  type: ChartType;
  data: Data[];
  visible: boolean;
  zIndex: number;
}

export interface Data {
  label: string;
  valuePerMonth: number[];
}
