import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required, Validators.maxLength(12)])

  getErrorMessage() {
    if (this.email.hasError('required') || this.password.hasError('required')) {
      return 'Tiene que ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un email válido' : '';
  }
}
