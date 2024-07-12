import { Component, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Chart, Data } from '../../../models/chart-model';
import { ChartManager } from '../../../../../shared/managers/chart.manager';

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
  templateUrl: './dialog-update-chart.component.html',
  styleUrl: './dialog-update-chart.component.scss',
})
export class DialogUpdateChartComponent {
  id: string = this.initialData.chart.id;
  title: string = this.initialData.chart.title;
  type: string = this.initialData.chart.type;
  data: Data[] = this.initialData.chart.data;

  listOfData: Data[] = ChartManager.listOfData;
  listOfTypesChart: string[] = ChartManager.listOfTypesChart;

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateChartComponent>,
    @Inject(MAT_DIALOG_DATA) public initialData: { chart: Chart }
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

  updateChart() {
    this.dialogRef.close({
      id: this.id,
      title: this.title,
      type: this.type,
      data: this.data,
    });
  }
}
