import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import {MatCardModule} from '@angular/material/card';
import { CursosSubscribeFormModule } from './pages/cursos-subscribe-form/cursos-subscribe-form.module';
import { MatButton } from '@angular/material/button';
import { CursosRoutingModule } from './cursos-routing.module';



@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CursosSubscribeFormModule,
    MatButton,
    CursosRoutingModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
