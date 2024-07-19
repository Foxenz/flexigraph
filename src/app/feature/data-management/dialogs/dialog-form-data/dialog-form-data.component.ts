import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Data } from '../../../../shared/models/data-model';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { NgForOf } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dialog-form-data',
  standalone: true,
  imports: [
    MatDialogTitle,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf,
    MatButton,
    MatDialogActions,
  ],
  templateUrl: './dialog-form-data.component.html',
  styleUrl: './dialog-form-data.component.scss',
})
export class DialogFormDataComponent implements OnInit {
  label: string = '';
  valuePerMonth: number[] = Array(12).fill(0);
  monthNames: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  isUpdate: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogFormDataComponent>,
    @Inject(MAT_DIALOG_DATA) public initialData: { data?: Data }
  ) {}

  ngOnInit() {
    if (this.initialData?.data) {
      console.log(this.initialData.data);
      this.isUpdate = true;
      this.label = this.initialData.data.label;
      this.valuePerMonth = this.initialData.data.valuePerMonth;
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submitData() {
    const data: Data = {
      id: this.initialData?.data?.id || '',
      label: this.label,
      valuePerMonth: this.valuePerMonth,
    };
    this.dialogRef.close(data);
  }
}
