import { Injectable } from '@angular/core';
import { ListOfData, TypeOfListOfData } from '../models/data-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly listOfDataBusiness: TypeOfListOfData = {
    value: 'business',
    viewValue: 'Business',
    listOfData: [
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
              1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
              11000, 12000,
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
              2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
              12000, 13000,
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
    ],
  };

  private readonly listOfDataAssociation: TypeOfListOfData = {
    value: 'association',
    viewValue: 'Association',
    listOfData: [
      {
        year: 2022,
        data: [
          {
            id: '1',
            label: 'Chat adopté',
            valuePerMonth: [
              100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
            ],
          },
          {
            id: '2',
            label: 'Chien adopté',
            valuePerMonth: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          },
          {
            id: '3',
            label: 'Visite chez le vétérinaire',
            valuePerMonth: [
              1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
              11000, 12000,
            ],
          },
          {
            id: '4',
            label: 'Dépense mensuelle',
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
            label: 'Chat adopté',
            valuePerMonth: [
              200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
            ],
          },
          {
            id: '6',
            label: 'Chien adopté',
            valuePerMonth: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
          },
          {
            id: '7',
            label: 'Visite chez le vétérinaire',
            valuePerMonth: [
              2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
              12000, 13000,
            ],
          },
          {
            id: '8',
            label: 'Dépense mensuelle',
            valuePerMonth: [
              200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
            ],
          },
        ],
      },
    ],
  };

  private readonly listOfDataEducation: TypeOfListOfData = {
    value: 'education',
    viewValue: 'Éducation',
    listOfData: [
      {
        year: 2022,
        data: [
          {
            id: '1',
            label: "Nombre d'étudiants inscrits",
            valuePerMonth: [
              500, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620,
            ],
          },
          {
            id: '2',
            label: 'Taux de réussite aux examens',
            valuePerMonth: [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
          },
          {
            id: '3',
            label: 'Nombre de cours dispensés',
            valuePerMonth: [
              120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230,
            ],
          },
          {
            id: '4',
            label: 'Dépenses mensuelles pour le matériel pédagogique',
            valuePerMonth: [
              1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
              2100,
            ],
          },
        ],
      },
      {
        year: 2023,
        data: [
          {
            id: '5',
            label: "Nombre d'étudiants inscrits",
            valuePerMonth: [
              520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740,
            ],
          },
          {
            id: '6',
            label: 'Taux de réussite aux examens',
            valuePerMonth: [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97],
          },
          {
            id: '7',
            label: 'Nombre de cours dispensés',
            valuePerMonth: [
              130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240,
            ],
          },
          {
            id: '8',
            label: 'Dépenses mensuelles pour le matériel pédagogique',
            valuePerMonth: [
              1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100,
              2200,
            ],
          },
        ],
      },
    ],
  };

  constructor() {}

  public getListOfData(): Observable<ListOfData[]> {
    return of(this.listOfDataBusiness.listOfData);
  }
}
