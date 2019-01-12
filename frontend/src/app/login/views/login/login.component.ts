import { Component } from '@angular/core';

@Component({
  selector: 'pf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public login() {
    console.log('Login now!');
  }
}
