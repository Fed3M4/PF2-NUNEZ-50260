import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnosService } from '../../../../core/services/alumnos.service';
import { Alumnos } from '../../../../shared/models/interfaces';


const listaAlumnos: Alumnos[] = [
  {id: 1, firstName: 'Leandro', lastName: 'Ramis', phone: 1138459874, email: 'leandro@gmail.com', password: 'racing2023'},
  {id: 2, firstName: 'Alejandro', lastName: 'Tarutani', phone: 1173959385, email: 'atarutani@gmail.com', password: 'mateo2022'},
  {id: 3, firstName: 'Lucas', lastName: 'Nabarro', phone: 1165290665, email: 'lucas@gmail.com', password: 'juegosonline'}
];

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  displayedColumns: string[] = ['id', 'fullName', 'phone', 'email', 'delete'];
  dataSource = new MatTableDataSource<Alumnos>(listaAlumnos);
  colorearTabla = false

  constructor(private alumnoService: AlumnosService){}

  onUserSubmitted(ev: Alumnos): void {
    const nuevoAlumno = {...ev, id: listaAlumnos.length +1}
    if(nuevoAlumno) {
      listaAlumnos.push(nuevoAlumno)
      this.colorearTabla = true
      this.actualizarTabla();
    }
  }
  eliminarAlumnos(element: Alumnos): void{
    const alumnoAEliminar = element.firstName
    if (alumnoAEliminar) {
      const indexAlumno = listaAlumnos.findIndex(alumno => alumno.firstName === alumnoAEliminar);
      if (indexAlumno !== -1) {
        listaAlumnos.splice(indexAlumno, 1);
        this.actualizarTabla();
      }
    }
  }
  private actualizarTabla(): void {
    this.dataSource.data = [...listaAlumnos];
  }
}