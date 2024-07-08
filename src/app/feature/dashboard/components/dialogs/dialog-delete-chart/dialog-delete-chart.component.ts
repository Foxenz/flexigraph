import { Component, Inject } from '@angular/core';
import { Chart } from '../../../models/chart-model';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dialog-delete-chart',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
  templateUrl: './dialog-delete-chart.component.html',
  styleUrl: './dialog-delete-chart.component.scss',
})
export class DialogDeleteChartComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteChartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { chart: Chart }
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
