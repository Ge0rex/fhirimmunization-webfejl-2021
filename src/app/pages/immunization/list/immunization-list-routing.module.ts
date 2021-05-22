import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Routes, RouterModule } from '@angular/router';
import { ImmunizationListComponent } from './immunization-list.component';

const routes: Routes = [
  {
      path: '',
      component: ImmunizationListComponent,
      data: { title: 'Immunizations - FHIR Immunization' }
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), MatFormFieldModule, ReactiveFormsModule],
    exports: [RouterModule],
})
export class ImmunizationListRoutingModule { }
