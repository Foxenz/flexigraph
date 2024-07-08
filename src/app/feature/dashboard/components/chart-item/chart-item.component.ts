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

  deleteChart(chart: Chart): void {
    // Call le service pour delete le chart
    console.log('Deleting chart', chart);
  }

  changeVisibility(): void {
    // Call le service pour changer la visibility du chart (visible ou non)
    this.chart.visible = !this.chart.visible;
  }
}
