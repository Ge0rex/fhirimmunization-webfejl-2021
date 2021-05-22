import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerCardComponent } from './performer-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    PerformerCardComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [PerformerCardComponent]
})
export class PerformerCardModule { }
