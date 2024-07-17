import { Injectable } from '@angular/core';
import { ChartModel, Data } from '../../feature/dashboard/models/chart-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private readonly listOfData: Data[] = [
    {
      label: "Chiffre d'affaires mensuel",
      valuePerMonth: [
        12000, 15000, 18000, 17000, 16000, 19000, 22000, 21000, 20000, 23000,
        24000, 25000,
      ],
    },
    {
      label: 'Nombre de ventes mensuelles',
      valuePerMonth: [
        120, 150, 180, 170, 160, 190, 220, 210, 200, 230, 240, 250,
      ],
    },
    {
      label: 'Revenu moyen par vente',
      valuePerMonth: [
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      ],
    },
    {
      label: 'Marges bénéficiaires',
      valuePerMonth: [
        6000, 7500, 9000, 8500, 8000, 9500, 11000, 10500, 10000, 11500, 12000,
        12500,
      ],
    },
    {
      label: 'ROI',
      valuePerMonth: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    },
    {
      label: 'Nouveaux clients',
      valuePerMonth: [20, 30, 25, 22, 18, 24, 35, 33, 30, 40, 42, 45],
    },
    {
      label: 'Clients récurrents',
      valuePerMonth: [50, 60, 70, 65, 60, 75, 80, 78, 75, 85, 88, 90],
    },
    {
      label: 'Valeur vie client',
      valuePerMonth: [
        300, 320, 340, 330, 320, 340, 350, 345, 340, 360, 365, 370,
      ],
    },
    {
      label: 'Panier moyen',
      valuePerMonth: [
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      ],
    },
    {
      label: 'Budget marketing mensuel',
      valuePerMonth: [
        2000, 2500, 3000, 2800, 2600, 3100, 3500, 3400, 3300, 3600, 3700, 3800,
      ],
    },
    {
      label: 'Conversions des campagnes',
      valuePerMonth: [60, 75, 90, 85, 80, 95, 110, 105, 100, 115, 120, 125],
    },
    {
      label: 'Taux de clics',
      valuePerMonth: [2.5, 3, 3.5, 3.4, 3.2, 3.8, 4, 4.1, 4, 4.3, 4.5, 4.6],
    },
    {
      label: 'Nombre de leads générés',
      valuePerMonth: [
        100, 120, 140, 130, 125, 145, 160, 155, 150, 170, 175, 180,
      ],
    },
    {
      label: 'Stock de fin de mois',
      valuePerMonth: [
        500, 550, 600, 580, 560, 620, 650, 640, 630, 660, 670, 680,
      ],
    },
    {
      label: 'Délai moyen de livraison',
      valuePerMonth: [5, 5.5, 6, 6, 5.8, 5.5, 5.2, 5.4, 5.6, 5.8, 5.7, 5.6],
    },
    {
      label: 'Retours de produits',
      valuePerMonth: [10, 12, 14, 13, 11, 15, 18, 17, 16, 19, 20, 21],
    },
    {
      label: 'Taux de rupture de stock',
      valuePerMonth: [2, 2.5, 3, 2.8, 2.6, 3.2, 3.5, 3.4, 3.3, 3.6, 3.8, 4],
    },
    {
      label: 'Taux de satisfaction client',
      valuePerMonth: [85, 87, 90, 88, 86, 89, 92, 91, 90, 93, 94, 95],
    },
    {
      label: 'Nombre de tickets de support',
      valuePerMonth: [50, 55, 60, 58, 56, 62, 65, 64, 63, 66, 68, 70],
    },
    {
      label: 'Temps moyen de résolution des tickets',
      valuePerMonth: [
        2, 2.1, 2.2, 2.1, 2.05, 2.2, 2.3, 2.25, 2.2, 2.3, 2.35, 2.4,
      ],
    },
    {
      label: 'NPS',
      valuePerMonth: [45, 48, 50, 49, 47, 51, 53, 52, 51, 54, 55, 56],
    },
    {
      label: 'Ventes en ligne',
      valuePerMonth: [
        6000, 7500, 9000, 8500, 8000, 9500, 11000, 10500, 10000, 11500, 12000,
        12500,
      ],
    },
    {
      label: 'Ventes en magasin physique',
      valuePerMonth: [
        6000, 7500, 9000, 8500, 8000, 9500, 11000, 10500, 10000, 11500, 12000,
        12500,
      ],
    },
    {
      label: 'CAC en ligne',
      valuePerMonth: [30, 32, 34, 33, 32, 34, 35, 34.5, 34, 36, 36.5, 37],
    },
    {
      label: 'CAC en magasin physique',
      valuePerMonth: [40, 42, 44, 43, 42, 44, 45, 44.5, 44, 46, 46.5, 47],
    },
    {
      label: 'Taux de conversion en ligne',
      valuePerMonth: [3, 3.5, 4, 3.8, 3.6, 4.2, 4.5, 4.4, 4.3, 4.6, 4.8, 5],
    },
    {
      label: 'Taux de conversion en magasin physique',
      valuePerMonth: [5, 5.5, 6, 5.8, 5.6, 6.2, 6.5, 6.4, 6.3, 6.6, 6.8, 7],
    },
    {
      label: 'Visites du site web',
      valuePerMonth: [
        10000, 12000, 14000, 13000, 12500, 14500, 16000, 15500, 15000, 17000,
        17500, 18000,
      ],
    },
    {
      label: 'Taux de rebond',
      valuePerMonth: [40, 38, 35, 36, 37, 34, 32, 33, 34, 31, 30, 29],
    },
    {
      label: 'Durée moyenne des sessions',
      valuePerMonth: [3, 3.2, 3.4, 3.3, 3.2, 3.5, 3.6, 3.5, 3.4, 3.7, 3.8, 3.9],
    },
    {
      label: "Taux d'abandon de panier",
      valuePerMonth: [70, 68, 65, 66, 67, 64, 62, 63, 64, 61, 60, 59],
    },
  ];

  private readonly charts: ChartModel[] = [
    {
      id: '0270b747',
      title: 'Taux de conversion Physique vs Online',
      type: 'bar',
      data: [this.listOfData[25], this.listOfData[26]],
      visible: true,
      zIndex: 0,
      position: { x: 0, y: 0 },
    },
    {
      id: '0220b743',
      title: "Chiffre d'affaire",
      type: 'line',
      data: [this.listOfData[0]],
      visible: false,
      zIndex: 0,
      position: { x: 0, y: 0 },
    },
    {
      id: '0420b652',
      title: 'Visites du site web',
      type: 'doughnut',
      data: [this.listOfData[27]],
      visible: false,
      zIndex: 0,
      position: { x: 0, y: 0 },
    },
  ];

  private readonly listOfTypesChart: string[] = ['bar', 'line', 'doughnut'];

  constructor() {}

  public getListOfData(): Observable<Data[]> {
    return of(this.listOfData);
  }

  public getCharts(): Observable<ChartModel[]> {
    return of(this.charts);
  }

  public getListOfTypesChart(): Observable<string[]> {
    return of(this.listOfTypesChart);
  }
}
