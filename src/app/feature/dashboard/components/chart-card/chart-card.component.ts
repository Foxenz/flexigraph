import { Component, Input } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { Chart } from '../../models/chart-model';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.scss',
})
export class ChartCardComponent {
  @Input() chart!: Chart;

  // Centrer le nouveau graphique crée
  dragPosition = { x: 100, y: 0 };

  // créer des inputs pour recevoir les données du chart
}
