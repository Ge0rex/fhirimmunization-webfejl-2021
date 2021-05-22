import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reaction-update',
  templateUrl: './reaction-update.component.html',
  styleUrls: ['./reaction-update.component.scss']

})
export class ReactionUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    reactiondate: new FormControl(''),
    detail: new FormControl(''),
    reported: new FormControl(''),
  });


  constructor(public dialogRef: MatDialogRef<ReactionUpdateComponent>) { }

  ngOnInit(): void {
  }


  close(): void {
    this.dialogRef.close(this.form.value);
  }

}
