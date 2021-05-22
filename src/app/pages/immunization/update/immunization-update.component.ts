import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-immunization-update',
  templateUrl: './immunization-update.component.html',
  styleUrls: ['./immunization-update.component.scss']
})
export class ImmunizationUpdateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    status: new FormControl('', Validators.required),
    vaccinecode: new FormControl('', Validators.required),
    occurence: new FormControl('', Validators.required),
    reasoncode: new FormControl('no reason'),
    route: new FormControl('unknown'),
  });


  constructor(public dialogRef: MatDialogRef<ImmunizationUpdateComponent>) { }

  ngOnInit(): void {
  }


  close(): void {
    this.dialogRef.close(this.form.value);
  }
}
