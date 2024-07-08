import { Injectable } from '@angular/core';
import { Chart } from '../../feature/dashboard/models/chart-model';

@Injectable()
export class ChartManager {
  static readonly charts: Chart[] = [
    {
      id: '0270b747',
      title: 'Chart 1',
      type: 'line',
      data: [1, 2, 3, 4, 5],
      visible: true,
    },
    {
      id: '0220b743',
      title: 'Chart 2',
      type: 'bar',
      data: [5, 4, 3, 2, 1],
      visible: false,
    },
    {
      id: '0420b652',
      title: 'Chart 3',
      type: 'pie',
      data: [1, 2, 3, 4, 5],
      visible: true,
    },
  ];

  constructor() {}

  static showData(): void {
    console.log(ChartManager.charts);
  }

  static createChart(chart: Chart): void {
    // Crée un id unique
    chart.id = crypto.randomUUID().substring(0, 8);

    // Le mettre visible par défaut
    chart.visible = true;

    // Ajouter le chart à la liste
    ChartManager.charts.push(chart);
  }

  static deleteChart(id: string): void {
    // Trouver l'index du chart à supprimer
    const index: number = this.charts.findIndex(chart => chart.id === id);

    // Supprimer le chart de la liste
    ChartManager.charts.splice(index, 1);
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
}
