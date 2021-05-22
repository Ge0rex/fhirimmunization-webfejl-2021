import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionUpdateComponent } from './reaction-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    ReactionUpdateComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogModule,
    MatFormFieldModule, FormsModule, MatRadioModule, MatListModule, MatDatepickerModule
  ],
  exports: [ReactionUpdateComponent]
})
export class ReactionUpdateModule { }
