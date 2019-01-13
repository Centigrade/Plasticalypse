import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'pf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  public register(username: string, password: string) {
    console.log('Register now!', username, password);
    this.authService
      .register(username, password)
      .pipe(
        catchError(err => {
          console.error('An error occurred', err);
          return undefined;
        }),
      )
      .subscribe(result => console.log('Succeeded', result));
  }
}
