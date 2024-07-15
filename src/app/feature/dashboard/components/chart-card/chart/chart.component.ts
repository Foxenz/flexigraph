import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartData } from 'chart.js/auto';

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
  @Input() chartType!: string;

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart(this.chartId, this.chartData);
    }, 1);
  }

  createChart(chartId: string, chartData: ChartData): void {
    this.chart = new Chart(this.chartId, {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: chartData.datasets,
      },
    });
  }
}
