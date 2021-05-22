import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionCardComponent } from './reaction-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ReactionCardComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactionCardComponent
  ]
})
export class ReactionCardModule { }
