import { Injectable } from '@angular/core';
import { ListOfData, TypeOfData, TypeOfListOfData } from '../models/data-model';
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
          {
            id: "5",
            label: 'Nombre de commandes',
            valuePerMonth: [300, 400, 350, 450, 500, 600, 550, 700, 650, 750, 800, 900]
          },
          {
            id: "6",
            label: "Panier moyen (€)",
            valuePerMonth: [50, 55, 52, 58, 60, 62, 63, 65, 64, 67, 70, 75]
          },
          {
            id: "7",
            label: "Taux d'abandon de panier (%)",
            valuePerMonth: [70, 68, 65, 63, 60, 58, 57, 55, 53, 50, 48, 45]
          },
          {
            id: "8",
            label: "Frais de livraison moyens (€)",
            valuePerMonth: [5, 6, 6, 7, 5, 8, 7, 6, 7, 6, 5, 7]
          },
          {
            id: "9",
            label: "Nombre de retours produits",
            valuePerMonth: [20, 25, 15, 30, 22, 28, 35, 27, 25, 30, 20, 15]
          },          
        ],
      },
      {
        year: 2023,
        data: [
          {
            id: '10',
            label: "Chiffre d'affaire",
            valuePerMonth: [
              200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
            ],
          },
          {
            id: '11',
            label: 'Taux de conversion',
            valuePerMonth: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
          },
          {
            id: '12',
            label: 'Visites du site web',
            valuePerMonth: [
              2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
              12000, 13000,
            ],
          },
          {
            id: '13',
            label: 'Data seulement présente en 2023',
            valuePerMonth: [
              200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
            ],
          },
          {
            id: "14",
            label: 'Nombre de commandes',
            valuePerMonth: [300, 400, 350, 450, 500, 600, 550, 700, 650, 750, 800, 900]
          },
          {
            id: "15",
            label: "Panier moyen (€)",
            valuePerMonth: [50, 55, 52, 58, 60, 62, 63, 65, 64, 67, 70, 75]
          },
          {
            id: "16",
            label: "Taux d'abandon de panier (%)",
            valuePerMonth: [70, 68, 65, 63, 60, 58, 57, 55, 53, 50, 48, 45]
          },
          {
            id: "17",
            label: "Frais de livraison moyens (€)",
            valuePerMonth: [5, 6, 6, 7, 5, 8, 7, 6, 7, 6, 5, 7]
          },
          {
            id: "18",
            label: "Nombre de retours produits",
            valuePerMonth: [20, 25, 15, 30, 22, 28, 35, 27, 25, 30, 20, 15]
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
          {
            id: '5',
            label: 'Donations reçues (€)',
            valuePerMonth: [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600]
          },
          {
            id: '6',
            label: 'Bénévoles actifs',
            valuePerMonth: [20, 22, 25, 28, 30, 35, 40, 45, 50, 55, 60, 65]
          },
          {
            id: '7',
            label: 'Animaux stérilisés',
            valuePerMonth: [50, 60, 55, 65, 70, 75, 80, 85, 90, 95, 100, 110]
          },
          {
            id: '8',
            label: 'Animaux trouvés',
            valuePerMonth: [10, 15, 12, 20, 18, 25, 22, 30, 28, 35, 32, 40]
          },
          {
            id: '9',
            label: 'Frais médicaux (€)',
            valuePerMonth: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750]
          }
          
        ],
      },
      {
        year: 2023,
        data: [
          {
            id: '10',
            label: 'Chat adopté',
            valuePerMonth: [
              200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
            ],
          },
          {
            id: '11',
            label: 'Chien adopté',
            valuePerMonth: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
          },
          {
            id: '12',
            label: 'Visite chez le vétérinaire',
            valuePerMonth: [
              2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
              12000, 13000,
            ],
          },
          {
            id: '13',
            label: 'Dépense mensuelle',
            valuePerMonth: [
              200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
            ],
          },
          {
            id: '14',
            label: 'Donations reçues (€)',
            valuePerMonth: [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600]
          },
          {
            id: '15',
            label: 'Bénévoles actifs',
            valuePerMonth: [20, 22, 25, 28, 30, 35, 40, 45, 50, 55, 60, 65]
          },
          {
            id: '16',
            label: 'Animaux stérilisés',
            valuePerMonth: [50, 60, 55, 65, 70, 75, 80, 85, 90, 95, 100, 110]
          },
          {
            id: '17',
            label: 'Animaux trouvés',
            valuePerMonth: [10, 15, 12, 20, 18, 25, 22, 30, 28, 35, 32, 40]
          },
          {
            id: '18',
            label: 'Frais médicaux (€)',
            valuePerMonth: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750]
          }
          
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
          {
            id: '5',
            label: 'Nombre de professeurs',
            valuePerMonth: [30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
          },
          {
            id: '6',
            label: 'Taux d\'assiduité des étudiants (%)',
            valuePerMonth: [75, 76, 78, 79, 80, 82, 83, 85, 86, 87, 89, 90]
          },
          {
            id: '7',
            label: 'Nombre d\'événements organisés',
            valuePerMonth: [5, 6, 4, 7, 6, 8, 9, 5, 7, 8, 9, 10]
          },
          {
            id: '8',
            label: 'Budget pour les activités extrascolaires (€)',
            valuePerMonth: [500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050]
          },
          {
            id: '9',
            label: 'Nombre d\'étudiants diplômés',
            valuePerMonth: [120, 130, 135, 140, 150, 160, 170, 180, 190, 200, 210, 220]
          }
        ],
      },
      {
        year: 2023,
        data: [
          {
            id: '10',
            label: "Nombre d'étudiants inscrits",
            valuePerMonth: [
              520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740,
            ],
          },
          {
            id: '11',
            label: 'Taux de réussite aux examens',
            valuePerMonth: [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97],
          },
          {
            id: '12',
            label: 'Nombre de cours dispensés',
            valuePerMonth: [
              130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240,
            ],
          },
          {
            id: '13',
            label: 'Dépenses mensuelles pour le matériel pédagogique',
            valuePerMonth: [
              1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100,
              2200,
            ],
          },
          {
            id: '14',
            label: 'Nombre de professeurs',
            valuePerMonth: [30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
          },
          {
            id: '15',
            label: 'Taux d\'assiduité des étudiants (%)',
            valuePerMonth: [75, 76, 78, 79, 80, 82, 83, 85, 86, 87, 89, 90]
          },
          {
            id: '16',
            label: 'Nombre d\'événements organisés',
            valuePerMonth: [5, 6, 4, 7, 6, 8, 9, 5, 7, 8, 9, 10]
          },
          {
            id: '17',
            label: 'Budget pour les activités extrascolaires (€)',
            valuePerMonth: [500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050]
          },
          {
            id: '18',
            label: 'Nombre d\'étudiants diplômés',
            valuePerMonth: [120, 130, 135, 140, 150, 160, 170, 180, 190, 200, 210, 220]
          }
        ],
      },
    ],
  };

  private readonly listOfTypeOfData: TypeOfData[] = [
    { value: 'business', viewValue: 'Business' },
    { value: 'association', viewValue: 'Association' },
    { value: 'education', viewValue: 'Éducation' },
  ];

  private selectedListOfData: TypeOfListOfData = this.listOfDataBusiness;
  private selectedTypeOfData: TypeOfData = this.listOfTypeOfData[0];

  constructor() {}

  public getListOfData(): Observable<ListOfData[]> {
    return of(this.selectedListOfData.listOfData);
  }

  public changeSelectedTypeOfListOfData(
    typeOfListOfData: TypeOfData
  ): ListOfData[] {
    switch (typeOfListOfData.value) {
      case 'business':
        this.selectedListOfData = this.listOfDataBusiness;
        this.selectedTypeOfData = this.listOfTypeOfData[0];
        break;
      case 'association':
        this.selectedListOfData = this.listOfDataAssociation;
        this.selectedTypeOfData = this.listOfTypeOfData[1];
        break;
      case 'education':
        this.selectedListOfData = this.listOfDataEducation;
        this.selectedTypeOfData = this.listOfTypeOfData[2];
        break;
    }

    return this.selectedListOfData.listOfData;
  }

  getListOfTypeOfData(): TypeOfData[] {
    return this.listOfTypeOfData;
  }

  getSelectedTypeOfData(): TypeOfData {
    return this.selectedTypeOfData;
  }
}
