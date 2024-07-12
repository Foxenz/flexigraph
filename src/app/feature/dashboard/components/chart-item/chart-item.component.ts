import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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

  @Output() public changeVisibility = new EventEmitter<Chart>();
  @Output() public updateChart = new EventEmitter<Chart>();
  @Output() public deleteChart = new EventEmitter<Chart>();

  constructor(public chartManager: ChartManager) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogDeleteChartComponent, {
      data: {
        chart: this.chart,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(filter(element => element != undefined))
      .subscribe(result => this.deleteChart.emit(result));
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
      .subscribe(result => this.updateChart.emit(result));
  }
}
