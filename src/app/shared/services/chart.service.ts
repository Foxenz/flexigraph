import { Injectable } from '@angular/core';
import { ChartModel } from '../../feature/dashboard/models/chart-model';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { ListOfData } from '../models/data-model';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  public listOfData!: ListOfData[];
  private readonly charts: ChartModel[] = [];
  private readonly listOfTypesChart: string[] = ['bar', 'line', 'doughnut'];

  constructor(dataService: DataService) {
    dataService.getListOfData().subscribe(data => (this.listOfData = data));

    // A supprimer à la fin
    this.charts.push({
      id: '0270b747',
      title: 'Taux de conversion Physique vs Online',
      type: 'bar',
      data: [
        { year: 2022, data: this.listOfData[0].data[1] },
        { year: 2023, data: this.listOfData[1].data[1] },
      ],
      visible: true,
      zIndex: 0,
      position: { x: 0, y: 0 },
    });

    this.charts.push({
      id: '0220b743',
      title: "Chiffre d'affaire",
      type: 'line',
      data: [
        { year: this.listOfData[0].year, data: this.listOfData[0].data[0] },
      ],
      visible: false,
      zIndex: 0,
      position: { x: 0, y: 0 },
    });

    this.charts.push({
      id: '0420b652',
      title: 'Data seulement',
      type: 'doughnut',
      data: [
        { year: this.listOfData[1].year, data: this.listOfData[1].data[3] },
        { year: this.listOfData[0].year, data: this.listOfData[0].data[3] },
      ],
      visible: false,
      zIndex: 0,
      position: { x: 0, y: 0 },
    });
  }

  public getCharts(): Observable<ChartModel[]> {
    return of(this.charts);
  }

  public getListOfTypesChart(): Observable<string[]> {
    return of(this.listOfTypesChart);
  }
}
