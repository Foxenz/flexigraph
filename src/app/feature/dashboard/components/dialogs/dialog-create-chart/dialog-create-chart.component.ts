import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Data } from '../../../models/chart-model';

@Component({
  selector: 'app-chart-creator',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatButton,
    MatDialogActions,
    FormsModule,
    MatDialogTitle,
  ],
  templateUrl: './dialog-create-chart.component.html',
  styleUrl: './dialog-create-chart.component.scss',
})
export class DialogCreateChartComponent {
  title: string = '';
  type: string = '';
  data: Data[] = [];

  // A supprimer lorsque j'aurai mes vrai données
  listOfData: Data[] = [
    {
      label: "Chiffre d'affaire",
      valuePerMonth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      label: 'Nombre de clients',
      valuePerMonth: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    },
    {
      label: 'Nombre de commandes',
      valuePerMonth: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    },
  ];

  constructor(public dialogRef: MatDialogRef<DialogCreateChartComponent>) {}

  onNoClick() {
    this.dialogRef.close();
  }

  createChart() {
    this.dialogRef.close({
      title: this.title,
      type: this.type,
      data: this.data,
    });
  }
}
