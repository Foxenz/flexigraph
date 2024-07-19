import { Injectable } from '@angular/core';
import { ListOfData } from '../models/data-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly listOfData: ListOfData[] = [
    {
      year: 2022,
      data: [
        {
          id: '1',
          label: "Chiffre d'affaire",
          valuePerMonth: [
            100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          ],
        },
        {
          id: '2',
          label: 'Taux de conversion',
          valuePerMonth: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        },
        {
          id: '3',
          label: 'Visites du site web',
          valuePerMonth: [
            1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
            12000,
          ],
        },
        {
          id: '4',
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
          id: '5',
          label: "Chiffre d'affaire",
          valuePerMonth: [
            200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
          ],
        },
        {
          id: '6',
          label: 'Taux de conversion',
          valuePerMonth: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        },
        {
          id: '7',
          label: 'Visites du site web',
          valuePerMonth: [
            2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000,
            13000,
          ],
        },
        {
          id: '8',
          label: 'Data seulement présente en 2023',
          valuePerMonth: [
            200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
          ],
        },
      ],
    },
  ];

  constructor() {}

  public getListOfData(): Observable<ListOfData[]> {
    return of(this.listOfData);
  }
}
