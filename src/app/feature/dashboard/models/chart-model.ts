import { ChartType } from 'chart.js/auto';
import { Data } from '../../../shared/models/data-model';

export interface ChartModel {
  id: string;
  title: string;
  type: TypeOfChart;
  data: OneChartData[];
  visible: boolean;
  zIndex: number;
  position: { x: number; y: number };
}

export interface TypeOfChart {
  name: string;
  value: ChartType;
}

// Interface pour stocker les données d'un seul chart
export interface OneChartData {
  year: number;
  data: Data;
}

export interface TypeOfChart {
  value: ChartType;
  viewValue: string;
}
