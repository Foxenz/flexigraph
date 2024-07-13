import { Component, Input, OnInit } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { Chart } from '../../models/chart-model';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { ChartData } from 'chart.js/auto';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { DoughnutComponent } from '../pie-chart/doughnut.component';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDragHandle,
    BarChartComponent,
    LineChartComponent,
    DoughnutComponent,
  ],
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.scss',
})
export class ChartCardComponent implements OnInit {
  @Input() chart!: Chart;

  chartData: ChartData = {
    labels: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Aout',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    datasets: [],
  };
  chartColors: string[] = ['red', 'blue', 'green', 'yellow', 'purple'];
  pieChartColors: string[] = [
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

  ngOnInit(): void {
    this.chart.data.forEach((data, index) => {
      this.chartData.datasets.push({
        label: data.label,
        data: data.valuePerMonth,
        backgroundColor:
          this.chart.type === 'Circulaire'
            ? this.pieChartColors
            : this.chartColors[index],
        borderColor:
          this.chart.type === 'Circulaire'
            ? this.pieChartColors
            : this.chartColors[index],
      });
    });
  }

  dragPosition = { x: 0, y: 0 };
}
