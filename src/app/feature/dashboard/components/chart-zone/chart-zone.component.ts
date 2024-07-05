import { Component } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { ChartCardComponent } from '../chart-card/chart-card.component';

@Component({
  selector: 'app-chart-zone',
  standalone: true,
  imports: [CdkDrag, CdkDragHandle, ChartCardComponent],
  templateUrl: './chart-zone.component.html',
  styleUrl: './chart-zone.component.scss',
})
export class ChartZoneComponent {}
