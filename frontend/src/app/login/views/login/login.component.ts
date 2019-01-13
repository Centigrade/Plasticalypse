import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  public login() {
    console.log('Login now!');
  }

  public startRegister() {
    this.router.navigate(['/register']);
  }
}
