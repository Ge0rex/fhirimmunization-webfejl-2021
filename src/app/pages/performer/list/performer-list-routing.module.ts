import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { PerformerListComponent } from './performer-list.component';

const routes: Routes = [
  {
      path: '',
      component: PerformerListComponent,
      data: { title: 'Performers - FHIR Immunization' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatFormFieldModule],
  exports: [RouterModule],
})
export class PerformerListRoutingModule { }
