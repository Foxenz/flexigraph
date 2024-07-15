import { Injectable } from '@angular/core';
import { ChartModel, Data } from '../../feature/dashboard/models/chart-model';
import { ToasterService } from '../services/toaster.service';
import { ChartService } from '../services/chart.service';

@Injectable()
export class ChartManager {
  public listOfData!: Data[];
  public charts!: ChartModel[];
  public listOfTypesChart!: string[];

  constructor(
    private chartService: ChartService,
    private toasterService: ToasterService
  ) {
    this.chartService
      .getListOfData()
      .subscribe(data => (this.listOfData = data));
    this.chartService.getCharts().subscribe(charts => (this.charts = charts));
    this.chartService
      .getListOfTypesChart()
      .subscribe(types => (this.listOfTypesChart = types));
  }

  public createChart(chart: ChartModel): void {
    // Crée un id unique
    chart.id = crypto.randomUUID();

    // Le mettre visible par défaut
    chart.visible = true;

    // Ajouter le chart à la liste
    this.charts.push(chart);

    // Toast de succès en appelant le service
    this.toasterService.successMessage('Graphique créé avec succès');
  }

  public switchVisibility(id: string): void {
    // Trouver le chart à modifier
    const chart: ChartModel | undefined = this.charts.find(
      chart => chart.id === id
    );

    // Inverser la visibilité
    if (chart) {
      chart.visible = !chart.visible;
    }
  }

  public updateChart(id: string, chart: ChartModel) {
    // Trouver l'index du chart à modifier
    const index: number = this.charts.findIndex(chart => chart.id === id);

    // Modifier le chart
    this.charts[index].title = chart.title;
    this.charts[index].type = chart.type;
    this.charts[index].data = chart.data;

    this.refreshChart(id);

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
}
