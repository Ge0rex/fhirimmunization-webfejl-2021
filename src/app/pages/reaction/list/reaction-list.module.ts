import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionListComponent } from './reaction-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/models/components/container/container.module';
import { ReactionAddModule } from '../add/reaction-add.module';
import { ReactionCardModule } from '../card/reaction-card.module';
import { ReactionListRoutingModule } from './reaction-list-routing.module';



@NgModule({
  declarations: [
    ReactionListComponent
  ],
  imports: [
    CommonModule, ReactionListRoutingModule, MatToolbarModule, ReactionCardModule, ContainerModule, MatIconModule,
    ReactionAddModule, MatButtonModule, ReactionListRoutingModule, MatFormFieldModule,
    MatInputModule, MatInputModule, ReactiveFormsModule, FormsModule, MatDialogModule
  ]
})
export class ReactionListModule { }
