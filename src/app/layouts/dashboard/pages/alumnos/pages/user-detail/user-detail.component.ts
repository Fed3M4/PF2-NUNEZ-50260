import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../../../shared/models/interfaces';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { UsersService } from '../../../../../../core/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userFinded?: User
  constructor(private route: ActivatedRoute, private usersService: UsersService, private loadingService: LoadingService, private router: Router){
    this.usersService.getUserByID(this.route.snapshot.params['id']).subscribe({
      next: (findedUser) => {
        console.log(findedUser)
        this.userFinded = findedUser
        // this.router.navigate(['dashboard', 'alumnos', ':id'], {
        //   queryParams: {
        //     nombre: findedUser?.firstName,
        //     apellido: findedUser?.lastName
        //   }
        // })
      },
    })
  }
}
