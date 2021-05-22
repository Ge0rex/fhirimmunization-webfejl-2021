import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/models/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'patients',
                loadChildren: () => import('../patient/list/patient-list.module').then(m => m.PatientListModule),
            },
            {
                path: 'reactions',
                loadChildren: () => import('./../reaction/list/reaction-list.module').then(m => m.ReactionListModule),
            },
            {
                path: 'performers',
                loadChildren: () => import('./../performer/list/performer-list.module').then(m => m.PerformerListModule),
            },
            {
                path: 'immunizations',
                loadChildren: () => import('./../immunization/list/immunization-list.module').then(m => m.ImmunizationListModule),
            }
        ],
        canActivateChild: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
