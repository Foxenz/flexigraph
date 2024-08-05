import { Injectable } from '@angular/core';
import { ToasterService } from '../services/toaster.service';
import { DataService } from '../services/data.service';
import { Data, ListOfData, TypeOfData } from '../models/data-model';

@Injectable()
export class DataManager {
  public listOfData!: ListOfData[];
  public listOfTypeOfData!: TypeOfData[];
  public selectedTypeOfData!: TypeOfData;

  constructor(
    private dataService: DataService,
    private toasterService: ToasterService
  ) {
    this.dataService
      .getListOfData()
      .subscribe(data => (this.listOfData = data));

    this.listOfTypeOfData = this.dataService.getListOfTypeOfData();
    this.selectedTypeOfData = this.dataService.getSelectedTypeOfData();
  }

  public getAvailableYears(): number[] {
    return this.listOfData.map(data => data.year);
  }

  public getDataForYear(year: number): ListOfData | undefined {
    return this.listOfData.find(data => data.year === year);
  }

  public createData(data: Data, selectedYear: number) {
    data.id = crypto.randomUUID();

    const dataForYear = this.getDataForYear(selectedYear);

    if (!dataForYear) {
      return;
    }

    dataForYear.data.push(data);

    this.toasterService.successMessage('Data créée avec succès');
  }

  public editData(data: Data, selectedYear: number) {
    const dataForYear = this.getDataForYear(selectedYear);

    if (!dataForYear) {
      return;
    }

    const index = dataForYear.data.findIndex(
      dataInYearSelected => dataInYearSelected.id === data.id
    );
    dataForYear.data[index] = data;

    this.toasterService.successMessage('Data modifiée avec succès');
  }

  public deleteData(id: string, year: number) {
    const dataForYear = this.getDataForYear(year);

    if (!dataForYear) {
      return;
    }

    const index = dataForYear.data.findIndex(data => data.id === id);
    dataForYear.data.splice(index, 1);

    this.toasterService.successMessage('Data supprimée avec succès');
  }

  public changeSelectedTypeOfListOfData(value: TypeOfData) {
    this.listOfData = this.dataService.changeSelectedTypeOfListOfData(value);
    this.selectedTypeOfData = value;

    this.toasterService.successMessage('Type de données modifié avec succès');
  }
}
