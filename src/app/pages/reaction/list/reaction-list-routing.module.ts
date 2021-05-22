import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactionListComponent } from './reaction-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: '',
      component: ReactionListComponent,
      data: { title: 'Reactions - FHIR Immunization' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatFormFieldModule],
  exports: [RouterModule],
})
export class ReactionListRoutingModule { }
