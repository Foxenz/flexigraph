import { Component, ViewChild } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.scss',
})
export class ChartCardComponent {
  @ViewChild(CdkDrag) drag!: CdkDrag;
  dragPosition = { x: 100, y: 100 };
  refresh() {
    const actualPosition = this.drag.getFreeDragPosition();
    const newPoint = { x: actualPosition.x + 1, y: actualPosition.y + 1 };
    this.drag.setFreeDragPosition(this.dragPosition);
  }
}
