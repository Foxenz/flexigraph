import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material/dialog';
import { Data } from '../../../../shared/models/data-model';

@Component({
  selector: 'app-dialog-form-data',
  standalone: true,
  imports: [MatDialogTitle],
  templateUrl: './dialog-form-data.component.html',
  styleUrl: './dialog-form-data.component.scss',
})
export class DialogFormDataComponent implements OnInit {
  isUpdate: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public initialData: { data?: Data }) {}

  ngOnInit() {
    if (this.initialData?.data) {
      console.log('Data is updated');
      this.isUpdate = true;
    }
  }
}
