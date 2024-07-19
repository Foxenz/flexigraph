import { Injectable } from '@angular/core';
import { ToasterService } from '../services/toaster.service';
import { DataService } from '../services/data.service';
import { ListOfData } from '../models/data-model';

@Injectable()
export class DataManager {
  public listOfData!: ListOfData[];

  constructor(
    private dataService: DataService,
    private toasterService: ToasterService
  ) {
    this.dataService
      .getListOfData()
      .subscribe(data => (this.listOfData = data));
  }

  public getAvailableYears(): number[] {
    return this.listOfData.map(data => data.year);
  }

  public getDataForYear(year: number): ListOfData | undefined {
    return this.listOfData.find(data => data.year === year);
  }

  public createData() {
    this.toasterService.successMessage('Data créée avec succès');
  }

  public editData() {
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
}
