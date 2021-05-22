import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    gender: new FormControl('Other', Validators.required),
    birthdate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    immunizationing: new FormControl(false),
    status: new FormControl('not-done'),
    vaccinecode: new FormControl('no vaccine administered'),
    occurence: new FormControl('N/A'),
    reasoncode: new FormControl('no reason'),
    route: new FormControl('unknown')
  });

  constructor(public dialogRef: MatDialogRef<PatientAddComponent>) { }
  

ngOnInit(): void {
  }

close(): void {
    this.dialogRef.close(this.form.value);
  }

}
