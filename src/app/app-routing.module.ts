import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotPageComponent } from './not-page/not-page.component';
import { AuthGuard } from './_guards/auth/auth.guard';


export const routes: Routes = [

  { path: '',  loadChildren: () => import('./front/front.module').then((m) => m.FrontModule)},
  { path: 'login',  loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)},
  { path: 'admin', canActivate:[AuthGuard],  loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)},
  { path: '**', component: NotPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
