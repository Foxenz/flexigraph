import { Component, Inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ChartModel, ListOfData, Data } from '../../../models/chart-model';
import { ChartService } from '../../../../../shared/services/chart.service';
import { MatIcon } from '@angular/material/icon';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-chart-dialog',
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
  templateUrl: './dialog-form-chart.component.html',
  styleUrls: ['./dialog-form-chart.component.scss'],
})
export class DialogFormChartComponent implements OnInit {
  id: string = '';
  title: string = '';
  type: string = '';
  selectedEntries: { year: number; data?: Data; availableData: Data[] }[] = [];

  listOfData!: ListOfData[];
  listOfTypesChart!: string[];

  isUpdate: boolean = false;

  constructor(
    public chartService: ChartService,
    public dialogRef: MatDialogRef<DialogFormChartComponent>,
    @Inject(MAT_DIALOG_DATA) public initialData: { chart?: ChartModel }
  ) {
    this.chartService
      .getListOfData()
      .subscribe(data => (this.listOfData = data));
    this.chartService
      .getListOfTypesChart()
      .subscribe(types => (this.listOfTypesChart = types));
  }

  ngOnInit() {
    if (this.initialData?.chart) {
      this.isUpdate = true;
      this.id = this.initialData.chart.id;
      this.title = this.initialData.chart.title;
      this.type = this.initialData.chart.type;
      this.selectedEntries = this.initialData.chart.data.map(chartData => ({
        year: chartData.year,
        data: chartData.data,
        availableData: this.getAvailableData(chartData.year),
      }));
    }
  }

  getAvailableData(year: number): Data[] {
    const yearData = this.listOfData.find(data => data.year === year);
    return yearData ? yearData.data : [];
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submitChart() {
    const formattedData = this.selectedEntries.map(entry => ({
      year: entry.year,
      data: entry.data,
    }));

    if (this.isUpdate) {
      this.dialogRef.close({
        id: this.id,
        title: this.title,
        type: this.type,
        data: formattedData,
      });
    } else {
      this.dialogRef.close({
        title: this.title,
        type: this.type,
        data: formattedData,
      });
    }
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

  addEntry() {
    this.selectedEntries.push({ year: 0, data: undefined, availableData: [] });
  }

  removeEntry(index: number) {
    this.selectedEntries.splice(index, 1);
  }
}
