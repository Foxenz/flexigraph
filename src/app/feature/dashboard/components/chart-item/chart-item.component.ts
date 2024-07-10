import { Component, inject, Input } from '@angular/core';
import { Chart } from '../../models/chart-model';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteChartComponent } from '../dialogs/dialog-delete-chart/dialog-delete-chart.component';
import { filter } from 'rxjs';
import { ChartManager } from '../../../../shared/managers/chart.manager';
import { DialogCreateChartComponent } from '../dialogs/dialog-create-chart/dialog-create-chart.component';
import { DialogUpdateChartComponent } from '../dialogs/dialog-update-chart/dialog-update-chart.component';

@Component({
  selector: 'app-chart-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './chart-item.component.html',
  styleUrl: './chart-item.component.scss',
})
export class ChartItemComponent {
  @Input() chart!: Chart;
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogDeleteChartComponent, {
      data: {
        chart: this.chart,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(filter(element => element != undefined))
      .subscribe(result => this.deleteChart(result));
  }

  openUpdateDialog(): void {
    const dialogRef = this.dialog.open(DialogUpdateChartComponent, {
      data: {
        chart: this.chart,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(filter(element => element != undefined))
      .subscribe(result => this.updateChart(result));
  }

  changeVisibility(): void {
    ChartManager.switchVisibility(this.chart.id);
  }

  updateChart(chart: Chart): void {
    ChartManager.updateChart(this.chart.id, chart);
  }

  deleteChart(chart: Chart): void {
    ChartManager.deleteChart(chart.id);
  }
}
