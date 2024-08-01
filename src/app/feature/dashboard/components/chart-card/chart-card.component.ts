import {
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CdkDrag, CdkDragHandle, DragAxis } from '@angular/cdk/drag-drop';
import { ChartCardModel } from '../../models/chart-model';
import { ChartData } from 'chart.js/auto';
import { ChartComponent } from './chart/chart.component';
import { NgClass, NgStyle } from '@angular/common';
import { ChartManager } from '../../../../shared/managers/chart.manager';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  imports: [CdkDrag, CdkDragHandle, ChartComponent, NgClass, NgStyle],
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.scss',
})
export class ChartCardComponent implements OnInit, AfterViewInit {
  @Input() chart!: ChartCardModel;
  @ViewChild('resizeBox') resizeBox!: ElementRef;
  @ViewChild('dragHandleCorner') dragHandleCorner!: ElementRef;
  @ViewChild('dragHandleRight') dragHandleRight!: ElementRef;
  @ViewChild('dragHandleBottom') dragHandleBottom!: ElementRef;
  lockAxis!: DragAxis;

  chartData: ChartData = {
    labels: [
      'Jan',
      'Fév',
      'Mar',
      'Avr',
      'Mai',
      'Jui',
      'Juil',
      'Aou',
      'Sep',
      'Oct',
      'Nov',
      'Déc',
    ],
    datasets: [],
  };
  chartColors: string[] = ['red', 'blue', 'green', 'yellow', 'purple'];
  biggestChartColors: string[] = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'grey',
    'cyan',
  ];
  biggestChart: string[] = ['doughnut', 'pie', 'polarArea', 'radar'];

  constructor(
    public chartManager: ChartManager,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.chart.data.forEach((data, index) => {
      this.chartData.datasets.push({
        label: data.data.label + ' (' + data.year + ')',
        data: data.data.valuePerMonth,
        backgroundColor: this.biggestChart.includes(this.chart.type.value)
          ? this.biggestChartColors
          : this.chartColors[index],
        borderColor: this.biggestChart.includes(this.chart.type.value)
          ? this.biggestChartColors
          : this.chartColors[index],
      });
    });
  }

  get resizeBoxElement(): HTMLElement {
    return this.resizeBox.nativeElement;
  }

  get dragHandleCornerElement(): HTMLElement {
    return this.dragHandleCorner.nativeElement;
  }

  ngAfterViewInit() {
    this.setAllHandleTransform();
  }

  setAllHandleTransform() {
    const rect = this.resizeBoxElement.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement, rect, 'both');
  }

  setHandleTransform(
    dragHandle: HTMLElement,
    targetRect: DOMRect,
    position: 'x' | 'y' | 'both'
  ) {
    const dragRect = dragHandle.getBoundingClientRect();
    const translateX = targetRect.width - dragRect.width;
    const translateY = targetRect.height - dragRect.height;

    if (position === 'both') {
      dragHandle.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    }
  }

  dragMove(dragHandle: HTMLElement) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement);
    });
  }

  resize(dragHandle: HTMLElement, target: HTMLElement) {
    const dragRect = dragHandle.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    // 42 = padding + border
    const width = dragRect.left - targetRect.left + dragRect.width - 42;
    const height = dragRect.top - targetRect.top + dragRect.height - 42;

    target.style.width = width + 'px';
    target.style.height = height + 'px';

    this.setAllHandleTransform();
  }
}
