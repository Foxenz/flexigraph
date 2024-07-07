import { Component, ViewChildren } from '@angular/core';
import { ChartCardComponent } from '../chart-card/chart-card.component';

@Component({
  selector: 'app-chart-zone',
  standalone: true,
  imports: [ChartCardComponent],
  templateUrl: './chart-zone.component.html',
  styleUrl: './chart-zone.component.scss',
})
export class ChartZoneComponent {
  @ViewChildren(ChartCardComponent) chartCards!: ChartCardComponent[];

  onRefreshCharts() {
    this.chartCards.forEach(chartCard => chartCard.refresh());
  }
}
