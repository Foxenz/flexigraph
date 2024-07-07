import { Component } from '@angular/core';
import { ChartItemComponent } from '../chart-item/chart-item.component';
import { Chart } from '../../models/chart-model';

@Component({
  selector: 'app-chart-list',
  standalone: true,
  imports: [ChartItemComponent],
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
    },
    {
      id: 2,
      title: 'Chart 2',
      type: 'bar',
      data: [5, 4, 3, 2, 1],
    },
    {
      id: 3,
      title: 'Chart 3',
      type: 'pie',
      data: [1, 2, 3, 4, 5],
    },
  ];
}
