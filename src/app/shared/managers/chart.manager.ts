import { Injectable } from '@angular/core';
import { Chart, Data } from '../../feature/dashboard/models/chart-model';

@Injectable()
export class ChartManager {
  static readonly listOfData: Data[] = [
    {
      label: "Chiffre d'affaire",
      valuePerMonth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      label: 'Nombre de clients',
      valuePerMonth: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    },
    {
      label: 'Nombre de commandes',
      valuePerMonth: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    },
  ];

  static readonly charts: Chart[] = [
    {
      id: '0270b747',
      title: 'Chart 1',
      type: 'Linéaire',
      data: [ChartManager.listOfData[0], ChartManager.listOfData[1]],
      visible: true,
    },
    {
      id: '0220b743',
      title: 'Chart 2',
      type: 'Batônnet',
      data: [ChartManager.listOfData[1], ChartManager.listOfData[2]],
      visible: false,
    },
    {
      id: '0420b652',
      title: 'Chart 3',
      type: 'Circulaire',
      data: [ChartManager.listOfData[0], ChartManager.listOfData[2]],
      visible: true,
    },
  ];

  static readonly listOfTypesChart: string[] = [
    'Linéaire',
    'Batônnet',
    'Circulaire',
  ];

  constructor() {}

  static createChart(chart: Chart): void {
    // Crée un id unique
    chart.id = crypto.randomUUID().substring(0, 8);

    // Le mettre visible par défaut
    chart.visible = true;

    // Ajouter le chart à la liste
    ChartManager.charts.push(chart);
  }

  static switchVisibility(id: string): void {
    // Trouver le chart à modifier
    const chart: Chart | undefined = ChartManager.charts.find(
      chart => chart.id === id
    );

    // Inverser la visibilité
    if (chart) {
      chart.visible = !chart.visible;
    }
  }

  static updateChart(id: string, chart: Chart) {
    // Trouver l'index du chart à modifier
    const index: number = this.charts.findIndex(chart => chart.id === id);

    // Modifier le chart
    ChartManager.charts[index].title = chart.title;
    ChartManager.charts[index].type = chart.type;
    ChartManager.charts[index].data = chart.data;
  }

  static deleteChart(id: string): void {
    // Trouver l'index du chart à supprimer
    const index: number = this.charts.findIndex(chart => chart.id === id);

    // Supprimer le chart de la liste
    ChartManager.charts.splice(index, 1);
  }
}
