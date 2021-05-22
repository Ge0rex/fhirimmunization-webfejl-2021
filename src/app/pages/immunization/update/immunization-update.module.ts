import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmunizationUpdateComponent } from './immunization-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    ImmunizationUpdateComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogModule,
    MatFormFieldModule, FormsModule, MatRadioModule, MatListModule, MatDatepickerModule
  ],
  exports:[ImmunizationUpdateComponent]
})
export class ImmunizationUpdateModule { }
