import { Component, Inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Data } from '../../../../shared/models/data-model';

@Component({
  selector: 'app-dialog-delete-data',
  standalone: true,
  imports: [MatButton, MatDialogActions, MatDialogContent, MatDialogTitle],
  templateUrl: './dialog-delete-data.component.html',
  styleUrl: './dialog-delete-data.component.scss',
})
export class DialogDeleteDataComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { dataToDelete: Data }
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close(this.data.dataToDelete);
  }
}
