import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Dialog } from './dialog/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AbstractControl, ValidationErrors } from '@angular/forms';
import { phoneValidator } from './phone.validator';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'userform-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './userform.html',
  styleUrl: './userform.css'
})


export class Userform {

  userForm: FormGroup;
  users: any[] = [];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      occupation: ['', Validators.required],
      experience: [0, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, phoneValidator]],
      dob: ['', Validators.required],
      skills: [[]],
      maritalStatus: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      salary: ['', Validators.required],
      preferredTime: [''],
      file: [null]
    });
  }


  get f() {
    return this.userForm.controls;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.userForm.patchValue({ file });
  }


  onSubmit() {
    if (this.userForm.invalid) return;

    this.users.push(this.userForm.value);
    this.userForm.reset();
  }

  openDialog() {
    this.dialog.open(Dialog, {
      width: '95%',
      maxWidth: '1000px',
      panelClass: 'custom-dialog',
      data: this.users
    });
  }

}