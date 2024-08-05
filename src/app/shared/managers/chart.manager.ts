import { Injectable } from '@angular/core';
import {
  ChartCardModel,
  TypeOfChart,
} from '../../feature/dashboard/models/chart-model';
import { ToasterService } from '../services/toaster.service';
import { ChartService } from '../services/chart.service';
import { DataService } from '../services/data.service';
import { Data, ListOfData } from '../models/data-model';

@Injectable()
export class ChartManager {
  public listOfData!: ListOfData[];
  public charts!: ChartCardModel[];
  public listOfTypesChart!: TypeOfChart[];

  constructor(
    private chartService: ChartService,
    private toasterService: ToasterService,
    private dataService: DataService
  ) {
    this.dataService
      .getListOfData()
      .subscribe(data => (this.listOfData = data));
    this.chartService.getCharts().subscribe(charts => (this.charts = charts));
    this.chartService
      .getListOfTypesChart()
      .subscribe(types => (this.listOfTypesChart = types));
  }

  public createChart(chart: ChartCardModel): void {
    // Crée un id unique
    chart.id = crypto.randomUUID();

    // Le mettre visible par défaut
    chart.visible = true;

    // Mettre le zIndex au dessus de tous les autres charts mais prévoir si la liste est vide
    if (this.charts.length === 0) {
      chart.zIndex = 1;
    } else {
      chart.zIndex = Math.max(...this.charts.map(chart => chart.zIndex)) + 1;
    }
    // Mettre la position par défaut
    chart.position = { x: 0, y: 0 };

    // Mettre la taille par défaut
    chart.size = { width: 600, height: 400 };

    // Ajouter le chart à la liste
    this.charts.push(chart);

    // Toast de succès en appelant le service
    this.toasterService.successMessage('Graphique créé avec succès');
  }

  public switchVisibility(id: string): void {
    // Trouver le chart à modifier
    const chart: ChartCardModel | undefined = this.charts.find(
      chart => chart.id === id
    );

    // Inverser la visibilité
    if (chart) {
      this.frontUp(chart);
      chart.visible = !chart.visible;
    }
  }

  public updateChart(chart: ChartCardModel) {
    // Trouver l'index du chart à modifier
    const index: number = this.charts.findIndex(
      searchChart => searchChart.id === chart.id
    );

    // Modifier le chart
    this.charts[index].title = chart.title;
    this.charts[index].type = chart.type;
    this.charts[index].data = chart.data;

    if (this.charts[index].visible) {
      this.refreshChart(chart.id);
    }

    // Toast de succès
    this.toasterService.successMessage('Graphique modifié avec succès');
  }

  public deleteChart(id: string): void {
    // Trouver l'index du chart à supprimer
    const index: number = this.charts.findIndex(chart => chart.id === id);

    // Supprimer le chart de la liste
    this.charts.splice(index, 1);

    // Toast de succès
    this.toasterService.successMessage('Graphique supprimé avec succès');
  }

  private refreshChart(id: string): void {
    this.switchVisibility(id);
    setTimeout(() => this.switchVisibility(id), 1);
  }

  public frontUp(chart: ChartCardModel): void {
    const maxZIndex: number = Math.max(
      ...this.charts.map(chart => chart.zIndex)
    );

    chart.zIndex = maxZIndex + 1;
  }

  public updatePosition(id: string, position: { x: number; y: number }): void {
    // Trouver le chart à modifier
    const chart: ChartCardModel | undefined = this.charts.find(
      chart => chart.id === id
    );

    // Modifier la position
    if (chart) {
      chart.position = position;
    }
  }

  deleteChartUsingData(data: Data) {
    // On supprime le ou les graphiques qui utilisent ces données
    this.charts.forEach(chart => {
      const index: number = chart.data.findIndex(
        oneChartData => oneChartData.data.id === data.id
      );

      if (index !== -1) {
        // Si on trouve la data dans le chart, on supprime le chart
        this.deleteChart(chart.id);
        // Si on trouve la data dans le chart, on supprime la data
        //   chart.data.splice(index, 1);
      }
    });
  }

  updateChartUsingData(data: Data) {
    // On met à jour le ou les graphiques qui utilisent ces données
    this.charts.forEach(chart => {
      const index: number = chart.data.findIndex(
        oneChartData => oneChartData.data.id === data.id
      );

      if (index !== -1) {
        // Si on trouve la data dans le chart, on met à jour le chart
        chart.data[index].data = data;
      }
    });
  }

  updateSize(id: string, offsetWidth: number, offsetHeight: number) {
    // Trouver le chart à modifier
    const chart: ChartCardModel | undefined = this.charts.find(
      chart => chart.id === id
    );

    // Modifier la taille
    if (chart) {
      // 42 = padding + border
      chart.size = { width: offsetWidth - 42, height: offsetHeight - 42 };
    }
  }

  deleteAllCharts() {
    this.charts.splice(0, this.charts.length);
  }
}
