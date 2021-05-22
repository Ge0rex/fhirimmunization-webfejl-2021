import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmunizationCardComponent } from './immunization-card.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [ImmunizationCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ImmunizationCardComponent]
})
export class ImmunizationCardModule { }
