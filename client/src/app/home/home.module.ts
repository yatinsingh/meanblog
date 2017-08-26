import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';

const homeRouting: Routes = [
  {
      path: '',
      component: HomeComponent,
  }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(homeRouting),
    ],
    declarations: [
        HomeComponent
    ],
    providers:[
    ],
    exports: [
        RouterModule
    ]
})

export class HomeModule{
}