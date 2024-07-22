import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Data } from '../../../../shared/models/data-model';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
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
    MatButton,
    MatDialogActions,
    ReactiveFormsModule,
  ],
  templateUrl: './dialog-form-data.component.html',
  styleUrl: './dialog-form-data.component.scss',
})
export class DialogFormDataComponent implements OnInit {
  valuePerMonth: number[] = Array(12).fill(0);

  form = this.fb.group({
    label: this.fb.control('', [Validators.required]),
    valuePerMonth: this.fb.array(
      this.valuePerMonth.map(value => this.fb.control(value))
    ),
  });

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
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogFormDataComponent>,
    @Inject(MAT_DIALOG_DATA) public initialData: { data?: Data }
  ) {}

  ngOnInit() {
    if (this.initialData?.data) {
      this.isUpdate = true;
      this.form.patchValue({
        label: this.initialData.data.label,
        valuePerMonth: this.initialData.data.valuePerMonth || [],
      });
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submitData() {
    const sanitizedValuePerMonth = this.form.value.valuePerMonth?.map(
      value => value ?? 0
    );
    const data: Data = {
      id: this.initialData?.data?.id || '',
      label: this.form.controls.label.value || '',
      valuePerMonth: sanitizedValuePerMonth || [],
    };
    this.dialogRef.close(data);
  }
}
