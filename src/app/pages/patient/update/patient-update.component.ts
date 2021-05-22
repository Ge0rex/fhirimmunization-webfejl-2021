import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.scss']
})
export class PatientUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });


  constructor(public dialogRef: MatDialogRef<PatientUpdateComponent>) { }

  ngOnInit(): void {
  }


  close(): void {
    this.dialogRef.close(this.form.value);
  }

}
