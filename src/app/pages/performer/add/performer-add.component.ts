import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-performer-add',
  templateUrl: './performer-add.component.html',
  styleUrls: ['./performer-add.component.scss']
})
export class PerformerAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    function: new FormControl(''),
    actor: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<PerformerAddComponent>) { }
  

ngOnInit(): void {
  }

close(): void {
    this.dialogRef.close(this.form.value);
  }

}
