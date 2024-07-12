import { Component, inject } from '@angular/core';
import { ChartItemComponent } from '../chart-item/chart-item.component';
import { Chart } from '../../models/chart-model';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { filter } from 'rxjs';
import { DialogCreateChartComponent } from '../dialogs/dialog-create-chart/dialog-create-chart.component';
import { MatDialog } from '@angular/material/dialog';
import { ChartManager } from '../../../../shared/managers/chart.manager';

@Component({
  selector: 'app-chart-list',
  standalone: true,
  imports: [ChartItemComponent, MatFabButton, MatIcon],
  templateUrl: './chart-list.component.html',
  styleUrl: './chart-list.component.scss',
})
export class ChartListComponent {
  readonly dialog = inject(MatDialog);
  charts: Chart[] = ChartManager.charts;

  constructor(public chartManager: ChartManager) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateChartComponent);

    dialogRef
      .afterClosed()
      .pipe(filter(element => element != undefined))
      .subscribe(result => this.createChart(result));
  }

  createChart(chart: Chart) {
    this.chartManager.createChart(chart);
  }
}
