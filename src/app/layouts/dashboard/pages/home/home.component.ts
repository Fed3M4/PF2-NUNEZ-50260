import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
import { AlertService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  numbersObservable$ = new Observable((suscriber)=> {
    suscriber.next(1);
    suscriber.next(2);
    suscriber.next(3);
  })
  numbersSubject$= new Subject()

  constructor(private loadingSevice: LoadingService, private alertService: AlertService) {
    // this.suscribeToNumberObservable()
    
    // this.suscribeToNumberSubjet()

    this.numbersSubject$.next(1);
    this.numbersSubject$.next(2);
    this.numbersSubject$.next(3)

    this.getUsuarios()
  }
  
  suscribeToNumberSubjet():void {
    this.numbersSubject$.subscribe({
      next: (numbers)=> console.log('NUMEROS SUBJECT: ', numbers)
    })
  }
  
  suscribeToNumberObservable():void {
    this.numbersObservable$.subscribe({
      next: (numbers) => console.log('Número observable: ', numbers)
    })
  }

  getUsuarios():void {
    const obs = new Observable((suscriber)=> {
      setTimeout(() => {
        suscriber.next(['Tomas', 'Matias', 'Josefina']),
        suscriber.complete()
      }, 3000);
    })

    this.loadingSevice.setIsLoading(true);

    obs.subscribe({
      // next: (usuarios)=> this.alertService.showAlert({
      //   title: 'Realizado',
      //   icon: 'success',
      //   text: 'Se cargaron los usuarios'
      //  })
      next: (usuarios)=> {
        this.alertService.showSucces('Realizado', 'Se cargaron los usuarios');
        console.log(usuarios)
      },
      error: (err) => {},
      complete: () => this.loadingSevice.setIsLoading(false)

    })
  }
}
