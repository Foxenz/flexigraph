import { ChartType } from 'chart.js/auto';

export interface ChartModel {
  id: string;
  title: string;
  type: ChartType;
  data: YearData[];
  visible: boolean;
  zIndex: number;
  position: { x: number; y: number };
}

export interface YearData {
  year: number;
  data: Data[];
}

export interface Data {
  label: string;
  valuePerMonth: number[];
}
