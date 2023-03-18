import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'' , redirectTo : 'login' , pathMatch : 'full'},  
  { path:'login' , loadChildren :() => import('./login/login.module').then(m => m.LoginModule)},
  { path:'signup' , loadChildren :() => import('./signup/signup.module').then(m => m.SignupModule)},
  { path:'dashboard' , loadChildren :() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: '**', loadChildren : () => import('./not-found/not-found.module').then(m => m.NotFoundModule)}  // wild card concept used when url not found then redirect to defualt page.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
