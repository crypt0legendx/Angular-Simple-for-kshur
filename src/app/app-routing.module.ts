import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./component/home/home.module').then((x) => x.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
