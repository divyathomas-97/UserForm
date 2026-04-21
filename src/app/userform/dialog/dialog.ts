import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  imports: [
    CommonModule,
    MatIconModule],
  styleUrls: ['./dialog.css']
})

export class Dialog {
  constructor(@Inject(MAT_DIALOG_DATA) public users: any[],
    private dialogRef: MatDialogRef<Dialog>) { }

  closeDialog() {
    this.dialogRef.close();
  }
}
