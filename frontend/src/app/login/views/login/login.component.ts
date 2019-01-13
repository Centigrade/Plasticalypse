import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'pf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}
  public login(email: string, password: string) {
    console.log('Login now!');

    console.log('Register now!', email, password);
    this.authService.login(email, password).subscribe(result => {
      console.log('Logged in', result);

      // Check whether you are here for the first time?
      // then
      this.router.navigate(['/quiz']);

      // otherwise
      // this.router.navigate(['/grocery']);
    });
  }

  public startRegister() {
    this.router.navigate(['/register']);
  }
}
