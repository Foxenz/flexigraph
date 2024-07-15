import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartData, ChartType } from 'chart.js/auto';

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
  @Input() chartType!: ChartType;

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart(this.chartId, this.chartData, this.chartType);
    }, 1);
  }

  createChart(
    chartId: string,
    chartData: ChartData,
    chartType: ChartType
  ): void {
    this.chart = new Chart(chartId, {
      type: chartType,
      data: {
        labels: chartData.labels,
        datasets: chartData.datasets,
      },
    });
  }
}
