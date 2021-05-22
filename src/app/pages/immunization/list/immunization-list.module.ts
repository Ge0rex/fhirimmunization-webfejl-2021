import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmunizationListComponent } from './immunization-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/models/components/container/container.module';

import { ImmunizationCardModule } from '../card/immunization-card.module';
import { ImmunizationListRoutingModule } from './immunization-list-routing.module';



@NgModule({
  declarations: [
    ImmunizationListComponent
  ],
  imports: [
    CommonModule, ImmunizationListRoutingModule, MatToolbarModule,  ImmunizationCardModule,
    ContainerModule, MatIconModule,
     MatButtonModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule, FormsModule, MatDialogModule,
  ],
  exports:[ImmunizationListComponent]
})
export class ImmunizationListModule { }
