import { Component, inject, ViewChild } from '@angular/core';
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
import { JsonPipe } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatFormField, MatLabel, MatSelect } from '@angular/material/select';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { DataManager } from '../../shared/managers/data.manager';
import { Data, TypeOfData } from '../../shared/models/data-model';
import { filter } from 'rxjs';
import { DialogFormDataComponent } from './dialogs/dialog-form-data/dialog-form-data.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteDataComponent } from './dialogs/dialog-delete-data/dialog-delete-data.component';
import { DataService } from '../../shared/services/data.service';

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
    MatOption,
    MatSelect,
    MatLabel,
    MatFormField,
    JsonPipe,
    MatButton,
    MatIcon,
    MatIconButton,
    MatMenuTrigger,
    MatMenuItem,
    MatMenu,
  ],
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss'],
  providers: [ChartManager, DataManager],
})
export class DataManagementComponent {
  displayedColumns: string[] = ['label', 'data', 'star'];
  dataSource: Data[] = [];
  availableYears: number[] = [];
  selectedYear: number;
  @ViewChild(MatTable) table!: MatTable<Data>;
  readonly dialog = inject(MatDialog);

  constructor(
    public dataManager: DataManager,
    public chartManager: ChartManager
  ) {
    this.initializeAvailableYears();
    this.selectedYear = this.availableYears[0];
    this.initializeDataSource();
  }

  initializeAvailableYears() {
    this.availableYears = this.dataManager.listOfData.map(data => data.year);
  }

  initializeDataSource() {
    const dataForYear = this.dataManager.listOfData.find(
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

  createData(data: Data) {
    this.dataManager.createData(data, this.selectedYear);
    this.table.renderRows();
  }

  editData(data: Data) {
    // On met à jour la data et on rafraichit le tableau
    this.dataManager.editData(data, this.selectedYear);
    this.table.renderRows();

    // On met à jour le ou les graphiques qui utilisent ces données
    this.chartManager.updateChartUsingData(data);
  }

  deleteData(element: Data) {
    // On supprime la data et on rafraichit le tableau
    this.dataManager.deleteData(element.id, this.selectedYear);
    this.table.renderRows();

    // On supprime le ou les graphiques qui utilisent ces données
    this.chartManager.deleteChartUsingData(element);
  }

  openCreateFormDialog() {
    const dialogRef = this.dialog.open(DialogFormDataComponent);

    dialogRef
      .afterClosed()
      .pipe(filter(element => element != undefined))
      .subscribe(result => this.createData(result));
  }

  openUpdateFormDialog(element: Data): void {
    const dialogRef = this.dialog.open(DialogFormDataComponent, {
      data: {
        data: element,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(filter(element => element != undefined))
      .subscribe(result => this.editData(result));
  }

  openDeleteDialog(element: Data) {
    const dialogRef = this.dialog.open(DialogDeleteDataComponent, {
      data: {
        dataToDelete: element,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(filter(element => element != undefined))
      .subscribe(result => this.deleteData(result));
  }

  dataType: TypeOfData = 'association';
  changeData() {
    this.dataManager.changeSelectedTypeOfListOfData(this.dataType);
    this.initializeAvailableYears();
    this.selectedYear = this.availableYears[0];
    this.initializeDataSource();
  }
}
