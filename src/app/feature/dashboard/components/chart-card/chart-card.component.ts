import { Component, Input, OnInit } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { ChartModel } from '../../models/chart-model';
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
export class ChartCardComponent implements OnInit {
  @Input() chart!: ChartModel;

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
  doughnutChartColors: string[] = [
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

  constructor(public chartManager: ChartManager) {}

  ngOnInit(): void {
    this.chart.data.forEach((data, index) => {
      this.chartData.datasets.push({
        label: data.data.label + ' (' + data.year + ')',
        data: data.data.valuePerMonth,
        backgroundColor:
          this.chart.type === 'doughnut'
            ? this.doughnutChartColors
            : this.chartColors[index],
        borderColor:
          this.chart.type === 'doughnut'
            ? this.doughnutChartColors
            : this.chartColors[index],
      });
    });
  }
}
