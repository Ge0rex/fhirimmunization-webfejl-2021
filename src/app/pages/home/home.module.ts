import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from '../nav/nav.module';
import { HomeRoutingModule } from './home-routing.module';
import { PatientUpdateModule } from '../patient/update/patient-update.module';
import { ReactionUpdateModule } from '../reaction/update/reaction-update/reaction-update.module';
import { PatientAddModule } from '../patient/add/patient-add.module';
import { ReactionAddModule } from '../reaction/add/reaction-add.module';
import { PerformerAddModule } from '../performer/add/performer-add.module';
import { PerformerUpdateModule } from '../performer/update/performer-update.module';
import { ImmunizationUpdateModule } from '../immunization/update/immunization-update.module';






@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule, CommonModule, NavModule, PatientUpdateModule, ReactionUpdateModule, PatientAddModule, ReactionAddModule,
    PerformerAddModule, PerformerUpdateModule, ImmunizationUpdateModule

  ],
  exports: [HomeComponent]
})
export class HomeModule { }
