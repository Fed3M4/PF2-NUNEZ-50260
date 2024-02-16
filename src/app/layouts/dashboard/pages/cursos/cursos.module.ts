import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import {MatCardModule} from '@angular/material/card';
import { CursosSubscribeFormModule } from './pages/cursos-subscribe-form/cursos-subscribe-form.module';
import { MatButton } from '@angular/material/button';



@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CursosSubscribeFormModule,
    MatButton
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
