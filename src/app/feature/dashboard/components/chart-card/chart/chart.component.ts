import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import Chart, { ChartData } from 'chart.js/auto';
import { TypeOfChart } from '../../../models/chart-model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnDestroy {
  public chart!: Chart;

  @Input() chartId!: string;
  @Input() chartData!: ChartData;
  @Input() chartType!: TypeOfChart;

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart(this.chartId, this.chartData, this.chartType);
    }, 1);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  createChart(
    chartId: string,
    chartData: ChartData,
    chartType: TypeOfChart
  ): void {
    this.chart = new Chart(chartId, {
      type: chartType.value,
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
