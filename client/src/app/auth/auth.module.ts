import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const authRouting: Routes = [
  {
      path: 'login',
      component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(authRouting),
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers:[
    ],
    exports: [
        RouterModule
    ]
})

export class AuthModule{
}