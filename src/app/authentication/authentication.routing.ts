import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {path:'login',component:LoginComponent},
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  }
];
