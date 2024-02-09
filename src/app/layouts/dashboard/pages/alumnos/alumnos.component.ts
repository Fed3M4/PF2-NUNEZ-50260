import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../../../core/services/alumnos.service';
import { Alumnos } from '../../../../shared/models/interfaces';
import { LoadingService } from '../../../../core/services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { AltaAlumnosComponent } from './components/alta-alumnos/alta-alumnos.component';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit{
  displayedColumns: string[] = ['id', 'fullName', 'phone', 'email', 'delete'];
  dataSource: Alumnos[] = []
  colorearTabla = false

  constructor(private alumnoService: AlumnosService, private loadingService: LoadingService, private dialog: MatDialog){
  }
  ngOnInit(): void {
    this.loadingService.setIsLoading(true)
    this.alumnoService.getAlumnos().subscribe({
      next:(alumnos) => this.dataSource = alumnos,
      complete: () => {this.loadingService.setIsLoading(false)}
    })
  }

  eliminarAlumnos(element: Alumnos): void{
    const alumnoAEliminar = element.firstName
    if (alumnoAEliminar) {
      const indexAlumno = this.dataSource.findIndex(alumno => alumno.firstName === alumnoAEliminar);
      if (indexAlumno !== -1) {
        this.dataSource.splice(indexAlumno, 1);
        this.actualizarTabla();
      }
    }
  }
  private actualizarTabla(): void {
    this.dataSource = [...this.dataSource];
  }

  openNewUserModal(): void {
    const dialogRef = this.dialog.open(AltaAlumnosComponent, {
      width: '75vw',
      height: 'auto',
    });
    dialogRef.componentInstance.userSubmitted.subscribe((newUser: Alumnos) => {
      const nuevoAlumno = {...newUser, id: this.dataSource.length + 1};
      this.dataSource.push(nuevoAlumno);
      this.colorearTabla = true;
      this.actualizarTabla();
    });
  }
}