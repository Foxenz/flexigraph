import { Component, Input } from '@angular/core';
import { Chart } from '../../models/chart-model';

@Component({
  selector: 'app-chart-item',
  standalone: true,
  imports: [],
  templateUrl: './chart-item.component.html',
  styleUrl: './chart-item.component.scss',
})
export class ChartItemComponent {
  @Input() chart!: Chart;
}
