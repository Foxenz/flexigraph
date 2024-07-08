import { Component, inject } from '@angular/core';
import { ChartItemComponent } from '../chart-item/chart-item.component';
import { Chart } from '../../models/chart-model';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { filter } from 'rxjs';
import { DialogCreateChartComponent } from '../dialogs/dialog-create-chart/dialog-create-chart.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-chart-list',
  standalone: true,
  imports: [ChartItemComponent, MatFabButton, MatIcon],
  templateUrl: './chart-list.component.html',
  styleUrl: './chart-list.component.scss',
})
export class ChartListComponent {
  charts: Chart[] = [
    {
      id: 1,
      title: 'Chart 1',
      type: 'line',
      data: [1, 2, 3, 4, 5],
      visible: true,
    },
    {
      id: 2,
      title: 'Chart 2',
      type: 'bar',
      data: [5, 4, 3, 2, 1],
      visible: false,
    },
    {
      id: 3,
      title: 'Chart 3',
      type: 'pie',
      data: [1, 2, 3, 4, 5],
      visible: true,
    },
  ];

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateChartComponent);

    dialogRef
      .afterClosed()
      .pipe(filter(element => element != undefined))
      .subscribe(result => this.createChart(result));
  }

  createChart(chart: Chart) {
    // Call du service pour créer le chart
    chart.id = this.charts.length + 1;
    chart.visible = true;
    this.charts.push(chart);
  }
}
