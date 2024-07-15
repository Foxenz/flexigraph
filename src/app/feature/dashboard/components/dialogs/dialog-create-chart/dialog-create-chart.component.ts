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
import { ChartManager } from '../../../../../shared/managers/chart.manager';
import { ChartService } from '../../../../../shared/services/chart.service';

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
  selectedData: Data[] = [];
  listOfData!: Data[];
  listOfTypesChart!: string[];

  constructor(
    public chartService: ChartService,
    public dialogRef: MatDialogRef<DialogCreateChartComponent>
  ) {
    this.chartService
      .getListOfData()
      .subscribe(data => (this.listOfData = data));
    this.chartService
      .getListOfTypesChart()
      .subscribe(types => (this.listOfTypesChart = types));
  }

  onNoClick() {
    this.dialogRef.close();
  }

  createChart() {
    this.dialogRef.close({
      title: this.title,
      type: this.type,
      data: this.selectedData,
    });
  }
}
