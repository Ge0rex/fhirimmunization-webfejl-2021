
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list.component';
import { PatientCardModule } from '../patient/card/patient-card.module';
import { PatientListRoutingModule } from './patient-list-routing.module';
import { ContainerModule } from 'src/app/shared/models/components/container/container.module';
import { MatIconModule } from '@angular/material/icon';
import { PatientAddModule } from '../add/patient-add.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [PatientListComponent],
  imports: [
    CommonModule, PatientListRoutingModule, MatToolbarModule, PatientCardModule, ContainerModule, MatIconModule,
    PatientAddModule, MatButtonModule, PatientListRoutingModule, MatFormFieldModule,
    MatInputModule, MatInputModule, ReactiveFormsModule, FormsModule, MatDialogModule,
    
  ]
})
export class PatientListModule { }