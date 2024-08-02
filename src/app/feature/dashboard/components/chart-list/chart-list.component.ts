import { Component, inject } from '@angular/core';
import { ChartItemComponent } from './chart-item/chart-item.component';
import { ChartCardModel } from '../../models/chart-model';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ChartManager } from '../../../../shared/managers/chart.manager';
import { DialogFormChartComponent } from '../dialogs/dialog-chart/dialog-form-chart.component';

@Component({
  selector: 'app-chart-list',
  standalone: true,
  imports: [ChartItemComponent, MatFabButton, MatIcon, MatButton],
  templateUrl: './chart-list.component.html',
  styleUrl: './chart-list.component.scss',
})
export class ChartListComponent {
  readonly dialog = inject(MatDialog);

  constructor(public chartManager: ChartManager) {}

  changeVisibility(chart: ChartCardModel): void {
    this.chartManager.switchVisibility(chart.id);
  }

  updateChart(chart: ChartCardModel): void {
    this.chartManager.updateChart(chart);
  }

  deleteChart(chart: ChartCardModel): void {
    this.chartManager.deleteChart(chart.id);
  }
}
