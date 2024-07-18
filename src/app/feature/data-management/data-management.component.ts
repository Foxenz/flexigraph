import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ChartManager } from '../../shared/managers/chart.manager';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { JsonPipe, NgForOf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatFormField, MatLabel, MatSelect } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-data-management',
  standalone: true,
  imports: [
    NavbarComponent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRowDef,
    MatHeaderRowDef,
    MatRow,
    NgForOf,
    MatOption,
    MatSelect,
    MatLabel,
    MatFormField,
    JsonPipe,
    MatButton,
    MatIcon,
  ],
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss'],
  providers: [ChartManager],
})
export class DataManagementComponent {
  displayedColumns: string[] = ['label', 'data', 'star'];
  dataSource: { label: string; valuePerMonth: number[] }[] = [];
  availableYears: number[] = [];
  selectedYear: number;

  constructor(public chartManager: ChartManager) {
    this.initializeAvailableYears();
    this.selectedYear = this.availableYears[0]; // Default to the first available year
    this.initializeDataSource();
  }

  initializeAvailableYears() {
    this.availableYears = this.chartManager.listOfData.map(data => data.year);
  }

  initializeDataSource() {
    const dataForYear = this.chartManager.listOfData.find(
      data => data.year === this.selectedYear
    );
    if (dataForYear) {
      this.dataSource = dataForYear.data;
    }
  }

  onYearChange(year: number) {
    this.selectedYear = year;
    this.initializeDataSource();
  }

  createData() {
    console.log('Create data');
  }
}
