import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { NosotrosModule } from './pages/nosotros/nosotros.module';
import { HomeModule } from './pages/home/home.module';
import { ProfesoresModule } from './pages/profesores/profesores.module';
import { LoginModule } from '../auth/login/login.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CursosModule } from './pages/cursos/cursos.module';
import { DashboardRoutingModule } from './dashboard-routing-module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    AlumnosModule,
    SharedModule,
    RouterModule,
    MatListModule,
    NosotrosModule,
    HomeModule,
    ProfesoresModule,
    LoginModule,
    MatProgressSpinnerModule,
    CursosModule,
    DashboardRoutingModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
