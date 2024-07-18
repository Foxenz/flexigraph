import { Injectable } from '@angular/core';
import {
  ChartModel,
  Data,
  YearData,
} from '../../feature/dashboard/models/chart-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private readonly listOfData: YearData[] = [
    {
      year: 2022,
      data: [
        {
          label: "Chiffre d'affaire",
          valuePerMonth: [
            100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          ],
        },
        {
          label: 'Taux de conversion',
          valuePerMonth: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        },
        {
          label: 'Visites du site web',
          valuePerMonth: [
            1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
            12000,
          ],
        },
        {
          label: 'Data seulement présente en 2022',
          valuePerMonth: [
            100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          ],
        },
      ],
    },
    {
      year: 2023,
      data: [
        {
          label: "Chiffre d'affaire",
          valuePerMonth: [
            200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
          ],
        },
        {
          label: 'Taux de conversion',
          valuePerMonth: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        },
        {
          label: 'Visites du site web',
          valuePerMonth: [
            2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000,
            13000,
          ],
        },
        {
          label: 'Data seulement présente en 2023',
          valuePerMonth: [
            200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
          ],
        },
      ],
    },
  ];

  private readonly charts: ChartModel[] = [
    {
      id: '0270b747',
      title: 'Taux de conversion Physique vs Online',
      type: 'bar',
      data: [
        { year: this.listOfData[0].year, data: [this.listOfData[0].data[1]] },
        { year: this.listOfData[1].year, data: [this.listOfData[1].data[1]] },
      ],
      visible: true,
      zIndex: 0,
      position: { x: 0, y: 0 },
    },
    {
      id: '0220b743',
      title: "Chiffre d'affaire",
      type: 'line',
      data: [
        { year: this.listOfData[0].year, data: [this.listOfData[0].data[1]] },
      ],
      visible: false,
      zIndex: 0,
      position: { x: 0, y: 0 },
    },
    {
      id: '0420b652',
      title: 'Visites du site web',
      type: 'doughnut',
      data: [
        { year: this.listOfData[0].year, data: [this.listOfData[0].data[1]] },
      ],
      visible: false,
      zIndex: 0,
      position: { x: 0, y: 0 },
    },
  ];

  private readonly listOfTypesChart: string[] = ['bar', 'line', 'doughnut'];

  constructor() {}

  public getListOfData(): Observable<YearData[]> {
    return of(this.listOfData);
  }

  public getCharts(): Observable<ChartModel[]> {
    return of(this.charts);
  }

  public getListOfTypesChart(): Observable<string[]> {
    return of(this.listOfTypesChart);
  }
}
