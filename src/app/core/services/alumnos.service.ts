import { Inject, Injectable } from '@angular/core';
import { MY_ALUMNO_TOKEN } from '../injection-token';

@Injectable()
export class AlumnosService {

  constructor(@Inject(MY_ALUMNO_TOKEN) alumnoToken: string) {
    console.log('El servicio está activo', alumnoToken)
  }
}
