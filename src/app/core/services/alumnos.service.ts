import { Inject, Injectable } from '@angular/core';
import { Alumnos } from '../../shared/models/interfaces';
import { debounce, debounceTime, delay, of } from 'rxjs';

const ALUMNOS_DB: Alumnos[] = [
  {id: 1, firstName: 'Leandro', lastName: 'Ramis', phone: 1138459874, email: 'leandro@gmail.com', password: 'racing2023'},
  {id: 2, firstName: 'Alejandro', lastName: 'Tarutani', phone: 1173959385, email: 'atarutani@gmail.com', password: 'mateo2022'},
  {id: 3, firstName: 'Lucas', lastName: 'Nabarro', phone: 1165290665, email: 'lucas@gmail.com', password: 'juegosonline'}
]

@Injectable()
export class AlumnosService {

  constructor() {}

  getAlumnos() {
    return of(ALUMNOS_DB).pipe(delay(1000))
  }

}
