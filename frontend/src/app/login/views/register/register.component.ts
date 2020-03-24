import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'pf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  public register(email: string, password: string) {
    console.log('Register now!', email, password);
    this.authService
      .register(email, password)
      .subscribe((result) => console.log('Succeeded', result));
  }
}
