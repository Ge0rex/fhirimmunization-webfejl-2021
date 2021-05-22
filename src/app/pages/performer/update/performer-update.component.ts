import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PerformerAddComponent } from '../add/performer-add.component';

@Component({
  selector: 'app-performer-update',
  templateUrl: './performer-update.component.html',
  styleUrls: ['./performer-update.component.scss']
})
export class PerformerUpdateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    function: new FormControl(''),
    actor: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<PerformerUpdateComponent>) { }
  

ngOnInit(): void {
  }

close(): void {
    this.dialogRef.close(this.form.value);
  }

}
