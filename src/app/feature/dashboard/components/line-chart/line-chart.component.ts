import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartData } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
  public chart!: unknown;
  @Input() chartId!: string;
  @Input() chartData!: ChartData;

  ngOnInit(): void {
    // Patienter 3 secondes
    setTimeout(() => {
      this.createChart(this.chartId, this.chartData);
    }, 1);
  }

  createChart(chartId: string, chartData: ChartData) {
    this.chart = new Chart(chartId, {
      type: 'line',
      data: {
        labels: chartData.labels,
        datasets: chartData.datasets,
      },
    });
  }
}
