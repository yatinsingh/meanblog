import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';

const dashboardRouting: Routes = [
  {
      path: 'dashboard',
      component: DashboardComponent,
  }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(dashboardRouting),
    ],
    declarations: [
        DashboardComponent
    ],
    providers:[
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardModule{
}