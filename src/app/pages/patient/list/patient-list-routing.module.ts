import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: PatientListComponent,
        data: { title: 'Patients - FHIR Immunization' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), MatFormFieldModule, ReactiveFormsModule],
    exports: [RouterModule],
})
export class PatientListRoutingModule { }
