import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';
import { TypeOfData } from '../../../../../shared/models/data-model';

@Component({
  selector: 'app-dialog-switch-type-of-data',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatSelect,
    MatOption,
    MatFormField,
  ],
  templateUrl: './dialog-switch-type-of-data.component.html',
  styleUrl: './dialog-switch-type-of-data.component.scss',
})
export class DialogSwitchTypeOfDataComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogSwitchTypeOfDataComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      typeOfDataSelected: TypeOfData;
      listOfTypeOfData: TypeOfData[];
    }
  ) {}

  onYesClick() {
    this.dialogRef.close(this.data.typeOfDataSelected);
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
