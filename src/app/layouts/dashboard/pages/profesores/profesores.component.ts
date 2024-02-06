import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Profesor } from '../../../../shared/models/interfaces';

const listaProfesores: Profesor[] = [
  {id: 1, firstName: 'Laura', lastName: 'Tarangana', phone: 1138459874, email: 'panceres@gmail.com', password: 'racing2023', curso:{id: 2030, name: 'Angular'}, isActive: true},
  {id: 2, firstName: 'Roberto', lastName: 'Carlos', phone: 1173959385, email: 'roblos@gmail.com', password: 'mateo2022', curso:{id: 2040, name: 'ReactJS'}, isActive: true},
  {id: 3, firstName: 'Ricardo', lastName: 'Fortunato', phone: 1165290665, email: 'rfort@gmail.com', password: 'juegosonline', curso:{id: 3030, name: 'Matemáticas II'}, isActive: false}
];

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.scss'
})

export class ProfesoresComponent {
  value: string = ' '

  displayedColumns: string[] = ['id', 'fullName', 'phone', 'email', 'curso', 'disponible'];
  dataSource = new MatTableDataSource<Profesor>(listaProfesores);
}