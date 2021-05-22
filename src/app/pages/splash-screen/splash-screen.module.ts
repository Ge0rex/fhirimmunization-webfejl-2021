import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { SplashScreenRoutingModule } from './splash-screem-routing.module';
import { ContainerModule } from 'src/app/shared/models/components/container/container.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule, MatCardModule, MatRippleModule, SplashScreenRoutingModule, ContainerModule, ReactiveFormsModule
  ],
})
export class SplashScreenModule { }
