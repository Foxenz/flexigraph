import { ChartType } from 'chart.js/auto';

export interface ChartModel {
  id: string;
  title: string;
  type: ChartType;
  data: OneChartData[];
  visible: boolean;
  zIndex: number;
  position: { x: number; y: number };
}

// Interface pour stocker les données d'un seul chart
export interface OneChartData {
  year: number;
  data: Data;
}

// Interface pour stocker les fake données
export interface ListOfData {
  year: number;
  data: Data[];
}

// Interface d'une donnée
export interface Data {
  label: string;
  valuePerMonth: number[];
}
