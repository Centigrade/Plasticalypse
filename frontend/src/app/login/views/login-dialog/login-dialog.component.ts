import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'pf-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
})
export class LoginDialogComponent {
  public userName$: Observable<string>;
  public isLoggedIn = false;

  constructor(private authService: AuthService) {}

  public login(email: string, password: string) {
    this.userName$ = this.authService.login(email, password).pipe(
      tap(() => (this.isLoggedIn = true)),
      map((user) => user.name),
      catchError((error) => of(`Login Error: ${error}`)),
    );
  }
}
