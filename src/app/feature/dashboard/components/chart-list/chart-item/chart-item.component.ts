import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ChartCardModel } from '../../../models/chart-model';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteChartComponent } from '../../dialogs/dialog-delete-chart/dialog-delete-chart.component';
import { filter } from 'rxjs';
import { DialogFormChartComponent } from '../../dialogs/dialog-chart/dialog-form-chart.component';

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
  @Input() chart!: ChartCardModel;
  readonly dialog = inject(MatDialog);

  @Output() public changeVisibility = new EventEmitter<ChartCardModel>();
  @Output() public updateChart = new EventEmitter<ChartCardModel>();
  @Output() public deleteChart = new EventEmitter<ChartCardModel>();

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
    const dialogRef = this.dialog.open(DialogFormChartComponent, {
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
