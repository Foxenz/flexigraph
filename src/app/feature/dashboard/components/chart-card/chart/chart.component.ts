import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartData } from 'chart.js/auto';
import { TypeOfChart } from '../../../models/chart-model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  public chart!: unknown;

  @Input() chartId!: string;
  @Input() chartData!: ChartData;
  @Input() chartType!: TypeOfChart;

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart(this.chartId, this.chartData, this.chartType);
    }, 1);
  }

  createChart(
    chartId: string,
    chartData: ChartData,
    chartType: TypeOfChart
  ): void {
    this.chart = new Chart(chartId, {
      type: chartType.value,
      data: {
        labels: chartData.labels,
        datasets: chartData.datasets,
      },
    });
  }
}
