import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerListComponent } from './performer-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/models/components/container/container.module';
import { PerformerAddModule } from '../add/performer-add.module';
import { PerformerCardModule } from '../card/performer-card.module';
import { PerformerListRoutingModule } from './performer-list-routing.module';



@NgModule({
  declarations: [
    PerformerListComponent
  ],
  imports: [
    CommonModule, PerformerListRoutingModule, MatToolbarModule, PerformerCardModule, ContainerModule, MatIconModule,
    PerformerAddModule, MatButtonModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule, FormsModule, MatDialogModule
  ]
})
export class PerformerListModule { }
