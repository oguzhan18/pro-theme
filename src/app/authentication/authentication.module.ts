import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FrontModule } from '../front/front.module';
export const AuthenticationRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(AuthenticationRoutes),
  ],
  declarations: [LoginComponent],
})
export class AuthenticationModule {}
