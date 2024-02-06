import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  loading = false;
  users: string[] = [];

  getUsersSubscription?: Subscription;

  getUsersFromPromise():void {
    const getUsers = new Promise<string[]>((resolve, reject) => {
      setTimeout(()=>{
        resolve(['Goku', 'Gohan', 'Goten', 'Milk', 'Videl'])
      }, 2000)
    });
    this.loading = true
    getUsers
    //respuesta satisfactoria (resolve)
      .then((respuesta)=>{
        this.users = respuesta
      })
      //respuesta incorrecta/error (rejected)
      .catch((error)=> console.error(error))
      //metodo que se aplica al finalizar no importa bien o mal
      .finally(() => {
        this.loading=false
      })
  }

  getUsersFromObservable():void {
    this.getUsersSubscription?.unsubscribe()
    this.loading = true
    const getUsers$ = new Observable<string[]>((subscriber) => {
      setTimeout(() => {
        // subscriber.error('No posee permisos') 
        subscriber.next(['Naruto', 'Sasuke', 'Hinata', 'Sakura']);
        subscriber.complete()
      }, 2000);
    })
    
    this.getUsersSubscription= getUsers$.subscribe({
      //cuando el observable emite valores
      next: (respuesta)=> {
        this.users = respuesta
      },
      //cuando el observable emite error
      error: (error) => {alert(error)},
      //cuando el observable finalizo y dejo de emitir valores
      complete: () => {
        this.loading = false
      }
    })
  }
  constructor() {
    // this.getUsersFromPromise()
    this.getUsersFromObservable()
  }

}
