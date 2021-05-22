import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reaction-add',
  templateUrl: './reaction-add.component.html',
  styleUrls: ['./reaction-add.component.scss']
  
})
export class ReactionAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    reactiondate: new FormControl(''),
    detail: new FormControl(''),
    reported: new FormControl(false),
  });

  constructor(public dialogRef: MatDialogRef<ReactionAddComponent>) { }
  

ngOnInit(): void {
  }

close(): void {
    this.dialogRef.close(this.form.value);
  }

}