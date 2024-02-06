import { Component } from '@angular/core';
import { Cursos } from '../../../../shared/models/interfaces';

const listaDeCursos: Cursos[] = [
  { 
    id: 2030,
    name: 'Angular',
    description: 'Angular es un Framework de JavaScript de código abierto escrito en TypeScript. Su objetivo principal es desarrollar aplicaciones de una sola página. Google se encarga del mantenimiento y constantes actualizaciones de mejoras para este framework.'},
  {
    id: 2040,
    name: 'ReactJS',
    description: 'React (también llamada React. js o ReactJS) es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.'
  },
  {
    id: 3030,
    name: 'Matemáticas II',
    description: 'Se utiliza para resolver problemas, detectar patrones y comprobar hipótesis en diferentes áreas, desde la ingeniería hasta la medicina. De hecho, el desarrollo tecnológico actual sería inconcebible sin los aportes de las Matemáticas'
  }
]

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  cursos = listaDeCursos
}
