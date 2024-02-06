import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { AlumnosComponent } from './layouts/dashboard/pages/alumnos/alumnos.component';
import { NosotrosComponent } from './layouts/dashboard/pages/nosotros/nosotros.component';
import { ProfesoresComponent } from './layouts/dashboard/pages/profesores/profesores.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path:'home', component: HomeComponent
      },
      {
        path:'alumnos', component: AlumnosComponent
      },
      {
        path:'nosotros', component: NosotrosComponent
      },
      {
        path:'profesores', component: ProfesoresComponent
      },
      {
        path:'login', component: LoginComponent
      }
    ]
  },
  {
    path: 'auth/login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
