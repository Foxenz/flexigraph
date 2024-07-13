import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartData } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
  public chart!: unknown;
  @Input() chartId!: string;
  @Input() chartData!: ChartData;

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart(this.chartId, this.chartData);
    }, 1000);
  }

  createChart(chartId: string, chartData: ChartData) {
    this.chart = new Chart(this.chartId, {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: chartData.datasets,
      },
    });
  }
}
