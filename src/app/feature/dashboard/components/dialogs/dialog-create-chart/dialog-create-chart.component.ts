import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Data, ListOfData } from '../../../models/chart-model';
import { ChartService } from '../../../../../shared/services/chart.service';
import { MatIcon } from '@angular/material/icon';
import { NgForOf } from '@angular/common';

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
    MatIconButton,
    MatIcon,
    NgForOf,
  ],
  templateUrl: './dialog-create-chart.component.html',
  styleUrl: './dialog-create-chart.component.scss',
})
export class DialogCreateChartComponent {
  title: string = '';
  type: string = '';
  selectedEntries: { year: number; data: Data[]; availableData: Data[] }[] = [];
  listOfData!: ListOfData[];
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
    const formattedData = this.selectedEntries.map(entry => ({
      year: entry.year,
      data: entry.data,
    }));

    this.dialogRef.close({
      title: this.title,
      type: this.type,
      data: formattedData,
    });
  }

  addEntry() {
    this.selectedEntries.push({ year: 0, data: [], availableData: [] });
  }

  updateDataOptions(index: number) {
    const selectedYear = this.selectedEntries[index].year;
    const selectedYearData = this.listOfData.find(
      data => data.year === selectedYear
    );
    this.selectedEntries[index].availableData = selectedYearData
      ? selectedYearData.data
      : [];
  }

  removeEntry(index: number) {
    this.selectedEntries.splice(index, 1);
  }
}
