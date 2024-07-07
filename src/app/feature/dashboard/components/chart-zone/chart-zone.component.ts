import { Component } from '@angular/core';
import { ChartCardComponent } from '../chart-card/chart-card.component';

@Component({
  selector: 'app-chart-zone',
  standalone: true,
  imports: [ChartCardComponent],
  templateUrl: './chart-zone.component.html',
  styleUrl: './chart-zone.component.scss',
})
export class ChartZoneComponent {}
